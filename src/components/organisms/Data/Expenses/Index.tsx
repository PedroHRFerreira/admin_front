import { useState } from "react";
import styles from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import { useFetchExpenses } from "@/store/useFetchExpenses";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import OrganismsDailyValue from "@/components/organisms/DailyValue/Index";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OrganismsDataExpenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useFetchExpenses();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const currentMonthSales =
    data?.expenses?.filter((sale) => sale.month === currentMonth) || [];
  const currentMonthIndex = months.indexOf(currentMonth);
  const previousMonth =
    currentMonthIndex > 0 ? months[currentMonthIndex - 1] : months[11];
  const previousMonthSale = data?.expenses?.find(
    (sale) => sale.month === previousMonth
  );
  const currentSaleValue = currentMonthSales[0]?.expenses_current || 0;
  const previousSaleValue = previousMonthSale?.expenses_previous || 0;

  const progress =
    previousSaleValue === 0
      ? 100
      : (currentSaleValue / previousSaleValue) * 100;

  const isIncreased = currentSaleValue > previousSaleValue;

  const progressStyles = buildStyles({
    pathColor: isIncreased ? "red" : "green",
    trailColor: "#d6d6d6",
    textColor: isIncreased ? "red" : "green",
  });

  const difference = Math.abs(currentSaleValue - previousSaleValue);

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
        <OrganismsDailyValue />
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
              {isIncreased ? (
                <AtomsText
                  className={styles.difference}
                  fontSize="14px"
                  fontWeight="bold"
                  color="red"
                >
                  {`Valor R$ ${difference.toFixed(
                    2
                  )} a mais que o mês anterior`}
                </AtomsText>
              ) : (
                <AtomsText
                  className={styles.difference}
                  fontSize="14px"
                  fontWeight="bold"
                  color="green"
                >
                  {`Valor R$ ${difference.toFixed(
                    2
                  )} a menos que o mês anterior`}
                </AtomsText>
              )}
            </CircularProgressbarWithChildren>
          </div>
        </MoleculesModal>
      </section>
    </>
  );
};

export default OrganismsDataExpenses;
