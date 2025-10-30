import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Eduarda C.",
    role: "Cliente",
    text: "O Alumin Sono me fez dormir de verdade. Quando o emocional aperta, uso e consigo relaxar. Já quero testar os outros.",
    rating: 5,
    product: "Alumin Sono",
    color: "var(--sono)",
  },
  {
    name: "Tamyres M.",
    role: "Cliente",
    text: "Uso o Bergim nos momentos mais difíceis da ansiedade. Tem ajudado bastante a acalmar e seguir o dia.",
    rating: 5,
    product: "Bergim",
    color: "var(--bergim)",
  },
  {
    name: "Viviane A.",
    role: "Cliente",
    text: "Eu ficava tensa nas aulas. Comecei a usar o Alumin Clareza e está me ajudando a focar sem pesar.",
    rating: 5,
    product: "Alumin Clareza",
    color: "var(--clareza)",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-lg text-text/70">
              Experiências reais de transformação e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: `hsl(${testimonial.color})` }}
                    />
                  ))}
                </div>

                <p className="text-text/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-text/10">
                  <div className="flex-1">
                    <p className="font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text/60">{testimonial.role}</p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `hsl(${testimonial.color} / 0.2)`,
                      color: `hsl(${testimonial.color})`,
                    }}
                  >
                    {testimonial.product}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-text/60 italic">
              * Depoimentos reais de clientes. Resultados individuais podem
              variar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
