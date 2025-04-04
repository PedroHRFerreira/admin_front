import { useState } from "react";
import styles from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import { useFetchSales } from "@/store/useFetchSales";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import OrganismsDailyValue from "@/components/organisms/DailyValue/Index";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OrganismsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useFetchSales();

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
    data?.sales?.filter((sale) => sale.month === currentMonth) || [];
  const currentMonthIndex = months.indexOf(currentMonth);
  const previousMonth =
    currentMonthIndex > 0 ? months[currentMonthIndex - 1] : months[11];
  const previousMonthSale = data?.sales?.find(
    (sale) => sale.month === previousMonth
  );
  const currentSaleValue = currentMonthSales[0]?.value || 0;
  const previousSaleValue = previousMonthSale?.value || 0;

  const progress =
    previousSaleValue === 0
      ? 100
      : currentSaleValue >= previousSaleValue
      ? 100
      : (currentSaleValue / previousSaleValue) * 100;

  const progressStyles = buildStyles({
    pathColor: progress < 100 ? "red" : "green",
    trailColor: "#d6d6d6",
    textColor: progress < 100 ? "red" : "green",
  });

  const difference = previousSaleValue - currentSaleValue;

  return (
    <>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Dados
      </AtomsText>
      <section className={styles.content}>
        <MoleculesDashboard
          title="Detalhes das vendas do dia"
          subTitle="Vendas por dia"
          text="Ver detalhes"
          onFooterClick={() => setIsModalOpen(true)}
        />
        <OrganismsDailyValue />
        <MoleculesModal
          isOpen={isModalOpen}
          textSave=""
          title="Valor da venda"
          onSave={() => setIsModalOpen(true)}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className={styles.modal}>
            <CircularProgressbarWithChildren
              value={progress}
              styles={progressStyles}
            >
              {progress < 100 ? (
                <AtomsText fontSize="16px" fontWeight="bold" color="red">
                  {`Faltam ${difference.toFixed(
                    2
                  )} para atingir o mês anterior`}
                </AtomsText>
              ) : (
                <AtomsText fontSize="16px" fontWeight="bold" color="green">
                  R$ {currentSaleValue}
                </AtomsText>
              )}
            </CircularProgressbarWithChildren>
          </div>
        </MoleculesModal>
      </section>
    </>
  );
};

export default OrganismsData;
