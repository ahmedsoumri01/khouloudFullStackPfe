import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="bg-blue-600 text-white rounded-xl py-12 px-6 text-center mt-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-8">Join thousands of users finding and offering services today!</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" size="lg" asChild>
          <Link href="/find-worker">Find a Worker</Link>
        </Button>
        <Button variant="outline" size="lg" className="text-black font-bold duration-500 ease-in-out hover:bg-blue-500 hover:text-white" asChild>
          <Link href="/post-job">Post a Job</Link>
        </Button>
      </div>
    </section>
  )
}

