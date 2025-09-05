import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Isfaaq Emambocus | Software Engineer",
  description: "Software Engineer with 5+ years of experience, specializing in modern frontend development with React and Next.js, while also proficient in backend technologies including PHP (Symfony, Laravel), and Python (FastAPI).",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "JavaScript", "Developer"],
  authors: [{ name: "Isfaaq Emambocus" }],
  creator: "Isfaaq Emambocus",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://imfemambocus.com",
    title: "Isfaaq Emambocus | Software Engineer",
    description: "Software Engineer with 5+ years of experience, specializing in modern frontend development with React and Next.js, while also proficient in backend technologies including PHP (Symfony, Laravel), and Python (FastAPI).",
    siteName: "Isfaaq Emambocus Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
