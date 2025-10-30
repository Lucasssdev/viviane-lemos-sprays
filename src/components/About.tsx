import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import vivianePhoto from "@/assets/viviane-photo.png";
import logoFlower from "@/assets/logo-viviane.png";

const About = () => {
  const whatsappLink =
    "https://wa.me/556193792950?text=Ol%C3%A1%2C%20Viviane!%20Quero%20saber%20dos%20sprays.%20%F0%9F%8C%BF";

  return (
    <section className="py-20 lg:py-32 bg-cream" aria-labelledby="about-title">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop: grid; Mobile: fluxo normal */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 gap-12 items-center">
            {/* ====== FOTO (DESKTOP) ====== */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-6 -left-6 w-32 h-32 opacity-20">
                <img
                  src={logoFlower}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={vivianePhoto}
                  alt="Viviane Lemos, Farmacêutica e Terapeuta Integrativa"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-3 gap-2 opacity-40">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-alumin" />
                ))}
              </div>
            </div>

            {/* ====== CONTEÚDO ====== */}
            <div className="space-y-6">
              {/* Header MOBILE: avatar + título lado a lado */}
              <div className="lg:hidden flex items-center gap-4">
                <h2
                  id="about-title"
                  className="text-2xl md:text-3xl font-bold text-text"
                >
                  Sobre a Viviane
                </h2>
              </div>

              {/* Título DESKTOP */}
              <h2
                id="about-title"
                className="hidden lg:block text-3xl md:text-4xl lg:text-5xl font-bold text-text"
              >
                Sobre a Viviane
              </h2>

              <div className="space-y-4 text-text/80 ">
                <p className="leading-relaxed">
                  <img
                    src={vivianePhoto}
                    alt="Viviane Lemos"
                    className="lg:hidden float-left mr-4 mb-2 w-28 h-28 rounded-full object-cover shadow-md
               [shape-outside:circle(50%)] [shape-margin:8px]"
                    // fallback caso seu Tailwind não aceite arbitrary props:
                    style={{ shapeOutside: "circle(50%)", shapeMargin: "8px" }}
                    loading="lazy"
                  />
                  Sou Farmacêutica com mais de 20 anos de experiência, Mestra em
                  Ciências Farmacêuticas pela UnB, com Pós-graduação em
                  Acupuntura e Medicina Chinesa, formação em Terapia Floral pela
                  Healing Herb e em Terapia Neural pelo IPGU.
                </p>

                <p>
                  Também atuo como docente em Auriculoterapia, compartilhando
                  conhecimento sobre essa técnica milenar que tanto admiro.
                </p>

                <div className="bg-white/60 rounded-2xl p-6 my-6 border-l-4 border-alumin">
                  <h3 className="font-semibold text-lg text-text mb-3">
                    Minha abordagem
                  </h3>
                  <p className="text-text/80">
                    Acredito profundamente no poder da natureza para equilibrar
                    e curar. Cada spray que desenvolvo é criado com carinho,
                    unindo conhecimento científico e sabedoria ancestral, para
                    oferecer acolhimento e bem-estar genuíno.
                  </p>
                </div>

                <p className="italic text-text/70">
                  Quando você recebe um spray, recebe também um abraço de
                  aconchego e serenidade. Bem-vindo(a) a essa experiência.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  size="lg"
                  asChild
                  className="bg-alumin hover:bg-alumin-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
