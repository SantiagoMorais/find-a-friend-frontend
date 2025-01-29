import { z } from "zod";

export const responseSchema = z.object({
  message: z.string(),
  status: z.number(),
  type: z.enum(["success", "error"]),
});

export type IResponse = z.infer<typeof responseSchema>;

export type IResponseReturn = {
  response: IResponse | undefined;
};
