import { TLogin } from "@/core/types/handle-login";
import { env } from "@/env";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export const handleLogin = async (
  data: TLogin
): Promise<{ token: string | null; error: string | null }> => {
  try {
    const response = await axios.post<{ token: string }>(
      `${env.VITE_DATABASE_URL}/login`,
      data,
      {
        withCredentials: true,
      }
    );

    const { token } = response.data;
    const expirationTime = 10 / 60 / 24 //10 minutes
    Cookies.set("org-token", token, {expires: expirationTime });

    return { token, error: null };
  } catch (err) {
    const error = err as AxiosError;

    if (error.response) {
      if (error.response.status === 400)
        return { token: null, error: "E-mail or password invalid." };
      if (error.response.status === 500)
        return {
          token: null,
          error: "Internal server error. Try again later.",
        };
    }
  }

  return { token: null, error: "An unexpected error occurred" };
};
