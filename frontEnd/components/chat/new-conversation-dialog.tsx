"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NewConversationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// This would typically come from your API
const users = [
  {
    id: "1",
    name: "Sophie Martin",
    avatar: "/placeholder.svg",
    profession: "Client",
  },
  // Add more users...
]

export function NewConversationDialog({ open, onOpenChange }: NewConversationDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nouvelle conversation</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un utilisateur..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ScrollArea className="h-[300px]">
          <div className="divide-y">
            {filteredUsers.map((user) => (
              <button
                key={user.id}
                className="w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors"
                onClick={() => {
                  // Handle starting new conversation
                  onOpenChange(false)
                }}
              >
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.profession}</div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

