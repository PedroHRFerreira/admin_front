import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import type { IMoleculesModalProps } from "../MoleculesModal.types";

const MoleculesModalAside = ({
  isOpen,
  title,
  children,
  error,
  textSave = "Salvar",
  textClear = "Limpar",
  onSave,
  onCancel,
}: IMoleculesModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setClosing(false);
    } else if (shouldRender) {
      setClosing(true);
      const timeout = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, shouldRender]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  if (!shouldRender) return null;

  return (
    <div className={style.modal__overlay} onClick={handleOverlayClick}>
      <aside
        className={`${style.modal__aside} ${
          closing ? style["modal__aside--closing"] : style["modal__aside--open"]
        }`}
      >
        <div className={style.modal__header}>
          <h2>{title}</h2>
        </div>

        <div className={style.modal__content}>{children}</div>

        {error && <div className={style.modal__error}>{error}</div>}

        <div className={style.modal__actions}>
          <button onClick={onCancel} className={style.modal__cancelBtn}>
            {textClear}
          </button>
          <button onClick={onSave} className={style.modal__saveBtn}>
            {textSave}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default MoleculesModalAside;
