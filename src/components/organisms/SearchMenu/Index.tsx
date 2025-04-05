import style from "./styles.module.scss";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
import AtomsText from "@/components/atoms/Text/Index";

const OrganismsSearchMenu = ({ showModal }: any) => {
  return (
    <nav className={style.nav}>
      <section className={style.nav__logo}>
        <AtomsIconSvg width="48px" height="48px" name="alien" />
        <AtomsText
          className={style.nav__logo__text}
          fontSize="22px"
          fontWeight="bold"
          color="#fff"
        >
          Sistema Administrativo
        </AtomsText>
      </section>
      <section className={style.nav__modal}>
        <AtomsIconSvg
          className={style.nav__modal__icon}
          width="32px"
          height="32px"
          name="file"
          clickIcon={showModal}
        />
      </section>
    </nav>
  );
};

export default OrganismsSearchMenu;
