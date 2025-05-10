import { useFetch } from "@/hooks/useFetch";
import type { IUsersData, IUsersPost, IUsersPut } from "@/types/users/users";

export function useFetchUsers() {
  const url = "http://localhost/api/users";
  return useFetch<IUsersData>(url);
}

export async function PostUsers(newUsers: IUsersPost) {
  const response = await fetch("http://localhost/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUsers),
  });

  return response.json();
}

export async function UpdateUsers(updateUsers: IUsersPut, id: number) {
  const response = await fetch(`http://localhost/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUsers),
  });

  return response.json();
}
