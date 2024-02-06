import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whiseve",
  description: "whiseve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-full ${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
