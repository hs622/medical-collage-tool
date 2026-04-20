import { TLoginSchema } from "@/types/validations.zod";
import { signIn, signOut } from "next-auth/react";

export async function CredentialSignIn(data: TLoginSchema) {
  const { url, ok, error } = await signIn("credentials", {
    ...data,
    redirect: false
  })

  return {url, ok, error}
}

export async function CredentialSignOut() {
  const response = await signOut({
    redirect: true
  })
  console.log("logout!")
  return response
}

export async function CredentialRegister() {}
export async function CredentialForgetPassword() {}