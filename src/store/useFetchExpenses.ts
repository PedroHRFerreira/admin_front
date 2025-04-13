import { useFetch } from "@/hooks/useFetch";
import type { IFilter, IExpensesData } from "@/types/expenses/expenses";

export function useFetchExpenses(filters?: IFilter) {
  const queryParams = new URLSearchParams();

  if (filters?.expenses_current)
    queryParams.append("expenses_current", filters.expenses_current);
  if (filters?.highest_spending_product)
    queryParams.append(
      "highest_spending_product",
      filters.highest_spending_product
    );

  const url = `http://localhost:8000/api/expenses?${queryParams.toString()}`;
  return useFetch<IExpensesData>(url);
}

// export async function usePostProducts(newProduct: product) {
//   const response = await fetch("http://localhost:8000/api/products", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newProduct),
//   });

//   return response.json();
// }

// export async function useDeleteProducts(id: number) {
//   const response = await fetch(`http://localhost:8000/api/products/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return response.json();
// }
