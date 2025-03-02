import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import ScrollToTop from "@/components/ScrollToTop"
import "./globals.css"
import AOSInit from "@/utils/Aos"
import Header from "@/components/home/Header"
import { FooterWrapper } from "@/utils/dynamicFooterRenderingHelper"
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "ServicePro",
  description: "ServicePro : Connect with verified experts in plumbing, electrical work, painting, and more.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased flex flex-col min-h-screen`}>
        <AOSInit />
        <Header />
        <main className="flex-grow">{children}</main>
        <FooterWrapper />

        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  )
}

