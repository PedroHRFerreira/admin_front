import { useFetch } from "@/hooks/useFetch";
import type {
  IExpensesPost,
  IFilter,
  IExpensesData,
} from "@/types/expenses/expenses";

export function useFetchExpenses(filters?: IFilter) {
  const queryParams = new URLSearchParams();

  if (filters?.month) queryParams.append("month", filters.month);

  const url = `http://localhost/api/expenses?${queryParams.toString()}`;
  return useFetch<IExpensesData>(url);
}

export async function PostExpenses(newExpense: IExpensesPost) {
  const response = await fetch("http://localhost/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExpense),
  });

  return response.json();
}

export async function DeleteExpenses(id: number) {
  const response = await fetch(`http://localhost/api/expenses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
