import type { Metadata } from "next";
import "./globals.css";
import {
  Poppins,
  Baloo_Chettan_2,
  Lora,
  Montserrat,
  Madimi_One,
  Merienda,
  Outfit,
} from "next/font/google";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const balooChettan2 = Baloo_Chettan_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const madimi = Madimi_One({
  subsets: ["latin"],
  variable: "--font-madimi",
  weight: ["400"],
  display: "swap",
});

const merienda = Merienda({
  subsets: ["latin"],
  variable: "--font-merienda",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hue Man Expression",
  description: "The Official Website for Hue Man Expression",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${balooChettan2.variable} ${lora.variable} ${montserrat.variable} ${madimi.variable} ${merienda.variable} ${outfit.variable} antialiased max-w-[2520px] mx-auto`}
      >
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-105px)] page-margin bg-main-bg-color">
          {children}
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
