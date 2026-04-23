import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almazov-light.uz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
