import z from "zod";

export const recipeResolver = z.object({
  title: z
    .string()
    .min(3, { message: "title recipe must contain at least 3 characters" })
    .max(255, { message: "title recipe must contain at most 255 characters" }),
  description: z
    .string()
    .min(20, {
      message: "description recipe must contain at least 20 characters",
    })
    .max(1024, {
      message: "description recipe must contain at most 1024 characters",
    }),
  preparation: z
    .string()
    .min(50, {
      message: "preparation recipe must contain at least 50 characters",
    })
    .max(104857, {
      message: "preparation recipe must contain at most 104857 characters",
    }),
});

export type recipeType = z.infer<typeof recipeResolver>;
