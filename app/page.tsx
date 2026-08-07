import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import SeasonBanner from "@/components/SeasonBanner";
import ValueStrip from "@/components/ValueStrip";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <CategoryStrip />
      <SeasonBanner />
      <ValueStrip />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </>
  );
}
