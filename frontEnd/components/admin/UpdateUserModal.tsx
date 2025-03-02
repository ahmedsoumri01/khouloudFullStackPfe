import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateUser: () => void;
};

export default function UpdateUserModal({
  isEditDialogOpen,
  setIsEditDialogOpen,
  formData,
  handleInputChange,
  handleUpdateUser,
}: Props) {
  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier l'utilisateur</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Label htmlFor="firstName" className="text-right min-w-[75px]">
              Prénom :
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="col-span-3 w-full"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Label htmlFor="lastName" className="text-right min-w-[75px]">
              Nom :
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Label htmlFor="email" className="text-right min-w-[75px]">
              Email :
            </Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Label htmlFor="phone" className="text-right min-w-[75px]">
              Téléphone :
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Label htmlFor="location" className="text-right min-w-[79px]">
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
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => setIsEditDialogOpen(false)}
          >
            Annuler
          </Button>
          <Button onClick={handleUpdateUser} className="cursor-pointer">
            Enregistrer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
