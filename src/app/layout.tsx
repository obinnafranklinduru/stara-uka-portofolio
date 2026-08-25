import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Uka Stara Nnennaya | Creative Technologist & Photographer",
    template: "%s | Uka Stara Nnennaya",
  },
  description: "Portfolio of Uka Stara Nnennaya, a Multidisciplinary Creative Technologist bridging software engineering and visual storytelling across Africa and globally.",
  keywords: ["Uka Stara", "Creative Technologist", "Software Engineer", "Editorial Photography", "Nigeria", "FUTO", "Frontend Developer"],
  authors: [{ name: "Uka Stara Nnennaya" }],
  creator: "Uka Stara Nnennaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ukastara.com",
    title: "Uka Stara Nnennaya | Creative Technologist",
    description: "Bridging software engineering and visual storytelling.",
    siteName: "Uka Stara Portfolio",
    images: [
      {
        url: "/images/photography/gallery/uka-stara-landscape-1.jpg",
        width: 1200,
        height: 630,
        alt: "Uka Stara - Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uka Stara Nnennaya | Creative Technologist",
    description: "Bridging software engineering and visual storytelling.",
    images: ["/images/photography/gallery/uka-stara-landscape-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-foreground selection:text-background overflow-x-hidden">
        <SiteHeader />
        <main className="flex-1 flex flex-col w-full relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
