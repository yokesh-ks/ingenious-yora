import { CheckCircle2, Circle, Clock, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const issues = [
  { id: 1, title: "Login page flickers on mobile", status: "open", priority: "high", label: "Bug", assignee: "Me" },
  { id: 2, title: "Add dark mode toggle to settings", status: "in-progress", priority: "medium", label: "Feature", assignee: "Me" },
  { id: 3, title: "Sidebar collapses unexpectedly on resize", status: "open", priority: "medium", label: "Bug", assignee: "" },
  { id: 4, title: "Export data as CSV", status: "open", priority: "low", label: "Feature", assignee: "" },
  { id: 5, title: "Password vault search not returning results", status: "closed", priority: "high", label: "Bug", assignee: "Me" },
  { id: 6, title: "Update onboarding flow copy", status: "closed", priority: "low", label: "Content", assignee: "Me" },
]

const statusIcon: Record<string, React.ReactNode> = {
  open: <Circle className="size-4 text-muted-foreground" />,
  "in-progress": <Clock className="size-4 text-amber-500" />,
  closed: <CheckCircle2 className="size-4 text-green-500" />,
}

const priorityColor: Record<string, string> = {
  high: "text-red-500",
  medium: "text-amber-500",
  low: "text-muted-foreground",
}

const labelStyle: Record<string, string> = {
  Bug: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Feature: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Content: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
}

const counts = {
  open: issues.filter((i) => i.status === "open").length,
  inProgress: issues.filter((i) => i.status === "in-progress").length,
  closed: issues.filter((i) => i.status === "closed").length,
}

export default function IssuesPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Issues</h1>
            <p className="text-muted-foreground">
              {counts.open} open · {counts.inProgress} in progress · {counts.closed} closed
            </p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            New Issue
          </Button>
        </div>

        <div className="rounded-xl border bg-card overflow-hidden divide-y">
          {issues.map((issue) => (
            <div key={issue.id} className="flex items-center gap-3 px-4 py-3">
              {statusIcon[issue.status]}
              <span className="text-sm text-card-foreground flex-1">{issue.title}</span>
              <span className={`text-xs rounded-full px-2 py-0.5 ${labelStyle[issue.label]}`}>
                {issue.label}
              </span>
              <span className={`text-xs font-medium capitalize ${priorityColor[issue.priority]}`}>
                {issue.priority}
              </span>
              {issue.assignee && (
                <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  Y
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
  )
}
