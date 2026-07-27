import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://samsuseelan.ai",
  ),
  title: {
    default: "Sam Suseelan — Independent Researcher | AI & Aviation",
    template: "%s — Sam Suseelan",
  },
  description:
    "Independent research in aviation AI, predictive maintenance, cybersecurity, sustainability and explainable intelligent systems.",
  applicationName: "Sam Suseelan Research Lab",
  authors: [{ name: "Sam Suseelan" }],
  openGraph: {
    title: "Sam Suseelan — Independent Researcher | AI & Aviation",
    description:
      "Research at the intersection of artificial intelligence, aviation safety, resilience and sustainable operations.",
    type: "website",
    siteName: "Sam Suseelan",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sam Suseelan — Independent Researcher in AI and Aviation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Suseelan — Independent Researcher | AI & Aviation",
    description: "Aviation AI research, publications and practical field notes.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
  ],
};

const themeScript = `try{const t=localStorage.getItem('sam-theme');document.documentElement.dataset.theme=t||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
