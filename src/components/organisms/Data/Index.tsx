import { useState } from "react";
import styles from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import MoleculesDashboard from "@/components/molecules/Dashboard/Index";
import MoleculesModal from "@/components/molecules/Modal/Index";
import OrganismsDailyValue from "@/components/organisms/DailyValue/Index";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OrganismsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          title="valor da venda"
          onSave={() => setIsModalOpen(true)}
          onCancel={() => setIsModalOpen(false)}
        >
          {/* <CircularProgressbarWithChildren
            value={progress}
            styles={buildStyles({
              pathColor: `${currentGoal < totalPrice ? "red" : "green"}`,
              trailColor: "#d6d6d6",
              textColor: `${currentGoal < totalPrice ? "red" : "green"}`,
            })}
          >
            <AtomsText
              fontSize="16px"
              fontWeight="bold"
              color={currentGoal < totalPrice ? "red" : "green"}
            >
              {currencyMask(totalPrice - currentGoal)}
            </AtomsText>
          </CircularProgressbarWithChildren> */}
          cmcwdmowdmowm
        </MoleculesModal>
      </section>
    </>
  );
};

export default OrganismsData;
