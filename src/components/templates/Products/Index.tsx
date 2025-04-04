import style from "./styles.module.scss";
import OrganismsProductsList from "@/components/organisms/productsList/Index";

const TemplatesProducts = () => {
  return (
    <article className={style.container}>
      <OrganismsProductsList />
    </article>
  );
};

export default TemplatesProducts;
