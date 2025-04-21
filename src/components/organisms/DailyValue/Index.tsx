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

  const Validate = () => {
    if (!value) {
      toast.error("Informe um valor antes de salvar.");
      return false;
    }

    if (!quantity) {
      toast.error("Informe uma quantidade antes de salvar.");
      return false;
    }

    if (!name) {
      toast.error("Informe o tipo de venda antes de salvar.");
      return false;
    }

    if (!description) {
      toast.error("Informe uma descrição antes de salvar.");
      return false;
    }

    return true;
  };

  const close = () => {
    setIsModalOpen(false);
    setValue("");
    setQuantity("");
    setDescription("");
    setName("");
  };

  const handleSave = async () => {
    if (!Validate()) return;

    const form = {
      month: new Date().toLocaleString("en-US", { month: "long" }),
      value: Number(value.replace("R$", "").replace(",", ".")),
      quantity: Number(quantity),
      name,
      description,
    };

    try {
      const result = await usePostSales(form);

      if (result?.status === "error") {
        toast.error("Erro ao salvar os dados");
        return;
      }

      toast.success("Dados salvos com sucesso!");
      close();
    } catch (error) {
      toast.error("Erro ao conectar com o servidor.");
    }
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
          label="valor ganho*"
          value={value}
          onInput={setValue}
          mask="currency"
        />

        <MoleculesFormInputFloatLabel
          label="quantidade vendida*"
          value={quantity}
          onInput={setQuantity}
          mask="quantity"
        />

        <MoleculesFormInputFloatLabel
          label="Tipo de venda*"
          value={name}
          onInput={setName}
        />

        <MoleculesFormInputFloatLabel
          label="Descrição da venda*"
          value={description}
          onInput={setDescription}
        />
      </MoleculesModal>
    </>
  );
};

export default OrganismsDailyValue;
