import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductTabs from "@/components/ProductTabs";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import GridImages from "@/components/GridImages";
const PALETTE = {
  kraft: "#C69356",
  text: "#4E2F16",
  alumin: { base: "#57A295", dots: "#1F6F64" },
  berzim: { base: "#F57B1F", dots: "#D5600E" },
  clareza: { base: "#F7C300", dots: "#D6A800" },
  sono: { base: "#B27ACD", dots: "#8C5FB4" },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <GridImages />
      <ProductTabs />
      <HowToUse />
      <Testimonials />
      <Offers />
      <About />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
