import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { User } from "./";

export const useCheckAuth = (refetchEnabled: boolean, token: string) => {
  const queryClient = useQueryClient();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["check-auth"],
    queryFn: async () => {
      const user = await axios
        .get<User>(`${process.env.NEXT_PUBLIC_API_URL}/auth/check-login`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((e: any) => {
          localStorage.removeItem("atmusic-access-token");
          window.location.href = "/auth/login";
          queryClient.cancelQueries({ queryKey: ["check-auth"] });
        });
      return user;
    },
    enabled: refetchEnabled,
  });

  const userData = data?.data;

  return { data, error, isLoading, userData, refetch };
};
