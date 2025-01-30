import { TRegisterOrganization } from "@/core/types/handle-register";
import { env } from "@/env";
import axios from "axios";

export const handleRegister = async (
  data: TRegisterOrganization
): Promise<void> => {
  await axios.post<{ token: string }>(
    `${env.VITE_DATABASE_URL}/organizations`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
