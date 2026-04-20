import MainNavbar from "@/app/_components/navbar/main-navbar.student";
import { CredentialSignOut } from "@/app/actions/auth-actions";
import { auth } from "@/auth"; 
import { getDashboard } from "@/lib/routing";
import { TRole } from "@/types/validations.zod";
import { redirect } from "next/navigation";
import { ReactNode } from "react"; 

export default async function StudentLayout({ children }: { children: ReactNode }) {

  const session = await auth()
  if (!session?.user) redirect("/")

  const role = (session.user as { role: TRole}).role ?? "idle"

  if(role === "idle") {
    CredentialSignOut()
    redirect(getDashboard(role))
  };
  if(role !== "student") redirect(getDashboard(role));

  return (
    <div className="bg-muted h-screen">
      <MainNavbar />  
      <div className="bg-background h-[calc(100dvh-115px)] rounded-xl m-2 shadow-sm overflow-hidden">
        {children}
      </div>
    </div >
  )
}