import {
  CheckSquare,
  Home,
  Settings,
  Target,
  TrendingUp,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

const navItems = [
  { title: 'Dashboard', icon: Home, isActive: true },
  { title: 'Goals', icon: Target },
  { title: 'Tasks', icon: CheckSquare },
  { title: 'Progress', icon: TrendingUp },
]

const stats = [
  { label: 'Active Goals', value: '0' },
  { label: 'Tasks Today', value: '0' },
  { label: 'Streak', value: '0d' },
  { label: 'Completed', value: '0%' },
]

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-sm">
                  Y
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-display font-semibold text-sidebar-foreground">
                    Ingenious Yora
                  </span>
                  <span className="text-xs text-sidebar-foreground/60">Personal OS</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title}
                  >
                    <a href="#">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <a href="#">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-header px-4">
          <SidebarTrigger className="-ml-1 text-header-foreground hover:bg-accent/50" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="text-sm font-medium text-header-foreground">Dashboard</span>
        </header>

        <main className="flex flex-1 flex-col gap-8 p-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              Good morning
            </h1>
            <p className="text-muted-foreground">
              Track your goals, own your tasks, and build the life you actually want.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-xl border bg-card p-4"
              >
                <span className="text-xs text-muted-foreground">{stat.label}</span>
                <span className="font-display text-2xl font-semibold text-card-foreground">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Target className="size-4 text-primary" />
                <h2 className="font-display font-semibold text-card-foreground">Goals</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                No goals yet. Define what you're working towards.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="size-4 text-primary" />
                <h2 className="font-display font-semibold text-card-foreground">Today's Tasks</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                No tasks for today. Start by adding your first task.
              </p>
            </div>
          </div>
        </main>

        <footer className="border-t bg-footer px-6 py-4">
          <p className="text-xs text-footer-foreground/70">
            Ingenious Yora · Personal Management System
          </p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
