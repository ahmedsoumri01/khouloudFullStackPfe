import { ProfileHeader } from "@/components/worker-profile/profile-header"
import { AboutSection } from "@/components/worker-profile/about-section"
import { PricingSection } from "@/components/worker-profile/pricing-section"
import { ServicesSection } from "@/components/worker-profile/services-section"
import { WorkGallery } from "@/components/worker-profile/work-gallery"
import { ReviewsSection } from "@/components/worker-profile/reviews-section"
import { ContactSection } from "@/components/worker-profile/contact-section"
/* import { LocationMap } from "@/components/worker-profile/location-map" */

// This would typically come from your API or database
const workerData = {
  id: "1",
  name: "Jean Dupont",
  title: "Plombier Professionnel",
  rating: 4.8,
  reviews: 20,
  location: "Paris, France",
  imageUrl: "https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
  isVerified: true,
  description:
    "Plombier professionnel avec plus de 15 ans d'expérience. Spécialisé dans les installations sanitaires, le dépannage d'urgence et la rénovation. Je garantis un travail soigné et des solutions durables pour tous vos problèmes de plomberie.",
  hourlyRate: 50,
  workingHours: "Lundi - Vendredi, 9h-18h",
  serviceArea: "Déplacement < 20km",
  services: [
    { icon: "emergency", name: "Dépannage d'urgence" },
    { icon: "plumbing", name: "Installation sanitaire" },
    { icon: "repair", name: "Réparation robinetterie" },
    { icon: "renovation", name: "Rénovation complète" },
  ] as const,
  works: [
    {
      type: "image" as const,
      url: "https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
      thumbnail:"https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
      title: "Installation salle de bain",
    },
    {
        type: "image" as const,
        url: "https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
        thumbnail:"https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
        title: "Installation salle de bain",
      },
      {
        type: "video" as const,
        url: " https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DNHeDw8FY6fE&ved=2ahUKEwj4tpDyiOWLAxXzHNAFHS5mJXIQtwJ6BAgfEAI&usg=AOvVaw3BaBPeb_ir26b_eruZDTE6",
        thumbnail:"https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
        title: "Installation salle de bain",
      },
     
      
    // Add more work samples...
  ],
  reviewsList: [
    {
      id: "1",
      author: {
        name: "Marie Laurent",
        image: "https://variety.com/wp-content/uploads/2020/08/avatar-the-last-airbender-3.jpg",
      },
      rating: 5,
      comment: "Excellent travail, très professionnel et ponctuel. Je recommande vivement!",
      date: "15/02/2024",
    },
    // Add more reviews...
  ],
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "jean.dupont@example.com",
    facebook: "https://facebook.com/jeandupont",
  },
  coordinates: {
    latitude: 48.8566,
    longitude: 2.3522,
    address: "Paris, France",
  },
}

export default function WorkerProfilePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProfileHeader
          name={workerData.name}
          title={workerData.title}
          rating={workerData.rating}
          reviews={workerData.reviews}
          location={workerData.location}
          imageUrl={workerData.imageUrl}
          isVerified={workerData.isVerified}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <AboutSection description={workerData.description} />
            <ServicesSection services={workerData.services} />
            <WorkGallery works={workerData.works} />
            <ReviewsSection reviews={workerData.reviewsList} />
          </div>

          <div className="space-y-8">
            <PricingSection
              hourlyRate={workerData.hourlyRate}
              workingHours={workerData.workingHours}
              serviceArea={workerData.serviceArea}
            />
            <ContactSection {...workerData.contact} />
         {/*    <LocationMap {...workerData.coordinates} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

