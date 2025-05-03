import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import style from "./styles.module.scss";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
import { useFetchUsers } from "@/store/UseFetchUsers";

const OrganismsNavBar = ({ actionButton }: { actionButton?: () => void }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showOpenButton, setShowOpenButton] = useState(false);
  const router = useRouter();
  const { data } = useFetchUsers();

  const paginate = [
    { id: 1, icon: "home", route: "/", name: "Home" },
    { id: 2, icon: "product", route: "/produtos", name: "Produtos" },
    { id: 3, icon: "money", route: "/gastos", name: "Gastos" },
    { id: 4, icon: "rocket", route: "/metas", name: "Metas" },
  ];

  const handleToggleAside = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setShowOpenButton(true), 1000);
      return;
    }

    setShowOpenButton(false);
    setIsOpen(true);
  };

  if (!data) return;

  const mapAdmin = data?.users.map((item) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
    };
  });

  return (
    <>
      {showOpenButton && (
        <button
          className={`${style.openButton} ${style["openButton--visible"]}`}
          onClick={handleToggleAside}
        >
          &gt;&gt;
        </button>
      )}

      <aside
        className={`${style.aside} ${
          isOpen ? style.aside__open : style.aside__closed
        }`}
      >
        {isOpen && (
          <div onClick={handleToggleAside}>
            <AtomsIconSvg className={`${style.aside__icon}`} name="seta" />
          </div>
        )}

        <ul className={style.aside__menu}>
          {paginate.map((item) => (
            <li
              key={item.id}
              className={router.pathname === item.route ? style.active : ""}
            >
              <AtomsIconSvg name={item.icon} />
              {isOpen && (
                <Link className={style.link} href={item.route}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {isOpen && (
          <section className={style.aside__footer}>
            <div className={style.aside__footer__admin}>
              {data && (
                <>
                  <AtomsIconSvg width="32px" height="32px" name="user" />
                  {mapAdmin[0].name}
                </>
              )}
              {!data && (
                <>
                  <button className={style.button} onClick={actionButton}>
                    Cadastrar
                  </button>
                </>
              )}
            </div>
          </section>
        )}
      </aside>
    </>
  );
};

export default OrganismsNavBar;
