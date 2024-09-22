import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/footer";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Kanishka Portfolio",
  description:
    "PINK FAIRY - KANISHKA, Animator portfolio, Student of Univertsity of Arts, London (UAL)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
