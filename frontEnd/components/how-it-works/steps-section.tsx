import { Users, Search, CheckCircle } from "lucide-react"
import StepCard from "./step-card"

export default function StepsSection() {
  const steps = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Create Your Account in Minutes",
      description:
        "Register as a client to find professionals or as a worker to offer your services. Quick and easy sign-up with email or social login.",
      buttonText: "Create Account",
      buttonHref: "/register",
    },
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Browse Verified Professionals",
      description:
        "Search for skilled workers in your area by category, availability, and ratings. Check their profiles, past work, and reviews before hiring.",
      buttonText: "Explore Workers",
      buttonHref: "/professionals",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      title: "Complete Your Project Successfully",
      description:
        "Chat with the worker, finalize job details, and proceed with secure payment. Once the work is done, leave a review to help others.",
      buttonText: "Post a Job",
      buttonHref: "/post-job",
    },
  ]

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            buttonText={step.buttonText}
            buttonHref={step.buttonHref}
          />
        ))}
      </div>
    </section>
  )
}

