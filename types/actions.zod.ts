import z from "zod";

export const CSRFRequestSchema = z.object({
  crsfToken: z.string(),
  token: z.string()
});

export type TCSRFRequest = z.infer<typeof CSRFRequestSchema>;
