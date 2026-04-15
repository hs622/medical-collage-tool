import Link from "next/link";
import { ThemeToggle } from "../../_components/buttons/theme-toggle";
import LoginForm from "../../_components/forms/login-form";
import { Suspense } from "react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Welcome | Login",
};

export default function Page() {
  return (
    <div className=" w-full bg-muted">
      <div className="absolute w-full">
        <div className="relative float-end p-4">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link href={"/"} className="flex items-center gap-2 self-center font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            </div>
            aku.
          </Link>
          <Suspense fallback="loading...">
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
