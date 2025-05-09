import AtomsText from "@/components/atoms/Text/Index";
import MoleculesTable from "@/components/molecules/Table/Index";
import style from "./styles.module.scss";
import { useFetchSales, DeleteSales } from "@/store/useFetchSales";
import { toast, Toaster } from "react-hot-toast";

const OrganismsSalesList = () => {
  const { data, loading, error, refetch } = useFetchSales();

  const handleDeleteProduct = async (id: number) => {
    const response = await DeleteSales(id);

    if (response?.status === "error") {
      toast.error("Erro ao remover essa venda");
      return;
    }

    toast.success("Venda removida com sucesso!");
    refetch();
  };

  const salesRows =
    data?.sales?.map((item) => ({
      id: item.id,
      values: [
        item.id,
        item.name,
        item.month,
        item.quantity.toString(),
        `R$ ${item.value}`,
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
            headers={["id", "Produto", "Mês", "Quantidade", "Preço", "Ações"]}
            rows={salesRows.map((row: any) => row.values)}
            renderExtra={(rowIndex: number) => (
              <button
                className={style.button_delete}
                onClick={() => handleDeleteProduct(salesRows[rowIndex].id)}
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

export default OrganismsSalesList;
