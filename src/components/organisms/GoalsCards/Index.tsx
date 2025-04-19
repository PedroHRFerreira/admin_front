import { useState } from "react";
import style from "./styles.module.scss";
import { useFetchGoals } from "@/store/useFetchGoals";

const OrganismsGoalsCards = () => {
  const { data, loading, error } = useFetchGoals();
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCardId(id);
  };

  const closeModal = () => {
    setActiveCardId(null);
  };

  const activeGoal = data?.goals?.find((g) => g.id === activeCardId);

  return (
    <>
      <aside
        className={`${style.container} ${
          loading || error ? style.loading : ""
        }`}
      >
        {loading && <div className={style.loadingAnim}>Carregando...</div>}
        {error && <p>Erro ao buscar dados: {error}</p>}
        {!loading && !error && (
          <section className={style.cardsGrid}>
            {data.goals.map((goal) => {
              const isCompleted = goal.completed === true;
              const isPending = goal.completed === false;
              return (
                <div
                  key={goal.id}
                  className={`${style.card} ${
                    isCompleted ? style.completed : ""
                  } ${isPending ? style.pending : ""}`}
                  onClick={() => handleCardClick(goal.id)}
                >
                  <div className={style.content}>
                    <h3>{goal.title}</h3>
                    <p>{goal.description}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </aside>

      {activeGoal && (
        <div className={style.overlay} onClick={closeModal}>
          <div
            className={`${style.modalCard} ${
              activeGoal.completed === true ? style.completed : ""
            } ${activeGoal.completed === false ? style.pending : ""}`}
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
