"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useAuthStore from "@/store/useAuthStore"

export default function WorkerDashboardPage() {
  // Wrap the component with ProtectedRoute
  return (
    <ProtectedRoute allowedRoles={["worker"]}>
      <WorkerDashboardContent />
    </ProtectedRoute>
  )
}

function WorkerDashboardContent() {
  const { user } = useAuthStore()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Worker Dashboard</h1>
      <p className="mb-6">Welcome, {user?.name}!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Manage your assigned tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p>View and update your current task assignments.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
            <CardDescription>View your work schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access your upcoming shifts and schedule information.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

