"use client"

import type React from "react"

import { AppSidebar } from "@/components/side-bar/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { dashboardClientRoutes } from "@/constants/sideBarsData"
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-full">
        <AppSidebar routes={dashboardClientRoutes}  />
        <SidebarInset className="flex-1 overflow-auto">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  )
}

