import { ReactNode } from "react"
import { AppSidebar } from "../../_components/app-sidebar"
import { SiteHeader } from "../../_components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import TTProvider from "../../_providers/tooltip"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { TRole } from "@/types/zod"
import { getDashboard } from "@/proxy"
import { CredentialSignOut } from "@/app/actions/auth-actions"

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
