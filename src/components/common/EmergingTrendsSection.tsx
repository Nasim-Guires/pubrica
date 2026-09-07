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

  if (!trends.length) return null;

  return (
    <div className="space-y-5 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-bold text-[#1e2e2b]">
          {title}
        </h2>

        <p className="text-xs text-gray-600 font-medium">
          {description}
        </p>
      </div>

      {/* Clean Container */}
      <div className="bg-white p-4 md:p-5 rounded-lg border border-gray-200">
        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {trends.map((trend) => {
            const isActive = activeTrend.id === trend.id;

            return (
              <button
                key={trend.id}
                onClick={() => setActiveTrend(trend)}
                className={`py-2.5 px-3 text-center text-xs font-medium rounded transition-colors border ${
                  isActive
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {trend.title}
              </button>
            );
          })}
        </div>

        {/* Active Trend Box */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-xs font-bold text-gray-900">
            {activeTrend.title}
          </h3>

          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {activeTrend.description}
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-600 leading-relaxed">
        {footerText}
      </p>
    </div>
  );
}