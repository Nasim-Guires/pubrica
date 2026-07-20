import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  journalTitle: string;
  bgAccent: string;
  flagSrc: string;
}

interface Props {
  item: Testimonial;
}

export default function TestimonialCard({ item }: Props) {
  return (
    <div className="border border-[#0A4D4A]/20 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between min-h-[280px]">
      <div className="bg-[#D9D9D9]/50 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start flex-grow">
        {/* Journal Card */}
        <div
          className={`w-32 h-24 rounded border border-slate-200 shadow-sm flex flex-col justify-between p-2 text-white shrink-0 ${item.bgAccent}`}
        >
          <span className="text-[7px] uppercase tracking-widest opacity-70">
            Pubrica Indexed
          </span>

          <span className="text-[10px] font-black leading-tight">
            {item.journalTitle}
          </span>

          <div className="w-full h-[3px] rounded-full bg-white/30 mt-auto" />
        </div>

        {/* Quote */}
        <p className="text-[13px] italic text-slate-700 leading-relaxed">
          “{item.quote}”
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-2 flex justify-between items-center px-2">
        <div>
          <h4 className="font-bold text-[13.5px]">— {item.name}</h4>

          <p className="text-xs italic text-slate-500">{item.role}</p>
        </div>

        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-100 bg-slate-200">
          {item.flagSrc ? (
            <Image
              src={item.flagSrc}
              alt={item.role}
              fill
              sizes="24px"
              className="object-cover scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px]">
              🌍
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
