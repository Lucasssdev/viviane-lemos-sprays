import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingCart } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink =
    "https://wa.me/556193792950?text=Ol%C3%A1%2C%20Viviane!%20Quero%20saber%20dos%20sprays.%20%F0%9F%8C%BF";

  return (
    <section className="py-20 lg:py-32 bg-kraft relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-white/30 blur-3xl animate-float-dots" />
        <div
          className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-white/20 blur-3xl animate-float-dots"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-white/10 blur-3xl animate-float-dots"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Qual vibração você quer despertar hoje?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Deixe a natureza reconectar você ao equilíbrio, acolhimento e
            clareza que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white bg-kraft text-white hover:bg-white/10 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg px-8 py-6 rounded-full"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com a Viviane
              </a>
            </Button>
          </div>

          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-white/80 text-sm italic">
              "Ao receber este spray, você recebe também um abraço de aconchego
              e serenidade. Bem-vindo(a) a essa experiência!"
            </p>
            <p className="text-white font-semibold mt-4">— Viviane Lemos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
