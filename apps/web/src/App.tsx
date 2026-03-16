import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/app/home" element={<DashboardPage />} />
        <Route path="/app/goals" element={<GoalsPage />} />
        <Route path="/app/todo" element={<TodoPage />} />
        <Route path="/app/notes" element={<NotesPage />} />
        <Route path="/app/contacts" element={<ContactsPage />} />
        <Route path="/app/passwords" element={<PasswordsPage />} />
        <Route path="/app/achievements" element={<AchievementsPage />} />
        <Route path="/app/calendar" element={<CalendarPage />} />
        <Route path="/app/issues" element={<IssuesPage />} />
        <Route path="/app/travels" element={<TravelsPage />} />
        <Route path="/app/payments" element={<PaymentsPage />} />
        <Route path="/app/shopping" element={<ShoppingPage />} />
        <Route path="/app/job" element={<JobPage />} />
        <Route path="/app/reports" element={<ReportsPage />} />
        <Route path="/app/files" element={<FilesPage />} />
        <Route path="/" element={<Navigate to="/app/home" replace />} />
        <Route path="*" element={<Navigate to="/app/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
