import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const events = [
  { day: 5, title: "Team standup", time: "9:00 AM", color: "bg-blue-500" },
  { day: 10, title: "Dentist appointment", time: "2:30 PM", color: "bg-red-500" },
  { day: 15, title: "Project deadline", time: "EOD", color: "bg-amber-500" },
  { day: 18, title: "1:1 with manager", time: "11:00 AM", color: "bg-purple-500" },
  { day: 22, title: "Gym session", time: "7:00 AM", color: "bg-green-500" },
  { day: 28, title: "Monthly review", time: "3:00 PM", color: "bg-pink-500" },
]

const today = 16
const month = "March 2026"
const startDay = 0 // March 2026 starts on Sunday
const totalDays = 31

const upcomingEvents = events.filter((e) => e.day >= today).slice(0, 3)

function buildCalendarGrid() {
  const cells: (number | null)[] = Array(startDay).fill(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export default function CalendarPage() {
  const cells = buildCalendarGrid()

  return (
    <AppLayout title="Calendar">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">Plan your time, own your schedule.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            New Event
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
          <div className="rounded-xl border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-card-foreground">{month}</h2>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded hover:bg-muted transition-colors">
                  <ChevronLeft className="size-4 text-muted-foreground" />
                </button>
                <button className="p-1.5 rounded hover:bg-muted transition-colors">
                  <ChevronRight className="size-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((d) => (
                <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">
                  {d}
                </div>
              ))}
              {cells.map((day, i) => {
                const event = events.find((e) => e.day === day)
                const isToday = day === today
                return (
                  <div
                    key={i}
                    className={`aspect-square flex flex-col items-center justify-start p-1 rounded-lg cursor-pointer transition-colors text-sm ${
                      day ? "hover:bg-muted" : ""
                    } ${isToday ? "bg-primary text-primary-foreground font-bold hover:bg-primary/90" : ""}`}
                  >
                    {day && (
                      <>
                        <span>{day}</span>
                        {event && (
                          <span className={`mt-auto size-1.5 rounded-full ${event.color}`} />
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-display font-semibold text-foreground">Upcoming</h2>
            {upcomingEvents.map((e) => (
              <div key={e.day} className="rounded-xl border bg-card p-4 flex items-start gap-3">
                <div className={`mt-1 size-2.5 rounded-full shrink-0 ${e.color}`} />
                <div>
                  <p className="font-medium text-sm text-card-foreground">{e.title}</p>
                  <p className="text-xs text-muted-foreground">Mar {e.day} · {e.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
