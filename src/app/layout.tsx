import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saurabh Singh — Senior Backend Engineer | Scalable APIs & Systems",
  description:
    "Senior Backend Engineer specializing in Laravel, PHP, REST APIs, Redis, MySQL, Docker, AWS, and scalable backend systems. 5+ years building production infrastructure.",
  keywords: [
    "Saurabh Singh",
    "Senior Backend Engineer",
    "Laravel Developer",
    "PHP Developer",
    "REST API",
    "Redis",
    "MySQL",
    "Docker",
    "AWS",
    "Backend Architecture",
    "Vadodara",
  ],
  authors: [{ name: "Saurabh Singh" }],
  openGraph: {
    title: "Saurabh Singh — Senior Backend Engineer",
    description:
      "5+ years building APIs, distributed systems, and production backend infrastructure.",
    url: "https://saurabhsingh.dev",
    siteName: "Saurabh Singh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurabh Singh — Senior Backend Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Singh — Senior Backend Engineer",
    description:
      "5+ years building APIs, distributed systems, and production backend infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to content
        </a>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
