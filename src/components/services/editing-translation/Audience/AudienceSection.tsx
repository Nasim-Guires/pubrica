import { audienceList } from "@/lib/services/editing-and-translation";
import AudienceCard from "./AudienceCard";

export default function AudienceSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#004D40] mb-2">Who We Serve</h2>

        <p className="text-slate-600">
          Our Editing and Translation Services cater to a diverse range of
          clients who require precision, clarity, and cultural accuracy in their
          written content.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audienceList.map((audience) => (
          <AudienceCard
            key={audience.title}
            title={audience.title}
            bgImage={audience.bgImage}
          />
        ))}
      </div>
    </section>
  );
}
