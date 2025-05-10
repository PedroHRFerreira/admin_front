export function quantityMask(value: string): string {
  let onlyNumbers = value.replace(/\D/g, "");

  onlyNumbers = onlyNumbers.slice(0, 3);

  return onlyNumbers;
}

export function currencyMask(value: string): string {
  let onlyNumbers = value.replace(/\D/g, "");
  let numericValue = parseInt(onlyNumbers, 10) || 0;
  const floatValue = numericValue / 100;
  return floatValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function datetimeMask(value: string): string {
  const date = new Date(value);
  const d = String(date.getUTCDate()).padStart(2, "0");
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const y = date.getUTCFullYear();
  const hh = String(date.getUTCHours()).padStart(2, "0");
  const min = String(date.getUTCMinutes()).padStart(2, "0");

  return `${d}/${m}/${y} às ${hh}:${min}`;
}
