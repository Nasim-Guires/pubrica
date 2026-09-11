"use client";

import { useState } from "react";

export type EmergingTrendItem = {
  id: string | number;
  title: string;
  description: string;
};

interface EmergingTrendsSectionProps {
  title: string;
  description: string;
  trends: EmergingTrendItem[];
  footerText: string;
}

export default function EmergingTrendsSection({
  title,
  description,
  trends,
  footerText,
}: EmergingTrendsSectionProps) {
  const [activeTrend, setActiveTrend] = useState<EmergingTrendItem>(
    trends[0]
  );

  if (!trends?.length) return null;

  return (
    <div className="space-y-4 max-w-5xl mx-auto font-['Poppins',sans-serif]">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#113835]">
          {title}
        </h2>

        {description && (
          <p className="text-sm md:text-base text-gray-800 font-medium">
            {description}
          </p>
        )}
      </div>

      {/* Main Container */}
      <div className="bg-[#f8f9fa] p-6 md:p-8 rounded-none">
        {/* Tab Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-b border-r border-gray-300">
          {trends.map((trend) => {
            const isActive = activeTrend?.id === trend.id;

            return (
              <button
                key={trend.id}
                onClick={() => setActiveTrend(trend)}
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

        {/* Active Trend Box */}
        {activeTrend && (
          <div className="mt-6 bg-white p-6 border border-gray-200">
            <h3 className="text-base md:text-lg font-bold text-[#113835]">
              {activeTrend.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {activeTrend.description}
            </p>
          </div>
        )}
      </div>

      {/* Footer Text */}
      {footerText && (
        <p className="text-sm text-gray-600 leading-relaxed pt-1">
          {footerText}
        </p>
      )}
    </div>
  );
}