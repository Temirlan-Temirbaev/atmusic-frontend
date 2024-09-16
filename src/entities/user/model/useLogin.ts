import {useMutation} from '@tanstack/react-query';
import {client} from "@/shared/utils";
import {ErrorResponse, SuccessAuthResponse} from "@/shared/types";
import {toast} from "react-toastify";

interface LoginData {
  mail: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginData): Promise<SuccessAuthResponse> => {
      const response = await client.post("/auth/login", data);
      return response.data;
    },
    onSuccess: (response: SuccessAuthResponse) => {
      localStorage.setItem("atmusic-access-token", response.access_token);
      location.href = "/"
    },
    onError: ({response}: ErrorResponse) => {
      toast.error(`${response.data.message} (${response.data.error})`, {position: "top-right"})
    }
  });
};
