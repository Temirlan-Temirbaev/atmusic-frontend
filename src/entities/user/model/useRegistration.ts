import {useMutation} from '@tanstack/react-query';
import {client} from "@/shared/utils";
import {ErrorResponse, SuccessAuthResponse} from "@/shared/types";
import {toast} from "react-toastify";

interface RegisterData {
  nickname: string;
  mail: string;
  password: string;
  avatar?: File;
}

export const useRegistration = () => {
  return useMutation({
    mutationKey: ["registration"],
    mutationFn: async (data: RegisterData): Promise<SuccessAuthResponse> => {
      const body = new FormData();
      body.append("mail", data.mail)
      body.append("password", data.password)
      body.append("nickname", data.nickname)
      if (data.avatar) {
        body.append("avatar", data.avatar);
      }
      const response = await client.post("/auth/register", body,
        {headers : {
          "Content-Type": "multipart/form-data",
          }});
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
