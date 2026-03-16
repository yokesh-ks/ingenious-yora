import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
  Outlet,
  redirect,
} from "@tanstack/react-router"
import { AppLayout } from "@/components/app-layout"
import SignInPage from "@/pages/sign-in"
import SignUpPage from "@/pages/sign-up"
import DashboardPage from "@/pages/dashboard"
import GoalsPage from "@/pages/goals"
import TodoPage from "@/pages/todo"
import NotesPage from "@/pages/notes"
import ContactsPage from "@/pages/contacts"
import PasswordsPage from "@/pages/passwords"
import AchievementsPage from "@/pages/achievements"
import CalendarPage from "@/pages/calendar"
import IssuesPage from "@/pages/issues"
import TravelsPage from "@/pages/travels"
import PaymentsPage from "@/pages/payments"
import ShoppingPage from "@/pages/shopping"
import JobPage from "@/pages/job"
import ReportsPage from "@/pages/reports"
import FilesPage from "@/pages/files"

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    title?: string
  }
}

const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <Navigate to="/app/home" />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/app/home" })
  },
})

const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sign-in",
  component: SignInPage,
})

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sign-up",
  component: SignUpPage,
})

const appLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "_app",
  component: AppLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/home",
  component: DashboardPage,
  staticData: { title: "Dashboard" },
})

const goalsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/goals",
  component: GoalsPage,
  staticData: { title: "Goals" },
})

const todoRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/todo",
  component: TodoPage,
  staticData: { title: "Todo" },
})

const notesRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/notes",
  component: NotesPage,
  staticData: { title: "Notes" },
})

const contactsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/contacts",
  component: ContactsPage,
  staticData: { title: "Contacts" },
})

const passwordsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/passwords",
  component: PasswordsPage,
  staticData: { title: "Passwords" },
})

const achievementsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/achievements",
  component: AchievementsPage,
  staticData: { title: "Achievements" },
})

const calendarRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/calendar",
  component: CalendarPage,
  staticData: { title: "Calendar" },
})

const issuesRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/issues",
  component: IssuesPage,
  staticData: { title: "Issues" },
})

const travelsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/travels",
  component: TravelsPage,
  staticData: { title: "Travels" },
})

const paymentsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/payments",
  component: PaymentsPage,
  staticData: { title: "Payments" },
})

const shoppingRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/shopping",
  component: ShoppingPage,
  staticData: { title: "Shopping" },
})

const jobRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/job",
  component: JobPage,
  staticData: { title: "Job" },
})

const reportsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/reports",
  component: ReportsPage,
  staticData: { title: "Reports" },
})

const filesRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/app/files",
  component: FilesPage,
  staticData: { title: "Files" },
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  signInRoute,
  signUpRoute,
  appLayoutRoute.addChildren([
    homeRoute,
    goalsRoute,
    todoRoute,
    notesRoute,
    contactsRoute,
    passwordsRoute,
    achievementsRoute,
    calendarRoute,
    issuesRoute,
    travelsRoute,
    paymentsRoute,
    shoppingRoute,
    jobRoute,
    reportsRoute,
    filesRoute,
  ]),
])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
