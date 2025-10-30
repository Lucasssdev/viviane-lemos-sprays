import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sprout, ShoppingCart, Package } from "lucide-react";
import productAlumin from "@/assets/product-alumin.png";
import productBergim from "@/assets/product-bergim.png";
import productClareza from "@/assets/product-clareza.png";
import productSono from "@/assets/product-sono.png";

const products = [
  { name: "Alumin", image: productAlumin, color: "var(--alumin)" },
  { name: "Bergim", image: productBergim, color: "var(--bergim)" },
  { name: "Alumin Clareza", image: productClareza, color: "var(--clareza)" },
  { name: "Alumin Sono", image: productSono, color: "var(--sono)" },
];

const Offers = () => {
  const whatsappLink = (card: "unit" | "combo"): string => {
    const baseUrlWpp = "https://wa.me/556193792950";

    switch (card) {
      case "unit":
        return `${baseUrlWpp}?text=Ol%C3%A1%2C%20Viviane!%20Quero%20saber%20dos%20sprays.%20%F0%9F%8C%BF`;
      case "combo":
        return `${baseUrlWpp}?text=Ol%C3%A1%2C%20Viviane!%20Quero%20saber%20dos%20combos.%20%F0%9F%8C%BF`;
      default:
        return baseUrlWpp;
    }
  };

  return (
    <section className="py-20 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              Ofertas Especiais
            </h2>
            <p className="text-lg text-text/70">
              Escolha entre unidades individuais ou aproveite o combo completo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Individual Units */}
            <Card className="p-8 border-2 border-kraft/20 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <Sprout className="w-12 h-12 text-kraft mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text mb-2">
                  Unidades Individuais
                </h3>
                <p className="text-text/70">Escolha seu spray favorito</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-3">
                      <p className="text-white text-sm font-medium">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-text mb-2">R$ 70,00</p>
                <p className="text-text/60">por unidade</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-kraft hover:bg-kraft-dark text-white shadow-lg rounded-full"
                asChild
              >
                <a
                  href={whatsappLink("unit")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sprout className="mr-2 h-5 w-5" />
                  Escolher um spray individual
                </a>
              </Button>
            </Card>

            {/* Combo Pack */}
            <Card className="p-8 border-2 border-alumin/80 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-alumin/80 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Economize R$ 40
              </div>

              <div className="text-center mb-6">
                <Package className="w-12 h-12 text-alumin/80 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text mb-2">
                  Combo Completo
                </h3>
                <p className="text-text/70">Todos os 4 sprays com desconto</p>
              </div>

              <div className="bg-gradient-to-br from-alumin/10 to-clareza/10 rounded-2xl p-6 my-11">
                <p className="text-center text-text/80 mb-4">Kit contém:</p>
                <ul className="space-y-2">
                  {products.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-text/80"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: `hsl(${product.color})` }}
                      />
                      <span>{product.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-text/60 line-through mb-1">
                  De R$ 280,00
                </p>
                <p className="text-4xl font-bold text-text mb-2">R$ 240,00</p>
                <p className="text-alumin/80 font-semibold">
                  R$ 60,00 por unidade no combo
                </p>
              </div>

              <Button
                size="lg"
                className="w-full bg-alumin/80 hover:bg-alumin/80-900 text-white shadow-lg rounded-full"
                asChild
              >
                <a
                  href={whatsappLink("combo")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Quero o combo completo
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
