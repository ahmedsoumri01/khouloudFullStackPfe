"use client";

import type React from "react";

import { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { ArrowUpDown, Edit, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAdminStore from "@/store/useAdminStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "worker" | "admin";
  phone?: string;
  location?: string;
  status: "active" | "inactive";
  createdAt: string;
}

export default function AllUsers() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  });

  const {
    users,
    isLoading,
    error,
    getAllUsers,
    changeUserAccountStatus,
    deleteUser,
    updateUser,
  } = useAdminStore();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const columns: ColumnDef<User>[] = useMemo(
    () => [
      {
        id: "fullName",
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Nom
              <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
            </Button>
          );
        },
      },
      {
        accessorKey: "email",
        header: ({ column }) => {
          return (
            <Button
            className="cursor-pointer"

              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Email
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
      },
      {
        accessorKey: "role",
        header: "Rôle",
      },
      {
        accessorKey: "phone",
        header: "Téléphone",
      },
      {
        accessorKey: "location",
        header: ({ column }) => {
          return (
            <Button
            className="cursor-pointer"

              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Localisation
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Statut",
        cell: ({ row }) => (
          <Select
            value={row.original.status}
            onValueChange={(value: "active" | "inactive") =>
              changeUserAccountStatus(row.original._id, value)
            }
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        ),
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => {
          return (
            <Button
              className="cursor-pointer"
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Date de création
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) =>
          new Date(row.getValue("createdAt")).toLocaleDateString(),
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              className="bg-orange-500 text-white cursor-pointer transition-all duration-200 ease-in-out hover:bg-orange-400 hover:text-white"
              size="icon"
              onClick={() => handleEditUser(row.original)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="bg-red-500 text-white cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-400 hover:text-white"

              size="icon"
              onClick={() => handleDeleteUser(row.original._id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ],
    [changeUserAccountStatus]
  );

  const filteredData = useMemo(() => {
    if (!roleFilter || roleFilter === "all") return users;
    return users.filter((user) => user.role === roleFilter);
  }, [users, roleFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as string;
      return value?.toLowerCase().includes(filterValue.toLowerCase()) ?? false;
    },
  });

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || "",
      location: user.location || "",
    });
    setIsEditDialogOpen(true);
  };

  const handleDeleteUser = async (userId: string) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")
    ) {
      await deleteUser(userId);
    }
  };

  const handleUpdateUser = async () => {
    if (editingUser) {
      await updateUser(editingUser._id, formData);
      setIsEditDialogOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Une erreur s'est produite: {error}</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tous les utilisateurs</h1>
      <div className="flex space-x-2">
        <Input
          placeholder="Rechercher..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrer par rôle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les rôles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">Client</SelectItem>
            <SelectItem value="worker">Prestataire</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Précédent
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Suivant
        </Button>
      </div>
      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier l'utilisateur</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="firstName" className="text-right">
                Prénom
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="col-span-3 w-full"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastName" className="text-right">
                Nom
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Téléphone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Localisation
              </Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Annuler
            </Button>
            <Button onClick={handleUpdateUser}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
