
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { transitionVariants } from '@/lib/animation-variants'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is Orbis?',
            answer: 'Orbis is a platform designed to help developers discover and contribute to rising open-source projects. We focus on mid-level startups and tools that have vision and momentum but need community support.',
        },
        {
            id: 'item-2',
            question: 'How do I start contributing?',
            answer: 'Simply browse our curated list of repositories by language (Python, JavaScript, Go, etc.), pick an issue that interests you, and start coding! We provide direct links to the repositories.',
        },
        {
            id: 'item-3',
            question: 'Is Orbis free to use?',
            answer: 'Yes, Orbis is 100% free for developers. Our mission is to foster a thriving open-source ecosystem.',
        },
        {
            id: 'item-4',
            question: 'How are projects selected?',
            answer: "We curate projects based on their activity, community engagement, and potential for growth. We look for maintainers who are actively seeking contributions.",
        },
        {
            id: 'item-5',
            question: 'Can I suggest a project?',
            answer: 'Absolutely! If you know of a great project that needs more contributors, please reach out to us through our contact channels.',
        },
    ]

    return (
        <section className="pb-16 pt-0 md:pb-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance font-mono text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <AnimatedGroup variants={transitionVariants}>
                        <Accordion
                            type="single"
                            collapsible
                            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-dashed">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <p className="text-muted-foreground mt-6 px-8">
                            what are you looking for? mail here{' '}
                            <Link
                                href="mailto:rajpurohitnikhil008@gmail.com"
                                className="text-primary font-medium hover:underline">
                                rajpurohitnikhil008@gmail.com
                            </Link>
                        </p>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    )
}