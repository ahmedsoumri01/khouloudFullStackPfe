import type React from "react"
import { Wrench, Droplet, Home, PenToolIcon as Tool } from "lucide-react"

type ServiceIcon = "emergency" | "plumbing" | "repair" | "renovation"

interface Service {
  icon: ServiceIcon
  name: string
}

const icons: Record<ServiceIcon, React.ElementType> = {
  emergency: Wrench,
  plumbing: Droplet,
  renovation: Home,
  repair: Tool,
}

interface ServicesSectionProps {
  services: readonly Service[] // Change this to accept readonly arrays
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Services offerts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => {
          const Icon = icons[service.icon]
          return (
            <div key={index} className="flex items-center p-4 bg-muted rounded-lg">
              <Icon className="h-5 w-5 mr-3 text-blue-600" />
              <span>{service.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

