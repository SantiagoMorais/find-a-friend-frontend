import { env } from "@/env";
import { productionAmbience } from "@/utils/variables";
import axios from "axios";
import Cookies from "js-cookie";

export const handleLogout = async (
  setToken: React.Dispatch<React.SetStateAction<string | null>>
) => {
  await axios
    .get(`${env.VITE_DATABASE_URL}/logout`)
    .then(() => {
      setToken(null);
      Cookies.remove("orgToken");
    })
    .catch((err) => {
      if (!productionAmbience) console.error(err);
      return;
    });
};
