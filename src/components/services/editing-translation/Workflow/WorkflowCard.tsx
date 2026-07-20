import Image from "next/image";

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface WorkflowCardProps {
  item: WorkflowStep;
  reverse?: boolean;
}

export default function WorkflowCard({
  item,
  reverse = false,
}: WorkflowCardProps) {
  const Card = (
    <div className="group w-full bg-white border border-slate-200/80 rounded-sm p-4 shadow-sm min-h-[240px] flex flex-col items-start text-left transition-all duration-200 hover:bg-[#4D4D4D] hover:border-[#4D4D4D]">
      <div className="relative w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 group-hover:invert group-hover:brightness-200 transition-all">
        <Image
          src={item.icon}
          alt={item.title}
          fill
          sizes="32px"
          className="object-contain filter grayscale contrast-125"
        />
      </div>

      <h3 className="text-[12.5px] font-bold uppercase tracking-wide text-slate-800 mb-2 leading-tight group-hover:text-white">
        {item.title}
      </h3>

      <p className="text-[11.5px] leading-relaxed whitespace-pre-line text-slate-600 group-hover:text-slate-200">
        {item.description}
      </p>
    </div>
  );

  return (
    <>
      {reverse ? (
        <>
          <div className="w-10 h-10 rounded-full bg-[#0A7E8C] text-white flex items-center justify-center font-semibold text-sm shadow-md mb-11 z-20">
            {item.step}
          </div>

          <div className="w-[1px] h-10 bg-slate-300 absolute top-[40px]" />

          <div className="mt-6">{Card}</div>
        </>
      ) : (
        <>
          <div className="mb-6">{Card}</div>

          <div className="w-[1px] h-10 bg-slate-300 absolute top-[240px]" />

          <div className="w-10 h-10 rounded-full bg-[#0A7E8C] text-white flex items-center justify-center font-semibold text-sm shadow-md mt-11 z-20">
            {item.step}
          </div>
        </>
      )}
    </>
  );
}