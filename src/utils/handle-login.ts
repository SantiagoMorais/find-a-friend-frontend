import { TLogin } from "@/core/types/handle-login";
import { env } from "@/env";
import axios, { AxiosError } from "axios";

export const handleLogin = async (
  data: TLogin
): Promise<{ token: string | null }> => {
  let token: string | null = null;

  await axios
    .post<{ token: string }>(`${env.VITE_DATABASE_URL}/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      token = res.data.token;
    })
    .catch((err: AxiosError) => {
      console.log(err);
    });

  return { token };
};
