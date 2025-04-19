import { useFetch } from "@/hooks/useFetch";

export interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface filter {
  name?: string;
  price?: string;
  quantity?: string;
}

export interface ProductsData {
  products: product[];
  status: string;
}

export function useFetchProducts(filters?: filter) {
  const queryParams = new URLSearchParams();

  if (filters?.name) queryParams.append("name", filters.name);
  if (filters?.price) queryParams.append("price", filters.price);
  if (filters?.quantity) queryParams.append("quantity", filters.quantity);

  const url = `http://localhost/api/products?${queryParams.toString()}`;
  return useFetch<ProductsData>(url);
}

export async function usePostProducts(newProduct: product) {
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
