import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/offer-1.jpg";
import img2 from "@/assets/offer-2.jpg";
import img3 from "@/assets/offer-3.jpg";
import img4 from "@/assets/offer-4.jpg";
import img5 from "@/assets/offer-5.jpg";
import img6 from "@/assets/offer-6.jpg";
import img7 from "@/assets/offer-7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export function OffersCarousel() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > i || (i === images.length - 1 && next === 0) ? 1 : -1);
    setI((next + images.length) % images.length);
  };

  useEffect(() => {
    const id = setInterval(() => go(i + 1), 4000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-[3/4] overflow-hidden">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Oferta ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-out ${
              idx === i
                ? "opacity-100 scale-100 translate-x-0"
                : idx === (i - 1 + images.length) % images.length
                ? `opacity-0 scale-95 ${dir === 1 ? "-translate-x-8" : "translate-x-8"}`
                : "opacity-0 scale-95"
            }`}
          />
        ))}

        <button
          aria-label="Anterior"
          onClick={() => go(i - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground shadow-lg backdrop-blur transition hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Próxima"
          onClick={() => go(i + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground shadow-lg backdrop-blur transition hover:bg-white hover:scale-110 active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir para imagem ${idx + 1}`}
            onClick={() => go(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
