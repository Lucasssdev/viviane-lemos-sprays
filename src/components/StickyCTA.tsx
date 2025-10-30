import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingCart, X } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const whatsappLink =
    "https://wa.me/556193792950?text=Ol%C3%A1%2C%20Viviane!%20Quero%20saber%20dos%20sprays.%20%F0%9F%8C%BF";

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isClosed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-in-up">
      <div className="bg-kraft/60 shadow-2xl border-t-2 border-kraft-dark p-4 flex items-center justify-center">
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-2 right-2 text-white/60 hover:text-white"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex ">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-white bg-kraft/30 text-white hover:bg-white/10 hover:text-white shadow-lg hover:shadow-xl hover:bg-kraft/80 transition-all duration-300 text-base md:text-lg px-8 py-6 rounded-full"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com a Viviane
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
