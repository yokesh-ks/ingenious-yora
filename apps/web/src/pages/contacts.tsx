import { Mail, Phone, Plus, Search, User } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const contacts = [
  { id: 1, name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43210", tag: "Friend", initials: "PS" },
  { id: 2, name: "Rahul Mehta", email: "rahul@company.com", phone: "+91 91234 56789", tag: "Work", initials: "RM" },
  { id: 3, name: "Ananya Iyer", email: "ananya@studio.io", phone: "+91 87654 32109", tag: "Client", initials: "AI" },
  { id: 4, name: "Karan Singh", email: "karan@example.com", phone: "+91 76543 21098", tag: "Friend", initials: "KS" },
  { id: 5, name: "Meera Nair", email: "meera@design.co", phone: "+91 65432 10987", tag: "Work", initials: "MN" },
  { id: 6, name: "Arjun Verma", email: "arjun@example.com", phone: "+91 54321 09876", tag: "Family", initials: "AV" },
]

const tagColor: Record<string, string> = {
  Friend: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Work: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Client: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Family: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
}

export default function ContactsPage() {
  return (
    <AppLayout title="Contacts">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Contacts</h1>
            <p className="text-muted-foreground">{contacts.length} contacts saved.</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="size-4" />
            Add Contact
          </Button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search contacts..." className="pl-9" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="rounded-xl border bg-card p-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">
                {contact.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-sm text-card-foreground truncate">{contact.name}</h3>
                  <span className={`text-xs rounded-full px-2 py-0.5 shrink-0 ${tagColor[contact.tag]}`}>
                    {contact.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Mail className="size-3 text-muted-foreground shrink-0" />
                  <span className="text-xs text-muted-foreground truncate">{contact.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="size-3 text-muted-foreground shrink-0" />
                  <span className="text-xs text-muted-foreground">{contact.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AppLayout>
  )
}
