"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";

interface DiseaseCard {
  id: string;
  title: string;
  description: string;
  borderColor: string; // Tailwind border color class for left vertical line
}

interface ComplianceStandard {
  id: string;
  title: string;
  subtitle: string;
}

const diseaseCards: DiseaseCard[] = [
  {
    id: "oncology",
    title: "Oncology and Cancer Treatment Studies",
    description:
      "Our literature review experts provide detailed insights into cancer research, including emerging trends in oncology, the development of new chemotherapy agents, and innovative treatment methodologies like immunotherapy and targeted therapy.",
    borderColor: "border-amber-400",
  },
  {
    id: "neurological",
    title: "Neurological Disorders and Therapeutic Approaches",
    description:
      "We conduct comprehensive literature review writing for the current state of research on neurological disorders such as Alzheimer’s, Parkinson’s, and multiple sclerosis.",
    borderColor: "border-purple-400",
  },
  {
    id: "infectious",
    title: "Infectious Diseases and Immunology Studies",
    description:
      "Our scientific literature review service focuses on the latest developments in infectious diseases and immunology, including vaccines, antimicrobial resistance patterns, and immune response mechanisms.",
    borderColor: "border-emerald-400",
  },
];

const complianceStandards: ComplianceStandard[] = [
  {
    id: "prisma",
    title: "PRISMA",
    subtitle: "— For systematic reviews",
  },
  {
    id: "cochrane",
    title: "Cochrane Handbook",
    subtitle: "— For methodological rigor and review",
  },
  {
    id: "equator",
    title: "EQUATOR Network Guidelines",
    subtitle: "— To ensure proper reporting and structure",
  },
  {
    id: "amstar2",
    title: "AMSTAR 2",
    subtitle: "— For the critical appraisal of review quality",
  },
  {
    id: "icmje",
    title: "ICMJE & Journal-Specific Guidelines",
    subtitle: "— For publication-ready formatting and ethical standards",
  },
  {
    id: "pico-peco",
    title: "PICO/PECO Frameworks",
    subtitle: "— For clinical question formulation and gap identification",
  },
];

export default function DiseaseBasedAndComplianceSection() {
  return (
    <div className="w-full text-slate-800">
      {/* ========================================================= */}
      {/* 1. TOP CTA BANNER                                          */}
      {/* ========================================================= */}
      <section className="w-full bg-[#062c21] py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Accelerate your Literature Review & Gap Analyses with Pubrica
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Partner with our expert team to navigate complex research
            landscapes, uncover critical knowledge gaps, and craft high-quality
            literature review service reports that strengthen your manuscript
            and boost publication success.
          </p>
          <div>
          <GetFreeQuoteButton/>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DISEASE-BASED LITERATURE REVIEW SERVICES                */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
              Disease-Based Literature Review Services By Pubrica
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
              At Pubrica, we provide specialized disease-based{" "}
              <span className="text-sky-600 font-medium">
                medical literature review service
              </span>{" "}
              tailored to meet the research needs of clinicians, medical
              researchers, healthcare professionals, and academic scholars. Our
              team of subject-matter experts conducts focused reviews on
              specific diseases, conditions, or therapeutic areas, offering
              scientifically rigorous insights that support clinical research,
              drug development, regulatory submissions, and evidence-based
              practice.
            </p>
          </div>

          {/* Cards Grid with Vertical Accent Lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diseaseCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 ${card.borderColor} space-y-4 flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-5xl">
            Each service is designed to provide healthcare professionals and
            researchers with the latest scientific knowledge, aiding in disease
            understanding, treatment development, and patient outcomes.
            Pubrica’s{" "}
            <span className="text-sky-600 font-medium">
              medical literature review service
            </span>{" "}
            ensures you stay informed with the most recent and relevant
            findings.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR APPROACH                                           */}
      {/* ========================================================= */}
      <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Our Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            Pubrica offers systematic, detailed, and methodologically sound
            literature review service and{" "}
            <span className="text-sky-600 font-medium">
              research gap analysis service
            </span>{" "}
            to facilitate evidence-based decision-making in healthcare. Our
            services objectively appraise and synthesize the latest clinical
            evidence, enabling clients to incorporate vetted research findings
            into clinical, procedural, policy documents, grant proposals, and
            the development of medical products.
          </p>

          {/* Sub Header Block */}
          <div className="bg-[#0b2d28] text-white px-6 py-3 rounded-t-md font-semibold text-sm sm:text-base flex items-center gap-2">
            <span>−</span>
            <span>Our expert medical writers and domain specialists</span>
          </div>

          {/* Bullet Points */}
          <div className="bg-white p-6 rounded-b-md border border-t-0 border-slate-200 shadow-sm">
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
              <li>
                Use databases, including PubMed, Embase, Cochrane Library,
                Scopus, and CINAHL to conduct targeted, thorough, and
                reproducible literature searches
              </li>
              <li>
                Utilize evidence-based processes like{" "}
                <span className="text-sky-600 font-medium">PRISMA</span>,{" "}
                <span className="text-sky-600 font-medium">MOOSE</span>, and{" "}
                <span className="text-sky-600 font-medium">AMSTAR 2</span>{" "}
                processes for systematic and scoping reviews
              </li>
              <li>
                Appraise the quality of evidence using GRADE, Jadad scale, or
                Newcastle-Ottawa tools so that each study appraised and graded
                is recorded transparently
              </li>
              <li>
                Summarize using true qualitative, quantitative, or both
                quantitative and qualitative methods, including{" "}
                <span className="text-sky-600 font-medium">meta-analysis</span>,
                narrative synthesis, or evidence mapping
              </li>
              <li>
                Produce clinically-focused summaries and tables for PICOT
                characteristics and clinical endpoints, which form a foundation
                for{" "}
                <span className="text-sky-600 font-medium">
                  research support services
                </span>
                .
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            Our literature review help complies with{" "}
            <span className="text-sky-600 font-medium">ICMJE</span>,{" "}
            <span className="text-sky-600 font-medium">CONSORT</span>, and{" "}
            <span className="text-sky-600 font-medium">EQUATOR</span> standards,
            enhancing the credibility, reproducibility, and academic value of
            the research.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR COMPLIANCE AND GUIDELINE STANDARDS                */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
              At Pubrica, we adhere to globally recognized guidelines to ensure
              quality, transparency, and credibility in every literature review
              writing service and{" "}
              <span className="text-sky-600 font-medium">
                research gap analysis service
              </span>{" "}
              delivered.
            </p>
          </div>

          {/* Compliance Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceStandards.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center min-h-[120px]"
              >
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SAMPLE WORK & DOWNLOAD REPORT BANNER                   */}
      {/* ========================================================= */}
      <section className="w-full bg-[#f0fdf4] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs h-72 sm:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/research-services/literature-review-and-gap/image-7.webp"
                alt="Two academic researchers discussing literature review documents"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: Content and Action Buttons */}
          <div className="md:col-span-7 space-y-6">
            {/* Top Subsection */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Literature Review and Gap Analyses Sample Work
              </h3>
              <Link
                href="/insights/patient-safety-culture-among-operating-theatre-nurses-in-operating-room"
                className="inline-block bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200 no-underline"
              >
                Discover More
              </Link>
            </div>

            {/* Bottom Subsection */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Explore our sample literature review writing service for PhD
                thesis work, developed to meet journal-specific formatting
                requirements, methodological standards (e.g., PRISMA), and
                submission timelines for successful academic or clinical
                publication.
              </p>
              <Link
                href="/insights/sample-work"
                className="inline-block bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200 no-underline"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
