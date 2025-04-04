import { useFetch } from "@/hooks/useFetch";

export interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ProductsData {
  products: product[];
  status: string;
}

export function useFetchProducts() {
  const url = "http://localhost:8000/api/products";
  return useFetch<ProductsData>(url);
}

export async function usePostProducts(newSales: product) {
  const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSales),
  });

  return response.json();
}

export async function useDeleteProducts(id: number) {
  const response = await fetch(`http://localhost:8000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
