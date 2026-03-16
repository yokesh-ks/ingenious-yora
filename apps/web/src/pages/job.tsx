import { Briefcase, Building2, CalendarDays, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const applications = [
  { id: 1, role: "Senior Frontend Engineer", company: "Stripe", status: "interview", date: "Mar 10", location: "Remote" },
  { id: 2, role: "Full Stack Developer", company: "Linear", status: "applied", date: "Mar 12", location: "Remote" },
  { id: 3, role: "React Developer", company: "Vercel", status: "offer", date: "Feb 28", location: "Remote" },
  { id: 4, role: "Software Engineer", company: "Notion", status: "rejected", date: "Feb 15", location: "San Francisco" },
  { id: 5, role: "Frontend Lead", company: "Figma", status: "applied", date: "Mar 14", location: "Remote" },
]

const statusStyle: Record<string, string> = {
  applied: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  interview: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  offer: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const stats = [
  { label: "Applied", value: String(applications.filter((a) => a.status === "applied").length) },
  { label: "Interviews", value: String(applications.filter((a) => a.status === "interview").length) },
  { label: "Offers", value: String(applications.filter((a) => a.status === "offer").length) },
  { label: "Total", value: String(applications.length) },
]

export default function JobPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Job</h1>
            <p className="text-muted-foreground">Track your job applications and interviews.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            Add Application
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border bg-card p-4 flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <span className="font-display text-2xl font-semibold text-card-foreground">{s.value}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {applications.map((app) => (
            <div key={app.id} className="rounded-xl border bg-card p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="size-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-card-foreground">{app.role}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Building2 className="size-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{app.company} · {app.location}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs rounded-full px-2 py-0.5 capitalize shrink-0 ${statusStyle[app.status]}`}>
                  {app.status}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <CalendarDays className="size-3" />
                <span>Applied {app.date}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
  )
}
