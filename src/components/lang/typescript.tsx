import { fetchRepos } from "@/lib/github";
import { RepoCard } from "./repo-card";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { transitionVariants } from "@/lib/animation-variants";

export default async function TypeScript() {
    const repos = await fetchRepos("typescript");

    return (
        <AnimatedGroup variants={transitionVariants} className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                <div>
                    <h1 className="text-3xl font-bold font-mono text-slate-900">TypeScript Projects</h1>
                    <p className="mt-2 text-slate-500">Type-safe projects trending on oss.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {repos.map((repo: any) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
                {repos.length === 0 && (
                    <p className="text-slate-500 col-span-full text-center py-12">No repositories found.</p>
                )}
            </div>
        </AnimatedGroup>
    );
}
