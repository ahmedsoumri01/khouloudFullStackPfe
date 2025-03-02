import type { ReactNode } from "react"

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">{icon}</div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

