import MoleculesModal from "@/components/molecules/Modal/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import type { IOrganismsProductsListDetails } from "./OrganismsProductsListDetails.types";
import style from "./styles.module.scss";

const OrganismsProductListDetails = ({
  isModalOpen,
  handleCloseModal,
  name,
  description,
  price,
  quantity,
  image,
}: IOrganismsProductsListDetails) => {
  return (
    <>
      <MoleculesModal
        isOpen={isModalOpen}
        textSave=""
        title="Detalhes do produto"
        onSave={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <div className={style.modal}>
          <MoleculesFormInputFloatLabel label="Nome do produto*" value={name} />
          <MoleculesFormInputFloatLabel
            label="Descrição"
            value={description || ""}
          />
          <MoleculesFormInputFloatLabel
            label="Preço do produto*"
            value={price}
            mask="currency"
          />
          <MoleculesFormInputFloatLabel
            label="Quantidade do produto*"
            value={quantity}
            mask="quantity"
          />
          <MoleculesFormInputFloatLabel
            label="Imagem do produto"
            value={image || ""}
          />
        </div>
      </MoleculesModal>
    </>
  );
};

export default OrganismsProductListDetails;
