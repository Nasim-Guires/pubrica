"use client";

import Image from "next/image";

interface EditingType {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface EditingTypeCardProps {
  type: EditingType;
  isOpen: boolean;
  toggleCard: (id: string) => void;
}

export default function EditingTypeCard({
  type,
  isOpen,
  toggleCard,
}: EditingTypeCardProps) {
  return (
    <div
      className={`transition-all duration-200 rounded-md border ${
        isOpen
          ? "border-[#0A4D4A]/20 bg-white shadow-sm"
          : "border-transparent bg-[#F4FAF8] hover:bg-[#EAF5F2]"
      }`}
    >
      <div
        onClick={() => toggleCard(type.id)}
        className={`px-4 py-3.5 flex justify-between items-center cursor-pointer select-none ${
          isOpen ? "border-b border-slate-100" : ""
        }`}
      >
        <div className="flex items-center gap-3 pr-2 min-w-0">
          <div className="relative w-7 h-7 flex-shrink-0 opacity-80">
            <Image
              src={type.icon}
              alt={type.title}
              fill
              sizes="28px"
              className="object-contain filter grayscale contrast-125"
            />
          </div>

          <span className="font-semibold text-[#0A4D4A] text-[13.5px] leading-tight truncate-two-lines">
            {type.title}
          </span>
        </div>

        <span className="text-[#0A4D4A] font-medium text-sm flex-shrink-0 w-3 text-center">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <div className="p-4 bg-white animate-fadeIn">
          <p className="text-[13px] text-slate-700 leading-relaxed">
            {type.description}
          </p>
        </div>
      )}
    </div>
  );
}
