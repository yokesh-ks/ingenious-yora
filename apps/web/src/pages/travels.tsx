import { CalendarDays, MapPin, Plane, Plus } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"

const trips = [
  { id: 1, destination: "Goa, India", dates: "Feb 10 – Feb 15", status: "completed", notes: "Beach trip with family. Stayed at Calangute.", emoji: "🌊" },
  { id: 2, destination: "Bengaluru, India", dates: "Mar 5 – Mar 6", status: "completed", notes: "Team offsite at office HQ.", emoji: "🏢" },
  { id: 3, destination: "Coorg, India", dates: "Apr 20 – Apr 22", status: "planned", notes: "Weekend getaway. Plantation stay booked.", emoji: "🌿" },
  { id: 4, destination: "Singapore", dates: "Jul 1 – Jul 8", status: "planned", notes: "Tech conference + tourism.", emoji: "🇸🇬" },
]

const stats = [
  { label: "Trips Taken", value: "2" },
  { label: "Planned", value: "2" },
  { label: "Countries", value: "1" },
  { label: "Cities", value: "4" },
]

export default function TravelsPage() {
  return (
    <AppLayout title="Travels">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Travels</h1>
            <p className="text-muted-foreground">Log your journeys and plan adventures.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            Log Trip
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

        <div className="grid gap-4 sm:grid-cols-2">
          {trips.map((trip) => (
            <div key={trip.id} className="rounded-xl border bg-card p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{trip.emoji}</span>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground">{trip.destination}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <CalendarDays className="size-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{trip.dates}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs rounded-full px-2 py-0.5 shrink-0 ${
                    trip.status === "completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}
                >
                  {trip.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{trip.notes}</p>
            </div>
          ))}

          <button className="rounded-xl border border-dashed bg-card/50 p-5 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors min-h-[120px]">
            <Plane className="size-5" />
            <span className="text-sm font-medium">Plan a new trip</span>
          </button>
        </div>
      </main>
    </AppLayout>
  )
}
