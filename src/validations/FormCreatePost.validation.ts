import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(3, "title must be at least 3 characters"),
  body: z.string().min(5, "body must be at least 5 characters"),
  userId: z.string().min(1, "Please select a user"),
});
