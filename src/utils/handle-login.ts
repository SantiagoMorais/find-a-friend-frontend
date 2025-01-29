import { IResponse } from "@/core/types/api-return";
import { TLogin } from "@/core/types/handle-login";
import { env } from "@/env";
import axios, { AxiosError } from "axios";

export const handleLogin = async (data: TLogin) => {
  let response: IResponse | undefined = undefined;

  await axios
    .post<TLogin>(`${env.VITE_DATABASE_URL}/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      response = {
        message: "Successfully login.",
        status: res.status,
        type: "success",
      };
    })
    .catch((err: AxiosError) => {
      const errorResponse = JSON.parse(err.request.response);
      response = {
        message: errorResponse.message,
        status: err.status ? err.status : 500,
        type: "error",
      };
    });

  return { response };
};
