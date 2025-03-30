import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";

const OrganismsDailyValue = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [validateForm, setValidateForm] = useState(false);

  const Validate = () => {
    if (!value) {
      toast.error("Informe um valor antes de salvar.");
      setValidateForm(true);
      return;
    }

    if (!quantity) {
      toast.error("Informe uma quantidade antes de salvar.");
      setValidateForm(true);
      return;
    }

    return setValidateForm;
  };

  const close = () => {
    setIsModalOpen(false);
    setValidateForm(false);
    setValue("");
    setQuantity("");
  };

  const handleSave = () => {
    Validate();
    if (validateForm) return;

    console.log(value, quantity);
    toast.success("Dados salvos com sucesso!");
    close();
  };

  return (
    <>
      <Toaster />
      <MoleculesDashboard
        title="Inserir valor da venda"
        subTitle="Vendas por dia"
        text=""
        onFooterClick={() => setIsModalOpen(true)}
      />

      <MoleculesModal
        isOpen={isModalOpen}
        textSave="Salvar"
        title="valor da venda"
        onSave={handleSave}
        onCancel={close}
      >
        <MoleculesFormInputFloatLabel
          label="valor ganho"
          value={value}
          onInput={setValue}
          mask="currency"
          errors={[]}
        />

        <MoleculesFormInputFloatLabel
          label="quantidade vendida"
          value={quantity}
          onInput={setQuantity}
          mask="quantity"
          errors={[]}
        />
      </MoleculesModal>
    </>
  );
};

export default OrganismsDailyValue;
