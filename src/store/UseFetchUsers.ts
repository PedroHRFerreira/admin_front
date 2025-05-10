import { useFetch } from "@/hooks/useFetch";
import type { IUsersData, IUsersPost } from "@/types/users/users";

export function useFetchUsers() {
  const url = "http://localhost/api/users";
  return useFetch<IUsersData>(url);
}

export async function PostUsers(newUsers: IUsersPost) {
  const response = await fetch("http://localhost/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUsers),
  });

  return response.json();
}
