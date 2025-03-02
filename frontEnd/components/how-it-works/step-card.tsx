import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import type { ReactNode } from "react"

interface StepCardProps {
  icon: ReactNode
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export default function StepCard({ icon, title, description, buttonText, buttonHref }: StepCardProps) {
  return (
    <Card className="flex flex-col h-full border-none shadow-sm">
      <CardHeader className="flex items-center justify-center pb-2">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">{icon}</div>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 flex justify-center">
        <Button variant="outline" asChild>
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

