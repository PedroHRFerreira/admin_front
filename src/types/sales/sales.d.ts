export interface ISales {
  label: string;
  value: number;
  product: string;
  name?: string;
  month?: string;
  quantity: number;
  price: number;
  description: string;
  id: number;
}

export interface ISalesPost {
  month: string;
  value: number;
  quantity: number;
  name: string;
  description: string;
}

export interface ISalesData {
  sales: ISales[];
  status: string;
}
