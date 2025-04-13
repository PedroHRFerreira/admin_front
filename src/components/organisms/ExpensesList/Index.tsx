import { useState } from "react";
import MoleculesHeader from "@/components/molecules/Header/Index";
import MoleculesModalAside from "@/components/molecules/Modal/Aside/Index";
import MoleculesTable from "@/components/molecules/Table/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import style from "./styles.module.scss";
import { useFetchExpenses, useDeleteExpenses } from "@/store/useFetchExpenses";
import { toast, Toaster } from "react-hot-toast";

const OrganismsExpensesList = () => {
  const [isModalFiltersOpen, setIsModalFiltersOpen] = useState(false);
  const [filterMonth, setFilterMonth] = useState("");
  const [appliedFilterMonth, setAppliedFilterMonth] = useState("");

  console.log("appliedFilterMonth", appliedFilterMonth);
  const { data, loading, error, refetch } = useFetchExpenses({
    month: appliedFilterMonth,
  });

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

  const aplyFilters = () => {
    setAppliedFilterMonth(filterMonth);
  };

  const resetFilters = () => {
    setFilterMonth("");
    setAppliedFilterMonth("");
  };

  return (
    <>
      <MoleculesHeader filterButton={() => setIsModalFiltersOpen(true)} />
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
              "Valor do mês atual",
              "Valor do mês anterior",
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
      <MoleculesModalAside
        isOpen={isModalFiltersOpen}
        textSave="Aplicar filtro"
        title="Filtro"
        onSave={() => {
          setIsModalFiltersOpen(false);
          aplyFilters();
          refetch();
        }}
        onCancel={() => {
          setIsModalFiltersOpen(false);
          resetFilters();
          refetch();
        }}
      >
        <div>
          <MoleculesFormInputFloatLabel
            label="Mês"
            value={filterMonth}
            onInput={setFilterMonth}
            errors={[]}
          />
        </div>
      </MoleculesModalAside>
    </>
  );
};

export default OrganismsExpensesList;
