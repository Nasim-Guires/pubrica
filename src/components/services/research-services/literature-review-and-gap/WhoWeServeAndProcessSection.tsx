"use client";

import Image from "next/image";

interface AudienceCard {
  id: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  altText: string;
}

interface StepItem {
  number: number;
  title: string;
  description: React.ReactNode;
}

const audienceCards: AudienceCard[] = [
  {
    id: "pharma-biotech",
    title: "Pharmaceutical and Biotech Companies",
    description:
      "For drug development documentation, mechanism-of-action reviews, safety/efficacy evaluations, and literature support for regulatory dossiers (e.g., IND, NDA, CTD).",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Pharmaceutical-and-Biotech-Companies.png",
    altText: "Pharmaceutical and Biotech research environment",
  },
  {
    id: "medical-devices",
    title: "Medical Device and Diagnostic Firms",
    description:
      "To support clinical evaluation reports (CER) (CE marking, 510(k), PMA), white papers, and technical documentation for regulatory approvals (e.g., EU MDR, FDA).",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Medical-Device-and-Diagnostic-Firms.png",
    altText: "Medical Device and Diagnostic firm software",
  },
  {
    id: "healthcare-providers",
    title: "Healthcare Providers and Clinical Practitioners",
    description:
      "To support diagnostic decisions, treatment planning, CME, and practice guideline development through structured synthesis of recent clinical evidence.",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Healthcare-Providers-and-Clinical-Practitioners.png",
    altText: "Healthcare provider holding patient hands in care",
  },
  {
    id: "academic-institutions",
    title: "Academic and Research Institutions",
    description: (
      <>
        For dissertation development, thesis writing, systematic review, topic mapping,{" "}
        <a href="services/research-services/literature-review-and-gap" className="text-sky-500 hover:underline">
          research consultancy
        </a>
        , gap analysis, and peer-reviewed journal publications, requiring methodologically sound and publication-ready literature review is required.
      </>
    ),
    imageSrc:
      "/images/research-services/literature-review-and-gap/Academic-and-Research-Institutions.png",
    altText: "Academic researcher reading open books with stationery",
  },
  {
    id: "regulatory-agencies",
    title: "Regulatory & Government Agencies",
    description:
      "Evidence gathering for public health programs, Data reviews for health policy decisions, and technical documentation for compliance and surveillance",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Regulatory-Government-Agencies.png",
    altText: "Regulatory compliance binder on desk with executive",
  },
  {
    id: "hospitals-research",
    title: "Hospitals and Medical Research Units",
    description:
      "To facilitate clinical audits, protocol development, institutional ethics committee submissions, and internal training material based on updated clinical findings.",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Hospitals-and-Medical-Research-Units.png",
    altText: "Medical team and hospital research unit holding hands",
  },
  {
    id: "cros",
    title: "Contract Research Organizations (CROs)",
    description:
      "To aid in clinical trial documentation, literature-based justification of endpoints, and background sections for study protocols or investigator brochures.",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Contract-Research-Organizations-CROs.png",
    altText: "Contract Research Organization document review stack",
  },
  {
    id: "hta-market-access",
    title: "Health Technology Assessment (HTA) & Market Access Teams",
    description:
      "Cost-effectiveness and value demonstration. Comparative effectiveness and outcomes evidence and support for payer submissions and value dossiers.",
    imageSrc:
      "/images/research-services/literature-review-and-gap/Health-Technology-Assessment-HTA-Market-Access-Teams.png",
    altText: "Health Technology Assessment team analyzing data graphs",
  },
];

const processSteps: StepItem[] = [
  {
    number: 1,
    title: "Initial Consultation & Requirement Gathering",
    description:
      "We begin by understanding your research objectives, target audience (e.g., journals, grant agencies), and specific areas of interest or concern. This ensures that our literature review help is tailored to your academic or clinical goals.",
  },
  {
    number: 2,
    title: "Protocol Development & Scope Definition",
    description:
      "Based on your input, we define the review protocol, choosing the type of review (e.g., Systematic, Scoping, Narrative, etc.), databases, inclusion/exclusion criteria, and keywords to ensure methodological rigor.",
  },
  {
    number: 3,
    title: "Comprehensive Literature Search",
    description:
      "Our team conducts a thorough search across multiple databases such as PubMed, Scopus, Embase, Web of Science, and more. Grey literature and relevant guidelines are also included, if needed, leveraging our scientific literature review service.",
  },
  {
    number: 4,
    title: "Screening & Selection of Studies",
    description:
      "Articles are screened using PRISMA or equivalent guidelines. We assess titles, abstracts, and full texts to select high-quality, relevant studies that align with your review's objective.",
  },
  {
    number: 5,
    title: "Critical Appraisal & Data Extraction",
    description:
      "Selected studies undergo quality appraisal using standardized tools. Key data are extracted systematically to identify themes, patterns, and contradictions in the literature.",
  },
  {
    number: 6,
    title: "Gap Analysis & Insight Generation",
    description: (
      <>
        Our experts analyse the evidence to identify gaps in knowledge, under-researched areas, inconsistencies, or methodological limitations, helping to shape future research questions and{" "}
        <a href="/services/research-services/literature-review-and-gap/literature-review-and-gap-literature-review-support-chronological-vs-thematic" className="text-sky-500 ">
          research gap analysis service
        </a>{" "}
        reports.
      </>
    ),
  },
  {
    number: 7,
    title: "Drafting & Reporting",
    description:
      "A structured, well-written professional literature review service is created following the required format (e.g., PRISMA, EQUATOR, journal-specific guidelines). We ensure clarity, coherence, and academic integrity.",
  },
  {
    number: 8,
    title: "Review, Feedback & Finalization",
    description:
      "You'll receive the draft for feedback. After revisions and refinements based on your input, we deliver the final version ready for submission or integration into your project.",
  },
];

