import { useMutation, useQuery } from "react-query";
import { http } from "../store/http";

export const usePostExample = () => {
  const endpoint = "/example-enpoint";
  const key = "example-post";
  const fn = (data) => {
    return http.post(endpoint, data);
  };
  const { mutate, isSuccess, isError, error } = useMutation(key, (e) => fn(e));
  return { mutate, isSuccess, isError, error };
};

export const useGetExample = () => {
  const endpoint = "/todos";
  const key = "example-get";
  const fn = () => {
    return http.get(endpoint);
  };
  const { data, isSuccess, refetch, isLoading } = useQuery(key, fn);
  return { data, isSuccess, refetch, isLoading };
};