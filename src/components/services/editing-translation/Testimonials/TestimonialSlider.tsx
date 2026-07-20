import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/lib/services/editing-and-translation";

interface Props {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function TestimonialSlider({
  currentSlide,
  setCurrentSlide,
}: Props) {
  const itemsPerSlide = 2;

  const totalSlides = Math.ceil(testimonialsData.length / itemsPerSlide);

  const visibleItems = testimonialsData.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleItems.map((item) => (
          <TestimonialCard
            key={item.name}
            item={item}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2.5 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              currentSlide === index
                ? "bg-[#0A7E8C] scale-110"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </>
  );
}