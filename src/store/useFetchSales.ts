import { useFetch } from "@/hooks/useFetch";

export interface SaleMonth {
  label: string;
  value: number;
  product: string;
  name?: string;
  month?: string;
  quantity: number;
  price: number;
  id_user: number;
  id: number;
}

export interface SalesData {
  sales: SaleMonth[];
}

export function useFetchSales() {
  const url = "http://localhost:8000/api/sales";
  return useFetch<SalesData>(url);
}

export async function usePostSales(newSales: SaleMonth) {
  const response = await fetch("http://localhost:8000/api/sales", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSales),
  });

  return response.json();
}

export async function useDeleteSales(id: number) {
  const response = await fetch(`http://localhost:8000/api/sales/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
