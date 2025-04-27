import { useFetch } from "@/hooks/useFetch";

export function useFetchUsers() {
  const url = "http://localhost/api/users";
  return useFetch(url);
}
