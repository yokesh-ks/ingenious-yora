import { Copy, Eye, EyeOff, KeyRound, Plus, Shield } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"

const passwords = [
  { id: 1, site: "GitHub", username: "yokesh@example.com", strength: "strong", category: "Dev" },
  { id: 2, site: "Google", username: "yokesh@gmail.com", strength: "strong", category: "Personal" },
  { id: 3, site: "AWS Console", username: "yokesh-admin", strength: "strong", category: "Dev" },
  { id: 4, site: "Netflix", username: "yokesh@example.com", strength: "medium", category: "Entertainment" },
  { id: 5, site: "Instagram", username: "@yokesh.ks", strength: "weak", category: "Social" },
]

const strengthStyle: Record<string, { bar: string; label: string }> = {
  strong: { bar: "w-full bg-green-500", label: "text-green-600 dark:text-green-400" },
  medium: { bar: "w-2/3 bg-amber-500", label: "text-amber-600 dark:text-amber-400" },
  weak: { bar: "w-1/3 bg-red-500", label: "text-red-600 dark:text-red-400" },
}

export default function PasswordsPage() {
  return (
    <AppLayout title="Passwords">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Passwords</h1>
            <p className="text-muted-foreground">Secure vault for your credentials.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            Add Entry
          </Button>
        </div>

        <div className="rounded-xl border bg-card overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-4 py-2 border-b bg-muted/40 text-xs font-medium text-muted-foreground">
            <span />
            <span>Site / Account</span>
            <span>Strength</span>
            <span>Actions</span>
          </div>
          {passwords.map((pw) => (
            <div
              key={pw.id}
              className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-4 py-3 border-b last:border-b-0"
            >
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <KeyRound className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-card-foreground">{pw.site}</p>
                <p className="text-xs text-muted-foreground">{pw.username}</p>
              </div>
              <div className="flex flex-col gap-1 w-20">
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${strengthStyle[pw.strength].bar}`} />
                </div>
                <span className={`text-xs capitalize ${strengthStyle[pw.strength].label}`}>
                  {pw.strength}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <Eye className="size-3.5" />
                </button>
                <button className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <Copy className="size-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-xl border bg-primary/5 border-primary/20 p-4">
          <Shield className="size-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            All passwords are stored locally and encrypted. Never share your master password.
          </p>
        </div>
      </main>
    </AppLayout>
  )
}
