import AtomsText from "@/components/atoms/Text/Index";
import style from "./styles.module.scss";

type MoleculesHeaderProps = {
  actionButton?: () => void;
  filterButton: () => void;
};

const MoleculesHeader = ({
  actionButton,
  filterButton,
}: MoleculesHeaderProps) => {
  return (
    <section className={style.header}>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Listagem
      </AtomsText>
      <div className={style.header__actions}>
        {actionButton && (
          <button className={style.button} onClick={actionButton}>
            Adicionar
          </button>
        )}
        <button className={style.button} onClick={filterButton}>
          Filtro
        </button>
      </div>
    </section>
  );
};
export default MoleculesHeader;
