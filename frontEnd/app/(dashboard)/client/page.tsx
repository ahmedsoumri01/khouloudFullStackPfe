"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useAuthStore from "@/store/useAuthStore"

export default function UserDashboardPage() {
  // Wrap the component with ProtectedRoute - all authenticated users can access
  return (
    <ProtectedRoute>
      <UserDashboardContent />
    </ProtectedRoute>
  )
}

function UserDashboardContent() {
  const { user } = useAuthStore()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <p className="mb-6">Welcome, {user?.name}!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Update your personal information and preferences.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>View your recent activity</CardDescription>
          </CardHeader>
          <CardContent>
            <p>See a history of your recent actions and interactions.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

