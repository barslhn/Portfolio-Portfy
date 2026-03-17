import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://portfolio-portfy-34ud.vercel.app";

export const metadata: Metadata = {
  title: "Barış İlhan | Software Developer",
  description:
    "Barış İlhan'ın Next.js, NestJS, Spring Boot, TypeScript, PostgreSQL ve Docker odaklı kişisel portföyü; deneyim, sertifikalar, GitHub projeleri ve iletişim bilgileri.",
  keywords: [
    "Barış İlhan",
    "Baris Ilhan",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "NestJS",
    "Spring Boot",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Barış İlhan", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Barış İlhan | Portfolio",
    description:
      "Backend ve full-stack geliştirme odağındaki deneyimler, sertifikalar, GitHub projeleri ve iletişim bilgileri.",
    url: siteUrl,
    siteName: "Barış İlhan Portfolio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/baris.jpg",
        width: 800,
        height: 800,
        alt: "Barış İlhan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barış İlhan | Software Developer",
    description: "Dark premium personal portfolio built with Next.js.",
    images: ["/baris.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a1120" },
    { media: "(prefers-color-scheme: light)", color: "#f2f6fc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const savedTheme = localStorage.getItem('theme');
                const theme =
                  savedTheme === 'light' || savedTheme === 'dark'
                    ? savedTheme
                    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.dataset.theme = theme;
              } catch {
                document.documentElement.dataset.theme = 'light';
              }
            })();`,
          }}
        />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
