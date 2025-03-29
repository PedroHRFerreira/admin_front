import { useState } from "react";
import style from "./styles.module.scss";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
import AtomsText from "@/components/atoms/Text/Index";

const OrganismsSearchMenu = ({ showModal }: any) => {
  const paginate = [
    { route: "/" },
    { route: "/produtos" },
    { route: "/gastos" },
    { route: "/metas" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: any) => {
    e.preventDefault();
    if (currentIndex < paginate.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      window.location.href = paginate[nextIndex].route;
    }
  };

  const handlePrevious = (e: any) => {
    e.preventDefault();
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      window.location.href = paginate[prevIndex].route;
    }
  };

  const nextHref =
    currentIndex < paginate.length - 1
      ? paginate[currentIndex + 1].route
      : paginate[currentIndex].route;
  const prevHref =
    currentIndex > 0
      ? paginate[currentIndex - 1].route
      : paginate[currentIndex].route;

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
      <section className={style.nav__search}>
        <a href={prevHref} onClick={handlePrevious}>
          <AtomsIconSvg width="48px" height="48px" name="seta" />
        </a>

        <a href={nextHref} onClick={handleNext}>
          <AtomsIconSvg
            className={style.nav__search__icon}
            width="48px"
            height="48px"
            name="seta"
          />
        </a>
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
