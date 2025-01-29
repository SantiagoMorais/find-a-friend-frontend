import { IResponse } from "@/core/types/api-return";
import { ILogin } from "@/core/types/handle-login";
import { env } from "@/env";
import axios, { AxiosError } from "axios";

export const handleLogin = async (data: ILogin) => {
  let response: IResponse | undefined = undefined;

  await axios
    .post<ILogin>(`${env.VITE_DATABASE_URL}/login`, data, {
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
