import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sprout } from "lucide-react";
import productAlumin from "@/assets/product-alumin.png";
import productBergim from "@/assets/product-bergim.png";
import productClareza from "@/assets/product-clareza.png";
import productSono from "@/assets/product-sono.png";
import bgTexture from "@/assets/bg-texture.png";

type Product = {
  id: string;
  name: string;
  color: string;
  colorClass: string;
  crystal: string;
  tagline: string;
  description: string;
  composition: string;
  usage: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: "bergim",
    name: "Bergim",
    color: "var(--bergim)",
    colorClass: "bergim",
    crystal: "Calcita Laranja",
    tagline: "Energia fresca para mente ativa",
    description:
      "Combate a ansiedade e desperta a mente, renova as forças e mantém respiração calma.",
    composition: "Óleos essenciais de bergamota, flor de laranjeira e alecrim",
    usage:
      "Perfeito para o dia a dia de quem busca equilíbrio e foco no trabalho e na rotina.",
    price: 70,
    image: productBergim,
  },
  {
    id: "alumin",
    name: "Alumin",
    color: "var(--alumin)",
    colorClass: "alumin",
    crystal: "Quartzo Verde",
    tagline: "Energia suave para alma ativa",
    description: "Limpeza energética, centramento e vitalidade.",
    composition: "Óleo essencial de alecrim",
    usage:
      "Ideal para acalmar a mente e voltar ao centro quando sentir desequilíbrio emocional.",
    price: 70,
    image: productAlumin,
  },
  {
    id: "clareza",
    name: "Alumin Clareza",
    color: "var(--clareza)",
    colorClass: "clareza",
    crystal: "Citrino",
    tagline: "Concentração e clareza com ternura",
    description: "Foco com acolhimento, brilho mental.",
    composition: "Óleos essenciais de alecrim, lavanda e canela",
    usage: "Use quando precisar de foco e concentração, mantendo a serenidade.",
    price: 70,
    image: productClareza,
  },
  {
    id: "sono",
    name: "Alumin Sono",
    color: "var(--sono)",
    colorClass: "sono",
    crystal: "Quartzo Rosa",
    tagline: "Porque descansar também é cura",
    description: "Relaxamento profundo e sono reparador.",
    composition: "Óleo essencial de lavanda",
    usage:
      "Borrife no travesseiro e roupa de cama antes de dormir para uma noite tranquila.",
    price: 70,
    image: productSono,
  },
];

const ProductTabs = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);
  const whatsappLink = (): string => {
    const baseUrlWpp = "https://wa.me/556193792950";

    switch (activeProduct.id) {
      case "alumin":
        return `${baseUrlWpp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Alumin.`;
      case "bergim":
        return `${baseUrlWpp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Bergim.`;
      case "clareza":
        return `${baseUrlWpp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Alumin%20Clareza.`;
      case "sono":
        return `${baseUrlWpp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Alumin%20Sono.`;
      default:
        return baseUrlWpp;
    }
  };

  return (
    <section
      id="produtos"
      className="py-20 lg:py-32 relative overflow-hidden transition-all duration-700 scroll-mt-24"
      style={{
        backgroundColor: `hsl(${activeProduct.color})`,
        backgroundImage: `url(${bgTexture})`,
        backgroundBlendMode: "multiply", // ou 'overlay' / 'soft-light'
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating dots - animated based on active product */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-dots"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: `hsl(${activeProduct.color} / ${
                Math.random() * 0.3 + 0.1
              })`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Linha de Sprays Terapêuticos
          </h2>
          <p className="text-white/90 text-center mb-12 text-lg">
            Escolha a vibração que você quer despertar
          </p>

          {/* Product Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProduct.id === product.id
                    ? "bg-white text-text shadow-xl scale-110"
                    : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                }`}
              >
                {/* Ripple effect for active tab */}
                {activeProduct.id === product.id && (
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ripple" />
                )}
                <span className="relative z-10">{product.name}</span>
              </button>
            ))}
          </div>

          {/* Product Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Image */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundColor: `hsl(${activeProduct.color} / 0.1)`,
                    filter: "blur(40px)",
                  }}
                />
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="relative w-full h-auto rounded-2xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <div
                    className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-3"
                    style={{
                      backgroundColor: `hsl(${activeProduct.color} / 0.2)`,
                      color: `hsl(${activeProduct.color})`,
                    }}
                  >
                    {activeProduct.crystal}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text mb-2">
                    {activeProduct.name}
                  </h3>
                  <p className="text-lg text-text/70 italic mb-4">
                    {activeProduct.tagline}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Benefícios</h4>
                    <p className="text-text/80">{activeProduct.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text mb-2">Composição</h4>
                    <p className="text-text/80">{activeProduct.composition}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text mb-2">
                      Quando usar
                    </h4>
                    <p className="text-text/80">{activeProduct.usage}</p>
                  </div>

                  <div className="pt-4 border-t border-text/10">
                    <p className="text-3xl font-bold text-text">
                      R$ {activeProduct.price},00
                      <span className="text-lg font-normal text-text/60 ml-2">
                        / unidade
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="flex-1 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      backgroundColor: `hsl(${activeProduct.color})`,
                      color: "white",
                    }}
                    asChild
                  >
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Sprout className="mr-2 h-5 w-5" />
                      Escolher o {activeProduct.name}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
