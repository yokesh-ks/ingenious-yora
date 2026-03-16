import { FileText, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const notes = [
  { id: 1, title: "Project Kickoff Meeting", excerpt: "Discussed timeline, deliverables, and team roles for Q2 launch.", tag: "Work", date: "Mar 15" },
  { id: 2, title: "Book Notes: Atomic Habits", excerpt: "Habit stacking: link new habits to existing ones. 1% better every day compounds.", tag: "Learning", date: "Mar 12" },
  { id: 3, title: "Grocery List Ideas", excerpt: "Oats, almond milk, eggs, spinach, chicken breast, olive oil, garlic.", tag: "Personal", date: "Mar 10" },
  { id: 4, title: "API Design Patterns", excerpt: "REST vs GraphQL tradeoffs. Rate limiting strategies. Auth token refresh flow.", tag: "Dev", date: "Mar 8" },
  { id: 5, title: "Weekend Travel Plans", excerpt: "Possible destinations: Coorg, Hampi, or Pondicherry. Check weather.", tag: "Personal", date: "Mar 5" },
]

export default function NotesPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Notes</h1>
            <p className="text-muted-foreground">Capture thoughts, ideas, and references.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            New Note
          </Button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search notes..." className="pl-9" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="rounded-xl border bg-card p-4 flex flex-col gap-2 cursor-pointer hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-primary shrink-0 mt-0.5" />
                  <h3 className="font-display font-semibold text-card-foreground text-sm leading-snug">
                    {note.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{note.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-1">
                <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5">
                  {note.tag}
                </span>
                <span className="text-xs text-muted-foreground">{note.date}</span>
              </div>
            </div>
          ))}

          <button className="rounded-xl border border-dashed bg-card/50 p-4 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors min-h-[120px]">
            <Plus className="size-5" />
            <span className="text-sm font-medium">New note</span>
          </button>
        </div>
      </main>
  )
}
