import { TCities } from "@/core/types/cities";
import { productionAmbience } from "@/utils/variables";
import axios from "axios";

export const searchCities = async (
  stateId: number
): Promise<TCities[] | null> => {
  const cities = await axios
    .get<TCities[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/distritos`,
      {
        params: {
          orderBy: "nome",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (!productionAmbience) console.error(err);
      return null;
    });

  return cities;
};
