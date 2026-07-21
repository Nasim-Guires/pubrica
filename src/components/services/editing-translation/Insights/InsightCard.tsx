import React from "react";

interface InsightCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function InsightCard({
  title,
  description,
  imageUrl,
}: InsightCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}