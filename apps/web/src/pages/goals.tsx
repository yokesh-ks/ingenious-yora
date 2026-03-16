import { Plus, Target } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"

const goals = [
  { id: 1, title: "Learn TypeScript", progress: 65, deadline: "Apr 30", status: "active" },
  { id: 2, title: "Read 12 books this year", progress: 25, deadline: "Dec 31", status: "active" },
  { id: 3, title: "Run a 5K", progress: 80, deadline: "Mar 31", status: "active" },
  { id: 4, title: "Save $5,000", progress: 40, deadline: "Jun 30", status: "active" },
]

export default function GoalsPage() {
  return (
    <AppLayout title="Goals">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Goals</h1>
            <p className="text-muted-foreground">Define what you're working towards.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            New Goal
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <div key={goal.id} className="rounded-xl border bg-card p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Target className="size-4 text-primary mt-0.5 shrink-0" />
                  <h3 className="font-display font-semibold text-card-foreground">{goal.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{goal.deadline}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-card-foreground">{goal.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}

          <button className="rounded-xl border border-dashed bg-card/50 p-5 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors min-h-[120px]">
            <Plus className="size-5" />
            <span className="text-sm font-medium">Add a new goal</span>
          </button>
        </div>
      </main>
    </AppLayout>
  )
}
