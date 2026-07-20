import { trustPartners } from "@/lib/services/editing-and-translation";
import PartnerLogo from "./PartnerLogo";
import ReasonItem from "./ReasonItem";

export default function WhyChooseUsSection() {
  return (
    <section className="mb-16">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-[#0A4D5C] mb-6 tracking-tight">
        Reasons Why Authors Choose Pubrica&apos;s Editing And Translation
        Services
      </h2>

      {/* Reasons */}
      <ul className="space-y-4 max-w-6xl mb-8">
        <ReasonItem title="Unlock Pubrica's 20+ years of academic publishing expertise:">
          Our team has helped over 800,000 researchers succeed in renowned
          journals. With our{" "}
          <span className="text-sky-500 underline cursor-pointer hover:text-sky-600">
            journal selection service
          </span>
          , we streamline the process, enhancing your paper&apos;s publication
          prospects.
        </ReasonItem>

        <ReasonItem title="Trust Pubrica's Editing and Translation Service">
          for expert guidance in navigating credible, peer-reviewed journals.
          Our team ensures meticulous assessment and tailored recommendations,
          safeguarding you from predatory publishing practices.
        </ReasonItem>
      </ul>

      {/* Logos */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center bg-slate-50/50 p-4 rounded-md border border-slate-100">
        {trustPartners.map((partner) => (
          <PartnerLogo
            key={partner.name}
            name={partner.name}
            logo={partner.logo}
          />
        ))}
      </div>
    </section>
  );
}
