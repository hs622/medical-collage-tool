import z from "zod";

export const ApiResponseObject = z.object({
  data: z.array(z.object()),
  limit: z.number(),
  skip: z.number().optional(),
  total: z.number(),
});

export type TApiResponseObject = z.infer<typeof ApiResponseObject>;
