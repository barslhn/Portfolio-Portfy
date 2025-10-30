import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barış İlhan | Portfolio",
  description: "Java & Spring Boot Developer Portfolio of Barış İlhan",
  keywords: [
    "Barış İlhan",
    "Java Developer",
    "Spring Boot",
    "Backend Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Barış İlhan", url: "https://github.com/barslhn" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
