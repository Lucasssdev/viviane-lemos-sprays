import Model1 from "@/assets/model-1.jpg";
import Model2 from "@/assets/model-2.jpg";
import Model3 from "@/assets/model-3.jpg";

export default function GridImages() {
  const images = [Model1, Model2, Model3, Model2]; // ordem que você pediu

  return (
    <section className="w-full overflow-hidden" aria-label="Galeria de fotos">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* 1 */}
        <div className="hidden md:block">
          <img
            src={images[0]}
            alt="Galeria 1"
            className="block w-full h-auto select-none"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* 2 - ÚNICA no mobile */}
        <div className="block">
          <img
            src={images[1]}
            alt="Galeria 2"
            className="block w-full h-auto select-none"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* 3 */}
        <div className="hidden md:block">
          <img
            src={images[2]}
            alt="Galeria 3"
            className="block w-full h-auto select-none"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* 4 */}
        <div className="hidden md:block">
          <img
            src={images[3]}
            alt="Galeria 4"
            className="block w-full h-auto select-none"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
}
