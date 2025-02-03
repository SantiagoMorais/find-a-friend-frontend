import { env } from "@/env";
import { routes } from "@/utils/routes";
import axios from "axios";
import Cookies from "js-cookie";

export const handleRefreshToken = async (
  setToken: React.Dispatch<React.SetStateAction<string | null>>
): Promise<{ data: string | null }> => {
  const { data } = await axios
    .patch<{ token: string }>(`${env.VITE_DATABASE_URL}/token/refresh`)
    .then((res) => {
      const { token } = res.data;
      const expirationTime = 10 / 60 / 24; //10 minutes

      Cookies.set("orgToken", token, { expires: expirationTime });

      return { data: token };
    })
    .catch((err) => {
      console.error(err);

      setToken(null);
      Cookies.remove("orgToken");

      window.location.href = routes.signIn;
      return { data: null };
    });

  return { data };
};
