"use client"
import { usePathname } from "next/navigation"
import Footer from "@/components/home/footer/Footer"


function FooterWrapper() {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/admin") || pathname.startsWith("/client") || pathname.startsWith("/worker")

  if (isDashboard) {
    return null
  }

  return <Footer />
}

export {FooterWrapper}