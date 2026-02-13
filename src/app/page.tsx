import FooterSection from '@/components/common/footer'
import { Hero } from '@/components/home/hero'
import FAQsTwo from "@/components/home/faq"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { transitionVariants } from "@/lib/animation-variants"
export default function Home() {
  return (
    <>
      <Hero />
      <FAQsTwo />
      <AnimatedGroup variants={transitionVariants}>
        <FooterSection />
      </AnimatedGroup>
    </>
  )
}