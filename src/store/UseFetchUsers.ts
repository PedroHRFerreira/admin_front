import { useFetch } from "@/hooks/useFetch";
import type { IUsersData } from "@/types/users/users";

export function useFetchUsers() {
  const url = "http://localhost/api/users";
  return useFetch<IUsersData>(url);
}
