import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whiseve",
  description: "whiseve.com is a website that facilitates college communites with anonymous messaging and interactive tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-full ${inter.className} bg-black text-white`}>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
    </html>
  );
}
