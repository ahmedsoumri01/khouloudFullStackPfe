import { Shield, BadgeCheck, HeadphonesIcon } from "lucide-react"
import FeatureItem from "./feature-item"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Secure Payment System",
      description: "Pay safely through our platform, ensuring protection for both clients and workers.",
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-blue-500" />,
      title: "Verified Workers",
      description: "Every worker goes through a verification process to ensure quality service.",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-blue-500" />,
      title: "24/7 Support",
      description: "Need help? Our team is here to assist you anytime.",
    },
  ]

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  )
}

