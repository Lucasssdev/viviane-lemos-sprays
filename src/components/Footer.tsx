import { Instagram, BriefcaseBusiness, Mail } from "lucide-react";
import logoFlower from "@/assets/logo-viviane.png";

const Footer = () => {
  return (
    <footer className="bg-text text-white/80 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <img
                src={logoFlower}
                alt="Viviane Lemos"
                className="h-16 mb-4 brightness-0 invert opacity-80"
                style={{
                  filter: "brightness(0) invert(1)",
                  mixBlendMode: "screen",
                }}
              />
              <p className="text-sm text-white/60 leading-relaxed">
                Sprays terapêuticos artesanais que reconectam corpo e mente ao
                ritmo da natureza.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contato</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <Mail className="inline w-4 h-4 mr-2" />
                  <a
                    href="mailto:contato@vivianelemos.com.br"
                    className="hover:text-white transition-colors"
                  >
                    Entre em contato
                  </a>
                </p>
                <p>WhatsApp: (61) 9379-2950</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-white mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/vivianelemosacupuntura?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.acheiterapianeural.com.br/terapeutas/viviane-lemos"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <BriefcaseBusiness className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-white/50 text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-white/70">Aviso importante:</strong> Este
              é um produto artesanal desenvolvido com óleos essenciais naturais.
              Não substitui tratamento médico ou acompanhamento profissional. Em
              caso de alergias ou condições de saúde específicas, consulte um
              profissional antes de usar. Uso externo apenas - não aplicar
              diretamente na pele.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Viviane Lemos Práticas Integrativas.
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
