import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularServices from "@/components/home/PopularServices";
import FeedbacksClients from "@/components/home/FeedbacksClients";
import ReadySection from "@/components/home/ReadySection";
import Footer from "@/components/home/footer/Footer";
export default function Home() {
  return (
    /*    <>
      <Header />

     
     
    </> */
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <PopularServices />
        <FeedbacksClients />
        <ReadySection />
        <Footer />
      </main>
    </div>
  );
}
