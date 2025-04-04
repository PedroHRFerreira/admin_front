import AtomsText from "@/components/atoms/Text/Index";
import MoleculesTable from "@/components/molecules/Table/Index";
import style from "./styles.module.scss";
import { useFetchProducts, useDeleteProducts } from "@/store/useFetchProducts";
import { toast, Toaster } from "react-hot-toast";

const OrganismsProductsList = () => {
  const { data, loading, error, refetch } = useFetchProducts();

  const handleDeleteProduct = async (id: number) => {
    const response = await useDeleteProducts(id);

    if (response?.status === "error") {
      toast.error("Erro ao remover essa produto!");
      return;
    }

    toast.success("Produto removida com sucesso!");
    refetch();
  };

  const rows =
    data?.products?.map((item) => ({
      id: item.id,
      values: [item.id, item.name, item.quantity.toString(), item.image],
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
            headers={["id", "nome do produto", "Quantidade", "imagem"]}
            rows={rows.map((row) => row.values)}
            renderExtra={(rowIndex: number) => (
              <button
                className={style.button_delete}
                onClick={() => handleDeleteProduct(rows[rowIndex].id)}
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

export default OrganismsProductsList;
