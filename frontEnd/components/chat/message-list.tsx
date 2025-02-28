import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Conversation } from "@/types/chat"

interface MessageListProps {
  conversation: Conversation
}

export function MessageList({ conversation }: MessageListProps) {
  return (
    <div className="space-y-4">
      {conversation.messages.map((message) => (
        <div
          key={message.id}
          className={cn("flex items-start gap-2 max-w-[80%]", message.senderId === "me" && "ml-auto flex-row-reverse")}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src={message.senderId === "me" ? "/my-avatar.jpg" : conversation.participant.avatar} />
            <AvatarFallback>
              {message.senderId === "me" ? "Me" : conversation.participant.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div
            className={cn(
              "rounded-lg p-3",
              message.senderId === "me" ? "bg-primary text-primary-foreground" : "bg-muted",
            )}
          >
            <p>{message.content}</p>
            <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

