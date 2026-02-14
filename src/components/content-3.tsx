import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Masking from './dashboard/Masking'

export default function Content3() {
    return (
        <section className="py-5 md:py-10">

            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-10">
                <Masking />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-xl md:text-4xl font-medium">Connecting Developers with Rising Open Source Stars.</h2>
                    <div className="space-y-6">
                        <p>Orbis helps you discover mid-level startups and projects with vision and momentum. Stop searching endlessly and start contributing to projects that matter.</p>

                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="/language/python">
                                <span>Explore Repositories</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
