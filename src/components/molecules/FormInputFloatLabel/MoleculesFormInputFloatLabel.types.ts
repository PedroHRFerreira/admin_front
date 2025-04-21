export interface IMoleculesFormInputFloatLabelProps {
  label: string;
  type?: string;
  value?: string;
  mask?: "quantity" | "currency";
  onInput?: (value: string) => void;
}
