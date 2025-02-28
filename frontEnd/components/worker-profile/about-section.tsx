interface AboutSectionProps {
    description: string
  }
  
  export function AboutSection({ description }: AboutSectionProps) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">À propos</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    )
  }
  
  