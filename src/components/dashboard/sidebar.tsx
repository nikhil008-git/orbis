"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { TbBrandPython } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";


const navItems = [
    {
        title: "Home",
        href: "/",
        icon: FaHome,
        color: "text-slate-700",
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: MdDashboard,
        color: "text-indigo-600",
    },
    {
        title: "Python",
        href: "/language/python",
        icon: TbBrandPython,
        color: "text-blue-600",
    },
    {
        title: "JavaScript",
        href: "/language/javascript",
        icon: RiJavascriptLine,
        color: "text-yellow-500",
    },
    {
        title: "TypeScript",
        href: "/language/typescript",
        icon: TbBrandTypescript,
        color: "text-blue-700",
    },
    {
        title: "Go",
        href: "/language/go",
        icon: FaGolang,
        color: "text-cyan-600",
    },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    side?: "left" | "right"
}

export function Sidebar({ className, side = "left" }: SidebarProps) {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isCollapsed, setIsCollapsed] = React.useState(false)

    return (
        <>
            {/* Mobile Menu Trigger */}
            <div className={cn("md:hidden fixed top-4 z-50", side === "right" ? "right-4" : "left-4")}>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-white border-slate-200 shadow-sm"
                >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 z-40 bg-slate-900/20 md:hidden backdrop-blur-sm transition-opacity"
                />
            )}

            {/* Sidebar Content */}
            <div
                className={cn(
                    "fixed inset-y-0 z-40 bg-white transform transition-all duration-300 ease-in-out md:translate-x-0 md:static flex flex-col",
                    side === "right" ? "right-0 border-l border-slate-200" : "left-0 border-r border-slate-200",
                    isMobileMenuOpen
                        ? "translate-x-0 shadow-xl"
                        : side === "right" ? "translate-x-full" : "-translate-x-full",
                    isCollapsed ? "w-20" : "w-72",
                    className
                )}
            >
                <div className="flex h-full flex-col px-4 py-6">
                    {/* Header with Toggle */}
                    <div className={cn("flex items-center mb-8 transition-all duration-300", isCollapsed ? "justify-center px-0" : "justify-between px-2 gap-2")}>
                        {!isCollapsed && (
                            <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                                <div className="h-8 w-8 rounded-lg bg-slate-900 flex-shrink-0 flex items-center justify-center">
                                    <span className="font-mono font-bold text-white text-lg">O</span>
                                </div>
                                <span className="font-mono text-lg font-bold text-slate-900 truncate">
                                    Orbis
                                </span>
                            </div>
                        )}
                        {/* Collapse Toggle Button - Desktop Only */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hidden md:flex h-8 w-8 text-slate-400 hover:text-slate-600"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            {isCollapsed ? (
                                <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
                                    <span className="font-mono font-bold text-white text-lg"><ChevronRight className="h-4 w-4" /></span>
                                </div>
                            ) : (
                                <ChevronLeft className="h-4 w-4" />
                            )}
                        </Button>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 space-y-1">
                        {!isCollapsed && (
                            <p className="px-2 text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider animate-in fade-in duration-300">
                                start the track
                            </p>
                        )}
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-slate-100 text-slate-900"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                                        isCollapsed ? "justify-center px-2" : "justify-between"
                                    )}
                                    title={isCollapsed ? item.title : undefined}
                                >
                                    <div className={cn("flex items-center transition-all duration-200", isCollapsed ? "gap-0" : "gap-3")}>
                                        <item.icon
                                            className={cn(
                                                "h-5 w-5 transition-colors flex-shrink-0",
                                                isActive ? item.color : "text-slate-400 group-hover:text-slate-600"
                                            )}
                                        />
                                        {!isCollapsed && (
                                            <span className="font-mono whitespace-nowrap overflow-hidden transition-all duration-200">{item.title}</span>
                                        )}
                                    </div>
                                    {isActive && !isCollapsed && (
                                        <div className="h-1.5 w-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Footer/User */}

                </div>
            </div>
        </>
    )
}
