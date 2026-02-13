import Features1 from "@/components/features-1"
import ContentSection from "@/components/content-2"
import FooterSection from "@/components/common/footer"
import Content3 from "@/components/content-3"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { transitionVariants } from "@/lib/animation-variants"
export default function dashboard() {
    return (
        <>
            <AnimatedGroup variants={transitionVariants}>
                <div className="text-center text-3xl md:text-5xl font-bold font-mono pb-4 border-b border-slate-200">welcome to the <span className="rounded-md px-2  bg-yellow-500">dashboard</span>!</div>

                <div className=" border-b border-slate-200">
                    <Content3 />
                </div>

                <div className=" border-b border-slate-200">
                    <Features1 />
                </div>

                <div className=" border-b border-slate-200">
                    <ContentSection />
                </div>

                <div className="">
                    <FooterSection />
                </div>
            </AnimatedGroup>
        </>
    )
}