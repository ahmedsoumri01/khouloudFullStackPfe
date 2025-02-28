"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ConversationList } from "@/components/chat/conversation-list"
import { NewConversationDialog } from "@/components/chat/new-conversation-dialog"
import type { Conversation } from "@/types/chat"

interface ChatSidebarProps {
  onSelectConversation: (conversation: Conversation) => void
  selectedConversationId?: string
}

export function ChatSidebar({ onSelectConversation, selectedConversationId }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewDialog, setShowNewDialog] = useState(false)

  return (
    <div className="w-80 border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Messages</h2>
          <Button size="icon" variant="ghost" onClick={() => setShowNewDialog(true)}>
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher une conversation..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <ConversationList
          searchQuery={searchQuery}
          onSelectConversation={onSelectConversation}
          selectedConversationId={selectedConversationId}
        />
      </ScrollArea>
      <NewConversationDialog open={showNewDialog} onOpenChange={setShowNewDialog} />
    </div>
  )
}

