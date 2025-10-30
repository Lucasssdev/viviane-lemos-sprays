import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-products.png";
import logoImage from "@/assets/logo-viviane.png";
import bgTexture from "@/assets/bg-texture-2.png";

const Hero = () => {
  const whatsappLink =
    "https://wa.me/556193792950?text=Ol%C3%A1%2C%20Viviane!%20Quero%20saber%20dos%20sprays.%20%F0%9F%8C%BF";

  const scrollToProducts = () => {
    const target = document.getElementById("produtos");
    if (!target) return;

    // encontre o primeiro ancestral que realmente rola
    const getScrollParent = (el: HTMLElement | null): HTMLElement => {
      let x = el?.parentElement;
      while (x) {
        const style = getComputedStyle(x);
        const canScroll = /(auto|scroll)/.test(style.overflowY);
        if (canScroll && x.scrollHeight > x.clientHeight) return x;
        x = x.parentElement;
      }
      return document.scrollingElement as HTMLElement; // html/body
    };

    const scroller = getScrollParent(target);
    const OFFSET = 80; // altura do header
    const top =
      target.getBoundingClientRect().top + scroller.scrollTop - OFFSET;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    scroller.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kraft"
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundBlendMode: "multiply", // ou 'overlay' / 'soft-light'
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-bergim/40 animate-float-dots"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-clareza/30 animate-float-dots"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-4 h-4 rounded-full bg-alumin/30 animate-float-dots"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-[25%] w-2 h-2 rounded-full bg-sono/40 animate-float-dots"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-20 right-[30%] w-3 h-3 rounded-full bg-bergim/30 animate-float-dots"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in-up">
            <img
              src={logoImage}
              alt="Viviane Lemos - Acupuntura, Fitoterapia e Estética"
              className="h-20 lg:h-24 mx-auto lg:mx-0 mb-8"
              style={{
                filter: "brightness(0) invert(1)",
                mixBlendMode: "screen",
              }}
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              A natureza que acolhe, equilibra e ilumina.
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              Sprays terapêuticos que reconectam corpo e mente ao ritmo da
              terra.
            </p>

            <p className="text-sm md:text-base italic text-white/80 font-light">
              "O essencial é invisível aos olhos."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-white text-kraft hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg px-8 py-6 rounded-full"
              >
                Conheça a linha
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl transform -rotate-6" />
            <img
              src={heroImage}
              alt="Linha completa de sprays terapêuticos"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProducts}
          aria-label="Ir para os produtos"
          className="
      absolute bottom-6 inset-x-0 z-20
      mx-auto w-fit
      flex items-center justify-center
      rounded-full p-2
      bg-black/0 hover:bg-black/5 transition
      animate-bounce
    "
        >
          <ChevronDown className="w-8 h-8 text-white/70 drop-shadow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
