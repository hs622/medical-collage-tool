import z from "zod";

export const RolesTableSchema = z.object({
  id: z.string(),
  title: z.string(),
  slag: z.string(),
  level: z.number()
});

export type TRolesTable = z.infer<typeof RolesTableSchema>;

export const ModulesTableSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  visibility: z.boolean(),
  has_associated: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type TModulesTableSchema = z.infer<typeof ModulesTableSchema>;

export const SessionsTableSchema = z.object({

})

export type TSessionsTableSchema = z.infer<typeof SessionsTableSchema>;

export const StudentTableSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  batch: z.number(),
})

export type TStudentTableSchema = z.infer<typeof StudentTableSchema>;