"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useAuthStore from "@/store/useAuthStore"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

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
    <div className="flex flex-col h-full">
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-6" />
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
    </header>
    <div className="flex-1 overflow-y-auto p-4">
      <p className="mb-6">
        Welcome, {user?.firstName} {user?.lastName}!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to user management tools and role assignments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configure system parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to system configuration and global settings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View system analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access to detailed analytics and reporting tools.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  )
}

