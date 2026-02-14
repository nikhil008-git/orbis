import type { Metadata } from "next";


import { Geist, Geist_Mono, Instrument_Serif, Roboto_Flex } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orbis | Open Source Discovery",
    template: "%s | Orbis",
  },
  description:
    "Discover and contribute to rising open-source projects. We help developers find mid-level startups and tools with vision and momentum.",
  keywords: ["open source", "contribution", "developer tools", "github", "python", "javascript", "go", "typescript"],
  authors: [{ name: "Orbis Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favi.png",           // favicon for browser tab
    shortcut: "/favi.png",       // optional shortcut icon
    apple: "/favi.png",          // optional Apple touch icon
  },
  openGraph: {
    type: "website",
    url: "http://orbisin.vercel.app/",
    title: "Orbis | Open Source Discovery",
    description: "Discover and contribute to rising open-source projects.",
    siteName: "Orbis",
    images: [
      {
        url: "/homey.png",
        width: 1200,
        height: 630,
        alt: "Orbis Open Source Discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbis | Open Source Discovery",
    description: "Discover and contribute to rising open-source projects.",
    images: ["/homey.png"],
    creator: "@orbis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}  ${robotoFlex.variable} antialiased  bg-grid-fade`}
      >
        {children}

      </body>
    </html>
  );
}