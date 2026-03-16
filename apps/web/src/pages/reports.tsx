import { BarChart2, CheckSquare, Target, TrendingUp } from "lucide-react"

const weeklyActivity = [
  { day: "Mon", tasks: 8 },
  { day: "Tue", tasks: 5 },
  { day: "Wed", tasks: 12 },
  { day: "Thu", tasks: 3 },
  { day: "Fri", tasks: 9 },
  { day: "Sat", tasks: 4 },
  { day: "Sun", tasks: 1 },
]

const maxTasks = Math.max(...weeklyActivity.map((d) => d.tasks))

const highlights = [
  { label: "Tasks Completed", value: "42", change: "+12%", up: true, icon: CheckSquare },
  { label: "Goals Progress", value: "68%", change: "+5%", up: true, icon: Target },
  { label: "Streak", value: "14 days", change: "+7d", up: true, icon: TrendingUp },
  { label: "Notes Written", value: "9", change: "-2", up: false, icon: BarChart2 },
]

const categories = [
  { name: "Work", percent: 45, color: "bg-blue-500" },
  { name: "Health", percent: 20, color: "bg-green-500" },
  { name: "Learning", percent: 18, color: "bg-purple-500" },
  { name: "Personal", percent: 17, color: "bg-amber-500" },
]

export default function ReportsPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Weekly insights into your productivity.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl border bg-card p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{h.label}</span>
                <h.icon className="size-3.5 text-muted-foreground" />
              </div>
              <span className="font-display text-2xl font-semibold text-card-foreground">{h.value}</span>
              <span className={`text-xs font-medium ${h.up ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
                {h.change} this week
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-5 flex flex-col gap-4">
            <h2 className="font-display font-semibold text-card-foreground">Daily Activity</h2>
            <div className="flex items-end gap-2 h-32">
              {weeklyActivity.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm bg-primary/80 transition-all"
                    style={{ height: `${(d.tasks / maxTasks) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-card p-5 flex flex-col gap-4">
            <h2 className="font-display font-semibold text-card-foreground">By Category</h2>
            <div className="flex flex-col gap-3">
              {categories.map((c) => (
                <div key={c.name} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-card-foreground">{c.name}</span>
                    <span className="text-muted-foreground">{c.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${c.color} transition-all`}
                      style={{ width: `${c.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
  )
}
