import HeroSection from "../components/HomeSection";
import ProductShowcase from "../components/ProductShowcase";
import IntegrationSection from "../components/IntegrationSection";
import BenefitsAndPartnersSection from "../components/BenefitsAndPartnersSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductShowcase />
      <IntegrationSection />
      <BenefitsAndPartnersSection />
      <DemoSection />
      
    </div>
  );
}

