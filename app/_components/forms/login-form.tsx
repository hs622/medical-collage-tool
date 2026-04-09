"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, LoginSchema } from '@/types/zod';
import { CredentialSignIn } from "@/app/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()

  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema)
  })

  async function handleFormSubmit(data: TLoginSchema) {
    const response = await CredentialSignIn(data);
    console.log(response)

    if (response?.error)
      toast.error("Error! Invalid credentials", {
        position: "bottom-right",
      })
    else {
      reset()
      router.push(response?.url as string)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your offical Email ID.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@aku.edu"
                  {...register("email")}
                />
                {errors.email && errors.email.message}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && errors.password.message}
              </Field>
              <Field>
                {isSubmitting ? (
                  <Button type="submit" className="py-4" disabled>
                    <Spinner />
                    Login
                  </Button>
                ) : (
                  <Button type="submit" className="py-4">Login</Button>
                )}
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href={"/forget-password"}
            className="underline-offset-4 hover:underline"
          >
            Forgot your password?
          </Link>
        </CardFooter>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
