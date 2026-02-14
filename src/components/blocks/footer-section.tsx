'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';



const footerLinks = [
	{ title: 'Python', href: '/language/python' },
	{ title: 'JavaScript', href: '/language/javascript' },
	{ title: 'TypeScript', href: '/language/typescript' },
	{ title: 'Go', href: '/language/go' },
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-8">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<AnimatedContainer className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
				{/* Logo & Copyright */}
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
							<span className="font-mono font-bold text-white text-lg">O</span>
						</div>
						<span className="font-mono text-xl font-bold text-slate-900">Orbis</span>
					</div>
					<p className="text-muted-foreground text-sm border-l border-slate-200 pl-4 ml-2">
						© {new Date().getFullYear()} Orbis
					</p>
				</div>

				{/* Explore Links */}
				<div className="flex flex-wrap items-center gap-6 md:gap-8">
					<span className="text-sm font-semibold text-slate-900 hidden md:inline-block">Explore:</span>
					<ul className="flex items-center gap-6">
						{footerLinks.map((link) => (
							<li key={link.title}>
								<a
									href={link.href}
									className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 font-medium"
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</AnimatedContainer>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};