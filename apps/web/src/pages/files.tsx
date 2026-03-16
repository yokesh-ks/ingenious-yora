import { File, FileImage, FileText, Folder, FolderOpen, Plus, Upload } from "lucide-react"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"

const folders = [
  { id: 1, name: "Projects", count: 12 },
  { id: 2, name: "Documents", count: 8 },
  { id: 3, name: "Photos", count: 34 },
  { id: 4, name: "Receipts", count: 6 },
]

const files = [
  { id: 1, name: "resume_2026.pdf", size: "124 KB", type: "pdf", modified: "Mar 14" },
  { id: 2, name: "cover_letter.docx", size: "48 KB", type: "doc", modified: "Mar 13" },
  { id: 3, name: "project_wireframe.png", size: "2.1 MB", type: "image", modified: "Mar 10" },
  { id: 4, name: "expenses_march.xlsx", size: "87 KB", type: "doc", modified: "Mar 8" },
  { id: 5, name: "profile_photo.jpg", size: "1.4 MB", type: "image", modified: "Feb 28" },
  { id: 6, name: "notes_backup.txt", size: "12 KB", type: "text", modified: "Feb 25" },
]

function FileIcon({ type }: { type: string }) {
  if (type === "pdf") return <FileText className="size-5 text-red-500" />
  if (type === "image") return <FileImage className="size-5 text-blue-500" />
  if (type === "text") return <FileText className="size-5 text-muted-foreground" />
  return <File className="size-5 text-amber-500" />
}

export default function FilesPage() {
  return (
    <AppLayout title="Files">
      <main className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight">Files</h1>
            <p className="text-muted-foreground">Your documents, images, and attachments.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="gap-2">
              <Upload className="size-4" />
              Upload
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="size-4" />
              New Folder
            </Button>
          </div>
        </div>

        <div>
          <h2 className="font-display font-semibold text-foreground mb-3">Folders</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {folders.map((folder) => (
              <button
                key={folder.id}
                className="rounded-xl border bg-card p-4 flex items-center gap-3 hover:shadow-sm transition-shadow text-left"
              >
                <FolderOpen className="size-8 text-amber-500 shrink-0" />
                <div>
                  <p className="font-medium text-sm text-card-foreground">{folder.name}</p>
                  <p className="text-xs text-muted-foreground">{folder.count} items</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display font-semibold text-foreground mb-3">Recent Files</h2>
          <div className="rounded-xl border bg-card overflow-hidden divide-y">
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center px-4 py-2 bg-muted/40 text-xs font-medium text-muted-foreground">
              <span />
              <span>Name</span>
              <span>Size</span>
              <span>Modified</span>
            </div>
            {files.map((file) => (
              <div key={file.id} className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer">
                <FileIcon type={file.type} />
                <span className="text-sm text-card-foreground truncate">{file.name}</span>
                <span className="text-xs text-muted-foreground">{file.size}</span>
                <span className="text-xs text-muted-foreground">{file.modified}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
