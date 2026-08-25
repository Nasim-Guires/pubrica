import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";

export default function LiteratureReviewHeroAndIntroSection() {
  return (
    <div className="w-full">
      {/* --- 1. HERO BANNER --- */}
      <section
        aria-labelledby="hero-heading"
        className="w-full bg-[#0d2a2a] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-emerald-950"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="border border-white/80 rounded-lg p-6 sm:p-10 bg-white/5 backdrop-blur-sm shadow-xl">
            <h1
              id="hero-heading"
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Literature Review and Gap Analyses
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
              Researchers and clinicians often struggle to craft literature
              reviews due to time constraints. Pubrica&apos;s expert team helps
              overcome this with a thorough literature review service and
              research gap analysis service.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. INTRODUCTION BLOCK (DECISION MAKING) --- */}
      <section
        aria-labelledby="intro-decision-heading"
        className="w-full bg-slate-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-slate-800"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <h2
                id="intro-decision-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
              >
                Literature Reviews and Gap Analyses for Research-Driven Decision
                Making
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-700">
                Identify Research Gaps with Precision, Context, and Clarity
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Pubrica, we deliver in-depth, methodologically sound{" "}
                <Link
                  href="/services/research-services/literature-review-and-gap"
                  className="text-sky-600 hover:underline font-medium"
                >
                  literature review writing service
                </Link>{" "}
                and research gap analysis to support the development of research
                proposals, scholarly publications,{" "}
                <Link
                  href="/services/research-services/systematic-review"
                  className="text-sky-600 font-medium"
                >
                  systematic reviews
                </Link>
                , clinical trial planning, and academic theses. Our team of
                experienced researchers and{" "}
                <Link
                  href="/subject-matter-experts"
                  className="text-sky-600 hover:underline font-medium"
                >
                  subject-matter experts
                </Link>{" "}
                critically assesses existing literature to synthesise current
                knowledge, uncover inconsistencies, and pinpoint precise
                research gaps that warrant further investigation.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We specialise in conducting systematic review article writing
                across medical, pharmaceutical, and life sciences, using
                globally accepted methodologies (e.g., PRISMA, JBI, MOOSE).
              </p>

              <div className="pt-2">
                <GetFreeQuoteButton />
              </div>
            </div>

            {/* Right Image Block */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden  p-3 ">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/research-services/literature-review-and-gap/Literature-Reviews-and-Gap-Analyses-for-Research.webp"
                    alt="Researcher writing and reviewing academic papers for gap analysis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- 3. WRITING & REWRITING SERVICES BLOCK --- */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Literature Review & Gap Analyses: Writing & Rewriting Services
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-slate-700">
              A scientific literature review service for Publication Support Services
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Pubrica&apos;s team of skilled editors and writers specializes in
              conducting thorough literature review writing service for PhD thesis,{" "}
              <Link
                href="/academy/literature-review/guides-write-research-literature-review/"
                className="text-sky-600"
              >
                literature review experts
              </Link>
              , and{" "}
              <Link
                href="/services/research-services/literature-review-and-gap/literature-review-research-gap-services/"
                className="text-sky-600"
              >
                research gap analysis service
              </Link>
              , essential for crafting{" "}
              <Link
                href="/services/research-services/literature-review-and-gap/open-access-research-impact/"
                className="text-sky-600"
              >
                high-quality scientific research
              </Link>{" "}
              articles.
            </p>

            <ul className="space-y-3 pt-2 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <p>
                  Get an expert to identify, write, and structure your comprehensive
                  academic literature review writing service and gap analyses report
                  efficiently, ensuring it meets professional and quality standards while
                  accurately conveying your case study.
                </p>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <p>
                  Customize your{" "}
                  <Link
                    href="/academy/literature-review/literature-review-in-research-methodology/"
                    className="text-sky-600"
                  >
                    professional literature review service
                  </Link>{" "}
                  report&apos;s scope to align with your specific requirements and
                  budget, providing a tailored approach for your unique needs.
                </p>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <p>
                  Benefit from{" "}
                  <Link
                    href="/academy/literature-review/importance-of-literature-review-in-research/"
                    className="text-sky-600"
                  >
                    literature review consulting service
                  </Link>{" "}
                  by a professional medical expert who assists in identifying relevant
                  literature and connects with your research question (PCOS), leveraging
                  our{" "}
                  <Link
                    href="/services/research-services/systematic-review/"
                    className="text-sky-600"
                  >
                    systematic review consulting
                  </Link>{" "}
                  services.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
