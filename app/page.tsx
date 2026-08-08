import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import SeasonBanner from "@/components/SeasonBanner";
import ValueStrip from "@/components/ValueStrip";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <SeasonBanner />
      <ValueStrip />
      <ProductGrid />
      <Newsletter />
    </>
  );
}
