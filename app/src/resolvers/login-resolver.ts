import z from "zod";

export const loginResolver = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "given password not contain 8 characters" }),
});

export type loginType = z.infer<typeof loginResolver>;
