import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import WhyUsSection from "@/components/WhyUsSection"
import ProductsSection from "@/components/ProductsSection"
import SpecsSection from "@/components/SpecsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ProductsSection />
      <SpecsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
