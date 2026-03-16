import { CheckCircle2, Circle, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const lists = [
  {
    id: 1,
    name: "Groceries",
    emoji: "🛒",
    items: [
      { name: "Oats", qty: "1 kg", done: true },
      { name: "Almond milk", qty: "2 packs", done: true },
      { name: "Eggs", qty: "12", done: false },
      { name: "Spinach", qty: "500g", done: false },
      { name: "Greek yogurt", qty: "2", done: false },
    ],
  },
  {
    id: 2,
    name: "Tech Wishlist",
    emoji: "💻",
    items: [
      { name: "Mechanical keyboard", qty: "1", done: false },
      { name: "USB-C hub", qty: "1", done: true },
      { name: "Monitor arm", qty: "1", done: false },
    ],
  },
  {
    id: 3,
    name: "Books",
    emoji: "📚",
    items: [
      { name: "Deep Work – Cal Newport", qty: "1", done: false },
      { name: "The Pragmatic Programmer", qty: "1", done: false },
    ],
  },
]

export default function ShoppingPage() {
  return (
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Shopping</h1>
            <p className="text-muted-foreground">Manage your shopping lists and wishlists.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            New List
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lists.map((list) => {
            const done = list.items.filter((i) => i.done).length
            return (
              <div key={list.id} className="rounded-xl border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{list.emoji}</span>
                    <h3 className="font-display font-semibold text-card-foreground">{list.name}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {done}/{list.items.length}
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${(done / list.items.length) * 100}%` }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  {list.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {item.done ? (
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                      ) : (
                        <Circle className="size-4 text-muted-foreground shrink-0" />
                      )}
                      <span
                        className={`text-sm flex-1 ${item.done ? "line-through text-muted-foreground" : "text-card-foreground"}`}
                      >
                        {item.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.qty}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-auto">
                  <Plus className="size-3" />
                  Add item
                </button>
              </div>
            )
          })}

          <button className="rounded-xl border border-dashed bg-card/50 p-5 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors min-h-[200px]">
            <ShoppingCart className="size-5" />
            <span className="text-sm font-medium">New list</span>
          </button>
        </div>
      </main>
  )
}
