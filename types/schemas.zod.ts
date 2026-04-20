import z from "zod";

export const ModuleRowSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  has_associated: z.boolean(),
  visibility: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().optional(),
});

export type ModuleRow = z.infer<typeof ModuleRowSchema>;


