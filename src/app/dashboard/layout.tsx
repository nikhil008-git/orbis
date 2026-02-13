import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardShell>
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8 md:p-12">
                {children}
            </main>
        </DashboardShell>
    )
}
