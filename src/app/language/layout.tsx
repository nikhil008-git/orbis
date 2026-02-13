import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default function LanguageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardShell>
            {/* Left Sidebar - default side is left */}
            <Sidebar />
            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-8 md:p-12">
                {children}
            </main>
        </DashboardShell>
    )
}
