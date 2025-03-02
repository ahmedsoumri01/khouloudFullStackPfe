import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="text-center py-12 md:py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h1>
      <p className="text-slate-700 mb-8 text-lg">
        Find and hire trusted professionals for real-world services easily. Whether you need a plumber, electrician, or
        handyman, our platform connects you with verified workers to get the job done hassle-free.
      </p>
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
        Get Started
      </Button>
    </section>
  )
}

