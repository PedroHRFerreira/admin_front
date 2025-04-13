import { useState } from "react";
import styles from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import { useFetchExpenses } from "@/store/useFetchExpenses";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import OrganismsDailyValueExpenses from "@/components/organisms/DailyValue/Expenses/Index";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OrganismsDataExpenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useFetchExpenses();

  const currentMonthName = new Date().toLocaleString("en-US", {
    month: "long",
  });
  const currentMonthData = data?.expenses?.find(
    (item) => item.month === currentMonthName
  );

  const current = currentMonthData?.expenses_current || 0;
  const previous = currentMonthData?.expenses_previous || 0;

  const progress = previous === 0 ? 100 : (current / previous) * 100;
  const isIncreased = current > previous;
  const difference = Math.abs(current - previous);

  const progressStyles = buildStyles({
    pathColor: isIncreased ? "red" : "green",
    trailColor: "#d6d6d6",
    textColor: isIncreased ? "red" : "green",
  });

  return (
    <>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Dados
      </AtomsText>
      <section className={styles.content}>
        <MoleculesDashboard
          title="Detalhes dos gastos mensal"
          subTitle="veja os detalhes referente aos gastos"
          text="Ver detalhes"
          onFooterClick={() => setIsModalOpen(true)}
        />
        <OrganismsDailyValueExpenses />
        <MoleculesModal
          isOpen={isModalOpen}
          textSave=""
          title="Detalhes dos gastos mensal"
          onSave={() => setIsModalOpen(true)}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className={styles.modal}>
            <CircularProgressbarWithChildren
              value={progress}
              styles={progressStyles}
            >
              <AtomsText
                className={styles.difference}
                fontSize="14px"
                fontWeight="bold"
                color={isIncreased ? "red" : "green"}
              >
                {`Valor R$ ${difference.toFixed(2)} ${
                  isIncreased ? "a mais" : "a menos"
                } que o mês anterior`}
              </AtomsText>
            </CircularProgressbarWithChildren>
          </div>
        </MoleculesModal>
      </section>
    </>
  );
};

export default OrganismsDataExpenses;
