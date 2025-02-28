export interface User {
    id: string
    name: string
    avatar: string
    isOnline?: boolean
  }
  
  export interface Message {
    id: string
    content: string
    timestamp: string
    senderId: string
  }
  
  export interface Conversation {
    id: string
    participant: User
    lastMessage: Message
    messages: Message[]
  }
  
  