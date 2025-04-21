export interface IMoleculesFormInputFloatLabelProps {
  label: string;
  isRequired?: boolean;
  type?: string;
  errors?: string[];
  value?: string;
  mask?: "quantity" | "currency";
  onInput?: (value: string) => void;
}
