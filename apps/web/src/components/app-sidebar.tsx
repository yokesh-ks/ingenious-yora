import * as React from "react"
import {
  CheckSquare,
  Home,
  LifeBuoy,
  Send,
  Settings2,
  Target,
  TrendingUp,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Yokesh",
    email: "yokesh@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: "Goals",
      url: "/goals",
      icon: Target,
      items: [
        { title: "Active Goals", url: "/goals/active" },
        { title: "Completed", url: "/goals/completed" },
        { title: "Archived", url: "/goals/archived" },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: CheckSquare,
      items: [
        { title: "Today", url: "/tasks/today" },
        { title: "Upcoming", url: "/tasks/upcoming" },
        { title: "Backlog", url: "/tasks/backlog" },
      ],
    },
    {
      title: "Progress",
      url: "/progress",
      icon: TrendingUp,
      items: [
        { title: "Weekly Review", url: "/progress/weekly" },
        { title: "Insights", url: "/progress/insights" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "General", url: "/settings/general" },
        { title: "Account", url: "/settings/account" },
        { title: "Notifications", url: "/settings/notifications" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/app/home">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-sm">
                  Y
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold font-display">Ingenious Yora</span>
                  <span className="truncate text-xs text-sidebar-foreground/60">Personal OS</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
