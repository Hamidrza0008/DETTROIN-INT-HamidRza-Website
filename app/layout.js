import { Playfair_Display, Inter } from "next/font/google";
import BackgroundLayer from "@/components/BackgroundLayer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Krishna International School",
  description:
    "A premium learning experience — where academic excellence meets future-ready innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <BackgroundLayer />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
