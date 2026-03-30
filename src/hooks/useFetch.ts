import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../services/api";

export const useFetch = (key: string, url: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetcher(url),
  });
};