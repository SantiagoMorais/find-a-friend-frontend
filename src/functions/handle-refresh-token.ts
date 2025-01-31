import { env } from "@/env";
import { routes } from "@/utils/routes";
import axios from "axios";

export const handleRefreshToken = async (
  setToken: React.Dispatch<React.SetStateAction<string | null>>
): Promise<string | null> => {
  const response = await axios
    .patch<{ token: string }>(`${env.VITE_DATABASE_URL}/token/refresh`)
    .then((res) => {
      const { token } = res.data;
      return token;
    })
    .catch((err) => {
      console.error(err);
      setToken(null);
      localStorage.removeItem("org-token");
      window.location.href = routes.signIn;
      return null;
    });

  return response;
};
