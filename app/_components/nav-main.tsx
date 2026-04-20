"use client";

import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers
} from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu, 
  SidebarMenuAction, 
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import SOSEmailNotification from "./buttons/sos-email"
import { usePathname } from "next/navigation";
import Link from "next/link";

const baseUrl: string = "/d"
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "",
      icon: IconDashboard,
    },
    {
      title: "Roles & Permissions",
      url: "/roles-and-permissions",
      icon: IconListDetails,
    },
    {
      title: "Modules",
      url: "/modules",
      icon: IconFolder,
    },
    {
      title: "Sessions",
      url: "/sessions",
      icon: IconUsers,
    },
    {
      title: "Students",
      url: "/students",
      icon: IconUsers,
    },
    {
      title: "Faculties",
      url: "/faculties",
      icon: IconUsers,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconChartBar,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function NavMain() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SOSEmailNotification />
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {data.navMain.map((item) => {          
            return (<SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} isActive={pathname == baseUrl + item.url} asChild>
                <Link href={baseUrl+item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuAction>
                {pathname == "" ? "action" : ""}
              </SidebarMenuAction>
            </SidebarMenuItem>)
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
