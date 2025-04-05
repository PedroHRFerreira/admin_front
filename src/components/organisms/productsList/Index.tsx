import { useState } from "react";
import MoleculesTable from "@/components/molecules/Table/Index";
import MoleculesHeader from "@/components/molecules/Header/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import style from "./styles.module.scss";
import {
  useFetchProducts,
  useDeleteProducts,
  usePostProducts,
} from "@/store/useFetchProducts";
import OrganismsProductListDetails from "./Details/Index";
import type { IOrganismsProductsListDetails } from "./Details/OrganismsProductsListDetails.types";
import { toast, Toaster } from "react-hot-toast";

const OrganismsProductsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<IOrganismsProductsListDetails | null>(null);

  const handleOpenDetails = (productId: number) => {
    const product = data?.products.find((item) => item.id === productId);
    if (!product) return;

    setSelectedProduct({
      isModalOpen: true,
      handleCloseModal: () => setIsDetailsModalOpen(false),
      name: product.name,
      description: product.description,
      price: String(product.price),
      quantity: String(product.quantity),
      image: product.image,
    });

    setIsDetailsModalOpen(true);
  };

  const { data, loading, error, refetch } = useFetchProducts();

  const handleDeleteProduct = async (id: number) => {
    const response = await useDeleteProducts(id);

    if (response?.status === "error") {
      toast.error("Erro ao remover o produto!");
      return;
    }

    toast.success("Produto removido com sucesso!");
    refetch();
  };

  const rows =
    data?.products?.map((item) => ({
      id: item.id,
      values: [item.id, item.name, item.quantity.toString(), item.image],
    })) ?? [];

  const validate = () => {
    if (!name) {
      toast.error("Informe um nome antes de salvar.");
      return false;
    }
    if (!price) {
      toast.error("Informe um preço antes de salvar.");
      return false;
    }
    if (!quantity) {
      toast.error("Informe uma quantidade antes de salvar.");
      return false;
    }

    return true;
  };

  const addProduct = async () => {
    if (!validate()) return;

    const formatPrice = (value: string) => {
      return value.replace(/[^\d,\.]/g, "");
    };

    const cleanPrice = formatPrice(price);

    const form = {
      name,
      description,
      price: Number(cleanPrice.replace(",", ".")).toFixed(2),
      quantity: Number(quantity),
      image,
    };

    const response = await usePostProducts(form);

    if (response?.status === "error") {
      toast.error("Erro ao adicionar esse produto!");
      return;
    }

    toast.success("Produto adicionado com sucesso!");
    handleCloseModal();
    refetch();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setImage("");
  };

  return (
    <>
      <MoleculesHeader actionButton={() => setIsModalOpen(true)} />
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
            details={(rowIndex: number) => (
              <button
                className={style.button_details}
                onClick={() => handleOpenDetails(rows[rowIndex].id)}
              >
                Detalhes
              </button>
            )}
          />
        )}
      </section>
      <MoleculesModal
        isOpen={isModalOpen}
        textSave="Adicionar"
        title="Adicionar Produto"
        onSave={addProduct}
        onCancel={handleCloseModal}
      >
        <div className={style.modal}>
          <MoleculesFormInputFloatLabel
            label="Nome do produto*"
            value={name}
            onInput={setName}
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Descrição"
            value={description}
            onInput={setDescription}
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Preço do produto*"
            value={price}
            onInput={setPrice}
            mask="currency"
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="quantidade do produto*"
            value={quantity}
            onInput={setQuantity}
            mask="quantity"
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Imagem do produto"
            value={image}
            onInput={setImage}
            errors={[]}
          />
        </div>
      </MoleculesModal>
      {selectedProduct && isDetailsModalOpen && (
        <OrganismsProductListDetails
          isModalOpen={isDetailsModalOpen}
          handleCloseModal={() => setIsDetailsModalOpen(false)}
          name={selectedProduct.name}
          description={selectedProduct.description}
          price={selectedProduct.price}
          quantity={selectedProduct.quantity}
          image={selectedProduct.image}
        />
      )}
    </>
  );
};

export default OrganismsProductsList;
