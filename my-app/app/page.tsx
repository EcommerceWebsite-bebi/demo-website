import Header from "../components/Header";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import ProductGrid from "../components/ProductGrid";
import FeatureSection from "../components/FeatureSection";
import SupportStrip from "../components/SupportStrip";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <ProductGrid />
        <FeatureSection />
        <SupportStrip />
      </main>
      <Footer />
    </div>
  );
}
