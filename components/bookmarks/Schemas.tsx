import { z } from "zod";

export const bookmarkSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters" })
    .max(30, { message: "Keep your response within 30 characters" }),
  url: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .min(10, { message: "Url should be at least 10 characters" })
    .max(50, { message: "Keep your response within 50 characters" }),
});

export type BookmarkSchema = z.infer<typeof bookmarkSchema>;
