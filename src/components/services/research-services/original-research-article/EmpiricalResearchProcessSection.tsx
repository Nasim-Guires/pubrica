import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Consultation",
    description: (
      <>
        To begin, we have a personalized consultation with the client to better
        understand their research question, methodology, target journal, and
        audience. Then we assign{" "}
        <Link
          href="/subject-matter-experts"
          className="text-sky-600 hover:underline"
        >
          subject-matter experts
        </Link>{" "}
        with relevant clinical or academic expertise to satisfy the
        client&apos;s needs.
      </>
    ),
  },
  {
    stepNumber: 2,
    title: "Framework Created",
    description: (
      <>
        Our team develops a detailed article framework, including study
        background, objectives, hypotheses, and methodology, aligned with your
        institution&apos;s or sponsor&apos;s requirements.
      </>
    ),
  },
  {
    stepNumber: 3,
    title: "Drafting",
    description: (
      <>
        Our writers develop each section (Abstract, Introduction, Methods,
        Results, Discussion) in line with target journal standards and relevant
        reporting guidelines (CONSORT, STROBE, PRISMA, ARRIVE, etc.). We also
        deliver empirical research paper writing services to match the
        methodological approach of your study.
      </>
    ),
  },
  {
    stepNumber: 4,
    title: "Statistical Analysis (Optional)",
    description: (
      <>
        We perform detailed quantitative or qualitative analysis using tools
        like SPSS, R, STATA, or NVivo. This includes descriptive statistics,
        inferential tests, and visual data presentation as required. Our
        Excel-based data analysis support ensures accuracy and clarity in your
        results.
      </>
    ),
  },
  {
    stepNumber: 5,
    title: "Review & Feedback",
    description: (
      <>
        We provide you with the full draft for review and incorporate your
        feedback. This iterative collaboration ensures the manuscript reflects
        your voice and meets both scientific and editorial standards.
      </>
    ),
  },
  {
    stepNumber: 6,
    title: "Language Editing & Plagiarism Check",
    description: (
      <>
        Professional editing ensures clarity, grammar, and consistency. We also
        perform a plagiarism check using industry-standard tools (e.g.,
        Turnitin/iThenticate) to ensure originality and compliance.
      </>
    ),
  },
  {
    stepNumber: 7,
    title: "Journal Submission Support (Optional)",
    description: (
      <>
        We assist with formatting the manuscript per journal requirements,
        preparing the cover letter, handling references, and uploading documents
        for submission. We also support responses to peer reviewer comments.
      </>
    ),
  },
];

export default function EmpiricalResearchProcessSection() {
  return (
    <section
      aria-labelledby="process-section-heading"
      className="w-full bg-slate-100 text-slate-800"
    >
      {/* --- Main Step-by-Step Flow --- */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <header className="text-center max-w-4xl mx-auto space-y-3">
          <h2
            id="process-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            How Our Empirical Research Service Works
          </h2>
          <h3 className="text-xl font-medium text-slate-700">
            Step-by-Step Process Designed for Physicians
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Each original research article developed at Pubrica follows a
            collaborative, peer-informed process that ensures technical
            accuracy, discipline-specific formatting, and readiness for
            submission to high-impact journals. Here&apos;s how we work:
          </p>
        </header>

        {/* Workflow Diagram Grid */}
        <div className="space-y-8">
          {/* Row 1: Steps 1 -> 2 -> 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
            {processSteps.slice(0, 3).map((step, idx) => (
              <div key={step.stepNumber} className="flex flex-col items-center">
                <article className="w-full h-full bg-white border border-slate-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.stepNumber}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h4>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </div>
                </article>
                {/* Horizontal Arrow (Desktop) */}
                {idx < 2 && (
                  <div
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 text-slate-400 text-2xl font-bold"
                    style={{ left: `${(idx + 1) * 33.33 - 1.5}%` }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Vertical Arrow Down between Step 3 & 4 */}
          <div className="flex justify-end pr-12 md:pr-24 text-slate-400 text-2xl font-bold my-2">
            ↓
          </div>

          {/* Row 2: Steps 6 <- 5 <- 4 (Snake Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
            {processSteps
              .slice(3, 6)
              .reverse()
              .map((step, idx) => (
                <div
                  key={step.stepNumber}
                  className="flex flex-col items-center"
                >
                  <article className="w-full h-full bg-white border border-slate-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {step.stepNumber}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h4>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </div>
                  </article>
                  {/* Horizontal Arrow Left (Desktop) */}
                  {idx < 2 && (
                    <div
                      className="hidden md:block absolute top-1/2 -translate-y-1/2 text-slate-400 text-2xl font-bold"
                      style={{ left: `${(idx + 1) * 33.33 - 1.5}%` }}
                    >
                      ←
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Vertical Arrow Down between Step 6 & 7 */}
          <div className="flex justify-start pl-12 md:pl-24 text-slate-400 text-2xl font-bold my-2">
            ↓
          </div>

          {/* Row 3: Step 7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-slate-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {processSteps[6].stepNumber}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {processSteps[6].title}
              </h4>
              <div className="text-sm text-slate-600 leading-relaxed">
                {processSteps[6].description}
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* --- Bottom Guarantee Banner --- */}
      <div className="bg-[#052e16] text-white py-10 px-4 sm:px-6 lg:px-8 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Guarantee Badge Graphic */}
            <div className="relative w-28 h-28 flex-shrink-0">
              <Image
                src="/images/publication-support/Satisfaction_Guarantee.webp"
                alt="100% Satisfaction Guarantee"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>

            {/* Banner Text */}
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Speed up Your Original Research Article Development with Pubrica
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Speed up your manuscript development with Pubrica&apos;s{" "}
                <strong className="text-white font-semibold">
                  ICMJE-compliant manuscript writing
                </strong>{" "}
                and experience scientifically rigorous, methodologically sound,
                and publication-ready outputs.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <GetFreeQuoteButton/>
          </div>
        </div>
      </div>
    </section>
  );
}
