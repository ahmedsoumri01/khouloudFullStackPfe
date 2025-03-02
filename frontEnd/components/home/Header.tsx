"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, User, Briefcase, HelpCircle, MessageCircle } from "lucide-react";
import useAuthStore from "@/store/useAuthStore"; // Adjust the path based on where your zustand store is located
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, checkSession, logout } = useAuthStore();
  useEffect(() => {
    checkSession(); // Check session when component mounts
  }, [checkSession]);

  const navItems = [
    {
      title: "Find Workers",
      href: "/find-workers",
      icon: <User className="mr-2 h-4 w-4" />,
    },

    {
      title: "How it Works",
      href: "/how-it-works",
      icon: <HelpCircle className="mr-2 h-4 w-4" />,
    },
    {
      title: "Contact Us",
      href: "/contact-us",
      icon: <MessageCircle className="mr-2 h-4 w-4" />,
    },
  ];
  console.log({
    from: "header",
    user,
    isAuthenticated,
  });
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary">WorkerConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {isAuthenticated && (
            <Link
              href={
                user?.role === "admin"
                  ? "/admin/dashboard"
                  : user?.role === "user"
                  ? "/client/dashboard"
                  : user?.role === "worker"
                  ? "/worker/dashboard"
                  : "/"
              }
              className="text-sm transition-colors font-semibold hover:text-blue-600 ease-in-out duration-300"
            >
              My Dashboard
            </Link>
          )}
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm  transition-colors font-semibold hover:text-blue-600 ease-in-out duration-300"
            >
              {item.title}
            </Link>
          ))}

          <Separator orientation="vertical" className="mx-1 h-6" />
          <div className="flex items-center gap-2">
            {!isAuthenticated && (
              <>
                <Link href={"/login"}>
                  <Button variant="signInButton" size="sm" className="px-4">
                    Sign In
                  </Button>
                </Link>
                <Link href={"/register"}>
                  <Button variant="signUpButton" size="sm" className="px-4">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <Button
                variant="outline"
                className="w-full justify-start bg-red-500 text-white border-0 cursor-pointer hover:border-2 hover:border-red-500"
                onClick={logout}
              >
                Logout
              </Button>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button size="icon" className="h-9 w-9 p-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left text-2xl font-bold text-primary">
                WorkerConnect
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <div className="flex flex-col gap-4 py-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center py-2 text-sm transition-colors font-semibold hover:text-blue-600 ease-in-out duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
              <Separator className="my-2" />
              <div className="flex flex-col gap-2 mt-2">
                <Link href={"/login"}>
                  <Button
                    variant="signInButton"
                    className="w-full justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href={"/register"}>
                  <Button
                    variant="signUpButton"
                    className="w-full justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
