import { z } from "zod";

const statesSchema = z.object({
  id: z.coerce.number(),
  nome: z.string(),
  sigla: z.string(),
  regiao: z.object({
    id: z.number(),
    nome: z.string(),
    sigla: z.string(),
  }),
});

export type TStates = z.infer<typeof statesSchema>;
