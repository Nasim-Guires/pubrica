import { insightsData } from "@/lib/services/editing-and-translation";
import InsightCard from "./InsightCard";

export default function InsightsSection() {
  return (
    <section className="bg-white py-12 px-6 max-w-7xl mx-auto font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#0A4D4A] mb-8 tracking-tight">
          Insights
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightsData.map((card) => (
            <InsightCard
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
