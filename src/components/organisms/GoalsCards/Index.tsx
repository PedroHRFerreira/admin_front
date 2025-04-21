import { useState } from "react";
import style from "./styles.module.scss";
import { useFetchGoals } from "@/store/useFetchGoals";

const OrganismsGoalsCards = () => {
  const { data, loading, error } = useFetchGoals();
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  if (loading || error || !data) {
    return (
      <aside
        className={`${style.container} ${
          loading || error ? style.loading : ""
        }`}
      >
        {loading ? (
          <div className={style.loadingAnim}>Carregando...</div>
        ) : (
          <p>Erro ao buscar dados: {error}</p>
        )}
      </aside>
    );
  }

  const activeGoal = data.goals.find((g) => g.id === activeCardId);

  return (
    <>
      <aside className={style.container}>
        <section className={style.cardsGrid}>
          {data.goals.map((goal) => {
            const completed = goal.completed === true;
            const pending = goal.completed === false;
            return (
              <div
                key={goal.id}
                className={`${style.card} ${completed ? style.completed : ""} ${
                  pending ? style.pending : ""
                }`}
                onClick={() => setActiveCardId(goal.id)}
              >
                <div className={style.content}>
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </aside>

      {activeGoal && (
        <div className={style.overlay} onClick={() => setActiveCardId(null)}>
          <div
            className={`${style.modalCard} ${
              activeGoal.completed ? style.completed : ""
            } ${!activeGoal.completed ? style.pending : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={style.content}>
              <h2>{activeGoal.title}</h2>
              <p>{activeGoal.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganismsGoalsCards;
