import { Phone, Video, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Conversation } from "@/types/chat"

interface ChatHeaderProps {
  conversation: Conversation
}

export function ChatHeader({ conversation }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={conversation.participant.avatar} />
          <AvatarFallback>{conversation.participant.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{conversation.participant.name}</h3>
          <p className="text-sm text-green-500">{conversation.participant.isOnline ? "En ligne" : "Hors ligne"}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Voir le profil</DropdownMenuItem>
            <DropdownMenuItem>Bloquer</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Supprimer la conversation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

