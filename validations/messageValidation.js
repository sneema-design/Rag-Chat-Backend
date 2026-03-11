import { z } from "zod";

export const createMessageSchema = z.object({
  chatId: z
    .number({ invalid_type_error: "chatId must be a number" })
    .int("chatId must be an integer")
    .positive("chatId must be positive"),

  role: z.enum(["user", "bot"], { 
    errorMap: () => ({ message: "Role must be either 'user' or 'bot'" }) 
  }),

  content: z
    .string()
    .min(1, "Content cannot be empty")
    .max(1000, "Content cannot exceed 1000 characters")
});