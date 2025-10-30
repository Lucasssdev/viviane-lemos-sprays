import { Sparkles, Wind, Heart } from "lucide-react";
import usoImage from "@/assets/uso-travesseiro.jpg";

const steps = [
  {
    icon: Sparkles,
    title: "Borrife",
    description:
      "Aplique em superfícies porosas como travesseiros, cortinas, roupa de cama ou no ambiente.",
  },
  {
    icon: Wind,
    title: "Inspire",
    description:
      "Também pode umedecer um algodão e inalar profundamente, permitindo que os aromas envolvam você.",
  },
  {
    icon: Heart,
    title: "Sinta",
    description:
      "Permita que a natureza faça seu trabalho de acolher, equilibrar e iluminar seu momento.",
  },
];
const SectionDivider = () => (
  <svg viewBox="0 0 1000 10" className="w-full  ">
    <g stroke={"#4E2F16"} strokeWidth="2" strokeLinecap="round">
      {Array.from({ length: 250 }).map((_, i) => (
        <line key={i} x1={i * 6 + 2} y1={2} x2={i * 6 + 2} y2={8} />
      ))}
    </g>
  </svg>
);
const HowToUse = () => {
  return (
    <section className="py-5 lg:py-5 bg-white">
      <SectionDivider />
      <div className="bg-cream rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-text mb-6 text-center">
          Dicas de uso
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🛏️</span>
            </div>
            <p className="text-text/80">
              Borrife em travesseiros e roupas de cama para uma experiência
              sensorial completa
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🪟</span>
            </div>
            <p className="text-text/80">
              Aplique em cortinas para que o aroma se espalhe suavemente pelo
              ambiente
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <p className="text-text/80">
              Use sempre que sentir necessidade de reconexão e equilíbrio
              emocional
            </p>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default HowToUse;
