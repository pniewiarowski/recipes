import z from "zod";

export const registerResolver = z
  .object({
    name: z
      .string()
      .min(3, { message: "name must contain at least 3 characters" }),
    email: z.string().email({ message: "provided email is not valid" }),
    password: z
      .string()
      .min(8, { message: "password must contain at least 8 characters" }),
    repeatPassword: z
      .string()
      .min(8, {
        message: "repeat password must contain at least 8 characters",
      }),
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "the passwords did not match",
      });
    }
  });

export type registerType = z.infer<typeof registerResolver>;
