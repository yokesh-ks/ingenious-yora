import { ArrowDownLeft, ArrowUpRight, CreditCard, Plus, TrendingDown, TrendingUp, Wallet } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"

const transactions = [
  { id: 1, title: "Salary", amount: 85000, type: "income", category: "Work", date: "Mar 1" },
  { id: 2, title: "Rent", amount: -18000, type: "expense", category: "Housing", date: "Mar 3" },
  { id: 3, title: "Groceries", amount: -3200, type: "expense", category: "Food", date: "Mar 5" },
  { id: 4, title: "Freelance payment", amount: 12000, type: "income", category: "Work", date: "Mar 8" },
  { id: 5, title: "Netflix subscription", amount: -649, type: "expense", category: "Entertainment", date: "Mar 10" },
  { id: 6, title: "Electricity bill", amount: -1850, type: "expense", category: "Utilities", date: "Mar 12" },
  { id: 7, title: "Gym membership", amount: -2000, type: "expense", category: "Health", date: "Mar 15" },
]

const income = transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0)
const expense = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + Math.abs(t.amount), 0)
const balance = income - expense

const fmt = (n: number) => `₹${Math.abs(n).toLocaleString("en-IN")}`

const stats = [
  { label: "Balance", value: fmt(balance), icon: Wallet, color: "text-foreground" },
  { label: "Income", value: fmt(income), icon: TrendingUp, color: "text-green-600 dark:text-green-400" },
  { label: "Expenses", value: fmt(expense), icon: TrendingDown, color: "text-red-600 dark:text-red-400" },
]

export default function PaymentsPage() {
  return (
    <AppLayout title="Payments">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Payments</h1>
            <p className="text-muted-foreground">Track income, expenses, and transactions.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            Add Transaction
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border bg-card p-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                <s.icon className={`size-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className={`font-display text-xl font-semibold ${s.color}`}>{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border bg-card overflow-hidden divide-y">
          <div className="px-4 py-3 bg-muted/40 text-xs font-medium text-muted-foreground">
            March 2026
          </div>
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center gap-3 px-4 py-3">
              <div
                className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                  t.type === "income"
                    ? "bg-green-100 dark:bg-green-900/30"
                    : "bg-red-100 dark:bg-red-900/30"
                }`}
              >
                {t.type === "income" ? (
                  <ArrowDownLeft className="size-4 text-green-600 dark:text-green-400" />
                ) : (
                  <ArrowUpRight className="size-4 text-red-600 dark:text-red-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">{t.title}</p>
                <p className="text-xs text-muted-foreground">{t.category} · {t.date}</p>
              </div>
              <span
                className={`text-sm font-semibold ${
                  t.type === "income"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {t.type === "income" ? "+" : "-"}{fmt(t.amount)}
              </span>
            </div>
          ))}
        </div>
      </main>
    </AppLayout>
  )
}
