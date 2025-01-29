import { IResponse, IResponseReturn } from "@/core/types/api-return";
import { TRegisterOrganization } from "@/core/types/handle-register";
import { env } from "@/env";
import axios, { AxiosError } from "axios";

export const handleRegister = async (
  data: TRegisterOrganization
): Promise<IResponseReturn> => {
  let response: IResponse | undefined = undefined;

  await axios
    .post<TRegisterOrganization>(`${env.VITE_DATABASE_URL}/organizations`, data)
    .then((res) => {
      response = {
        message: "Successfully registered.",
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
