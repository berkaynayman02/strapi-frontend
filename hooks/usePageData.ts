import useSWR from "swr";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { HomePageData } from "@/lib/types";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
if (!baseURL) {
  throw new Error(
    "NEXT_PUBLIC_STRAPI_URL is not defined in environment variables."
  );
}

export const api: AxiosInstance = axios.create({
  baseURL,
});

const fetcher = (url: string) =>
  api.get(url).then((res: AxiosResponse) => res.data.data);

interface UsePageDataReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function usePageData<T = HomePageData>(
  endpoint: string
): UsePageDataReturn<T> {
  const { data, error, isLoading } = useSWR<T>(
    `api/${endpoint}?populate=*`,
    fetcher
  );

  return {
    data: data || null,
    isLoading,
    error,
  };
}
