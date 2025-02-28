import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface QuickRepliesProps {
  onSelect: (reply: string) => void
}

const quickReplies = [
  "Bonjour, je suis disponible jeudi matin à 9h.",
  "Je vous propose une intervention dans les 24h.",
  "Le tarif est de 50€ de l'heure.",
  "Pouvez-vous me donner votre adresse exacte ?",
  "Je vous remercie pour votre confiance.",
]

export function QuickReplies({ onSelect }: QuickRepliesProps) {
  return (
    <ScrollArea className="w-full" orientation="horizontal">
      <div className="flex gap-2 pb-2">
        {quickReplies.map((reply, index) => (
          <Button key={index} variant="outline" className="whitespace-nowrap" onClick={() => onSelect(reply)}>
            {reply}
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}

