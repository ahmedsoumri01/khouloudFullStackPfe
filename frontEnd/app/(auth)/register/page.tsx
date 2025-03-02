"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Briefcase } from "lucide-react";
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
import useAuthStore from "@/store/useAuthStore";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères."),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez entrer une adresse email valide."),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères."),
  phone: z
    .string()
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres.")
    .regex(
      /^\d+$/,
      "Le numéro de téléphone doit contenir uniquement des chiffres."
    ),
  role: z.enum(["user", "worker"], {
    required_error: "Veuillez sélectionner un rôle.",
  }),
});

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser, error, clearError, isAuthenticated, user } = useAuthStore();
  const [selectedRole, setSelectedRole] = useState<string | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      role: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await registerUser(
        values.firstName,
        values.lastName,
        values.email,
        values.password,
        values.phone,
        values.role
      );
      if (error) {
        toast.error(error || "Échec de l'inscription.");
        clearError();
        return;
      }

      /* toast.success("Inscription réussie !");
      form.reset();
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000); */
    } catch (error) {
      console.error("Registration failed", error);
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
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">WorkerConnect</h1>
        <p className="text-center text-muted-foreground">
          Trouvez ou proposez des services professionnels
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Je suis un utilisateur", value: "user", icon: User },
                {
                  label: "Je suis un travailleur",
                  value: "worker",
                  icon: Briefcase,
                },
              ].map(({ label, value, icon: Icon }) => (
                <Button
                  key={value}
                  type="button"
                  variant={selectedRole === value ? "default" : "outline"}
                  className="flex h-24 w-full flex-col items-center justify-center space-y-2"
                  onClick={() => {
                    form.setValue("role", value);
                    setSelectedRole(value);
                  }}
                >
                  <Icon className="h-6 w-6" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { name: "firstName", label: "Prénom" },
                { name: "lastName", label: "Nom" },
                { name: "email", label: "Email", type: "email" },
                { name: "password", label: "Mot de passe", type: "password" },
                { name: "phone", label: "Téléphone", type: "tel" },
              ].map(({ name, label, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof z.infer<typeof formSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={type || "text"}
                          showPasswordToggle={
                            type === "password" ? true : false
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
              {isLoading ? "Inscription en cours..." : "S'inscrire"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-muted-foreground">
          Vous avez déjà un compte ?
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary/80"
          >
            {" "}
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
