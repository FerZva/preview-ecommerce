import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preview Ecommerce",
  description: "DEMO MODE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-full h-full`}
      >
        <CartProvider>
          <div className="min-w-full h-auto flex flex-col items-center justify-center">
            <Banner />
            <Header />
          </div>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
