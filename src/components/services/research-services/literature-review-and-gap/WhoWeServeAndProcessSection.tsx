"use client";

import Image from "next/image";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
}

interface StepItem {
  number: number;
  title: string;
  description: string;
}

const audienceCards: AudienceCard[] = [
  {
    id: "pharma-biotech",
    title: "Pharmaceutical and Biotech Companies",
    description:
      "For drug development documentation, mechanism-of-action reviews, safety/efficacy evaluations, and literature support for regulatory dossiers (e.g., IND, NDA, CTD).",
    imageSrc: "/images/services/pharma-biotech.jpg",
    altText: "Pharmaceutical and Biotech research environment",
  },
  {
    id: "medical-devices",
    title: "Medical Device and Diagnostic Firms",
    description:
      "To support clinical evaluation reports (CER) (CE marking, 510(k), PMA), white papers, and technical documentation for regulatory approvals (e.g., EU MDR, FDA).",
    imageSrc: "/images/services/medical-devices.jpg",
    altText: "Medical Device and Diagnostic firm software",
  },
  {
    id: "healthcare-providers",
    title: "Healthcare Providers and Clinical Practitioners",
    description:
      "To support diagnostic decisions, treatment planning, CME, and practice guideline development through structured synthesis of recent clinical evidence.",
    imageSrc: "/images/services/healthcare-providers.jpg",
    altText: "Healthcare provider holding patient hands in care",
  },
  {
    id: "academic-institutions",
    title: "Academic and Research Institutions",
    description:
      "For dissertation development, thesis writing, systematic review, topic mapping, research consultancy, gap analysis, and peer-reviewed journal publications, requiring methodologically sound and publication-ready literature review is required.",
    imageSrc: "/images/services/academic-institutions.jpg",
    altText: "Academic researcher reading open books with stationery",
  },
  {
    id: "regulatory-agencies",
    title: "Regulatory & Government Agencies",
    description:
      "Evidence gathering for public health programs, Data reviews for health policy decisions, and technical documentation for compliance and surveillance",
    imageSrc: "/images/services/regulatory-agencies.jpg",
    altText: "Regulatory compliance binder on desk with executive",
  },
  {
    id: "hospitals-research",
    title: "Hospitals and Medical Research Units",
    description:
      "To facilitate clinical audits, protocol development, institutional ethics committee submissions, and internal training material based on updated clinical findings.",
    imageSrc: "/images/services/hospitals-research.jpg",
    altText: "Medical team and hospital research unit holding hands",
  },
  {
    id: "cros",
    title: "Contract Research Organizations (CROs)",
    description:
      "To aid in clinical trial documentation, literature-based justification of endpoints, and background sections for study protocols or investigator brochures.",
    imageSrc: "/images/services/cros.jpg",
    altText: "Contract Research Organization document review stack",
  },
  {
    id: "hta-market-access",
    title: "Health Technology Assessment (HTA) & Market Access Teams",
    description:
      "Cost-effectiveness and value demonstration. Comparative effectiveness and outcomes evidence and support for payer submissions and value dossiers.",
    imageSrc: "/images/services/hta-market-access.jpg",
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
      "Articles are screened using PRISMA or equivalent guidelines. We assess titles, abstracts, and full texts to select high-quality, relevant studies that align with your review’s objective.",
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
    description:
      "Our experts analyse the evidence to identify gaps in knowledge, under-researched areas, inconsistencies, or methodological limitations, helping to shape future research questions and research gap analysis service reports.",
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
      "You’ll receive the draft for feedback. After revisions and refinements based on your input, we deliver the final version ready for submission or integration into your project.",
  },
];

