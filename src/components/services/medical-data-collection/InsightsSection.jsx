"use client";

import DynamicInsightsSection from "@/components/services/DynamicInsightsSection";

export default function InsightsSection() {
  return (
    <DynamicInsightsSection
      categorySlug="medical-data-collection"
      limit={3}
      className="w-full bg-[#f4f6f6] py-14 px-4 sm:px-6 lg:px-12 font-sans"
    />
  );
}
