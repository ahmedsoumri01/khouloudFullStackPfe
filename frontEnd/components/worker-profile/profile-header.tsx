import { Badge } from "@/components/ui/badge"
import { CheckCircle, MapPin, Star } from "lucide-react"
import Image from "next/image"

interface ProfileHeaderProps {
  name: string
  title: string
  rating: number
  reviews: number
  location: string
  imageUrl: string
  isVerified: boolean
}

export function ProfileHeader({ name, title, rating, reviews, location, imageUrl, isVerified }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-6 p-6">
      <div className="relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} width={120} height={120} className="rounded-full" />
        {isVerified && (
          <Badge className="absolute -right-2 -top-2 bg-blue-500">
            <CheckCircle className="h-4 w-4 mr-1" />
            Vérifié
          </Badge>
        )}
      </div>

      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl text-muted-foreground">{title}</p>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium">{rating}</span>
            <span className="text-muted-foreground ml-1">({reviews} avis)</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-5 w-5 mr-1" />
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}

