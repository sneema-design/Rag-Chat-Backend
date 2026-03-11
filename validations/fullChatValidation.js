import { z } from "zod";

export const fullChatSchema = z.object({
  userId: z
    .number({ invalid_type_error: "userId must be a number" })
    .int("userId must be an integer")
    .positive("userId must be positive"),
  
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title must be less than 100 characters")
});