import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ScopeSection } from "@/components/scope-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { DifferenceSection } from "@/components/difference-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#efe8dc] text-foreground">
      <img
        src="/images/background-texture.png"
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover opacity-65 pointer-events-none"
      />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ScopeSection />
        <PortfolioSection />
        <DifferenceSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}