import { Clock, MapPin } from "lucide-react"

interface PricingSectionProps {
  hourlyRate: number
  workingHours: string
  serviceArea: string
}

export function PricingSection({ hourlyRate, workingHours, serviceArea }: PricingSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Tarification</h2>
      <div className="bg-muted p-6 rounded-lg space-y-4">
        <div className="text-3xl font-bold text-blue-600">
          {hourlyRate}€<span className="text-lg font-normal text-muted-foreground">/heure</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-5 w-5 mr-2" />
            {workingHours}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-5 w-5 mr-2" />
            {serviceArea}
          </div>
        </div>
      </div>
    </div>
  )
}

