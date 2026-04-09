import { TLoginSchema } from "@/types/zod";
import { signIn, signOut } from "next-auth/react";

export async function CredentialSignIn(data: TLoginSchema) {
  const response = await signIn("credentials", {
    ...data,
    redirect: true
  }) 

  return response
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