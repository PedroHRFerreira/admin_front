import AtomsText from "@/components/atoms/Text/Index";
import style from "./styles.module.scss";

type MoleculesHeaderProps = {
  actionButton: () => void;
};

const MoleculesHeader = ({ actionButton }: MoleculesHeaderProps) => {
  return (
    <section className={style.header}>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Listagem
      </AtomsText>
      <button className={style.button} onClick={actionButton}>
        Adicionar
      </button>
    </section>
  );
};
export default MoleculesHeader;
