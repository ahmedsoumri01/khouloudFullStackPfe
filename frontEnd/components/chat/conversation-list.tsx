import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Conversation } from "@/types/chat"

interface ConversationListProps {
  searchQuery: string
  onSelectConversation: (conversation: Conversation) => void
  selectedConversationId?: string
}

// This would typically come from your API
const conversations: Conversation[] = [
  {
    id: "1",
    participant: {
      id: "1",
      name: "Sophie Martin",
      avatar: "/placeholder.svg",
      isOnline: true,
    },
    lastMessage: {
      id: "1",
      content: "Je voudrais un devis pour...",
      timestamp: "14:30",
      senderId: "1",
    },
    messages: [],
  },
  // Add more conversations...
]

export function ConversationList({ searchQuery, onSelectConversation, selectedConversationId }: ConversationListProps) {
  const filteredConversations = conversations.filter((conversation) =>
    conversation.participant.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="divide-y">
      {filteredConversations.map((conversation) => (
        <button
          key={conversation.id}
          className={cn(
            "w-full flex items-start gap-3 p-4 hover:bg-accent transition-colors",
            selectedConversationId === conversation.id && "bg-accent",
          )}
          onClick={() => onSelectConversation(conversation)}
        >
          <Avatar>
            <AvatarImage src={conversation.participant.avatar} />
            <AvatarFallback>{conversation.participant.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left">
            <div className="flex justify-between">
              <span className="font-medium">{conversation.participant.name}</span>
              <span className="text-xs text-muted-foreground">{conversation.lastMessage.timestamp}</span>
            </div>
            <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage.content}</p>
          </div>
        </button>
      ))}
    </div>
  )
}

