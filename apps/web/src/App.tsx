import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SignInPage from "@/pages/sign-in"
import SignUpPage from "@/pages/sign-up"
import DashboardPage from "@/pages/dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/app/home" element={<DashboardPage />} />
        <Route path="/" element={<Navigate to="/app/home" replace />} />
        <Route path="*" element={<Navigate to="/app/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
