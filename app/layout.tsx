import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/footer/footer";
const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700","800","900"],
});



export const metadata: Metadata = {
  title: "QuickGist - Summarize PDFs",
  description: "An app for summarizing pdfs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} antialiased`}>
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
