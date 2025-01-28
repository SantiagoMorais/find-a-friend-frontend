import { z } from "zod";

const citiesSchema = z.object({
  id: z.coerce.number(),
  nome: z.string(),
  municipio: z.object({
    id: z.number(),
    nome: z.string(),
    microregiao: z.object({
      id: z.coerce.number(),
      nome: z.string(),
      mesorregiao: z.object({
        id: z.coerce.number(),
        nome: z.string(),
        UF: z.object({
          id: z.coerce.number(),
          nome: z.string(),
          sigla: z.string(),
          regiao: z.object({
            id: z.coerce.number(),
            nome: z.string(),
            sigla: z.string(),
          }),
        }),
      }),
    }),
    regiaoImediata: z.object({
      id: z.coerce.number(),
      nome: z.string(),
      regiaoIntermediaria: z.object({
        id: z.coerce.number(),
        nome: z.string(),
        UF: z.object({
          id: z.coerce.number(),
          nome: z.string(),
          sigla: z.string(),
          regiao: z.object({
            id: z.coerce.number(),
            nome: z.string(),
            sigla: z.string(),
          }),
        }),
      }),
    }),
  }),
});

export type TCities = z.infer<typeof citiesSchema>;
