import { TRegisterOrganization } from "@/core/types/handle-register";
import { env } from "@/env";
import axios, { AxiosError } from "axios";

export const handleRegister = async (
  data: TRegisterOrganization
): Promise<{ error: null | string }> => {
  const response = await axios
    .post(`${env.VITE_DATABASE_URL}/organizations`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => {
      console.log(data);
      
      return { error: null };
    })
    .catch((err) => {
      const error = err as AxiosError;

      console.log(error);

      if (error.response) {
        if (error.response.status === 409)
          return { error: "E-mail already registered" };
        if (error.response.status === 401)
          return { error: "Zip code must contain only 8 numeric characters" };
        if (error.response.status === 404)
          return { error: "Invalid ZIP code or address not found" };
        if (error.response.status === 500)
          return {
            error: "Internal server error. Try again later.",
          };
      } else {
        return { error: err };
      }

      return { error: error.message };
    });

  return response;
};
