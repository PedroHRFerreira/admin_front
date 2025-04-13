import { useState } from "react";
import style from "../styles.module.scss";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
import AtomsText from "@/components/atoms/Text/Index";

import OrganismsGraphicExpenses from "@/components/organisms/Graphic/Expenses/Index";
import OrganismsDataExpenses from "@/components/organisms/Data/Expenses/Index";
import OrganismsSalesList from "@/components/organisms/SalesList/Index";

const TemplatesCarouselExpenses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const texts = [
    {
      name: "Home",
      component: OrganismsGraphicExpenses,
    },
    {
      name: "Dados",
      component: OrganismsDataExpenses,
    },
    {
      name: "Listagem",
      component: OrganismsSalesList,
    },
  ];

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < texts.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const ActiveComponent = texts[activeIndex].component;

  return (
    <article className={style.carousel}>
      <section className={style.nav}>
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`${style.button} ${
            activeIndex === 0 ? style.disabled : ""
          }`}
        >
          <AtomsIconSvg width="18px" height="18px" name="seta" />
          <AtomsText
            className={style.nav__logo__text}
            fontSize="16px"
            fontWeight="bold"
            color="#fff"
          >
            Voltar
          </AtomsText>
        </button>
        <div className={style.components}>
          <div className={style.components__text}>
            {texts.map((text, index) => (
              <div
                key={index}
                className={
                  index === activeIndex ? style.components__text__active : ""
                }
                onClick={() => setActiveIndex(index)}
              >
                <AtomsText
                  className={style.nav__logo__text}
                  fontSize="16px"
                  fontWeight="bold"
                  color="#fff"
                >
                  {text.name}
                </AtomsText>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={activeIndex === texts.length - 1}
          className={`${style.button} ${
            activeIndex === texts.length - 1 ? style.disabled : ""
          }`}
        >
          <AtomsText
            className={style.nav__logo__text}
            fontSize="16px"
            fontWeight="bold"
            color="#fff"
          >
            Avançar
          </AtomsText>
          <AtomsIconSvg
            className={style.icon}
            width="18px"
            height="18px"
            name="seta"
          />
        </button>
      </section>
      <section className={style.content}>
        <ActiveComponent />
      </section>
    </article>
  );
};

export default TemplatesCarouselExpenses;
