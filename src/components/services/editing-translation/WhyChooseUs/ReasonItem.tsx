import React from "react";

interface ReasonItemProps {
  title: string;
  children: React.ReactNode;
}

export default function ReasonItem({
  title,
  children,
}: ReasonItemProps) {
  return (
    <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed">
      <span className="text-red-500 font-bold text-lg leading-none mt-[2px]">
        &bull;
      </span>

      <div>
        <strong className="text-slate-900 font-bold">
          {title}
        </strong>{" "}
        {children}
      </div>
    </li>
  );
}