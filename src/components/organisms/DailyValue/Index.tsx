import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import { usePostSales } from "@/store/useFetchSales";

const OrganismsDailyValue = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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

    if (!name) {
      toast.error("Informe o tipo de venda antes de salvar.");
      setValidateForm(true);
      return;
    }

    if (!description) {
      toast.error("Informe uma descrição antes de salvar.");
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
    setDescription("");
    setName("");
  };

  const handleSave = () => {
    Validate();
    if (validateForm) return;

    const form = {
      month: new Date().toLocaleString("en-US", { month: "long" }),
      value,
      quantity,
      name,
      description,
    };

    const result = usePostSales(form);

    if (result?.status === "error") {
      toast.error("Erro ao salvar os dados");
      close();
      return;
    }

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
        textSave={value && quantity ? "Salvar" : ""}
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

        <MoleculesFormInputFloatLabel
          label="Tipo de venda"
          value={name}
          onInput={setName}
          errors={[]}
        />

        <MoleculesFormInputFloatLabel
          label="Descrição da venda"
          value={description}
          onInput={setDescription}
          errors={[]}
        />
      </MoleculesModal>
    </>
  );
};

export default OrganismsDailyValue;
