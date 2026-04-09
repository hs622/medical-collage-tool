import z from "zod";

export const Role = z.enum(["admin", "faculty", "student", "idle"]);

export type TRole = z.infer<typeof Role>;

const passwordSchame = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .max(64, "Password must be at most 64 characters.")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
  .regex(/[a-z]/, "Must contain at least one lowercase letter.")
  .regex(/[0-9]/, "Must contain at least one number.")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character.");

const emailSchema = z.string().min(1, "Email is required!");

export const LoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required!"),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const registerSchema = z.object({
  first_name: z.string().min(2, "Name is required!"),
  last_name: z.string().optional(),
  email: emailSchema,
  password: passwordSchame,
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const forgetPassword = z.object({
  email: emailSchema,
});

export type ForgetFormValues = z.infer<typeof forgetPassword>;

export const resetPassword = z
  .object({
    password: passwordSchame,
    confirm_password: z.string().min(1, "Please confirm your password."),
    token: z.string().min(1, "Reset token is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password do not match.",
    path: ["confirm_password"],
  });

export type ResetFormValues = z.infer<typeof resetPassword>;
