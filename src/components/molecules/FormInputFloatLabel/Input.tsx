import React, { useState, useEffect } from "react";
import { quantityMask, currencyMask } from "@/utils/masks";
import type { IMoleculesFormInputFloatLabelProps } from "./MoleculesFormInputFloatLabel.types";
import styles from "./styles.module.scss";

const MoleculesFormInputFloatLabel: React.FC<
  IMoleculesFormInputFloatLabelProps
> = ({
  label,
  isRequired = false,
  type = "text",
  errors = [],
  value = "",
  mask,
  onInput,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (mask === "quantity") val = quantityMask(val);
    if (mask === "currency") val = currencyMask(val);

    setInputValue(val);
    if (onInput) onInput(val);
  };

  return (
    <div className={`${styles.formInput} ${isRequired ? styles.required : ""}`}>
      <div className={`${styles.wrapperInput}`}>
        <label className={styles.labelPlaceholder}>{label}</label>
        <input
          className={styles.inputText}
          value={inputValue}
          type={type}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MoleculesFormInputFloatLabel;
