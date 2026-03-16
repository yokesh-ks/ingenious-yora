import * as React from "react"
import {
  Award,
  Briefcase,
  Calendar,
  CreditCard,
  FileText,
  Files,
  Home,
  KeyRound,
  LifeBuoy,
  MapPin,
  MessageSquare,
  Send,
  ShoppingCart,
  StickyNote,
  Target,
  Users,
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
      url: "/app/home",
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: "Goals",
      url: "/app/goals",
      icon: Target,
      items: [],
    },
    {
      title: "Todo",
      url: "/app/todo",
      icon: FileText,
      items: [],
    },
    {
      title: "Notes",
      url: "/app/notes",
      icon: StickyNote,
      items: [],
    },
    {
      title: "Contacts",
      url: "/app/contacts",
      icon: Users,
      items: [],
    },
    {
      title: "Passwords",
      url: "/app/passwords",
      icon: KeyRound,
      items: [],
    },
    {
      title: "Achievements",
      url: "/app/achievements",
      icon: Award,
      items: [],
    },
    {
      title: "Calendar",
      url: "/app/calendar",
      icon: Calendar,
      items: [],
    },
    {
      title: "Issues",
      url: "/app/issues",
      icon: MessageSquare,
      items: [],
    },
    {
      title: "Travels",
      url: "/app/travels",
      icon: MapPin,
      items: [],
    },
    {
      title: "Payments",
      url: "/app/payments",
      icon: CreditCard,
      items: [],
    },
    {
      title: "Shopping",
      url: "/app/shopping",
      icon: ShoppingCart,
      items: [],
    },
    {
      title: "Job",
      url: "/app/job",
      icon: Briefcase,
      items: [],
    },
    {
      title: "Reports",
      url: "/app/reports",
      icon: FileText,
      items: [],
    },
    {
      title: "Files",
      url: "/app/files",
      icon: Files,
      items: [],
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
                  <span className="truncate font-semibold font-display">Ingenious One</span>
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
