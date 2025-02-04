import { THandleOrganizationProfile } from "@/core/types/handle-organization-profile";
import { env } from "@/env";
import { productionAmbience } from "@/utils/variables";
import axios from "axios";

export const handleOrganizationProfile =
  async (): Promise<THandleOrganizationProfile | null> => {
    return await axios
      .get<THandleOrganizationProfile>(
        `${env.VITE_DATABASE_URL}/organizations/profile`
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (!productionAmbience)
          console.log("Error getting organization profile:", err);
        return null;
      });
  };
