import AtomsText from "@/components/atoms/Text/Index";
import MoleculesTable from "@/components/molecules/Table/Index";
import style from "./styles.module.scss";
import { useFetchExpenses, useDeleteExpenses } from "@/store/useFetchExpenses";
import { toast, Toaster } from "react-hot-toast";

const OrganismsExpensesList = () => {
  const { data, loading, error, refetch } = useFetchExpenses();

  const handleDeleteProduct = async (id: number) => {
    const response = await useDeleteExpenses(id);

    if (response?.status === "error") {
      toast.error("Erro ao remover esse Gasto");
      return;
    }

    toast.success("Gasto removida com sucesso!");
    refetch();
  };

  const expensesRows =
    data?.expenses?.map((item) => ({
      id: item.id,
      values: [
        item.id,
        item.month,
        item.expenses_current,
        item.expenses_previous,
        item.expenses_products,
      ],
    })) ?? [];

  return (
    <>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Listagem
      </AtomsText>
      <Toaster />
      <section
        className={`${style.content} ${loading || error ? "loading" : ""}`}
      >
        {loading && <div className="anim-loading"></div>}
        {error && <p>Erro ao buscar dados: {error}</p>}
        {!loading && !error && (
          <MoleculesTable
            headers={[
              "id",
              "Mês",
              "mês atual",
              "mês anterior",
              "Gastos com produtos",
            ]}
            rows={expensesRows.map((expenses) => expenses.values)}
            renderExtra={(rowIndex: number) => (
              <button
                className={style.button_delete}
                onClick={() => handleDeleteProduct(expensesRows[rowIndex].id)}
              >
                Excluir
              </button>
            )}
          />
        )}
      </section>
    </>
  );
};

export default OrganismsExpensesList;
