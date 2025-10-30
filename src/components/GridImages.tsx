import Model1 from "@/assets/model-1.jpg";
import Model2 from "@/assets/model-2.jpg";
import Model3 from "@/assets/model-3.jpg";

const bgStyle = (src: string): React.CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export default function GridImages() {
  return (
    <section
      className="w-screen max-w-[100vw] left-1/2 right-1/2 -mx-[calc((100vw-100%)/2)] overflow-hidden"
      style={{ maxWidth: "99.3vw", backgroundColor: "black" }}
    >
      <div className="flex flex-col md:flex-row gap-0">
        <div
          className="hidden md:block md:w-1/4 h-[37vh] md:h-[38vh] lg:h-[38vh]"
          style={bgStyle(Model1)}
          role="img"
          aria-label="Galeria Viviane — painel 1"
        />

        <div
          className="hidden md:block md:w-1/4 h-[38vh] md:h-[38vh] lg:h-[38vh]"
          style={bgStyle(Model2)}
          role="img"
          aria-label="Galeria Viviane — painel 2"
        />

        <div
          className="hidden md:block md:w-1/4 h-[38vh] md:h-[38vh] lg:h-[38vh]"
          style={bgStyle(Model3)}
          role="img"
          aria-label="Galeria Viviane — painel 3"
        />

        {/* Painel 4 — ÚNICO no mobile, também visível no desktop */}
        <div
          className="block md:w-1/4 h-[46.3vh] md:h-[38vh] lg:h-[38vh]"
          style={bgStyle(Model2)}
          role="img"
          aria-label="Galeria Viviane — painel 4"
        />
      </div>
    </section>
  );
}
