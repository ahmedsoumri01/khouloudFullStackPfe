import { create } from "zustand";
import api from "@/app/api/axios";
import { devtools } from "zustand/middleware";
import { toast } from "sonner";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "worker" | "admin";
  status: "active" | "inactive";
  [key: string]: any;
}

interface Worker extends User {}

interface AdminState {
  users: User[];
  workers: Worker[];
  isLoading: boolean;
  error: string | null;
  createAdmin: (adminData: Partial<User>) => Promise<void>;
  getAllWorkers: () => Promise<void>;
  getAllUsers: () => Promise<void>;
  getUserById: (userId: string) => Promise<User | null>;
  updateUser: (userId: string, userData: Partial<User>) => Promise<void>;
  changePassword: (userId: string, passwords: { oldPassword: string; newPassword: string }) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  changeUserAccountStatus: (userId: string, status: "active" | "inactive") => Promise<void>;
  clearError: () => void;
}

const useAdminStore = create<AdminState>()(
  devtools((set) => ({
    users: [],
    workers: [],
    isLoading: false,
    error: null,

    createAdmin: async (adminData) => {
      set({ isLoading: true });
      try {
        await api.post("/api/admin/create-admin", adminData);
        toast.success("Admin account created successfully");
      } catch (error) {
        set({ error: error?.response?.data?.message || "Failed to create admin account" });
        toast.error(error?.response?.data?.message || "Failed to create admin account");
      } finally {
        set({ isLoading: false });
      }
    },

    getAllWorkers: async () => {
      set({ isLoading: true });
      try {
        const response = await api.get("/api/admin/get-workers");
        set({ workers: response.data.workers });
      } catch (error) {
        set({ error: error?.response?.data?.message || "Failed to fetch workers" });
        toast.error(error?.response?.data?.message || "Failed to fetch workers");
      } finally {
        set({ isLoading: false });
      }
    },

    getAllUsers: async () => {
      set({ isLoading: true });
      try {
        const response = await api.get("/api/admin/get-users");
        set({ users: response.data.users });
      } catch (error) {
        set({ error: error?.response?.data?.message || "Failed to fetch users" });
        toast.error(error?.response?.data?.message || "Failed to fetch users");
      } finally {
        set({ isLoading: false });
      }
    },

    getUserById: async (userId) => {
      set({ isLoading: true });
      try {
        const response = await api.get(`/api/admin/get-user/${userId}`);
        return response.data.user;
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to fetch user");
        return null;
      } finally {
        set({ isLoading: false });
      }
    },

    updateUser: async (userId, userData) => {
      set({ isLoading: true });
      try {
        await api.put(`/api/admin/update-user/${userId}`, userData);
        set((state) => ({
          users: state.users.map((user) => (user._id === userId ? { ...user, ...userData } : user)),
        }));
        toast.success("User updated successfully");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to update user");
      } finally {
        set({ isLoading: false });
      }
    },

    changePassword: async (userId, passwords) => {
      set({ isLoading: true });
      try {
        await api.put(`/api/admin/change-password/${userId}`, passwords);
        toast.success("Password updated successfully");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to change password");
      } finally {
        set({ isLoading: false });
      }
    },

    deleteUser: async (userId) => {
      set({ isLoading: true });
      try {
        await api.delete(`/api/admin/delete-user/${userId}`);
        set((state) => ({ users: state.users.filter((user) => user._id !== userId) }));
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to delete user");
      } finally {
        set({ isLoading: false });
      }
    },

    changeUserAccountStatus: async (userId, status) => {
      set({ isLoading: true });
      try {
        await api.put("/api/admin/change-user-status", { userId, status });
        set((state) => ({
          users: state.users.map((user) => (user._id === userId ? { ...user, status } : user)),
          workers: state.workers.map((worker) => (worker._id === userId ? { ...worker, status } : worker)),
        }));
        toast.success(`User status changed to ${status}`);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to change user status");
      } finally {
        set({ isLoading: false });
      }
    },

    clearError: () => set({ error: null }),
  }))
);

export default useAdminStore;
