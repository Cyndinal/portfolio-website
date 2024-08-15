import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] ,weight:["100",'200','300','400','500','600', '700', '800'],variable:"--font-jetbrainsMono"});

export const metadata: Metadata = {
  title: "Porfolio WEBSITE",
  description: "Hello, I'm Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} bg-secondaryDark text-secondaryWhite flex flex-col min-h-screen ` }>
      <Header/>
      {/*<StairTransition/>*/}
      {children}
      </body>
    </html>
  );
}
