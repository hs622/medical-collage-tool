import { SidebarMenuButton } from "@/components/ui/sidebar";
import { IconCirclePlusFilled } from "@tabler/icons-react";

export default function SOSEmailNotification() {
  return (
    <SidebarMenuButton
      tooltip="Quick Create"
      className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
    >
      <IconCirclePlusFilled />
      <span>SOS Announcement</span>
    </SidebarMenuButton>
  )
}