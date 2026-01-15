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
  Inter,
} from "next/font/google";
import { Toaster } from "sonner";
import Providers from "@/lib/provider/Providers";
import NextTopLoader from "nextjs-toploader";

//const poppins = Poppins({
//  subsets: ["latin"],
//  variable: "--font-poppins",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});

//const balooChettan2 = Baloo_Chettan_2({
//  subsets: ["latin"],
//  variable: "--font-baloo",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});
//const lora = Lora({
//  subsets: ["latin"],
//  variable: "--font-lora",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});
//const montserrat = Montserrat({
//  subsets: ["latin"],
//  variable: "--font-montserrat",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});
//const madimi = Madimi_One({
//  subsets: ["latin"],
//  variable: "--font-madimi",
//  weight: ["400"],
//  display: "swap",
//});

//const merienda = Merienda({
//  subsets: ["latin"],
//  variable: "--font-merienda",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});

//const outfit = Outfit({
//  subsets: ["latin"],
//  variable: "--font-outfit",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});
//const inter = Inter({
//  subsets: ["latin"],
//  variable: "--font-inter",
//  weight: ["400", "500", "600", "700"],
//  display: "swap",
//});

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
    <html lang='en'>
      <body
        className={`antialiased max-w-[2520px] mx-auto`}
        //className={`${poppins.className} ${balooChettan2.variable} ${lora.variable} ${montserrat.variable} ${madimi.variable} ${merienda.variable} ${outfit.variable} ${inter.variable} antialiased max-w-[2520px] mx-auto`}
      >
        <Providers>
          {children}
          <Toaster position='top-center' />
        </Providers>

        <NextTopLoader
          color='#000'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing='ease'
          speed={200}
          shadow='0 0 10px #232323,0 0 5px #EA5326'
          zIndex={1600}
          showAtBottom={false}
        />
      </body>
    </html>
  );
}
