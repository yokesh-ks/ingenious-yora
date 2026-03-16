import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface AppLayoutProps {
  title: string
  children: React.ReactNode
}

export function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-header px-4">
          <SidebarTrigger className="-ml-1 text-header-foreground" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-header-foreground font-medium">
                  {title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        {children}
        <footer className="border-t bg-footer px-6 py-4">
          <p className="text-xs text-footer-foreground/70">
            Ingenious Yora · Personal Management System
          </p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
