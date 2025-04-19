import { useFetch } from "@/hooks/useFetch";
import type { IGoals } from "@/types/goals/goals.d";

export function useFetchGoals() {
  const url = "http://localhost/api/goals";
  return useFetch<IGoals>(url);
}
