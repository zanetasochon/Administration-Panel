import { axios } from "@/utils/apiClient";
import useSWR from "swr";

const useGetClients = () => {
  const { data: productsData, error } = useSWR(
    "https://fakestoreapi.com/users",
    (url: string) => axios.get(url).then((res) => res.data),
    {
      onError: () => {
        console.error("ERROR", error);
      },
    }
  );

  return { productsData, error };
};
export { useGetClients };

