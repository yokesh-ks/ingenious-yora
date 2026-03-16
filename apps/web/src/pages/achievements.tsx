import { Star, Trophy } from "lucide-react"

const achievements = [
  { id: 1, title: "First Goal Set", desc: "You created your first goal.", earned: true, date: "Jan 5" },
  { id: 2, title: "7-Day Streak", desc: "Logged in for 7 consecutive days.", earned: true, date: "Jan 12" },
  { id: 3, title: "Task Master", desc: "Completed 50 tasks.", earned: true, date: "Feb 1" },
  { id: 4, title: "Goal Crusher", desc: "Completed your first goal.", earned: true, date: "Feb 20" },
  { id: 5, title: "30-Day Streak", desc: "Logged in for 30 consecutive days.", earned: false, date: "" },
  { id: 6, title: "Note Taker", desc: "Created 20 notes.", earned: false, date: "" },
  { id: 7, title: "Organized", desc: "Added 10 contacts.", earned: false, date: "" },
  { id: 8, title: "Traveler", desc: "Logged your first trip.", earned: false, date: "" },
]

const stats = [
  { label: "Earned", value: "4" },
  { label: "Total", value: "8" },
  { label: "Points", value: "420" },
  { label: "Level", value: "3" },
]

export default function AchievementsPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Achievements</h1>
          <p className="text-muted-foreground">Milestones you've unlocked along the way.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border bg-card p-4 flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <span className="font-display text-2xl font-semibold text-card-foreground">{s.value}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`rounded-xl border p-4 flex flex-col items-center text-center gap-3 transition-all ${
                a.earned
                  ? "bg-card border-primary/30"
                  : "bg-muted/30 opacity-50 grayscale"
              }`}
            >
              <div
                className={`size-12 rounded-full flex items-center justify-center ${
                  a.earned ? "bg-primary/10" : "bg-muted"
                }`}
              >
                <Trophy className={`size-6 ${a.earned ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-card-foreground">{a.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
              </div>
              {a.earned && (
                <div className="flex items-center gap-1 text-xs text-primary">
                  <Star className="size-3 fill-primary" />
                  <span>{a.date}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
  )
}
