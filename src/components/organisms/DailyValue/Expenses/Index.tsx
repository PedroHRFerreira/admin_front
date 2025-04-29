import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel/Input";
import { PostExpenses } from "@/store/useFetchExpenses";

const OrganismsDailyValueExpenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expensesCurrent, setExpensesCurrent] = useState("");

  const Validate = () => {
    if (!expensesCurrent) {
      toast.error("Informe o gasto diário antes de salvar.");
      return false;
    }

    return true;
  };

  const close = () => {
    setIsModalOpen(false);
    setExpensesCurrent("");
  };

  const handleSave = async () => {
    if (!Validate()) return;

    const form = {
      month: new Date().toLocaleString("en-US", { month: "long" }),
      expenses_current: Number(
        expensesCurrent.replace("R$", "").replace(",", ".")
      ),
    };

    try {
      const result = await PostExpenses(form);

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
        title="Gasto diário"
        subTitle="Informe o valor referente ao gasto diário"
        text=""
        onFooterClick={() => setIsModalOpen(true)}
      />

      <MoleculesModal
        isOpen={isModalOpen}
        textSave={expensesCurrent ? "Salvar" : ""}
        title="valor da venda"
        onSave={handleSave}
        onCancel={close}
      >
        <MoleculesFormInputFloatLabel
          label="valor do gasto*"
          value={expensesCurrent}
          onInput={setExpensesCurrent}
          mask="currency"
        />
      </MoleculesModal>
    </>
  );
};

export default OrganismsDailyValueExpenses;
