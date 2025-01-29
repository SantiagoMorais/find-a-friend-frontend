import { IResponse, IResponseReturn } from "@/core/types/api-return";
import { TLogin } from "@/core/types/handle-login";
import { env } from "@/env";
import axios, { AxiosError } from "axios";

export const handleLogin = async (
  data: TLogin
): Promise<IResponseReturn & { token: string | undefined }> => {
  let response: IResponse | undefined = undefined;
  let token: string | undefined;

  await axios
    .post<{ token: string }>(`${env.VITE_DATABASE_URL}/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      response = {
        message: "Successfully login.",
        status: res.status,
        type: "success",
      };
      token = res.data.token;
    })
    .catch((err: AxiosError) => {
      const errorResponse = JSON.parse(err.request.response);
      response = {
        message: errorResponse.message,
        status: err.status ? err.status : 500,
        type: "error",
      };
    });

  return { response, token };
};
