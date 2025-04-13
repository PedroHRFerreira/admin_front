import { useFetch } from "@/hooks/useFetch";
import type {
  IExpenses,
  IFilter,
  IExpensesData,
} from "@/types/expenses/expenses";

export function useFetchExpenses(filters?: IFilter) {
  const queryParams = new URLSearchParams();

  if (filters?.month) queryParams.append("month", filters.month);

  const url = `http://localhost:8000/api/expenses?${queryParams.toString()}`;
  return useFetch<IExpensesData>(url);
}

export async function usePostExpenses(newExpense: IExpenses) {
  const response = await fetch("http://localhost:8000/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExpense),
  });

  return response.json();
}

export async function useDeleteExpenses(id: number) {
  const response = await fetch(`http://localhost:8000/api/expenses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
