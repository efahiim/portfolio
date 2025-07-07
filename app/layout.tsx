import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Isfaaq Emambocus | Senior Frontend Engineer",
  description: "Senior Frontend Engineer specializing in React and Next.js. 5+ years of experience building high-performance, accessible web applications for enterprise clients.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "JavaScript", "UK Developer"],
  authors: [{ name: "Isfaaq Emambocus" }],
  creator: "Isfaaq Emambocus",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://imfemambocus.com",
    title: "Isfaaq Emambocus | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specializing in React and Next.js. Building modern web experiences.",
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
