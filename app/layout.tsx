import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-portfy-34ud.vercel.app";

export const metadata: Metadata = {
  title: "Barış İlhan | Junior Software Developer · Java & Spring Boot",
  description:
    "Barış İlhan'ın kişisel portföyü. Java, Spring Boot, Python ve MySQL ile backend geliştirme, projeler, sertifikalar ve iletişim bilgileri.",
  keywords: [
    "Barış İlhan",
    "Baris Ilhan",
    "Junior Yazılım Geliştirici",
    "Junior Software Developer",
    "Java",
    "Spring Boot",
    "Python",
    "MySQL",
    "Backend",
    "Bilgisayar Programcılığı",
    "Kapadokya Üniversitesi",
  ],
  authors: [{ name: "Barış İlhan", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
    languages: {
      "tr-TR": siteUrl + "/",
      "en-US": siteUrl + "/?lang=en",
    },
  },
  openGraph: {
    title: "Barış İlhan | Yazılım Geliştirici",
    description:
      "Java & Spring Boot ile geliştirilen projeler, GitHub bağlantıları ve iletişim bilgileri.",
    url: siteUrl,
    siteName: "Barış İlhan Portfolio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/baris.jpg", // public/baris.jpg'ü kullanıyoruz
        width: 800,
        height: 800,
        alt: "Barış İlhan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barış İlhan | Junior Software Developer",
    description:
      "Java, Spring Boot, Python ve SQL ile backend geliştiren yazılımcı.",
    images: ["/baris.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