export default function WhoWeServeAndProcessSection() {
  return (
    <div className="w-full font-sans">
      {/* ========================================================= */}
      {/* SECTION 1: WHO WE SERVE                                   */}
      {/* ========================================================= */}
      <section
        aria-labelledby="who-we-serve-heading"
        className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8 text-slate-800"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="space-y-3">
            <h2
              id="who-we-serve-heading"
              className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight"
            >
              Who We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
              At Pubrica, our{" "}
              <a href="/academy/research-services/literature-review-tips-introduction-discussion-sections" className="text-sky-500 ">
                literature review experts
              </a>{" "}
              are trusted by a diverse global clientele, each with distinct
              research goals and evidence needs. We tailor our methodology and
              deliverables to meet the expectations of:
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.id}
                className="group relative h-64 sm:h-72 w-full rounded-lg overflow-hidden cursor-pointer shadow-md border border-slate-200 transition-all duration-300"
              >
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-base sm:text-lg font-bold leading-snug">
                    {card.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-start z-20 overflow-y-auto">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: PROCESS STEP-BY-STEP                           */}
      {/* ========================================================= */}
      <section
        aria-labelledby="how-it-works-heading"
        className="w-full bg-[#f4f7f6] py-16 px-4 sm:px-6 lg:px-8 text-slate-800 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-center space-y-2 max-w-3xl mx-auto">
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight"
            >
              How Our Literature Review & Gap Analyses Service Works
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0e3b38]">
              Our Step-By-Step Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              At Pubrica, we follow a structured, evidence-based literature review writing service and{" "}
              <a href="/services/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine" className="text-sky-500 hover:underline">
                research gap analysis service
              </a>{" "}
              approach. Our step-by-step process ensures scientific accuracy, clarity, and alignment with your research objectives, whether for academic
            </p>
          </header>

          {/* Flow Grid with Exact Arrow Placements */}
          <div className="flex flex-col space-y-6">
            {/* ROW 1: 1 -> 2 -> 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="relative">
                <StepCard step={processSteps[0]} />
                <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold z-10">→</span>
              </div>
              <div className="relative">
                <StepCard step={processSteps[1]} />
                <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold z-10">→</span>
              </div>
              <div className="relative">
                <StepCard step={processSteps[2]} />
                <span className="hidden md:block absolute right-1/2 -bottom-5 translate-x-1/2 text-slate-700 text-lg font-bold z-10">↓</span>
              </div>
            </div>

            {/* ROW 2: 6 <- 5 <- 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="relative order-3 md:order-1">
                <StepCard step={processSteps[5]} />
                <span className="hidden md:block absolute right-1/2 -bottom-5 translate-x-1/2 text-slate-700 text-lg font-bold z-10">↓</span>
              </div>
              <div className="relative order-2 md:order-2">
                <StepCard step={processSteps[4]} />
                <span className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold z-10">←</span>
              </div>
              <div className="relative order-1 md:order-3">
                <StepCard step={processSteps[3]} />
                <span className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold z-10">←</span>
              </div>
            </div>

            {/* ROW 3: 7 -> 8 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="relative">
                <StepCard step={processSteps[6]} />
                <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-700 text-lg font-bold z-10">→</span>
              </div>
              <div className="relative">
                <StepCard step={processSteps[7]} />
              </div>
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ step }: { step: StepItem }) {
  return (
    <div className="bg-white rounded-xl border border-[#0e3b38]/40 p-6 flex flex-col items-center text-center shadow-sm h-full min-h-[290px] justify-start">
      {/* Circle Badge */}
      <div className="w-10 h-10 rounded-full bg-[#0e3b38] text-white flex items-center justify-center text-base font-bold mb-4">
        {step.number}
      </div>

      {/* Title */}
      <h4 className="text-sm sm:text-base font-bold text-[#0e3b38] mb-3 leading-snug">
        {step.title}
      </h4>

      {/* Description */}
      <div className="text-xs text-slate-600 leading-relaxed">
        {step.description}
      </div>
    </div>
  );
}