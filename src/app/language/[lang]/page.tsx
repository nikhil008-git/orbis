


import React from 'react'
import type { Metadata } from 'next'
import Python from "../../../components/lang/python"
import JavaScript from "../../../components/lang/javascript"
import Typescript from "../../../components/lang/typescript"
import Go from "../../../components/lang/go"

import { LanguageNotFound } from "@/components/lang/not-found";

const components: Record<string, React.FC> = {
  python: Python,
  javascript: JavaScript,
  typescript: Typescript,
  go: Go,
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const key = lang?.toLowerCase()

  if (!key) return { title: 'Language Not Found' }

  // Capitalize first letter
  const capitalizedLang = key.charAt(0).toUpperCase() + key.slice(1)

  return {
    title: `Explore ${capitalizedLang} Open Source Projects`,
    description: `Discover top-tier open-source projects in ${capitalizedLang}. Contributing to rising ${capitalizedLang} libraries and tools.`,
    openGraph: {
      title: `Explore ${capitalizedLang} Projects | Orbis`,
      description: `Invest your time in high-potential ${capitalizedLang} open-source projects.`,
      images: ['/og-image.png']
    }
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const key = lang?.toLowerCase();

  if (!key) {
    return <div>Please choose a language in the URL, e.g. /language/python</div>;
  }

  const Component = components[key];

  if (!Component) {
    return <LanguageNotFound lang={lang} />;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Explore ${key.charAt(0).toUpperCase() + key.slice(1)} Projects`,
    description: `A curated list of ${key} open-source projects for contributors.`,
    url: `https://orbis.vercel.app/language/${key}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Component />
    </>
  );
}