export default function WhoWeServeAndProcessSection() {
  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* SECTION 1: WHO WE SERVE (HOVER CARDS WITH BLACK OVERLAY)  */}
      {/* ========================================================= */}
      <section
        aria-labelledby="who-we-serve-heading"
        className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8 text-slate-800"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <header className="space-y-3">
            <h2
              id="who-we-serve-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              Who We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
              At Pubrica, our{" "}
              <span className="text-sky-600 font-medium">
                literature review experts
              </span>{" "}
              are trusted by a diverse global clientele, each with distinct
              research goals and evidence needs. We tailor our methodology and
              deliverables to meet the expectations of:
            </p>
          </header>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.id}
                className="group relative h-64 sm:h-72 w-full rounded-lg overflow-hidden cursor-pointer shadow-md border border-slate-200 transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Default State Gradient (Bottom overlay for default title visibility) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Default Title Container */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-base sm:text-lg font-bold leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Hover State: Full Solid Black Overlay */}
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
      {/* SECTION 2: HOW OUR SERVICE WORKS (STEP-BY-STEP PROCESS)   */}
      {/* ========================================================= */}
      <section
        aria-labelledby="how-it-works-heading"
        className="w-full bg-[#e2e8f0]/40 py-16 px-4 sm:px-6 lg:px-8 text-slate-800 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center space-y-3 max-w-4xl mx-auto">
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight"
            >
              How Our Literature Review & Gap Analyses Service Works
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-[#0e3b38]">
              Our Step-By-Step Process
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Pubrica, we follow a structured, evidence-based literature
              review writing service and{" "}
              <span className="text-sky-600 font-medium">
                research gap analysis service
              </span>{" "}
              approach. Our step-by-step process ensures scientific accuracy,
              clarity, and alignment with your research objectives, whether for
              academic publication, clinical development, or regulatory
              submissions.
            </p>
          </header>

          {/* Flow Grid with Connecting Arrows */}
          <div className="space-y-8">
            {/* ROW 1: Steps 1 -> 2 -> 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Step 1 */}
              <StepCard step={processSteps[0]} />

              {/* Arrow 1 -> 2 */}
              <div className="hidden md:flex justify-center text-slate-600">
                <span className="text-2xl font-bold">→</span>
              </div>

              {/* Step 2 */}
              <StepCard step={processSteps[1]} />

              {/* Arrow 2 -> 3 */}
              <div className="hidden md:flex justify-center text-slate-600">
                <span className="text-2xl font-bold">→</span>
              </div>

              {/* Step 3 */}
              <StepCard step={processSteps[2]} />
            </div>

            {/* Downward Arrow Row (Step 3 -> Step 4) */}
            <div className="hidden md:flex justify-end pr-[14%] text-slate-600">
              <span className="text-2xl font-bold">↓</span>
            </div>

            {/* ROW 2: Steps 6 <- 5 <- 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Step 6 */}
              <StepCard step={processSteps[5]} />

              {/* Arrow 6 <- 5 */}
              <div className="hidden md:flex justify-center text-slate-600">
                <span className="text-2xl font-bold">←</span>
              </div>

              {/* Step 5 */}
              <StepCard step={processSteps[4]} />

              {/* Arrow 5 <- 4 */}
              <div className="hidden md:flex justify-center text-slate-600">
                <span className="text-2xl font-bold">←</span>
              </div>

              {/* Step 4 */}
              <StepCard step={processSteps[3]} />
            </div>

            {/* Downward Arrow Row (Step 6 -> Step 7) */}
            <div className="hidden md:flex justify-start pl-[14%] text-slate-600">
              <span className="text-2xl font-bold">↓</span>
            </div>

            {/* ROW 3: Steps 7 -> 8 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Step 7 */}
              <StepCard step={processSteps[6]} />

              {/* Arrow 7 -> 8 */}
              <div className="hidden md:flex justify-center text-slate-600">
                <span className="text-2xl font-bold">→</span>
              </div>

              {/* Step 8 */}
              <StepCard step={processSteps[7]} />

              {/* Empty slot for symmetry */}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* Helper Sub-Component for Step Cards */
}
function StepCard({ step }: { step: StepItem }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#124d47]/20 p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[280px]">
      {/* Number Badge */}
      <div className="w-12 h-12 rounded-full bg-[#0e3b38] text-white flex items-center justify-center text-lg font-bold mb-4 shadow">
        {step.number}
      </div>

      {/* Title */}
      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
        {step.title}
      </h4>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
