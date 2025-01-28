import { TStates } from "@/core/types";
import axios from "axios";

export const searchStates = async (): Promise<TStates[] | null> => {
  const states = await axios
    .get<TStates[]>(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
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
      console.error(err);
      return null;
    });

  return states;
};
