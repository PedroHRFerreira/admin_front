import { useFetch } from "@/hooks/useFetch";
import type {
  IProduct,
  IFilter,
  IProductsData,
} from "@/types/products/products";

export function useFetchProducts(filters?: IFilter) {
  const queryParams = new URLSearchParams();

  if (filters?.name) queryParams.append("name", filters.name);
  if (filters?.price) queryParams.append("price", filters.price);
  if (filters?.quantity) queryParams.append("quantity", filters.quantity);

  const url = `http://localhost/api/products?${queryParams.toString()}`;
  return useFetch<IProductsData>(url);
}

export async function usePostProducts(newProduct: IProduct) {
  const response = await fetch("http://localhost/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  return response.json();
}

export async function useDeleteProducts(id: number) {
  const response = await fetch(`http://localhost/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
