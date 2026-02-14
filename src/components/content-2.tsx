import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32 mb-30">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-xl md:text-4xl font-medium lg:text-5xl">The Orbis Ecosystem brings together developers and visionaries.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            Orbis is evolving to be more than just a directory. <span className="font-medium">It supports an entire ecosystem</span> — from discovery to contribution and career growth.
                        </p>
                        <p>We provide the platform helping developers and open source maintainers innovate together.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Fast Discovery</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Quickly filter and find projects that match your stack and interest.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Quality Code</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Work on modern codebases that help you level up your skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image
                                src="/next.svg"
                                className="hidden rounded-[12px] dark:block"
                                alt="payments illustration dark"
                                width={1207}
                                height={929}
                            />
                            <Image
                                src="/LangImg.png"
                                className="rounded-[12px] shadow dark:hidden"
                                alt="payments illustration light"
                                width={1207}
                                height={929}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
