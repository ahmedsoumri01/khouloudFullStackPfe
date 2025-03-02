import { type NextRequest, NextResponse } from "next/server"

// Define protected routes and their required roles
const protectedRoutes = [
  { path: "/dashboard/admin", roles: ["admin"] },
  { path: "/dashboard/worker", roles: ["worker", "admin"] },
  { path: "/dashboard/user", roles: ["user", "worker", "admin"] },
]

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const path = request.nextUrl.pathname

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route.path))

  // If it's not a protected route, allow the request
  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  // Get the auth cookie
  const authCookie = request.cookies.get("auth")?.value

  // If there's no auth cookie, redirect to login
  if (!authCookie) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    // Parse the auth cookie to get the user data
    const userData = JSON.parse(authCookie)

    // Find the matching protected route
    const matchedRoute = protectedRoutes.find((route) => path.startsWith(route.path))

    // If the user's role is not allowed for this route, redirect to unauthorized
    if (matchedRoute && !matchedRoute.roles.includes(userData.role)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    // Allow the request
    return NextResponse.next()
  } catch (error) {
    // If there's an error parsing the cookie, redirect to login
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

// Configure which paths the middleware runs on
export const config = {
  matcher: ["/dashboard/:path*"],
}

