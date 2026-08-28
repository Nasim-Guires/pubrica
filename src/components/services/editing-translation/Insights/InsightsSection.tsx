"use client";

import DynamicInsightsSection from "@/components/services/DynamicInsightsSection";

export default function InsightsSection({
  categorySlug,
}: {
  categorySlug?: string;
}) {
  return (
    <DynamicInsightsSection
      categorySlug={categorySlug}
      limit={3}
      className="bg-white py-12 px-6 max-w-7xl mx-auto font-sans"
    />
  );
}
