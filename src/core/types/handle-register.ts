import { z } from "zod";

export const registerOrganizationSchema = z
  .object({
    name: z.string().min(2, { message: "This field is required." }),
    owner: z.string().min(2, { message: "This field is required." }),
    email: z.string().email(),
    zipCode: z
      .string()
      .regex(/^\d{8}$/, "Zip code must contain only 8 numeric characters"),
    addressNumber: z.coerce.number(),
    whatsApp: z.coerce
      .string()
      .length(11, {
        message:
          "Please, the WhatsApp number must follow the pattern (99) 9 9999 9999, with only 11 numbers",
      })
      .refine((data) => /^[0-9]+$/.test(data), {
        message: "Please enter only numeric values",
        path: ["whatsApp"],
      }),
    password: z
      .string()
      .min(6, "The password must have at least 6 characters")
      .max(15, "The password must have at most 15 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TRegisterOrganization = z.infer<typeof registerOrganizationSchema>;
