"use client"

import type React from "react"

import { useState } from "react"
import { Shield } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Toaster } from "@/components/ui/sonner"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success("Reset link sent successfully!", {
      description: "Please check your email for further instructions.",
    })

    setIsLoading(false)
    // Optionally, redirect to login page after a delay
    // setTimeout(() => router.push("/login"), 3000)
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-500" />
          </div>
          <h1 className="text-2xl font-bold">Forgot Password?</h1>
          <p className="text-sm text-muted-foreground mt-2">
            No worries! Enter your email, and we'll send you a link to reset your password in a few minutes.
          </p>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2 mb-4">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter your email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              <Shield className="inline-block w-3 h-3 mr-1" />
              For security reasons, password reset links are valid for a limited time.
            </p>
            <Link href="/login" className="text-sm text-center text-blue-500 hover:underline">
              Return to Login
            </Link>
          </CardFooter>
        </form>
      </Card>
      <Toaster />
    </div>
  )
}

