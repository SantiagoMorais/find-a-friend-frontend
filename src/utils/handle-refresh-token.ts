import { env } from "@/env";
import axios from "axios";

export const handleRefreshToken = async (): Promise<string | null> => {
  const response = await axios
    .patch<{ token: string }>(`${env.VITE_DATABASE_URL}/token/refresh`)
    .then((res) => {
      const { token } = res.data;
      return token;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });

  return response;
};
