import { useFetch } from "@/hooks/useFetch";
import type { ISales, ISalesData } from "@/types/sales/sales";

export function useFetchSales() {
  const url = "http://localhost/api/sales";
  return useFetch<ISalesData>(url);
}

export async function usePostSales(newSales: ISales) {
  const response = await fetch("http://localhost/api/sales", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSales),
  });

  return response.json();
}

export async function useDeleteSales(id: number) {
  const response = await fetch(`http://localhost/api/sales/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
