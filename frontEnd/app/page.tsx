import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularServices from "@/components/home/PopularServices";
import FeedbacksClients from "@/components/home/FeedbacksClients";
import ReadySection from "@/components/home/ReadySection";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <PopularServices />
        <FeedbacksClients />
        <ReadySection />
      </main>
    </div>
  );
}
