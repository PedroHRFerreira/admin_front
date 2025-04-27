import { useRouter } from "next/router";
import Link from "next/link";
import style from "./styles.module.scss";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
import { useFetchUsers } from "@/store/UseFetchUsers";

const OrganismsNavBar = () => {
  const router = useRouter();
  const { data } = useFetchUsers();

  const paginate = [
    { id: 1, icon: "home", route: "/", name: "Home" },
    { id: 2, icon: "product", route: "/produtos", name: "Produtos" },
    { id: 3, icon: "money", route: "/gastos", name: "Gastos" },
    { id: 4, icon: "rocket", route: "/metas", name: "Metas" },
  ];

  console.log("data", data);

  return (
    <aside className={style.aside}>
      <ul className={style.aside__menu}>
        {paginate.map((item) => (
          <li
            key={item.id}
            className={router.pathname === item.route ? style.active : ""}
          >
            <AtomsIconSvg name={item.icon} />
            <Link className={style.link} href={item.route}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <section className={style.aside__footer}>
        <div className={style.aside__footer__admin}>
          <AtomsIconSvg width="32px" height="32px" name="user" />
          Admin
        </div>
      </section>
    </aside>
  );
};

export default OrganismsNavBar;
