import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductsSection } from "@/components/products-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <WhyChooseSection />
      <Footer />
    </main>
  );
}
