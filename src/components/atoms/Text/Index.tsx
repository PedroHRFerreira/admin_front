import style from "./styles.module.scss";
import { IAtomsTextProps } from "./AtomsText.types";

const AtomsText: React.FC<IAtomsTextProps> = ({
  children,
  fontSize = "16px",
  fontWeight = "normal",
  color = "#333",
  lineHeight = "1.5",
  textAlign = "left",
  className = "",
}) => {
  return (
    <p
      className={(style.text, className)}
      style={{ fontSize, fontWeight, color, lineHeight, textAlign }}
    >
      {children}
    </p>
  );
};

export default AtomsText;
