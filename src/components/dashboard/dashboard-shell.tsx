import * as React from "react"
import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> { }

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
    return (
        <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
            {/* Content Wrapper */}
            <div className={cn("relative z-10 flex h-screen overflow-hidden", className)} {...props}>
                {children}
            </div>
        </div>
    )
}
