import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Arrow Inter Processing | Premium Garment Washing & Finishing",
  description:
    "Wet and dry washing, garment dyeing, laser finishing and sampling for denim and woven garments. BSCIC, Konabari, Gazipur, Bangladesh.",
};

export const viewport: Viewport = {
  themeColor: "#2D6A4F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
