import style from "./styles.module.scss";
import OrganismsGoalsCards from "@/components/organisms/GoalsCards/Index";

const TemplatesGoals = () => {
  return (
    <article className={style.container}>
      <OrganismsGoalsCards />
    </article>
  );
};

export default TemplatesGoals;
