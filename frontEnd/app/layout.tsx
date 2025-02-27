import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/home/footer/Footer";

import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
import AOSInit from "@/utils/Aos";
import Header from "@/components/home/Header";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"], // Specify weights you need
  style: ["normal", "italic"], // Include styles if needed
  subsets: ["latin"],
  variable: "--font-roboto", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "ServicePro",
  description:
    "ServicePro : Connect with verified experts in plumbing, electrical work, painting, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable} antialiased`}>
        <AOSInit />
              <Header />
        
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
