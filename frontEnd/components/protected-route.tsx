"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useAuthStore from "@/store/useAuthStore"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type ProtectedRouteProps = {
  children: React.ReactNode
  allowedRoles?: Array<"user" | "worker" | "admin">
}

export function ProtectedRoute({ children, allowedRoles = ["user", "worker", "admin"] }: ProtectedRouteProps) {
  const { isAuthenticated, user, checkSession, isFetching } = useAuthStore()
  const router = useRouter()
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      await checkSession() // Wait for session check to complete
      setHasCheckedAuth(true)
    }

    checkAuth()
  }, [checkSession])

  useEffect(() => {
    // Only proceed with redirects after authentication check has completed
    if (!hasCheckedAuth) return

    console.log("Auth check completed:", {
      isAuthenticated,
      user,
      hasCheckedAuth,
    })

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // If authenticated but not authorized for this route
    if (user && !allowedRoles.includes(user.role)) {
      router.push("/unauthorized")
    }
  }, [isAuthenticated, user, router, allowedRoles, hasCheckedAuth])

  // Show loading state while checking authentication
  if (isFetching || !hasCheckedAuth) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Show nothing if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null
  }

  // Show unauthorized message if user doesn't have the required role
  if (user && !allowedRoles.includes(user.role)) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Unauthorized</AlertTitle>
        <AlertDescription>You don't have permission to access this page.</AlertDescription>
      </Alert>
    )
  }

  // If authenticated and authorized, render children
  return <>{children}</>
}

