import { env } from "@/env";
import { productionAmbience } from "@/utils/variables";
import axios from "axios";
import Cookies from "js-cookie";

export const handleRefreshToken = async (
  setToken: React.Dispatch<React.SetStateAction<string | null>>
): Promise<{ token: string | null }> => {
  const cookie = Cookies.get("orgToken");

  try {
    const res = await axios.patch<{ token: string }>(
      `${env.VITE_DATABASE_URL}/token/refresh`,
      {},
      {
        withCredentials: true,
      }
    );
    const { token } = res.data;
    const expirationTime = 10 / 60 / 24; //10 minutes

    setToken(token);
    Cookies.set("orgToken", token, { expires: expirationTime });

    return { token };
  } catch (err) {
    if (!productionAmbience) console.error("Error updating token:", err);
    setToken(null);
    if (cookie) Cookies.remove("orgToken");
    return { token: null };
  }
};
