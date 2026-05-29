import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductLineup from "@/components/ProductLineup";
import DFOSSection from "@/components/DFOSSection";
import TrackingUI from "@/components/TrackingUI";
import Applications from "@/components/Applications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ProductLineup />
      <DFOSSection />
      <TrackingUI />
      <Applications />
      <Contact />
      <Footer />
    </main>
  );
}