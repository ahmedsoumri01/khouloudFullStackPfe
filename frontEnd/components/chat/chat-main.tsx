"use client"

import { useState } from "react"
import { Image, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageList } from "@/components/chat/message-list"
import { QuickReplies } from "@/components/chat/quick-replies"
import { ChatHeader } from "./chat-header"
import type { Conversation } from "@/types/chat"

interface ChatMainProps {
  conversation: Conversation | null
}

export function ChatMain({ conversation }: ChatMainProps) {
  const [message, setMessage] = useState("")
  const [showQuickReplies, setShowQuickReplies] = useState(false)

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        Sélectionnez une conversation pour commencer
      </div>
    )
  }

  const handleSend = () => {
    if (!message.trim()) return
    // Add your message sending logic here
    setMessage("")
  }

  const handleQuickReply = (reply: string) => {
    setMessage(reply)
    setShowQuickReplies(false)
  }

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader conversation={conversation} />

      <ScrollArea className="flex-1 p-4">
        <MessageList conversation={conversation} />
      </ScrollArea>

      <div className="p-4 border-t">
        {showQuickReplies && (
          <div className="mb-4">
            <QuickReplies onSelect={handleQuickReply} />
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setShowQuickReplies(!showQuickReplies)}>
            <Image className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MapPin className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Écrivez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />
          <Button onClick={handleSend}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

