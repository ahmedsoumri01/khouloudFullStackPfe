import HeroSection from "@/components/how-it-works/hero-section"
import StepsSection from "@/components/how-it-works/steps-section"
import FeaturesSection from "@/components/how-it-works/features-section"
import CtaSection from "@/components/how-it-works/cta-section"

export default function HowItWorksPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  )
}

