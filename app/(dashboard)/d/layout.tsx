import { ReactNode } from "react" 
import { SiteHeader } from "../../_components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import TTProvider from "../../_providers/tooltip"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { TRole } from "@/types/validations.zod" 
import { CredentialSignOut } from "@/app/actions/auth-actions"
import { getDashboard } from "@/lib/routing"
import { AppSidebar } from "@/app/_components/server/app-sidebar"

export default async function DashboardLayout({
  children
}: {
  children: ReactNode
}) {

  const session = await auth()
  if(!session?.user) redirect("/")

  const role = (session.user as { role: TRole }).role ?? "idle"

  if (role === "idle") {
    CredentialSignOut()
    redirect(getDashboard("idle"))
  }
  if (role === "student") redirect(getDashboard("student"))

  return (
    <TTProvider >
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
        suppressHydrationWarning
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          {children}
        </SidebarInset >
      </SidebarProvider >
    </TTProvider>
  )
}
