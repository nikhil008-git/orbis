import Link from "next/link"
import { FileQuestion, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LanguageNotFound({ lang }: { lang: string }) {
    return (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-6 text-center animate-in fade-in zoom-in duration-500">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-100 blur-2xl rounded-full opacity-50" />
                <div className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <FileQuestion className="h-16 w-16 text-slate-400" />
                </div>
            </div>

            <div className="space-y-2 max-w-md">
                <h1 className="text-3xl font-bold font-mono text-slate-900">
                    Language Not Found
                </h1>
                <p className="text-slate-500">
                    We couldn't find a category for <span className="font-mono font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-sm">"{lang}"</span>.
                    It might be coming soon or doesn't exist yet.
                </p>
            </div>

            <div className="flex gap-3">
                <Button asChild variant="default" className="gap-2">
                    <Link href="/dashboard">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
            </div>
        </div>
    )
}
