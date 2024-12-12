import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Script from 'next/script';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "goodGoods",
  description: "By abhajkhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
        <Footer />
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" strategy="beforeInteractive" /> 
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js" strategy="beforeInteractive" /> 
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
