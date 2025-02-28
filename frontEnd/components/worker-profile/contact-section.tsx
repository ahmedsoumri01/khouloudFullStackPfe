import { Phone, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  phone: string
  email: string
  facebook?: string
}

export function ContactSection({ phone, email, facebook }: ContactSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href={`tel:${phone}`}>
            <Phone className="mr-2 h-4 w-4" />
            {phone}
          </a>
        </Button>

        <Button variant="outline" className="w-full justify-start" asChild>
          <a href={`mailto:${email}`}>
            <Mail className="mr-2 h-4 w-4" />
            {email}
          </a>
        </Button>

        {facebook && (
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

