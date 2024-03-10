import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Keania_One, Happy_Monkey } from "next/font/google";

export const keaniaOne = Keania_One({
    subsets: ['latin'],
    weight: ['400']
})

export const happyMonkey = Happy_Monkey({
    subsets: ['latin'],
    weight: ['400']
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whiseve",
  description: " whiseve whiseve.com is a website that facilitates college communites with anonymous messaging and interactive tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-full  bg-black text-white`}>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  );
}
