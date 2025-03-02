import { create } from "zustand";
import api from "@/app/api/axios"; // Import axios instance
import { devtools } from "zustand/middleware";
import { toast } from "sonner";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  [key: string]: string | number;
}

interface Res {
  success: boolean;
  message?: string;
  data?: {
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      [key: string]: string | number;
    };
    token: string;
  };
}

interface AuthState {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isFetching: boolean;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    role: string
  ) => Promise<void>; // Add register method
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
  getLoggedUser: () => Promise<void>;
  clearError: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    error: null,
    isAuthenticated: false,
    isLoading: false,
    isFetching: false,

    register: async (firstName, lastName, email, password, phone, role) => {
      set({ isLoading: true });
      try {
        const res = await api.post<Res>("/api/auth/register", {
          firstName,
          lastName,
          email,
          password,
          phone,
          role,
        });
        const { user, token } = res.data ?? {};
 
        toast.success("Inscription réussie!");
        // Redirect to login page after successful registration
        window.location.href = "/login";
      } catch (error) {
        console.error(error);
        set({ error: error?.response?.data?.message || "Registration failed" });
      } finally {
        set({ isLoading: false });
      }
    },

    login: async (email, password) => {
      set({ isLoading: true });

      try {
        const res = await api.post<Res>("/api/auth/login", {
          email,
          password,
        });

        const { user, token } = res.data ?? {};
        console.log({ user, token });
        if (token) {
          localStorage.setItem("token", token); // Store token
        }

        set({
          user,
          isAuthenticated: true,
        });

        // Redirect to dashboard after successful login
        if (user.role === "user") {
          window.location.href = "/client";
        } else if (user.role === "admin") {
          window.location.href = "/admin";
        } else if (user.role === "worker") {
          window.location.href = "/worker";
        }else{
          window.location.href = "/client";
        }
      } catch (error) {
        console.log({ error });

        // Set the error state in the store
        set({
          error: error?.response?.data?.message || "Login failed",
        });
        // Optionally, show alert on failure
        toast.error(error?.response?.data?.message || "Login failed:");
      } finally {
        set({ isLoading: false });
      }
    },

    logout: async () => {
      set({ isLoading: true });

      try {
        await api.post("/api/auth/logout");
        localStorage.removeItem("token"); // Remove token
        set({ user: null, isAuthenticated: false });
        window.location.href = "/"; // Redirect to home page after logout
      } finally {
        set({ isLoading: false });
      }
    },

    checkSession: async () => {
      set({ isFetching: true });

      const token = localStorage.getItem("token");

      if (token) {
        // Set token in the Authorization header
        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        try {
          const res = await api.get<Res>("/api/auth/me");
          set({ user: res.data.data?.user, isAuthenticated: true });
        } catch {
          localStorage.removeItem("token"); // Remove token if session check fails
          set({ user: null, isAuthenticated: false });
        }
      } else {
        set({ user: null, isAuthenticated: false });
      }

      set({ isFetching: false });
    },

    // Add the getLoggedUser method
    getLoggedUser: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        // Set token in the Authorization header
        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        try {
          const res = await api.get<Res>("/api/auth/me"); // API call to get logged-in user data
          set({ user: res.data.data?.user, isAuthenticated: true });
        } catch (error) {
          set({ error: "Failed to fetch user data" });
        }
      } else {
        set({ user: null, isAuthenticated: false });
      }
    },

    // Add the clearError method
    clearError: () => {
      set({ error: null });
    },
  }))
);

export default useAuthStore;
