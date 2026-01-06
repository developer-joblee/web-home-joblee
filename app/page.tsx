import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProfessionalsSection } from "@/components/professionals-section"
import { AppDownloadSection } from "@/components/app-download-section"
import { AdvertiseSection } from "@/components/advertise-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ProfessionalsSection />
        <AppDownloadSection />
        <AdvertiseSection />
      </main>
      <Footer />
    </div>
  )
}
