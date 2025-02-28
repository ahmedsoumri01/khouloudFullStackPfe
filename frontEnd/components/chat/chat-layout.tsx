"use client"

import { useState } from "react"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ChatMain } from "@/components/chat/chat-main"
import type { Conversation } from "@/types/chat"

export function ChatLayout() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      <ChatSidebar onSelectConversation={setSelectedConversation} selectedConversationId={selectedConversation?.id} />
      <ChatMain conversation={selectedConversation} />
    </div>
  )
}

