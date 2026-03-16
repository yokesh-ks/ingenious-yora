import { CheckCircle2, Circle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const tasks = [
  { id: 1, title: "Review pull request #42", done: false, priority: "high", tag: "Work" },
  { id: 2, title: "Buy groceries", done: false, priority: "medium", tag: "Personal" },
  { id: 3, title: "Reply to emails", done: true, priority: "low", tag: "Work" },
  { id: 4, title: "Morning workout", done: true, priority: "medium", tag: "Health" },
  { id: 5, title: "Read for 30 minutes", done: false, priority: "low", tag: "Learning" },
  { id: 6, title: "Call dentist", done: false, priority: "high", tag: "Personal" },
]

const priorityColor: Record<string, string> = {
  high: "text-red-500",
  medium: "text-amber-500",
  low: "text-green-500",
}

export default function TodoPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Todo</h1>
            <p className="text-muted-foreground">
              {tasks.filter((t) => !t.done).length} tasks remaining today.
            </p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            Add Task
          </Button>
        </div>

        <div className="rounded-xl border bg-card divide-y">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3 px-4 py-3">
              {task.done ? (
                <CheckCircle2 className="size-5 text-primary shrink-0" />
              ) : (
                <Circle className="size-5 text-muted-foreground shrink-0" />
              )}
              <span
                className={`flex-1 text-sm ${task.done ? "line-through text-muted-foreground" : "text-card-foreground"}`}
              >
                {task.title}
              </span>
              <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5">
                {task.tag}
              </span>
              <span className={`text-xs font-medium ${priorityColor[task.priority]}`}>
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </main>
  )
}
