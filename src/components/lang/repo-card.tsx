
import { Star, GitFork, ExternalLink } from "lucide-react"

interface Repo {
    id: number
    name: string
    full_name: string
    html_url: string
    description: string
    stargazers_count: number
    language: string
    owner: {
        login: string
        avatar_url?: string
    }
}

export function RepoCard({ repo }: { repo: Repo }) {
    return (
        <div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md h-full">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 border border-slate-200">
                        <img
                            src={`https://github.com/${repo.owner.login}.png`}
                            alt={repo.owner.login}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-mono font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {repo.name}
                        </h3>
                        <p className="text-xs text-slate-500">{repo.owner.login}</p>
                    </div>
                </div>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <ExternalLink className="h-4 w-4" />
                </a>
            </div>

            <p className="mt-4 text-sm text-slate-600 line-clamp-3 flex-grow">
                {repo.description || "No description available."}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-slate-400 text-slate-400" />
                        <span>{repo.stargazers_count.toLocaleString()}</span>
                    </div>
                    {repo.language && (
                        <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <span>{repo.language}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
