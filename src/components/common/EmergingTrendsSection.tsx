"use client";

import { ReactNode, useState } from "react";

export type EmergingTrendItem = {
  id: string | number;
  title: string;
  cardTitle?: string;
  description: ReactNode;
};

interface EmergingTrendsSectionProps {
  title: string;
  description: string;
  trends: EmergingTrendItem[];
  footerText?: string;
}

export default function EmergingTrendsSection({
  title,
  description,
  trends,
  footerText,
}: EmergingTrendsSectionProps) {
  const [activeTrendId, setActiveTrendId] = useState<string | number>(
    trends[0]?.id
  );

  if (!trends?.length) return null;

  // Find active trend object dynamically on each render
  const activeTrend =
    trends.find((t) => t.id === activeTrendId) || trends[0];

  // Determine card heading logic strictly
  const cardHeading =
    activeTrend.cardTitle && activeTrend.cardTitle.trim() !== ""
      ? activeTrend.cardTitle
      : activeTrend.title;

  return (
    <div className="space-y-4 max-w-7xl mx-auto font-['Poppins',sans-serif]">
      {/* Centered Section Header */}
      <div className="space-y-2 text-center flex flex-col items-center">
        {/* Exact Original Title Design */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#113835]">
          {title}
        </h2>

        {/* Wider Description Spanning Out Further Than Title */}
        {description && (
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-normal w-full max-w-5xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Main Container - Exact Original Styling */}
      <div className="bg-[#f8f9fa] p-6 md:p-8 rounded-none">
        {/* Tab Buttons Row - Exact Original Grid & Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-b border-r border-gray-300">
          {trends.map((trend) => {
            const isActive = activeTrend?.id === trend.id;

            return (
              <button
                key={trend.id}
                onClick={() => setActiveTrendId(trend.id)}
                className={`py-4 px-3 text-center text-xs md:text-sm font-semibold transition-all border-l border-gray-300 flex items-center justify-center min-h-[70px] ${isActive
                    ? "bg-[#113835] text-white"
                    : "bg-[#eeeeee] text-[#111111] hover:bg-gray-200"
                  }`}
              >
                {trend.title}
              </button>
            );
          })}
        </div>

        {/* Active Trend Box - Exact Original Box Styling */}
        {activeTrend && (
          <div className="mt-6 bg-white p-6 border border-gray-200">
            {/* Shows cardTitle if provided & non-empty; defaults to tab title otherwise */}
            <h3 className="text-base md:text-lg font-bold text-[#113835]">
              {cardHeading}
            </h3>

            <div className="text-sm text-gray-600 font-normal mt-2 leading-relaxed">
              {activeTrend.description}
            </div>
          </div>
        )}
      </div>

      {/* Footer Text */}
      {footerText && (
        <p className="text-sm text-gray-600 font-normal leading-relaxed pt-1 text-center w-full max-w-5xl mx-auto">
          {footerText}
        </p>
      )}
    </div>
  );
}