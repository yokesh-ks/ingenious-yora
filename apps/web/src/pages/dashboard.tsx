import { CheckSquare, Target, TrendingUp } from "lucide-react"

const stats = [
  { label: "Active Goals", value: "0" },
  { label: "Tasks Today", value: "0" },
  { label: "Streak", value: "0d" },
  { label: "Completed", value: "0%" },
]

export default function DashboardPage() {
  return (
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
              No goals yet. Define what you&apos;re working towards.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CheckSquare className="size-4 text-primary" />
              <h2 className="font-display font-semibold text-card-foreground">Today&apos;s Tasks</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              No tasks for today. Start by adding your first task.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5 flex flex-col gap-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-primary" />
              <h2 className="font-display font-semibold text-card-foreground">Progress</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Your progress insights will appear here once you start tracking.
            </p>
          </div>
        </div>
      </main>
  )
}
