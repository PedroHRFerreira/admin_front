import React from "react";
import Image from "next/image";
import style from "./styles.module.scss";
import { IAtomsIconSvgProps } from "./AtomsIconSvg.types";

const AtomsIconSvg: React.FC<IAtomsIconSvgProps> = ({
  name,
  width = "24px",
  height = "24px",
  className = "",
  clickIcon,
}) => {
  return (
    <Image
      src={`/${name}.svg`}
      alt={name}
      className={`${style.icon} ${className}`}
      width={parseInt(width)}
      height={parseInt(height)}
      onClick={() => clickIcon}
    />
  );
};

export default AtomsIconSvg;
