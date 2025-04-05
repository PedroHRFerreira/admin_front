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
          <MoleculesFormInputFloatLabel
            label="Nome do produto*"
            value={name}
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Descrição"
            value={description}
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Preço do produto*"
            value={price}
            mask="currency"
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Quantidade do produto*"
            value={quantity}
            mask="quantity"
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Imagem do produto"
            value={image}
            errors={[]}
          />
        </div>
      </MoleculesModal>
    </>
  );
};

export default OrganismsProductListDetails;
