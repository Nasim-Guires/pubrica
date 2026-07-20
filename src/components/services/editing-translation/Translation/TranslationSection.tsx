import { translationServicesList } from "@/lib/services/editing-and-translation";
import TranslationCard from "./TranslationCard";

export default function TranslationSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#004D40] mb-2">
          Our Comprehensive Translation Services
        </h2>

        <p className="text-slate-600 max-w-3xl mx-auto">
          Pubrica delivers professional academic and scientific translation
          services designed to ensure accuracy, cultural adaptation, and
          publication-ready quality. Our translators are{" "}
          <span className="text-teal-600 font-medium underline">
            subject-matter experts
          </span>{" "}
          who refine content to meet the standards of international journals,
          institutions, and global markets.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {translationServicesList.map((service) => (
          <TranslationCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
