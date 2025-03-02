"use client";
import { toast } from "sonner";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAuthStore from "@/store/useAuthStore"; // Import the Zustand store

const formSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(1, {
    message: "Le mot de passe est requis.",
  }),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, user } = useAuthStore(); // Access the login function from Zustand store

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // Call the login function from Zustand store, passing credentials
      await login(values.email, values.password);
    } catch (error) {
      // Error handling is done within the store, so you can leave this empty
      toast.error("Login failed:");
    } finally {
      setIsLoading(false);
    }
  }
  // if use already authenticated, redirect to dashboard base on his role
  if (isAuthenticated) {
    if (user?.role === "admin") {
      //redirect to /admin using  any redirect func
      window.location.href = "/admin";

      return;
    } else if (user?.role === "worker") {
      window.location.href = "/worker";
      return;
    } else {
      window.location.href = "/client";
      return;
    }
  }
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-bold">WorkerConnect</h1>
          <p className="text-muted-foreground">Connectez-vous à votre compte</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder=""
                      {...field}
                      showPasswordToggle={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>
        </Form>

        <div className="flex flex-col space-y-2 text-center text-sm">
          <Link
            href="/forget-password"
            className="text-primary hover:underline"
          >
            Mot de passe oublié?
          </Link>
          <p className="text-muted-foreground">
            Pas encore de compte?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
