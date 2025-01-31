import { env } from "@/env";
import axios from "axios";

export const verifyTokenValidity = async (
  token: string | null,
  setToken: React.Dispatch<React.SetStateAction<string | null>>
) => {
  if (!token) return false;
  try {
    const response = await axios.get(
      `${env.VITE_DATABASE_URL}/validate-token`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      setToken(token);
      localStorage.setItem("org-token", token);
      return true;
    }
  } catch (error) {
    console.error("Invalid Token:", error);
    return false;
  }
};
