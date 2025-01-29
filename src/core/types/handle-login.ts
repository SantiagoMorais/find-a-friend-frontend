import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "The password must have at least 6 characters")
    .max(15, "The password must have at most 15 characters"),
});

export type ILogin = z.infer<typeof loginSchema>;
