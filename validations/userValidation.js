import z from "zod";

export const createUserSchema = z.object({
  name: z
    .string()
    .min(2, "name should be of atleast 2 letters")
    .max(30, "Name should be less than 30 letter"),
  email: z.string().trim().email("Please enter correct email format"),
  password: z
    .string()
    .min(8, "password should be atleast of 8 character")
    .max(16, "Password can be max 16 character"),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Please enter correct email format"),
   password: z
    .string()
    .min(8, "password should be atleast of 8 character")
    .max(16, "Password can be max 16 character"),
});
