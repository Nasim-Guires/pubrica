import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";

export default function LiteratureReviewHeroAndIntroSection() {
  return (
    <div className="w-full">
      {/* --- 1. HERO BANNER --- */}

      <HeroBanner
        title="Literature Review and Gap Analyses"
        description="Researchers and clinicians often struggle to craft literature reviews due to time constraints. Pubrica's expert team helps overcome this with a thorough literature review service and research gap analysis service."
        headingAs="h1"
      />

      {/* --- 2. INTRODUCTION BLOCK (DECISION MAKING) --- */}
 <section
  aria-labelledby="intro-decision-heading"
  className="w-full bg-slate-100 py-6 sm:py-7 px-4 sm:px-6 lg:px-8 text-slate-800"
>
  <div className="max-w-7xl mx-auto space-y-8">
    <div>
      <h2
        id="intro-decision-heading"
        className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2"
      >
        Literature Reviews and Gap Analyses for Research-Driven Decision Making
      </h2>

      <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-5">
        Identify Research Gaps with Precision, Context, and Clarity
      </h3>

      <div className="flow-root">
        {/* Right Image Block (Retaining exact original image styling/design) */}
        <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[480px]">
          <div className="relative w-full max-w-md h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden p-3">
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

        <div className="space-y-4 text-slate-600">
          <p className="text-sm sm:text-base leading-relaxed">
            At Pubrica, we deliver in-depth, methodologically sound{" "}
            <Link
              href="/academy/research-services/literature-review-tips-introduction-discussion-sections/"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              literature review writing service
            </Link>{" "}
            and research gap analysis to support the development of research proposals, scholarly publications,{" "}
            <Link
              href="/services/research-services/systematic-review/"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              systematic reviews
            </Link>
            , clinical trial planning, and academic theses. Our team of experienced researchers and{" "}
            <Link
              href="/subject-matter-experts"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              subject-matter experts
            </Link>{" "}
            critically assesses existing literature to synthesise current knowledge, uncover inconsistencies, and pinpoint precise research gaps that warrant further investigation.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            We specialise in conducting systematic review article writing across medical, pharmaceutical, and life sciences, using globally accepted methodologies (e.g., PRISMA, JBI, MOOSE).
          </p>

          <div className="pt-2">
            <GetFreeQuoteButton />
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
        Pubrica&apos;s team of skilled editors and writers specializes in conducting thorough literature review writing service for PhD thesis,{" "}
        <Link
          href="/academy/literature-review/guides-write-research-literature-review/"
          className="text-blue-600 font-medium no-underline hover:no-underline"
        >
          literature review experts
        </Link>
        , and{" "}
        <Link
          href="/services/research-services/literature-review-and-gap/literature-review-research-gap-services/"
          className="text-blue-600 font-medium no-underline hover:no-underline"
        >
          research gap analysis service
        </Link>
        , essential for crafting{" "}
        <Link
          href="/services/research-services/literature-review-and-gap/open-access-research-impact/"
          className="text-blue-600 font-medium no-underline hover:no-underline"
        >
          high-quality scientific research
        </Link>{" "}
        articles.
      </p>

      <div className="pt-2 space-y-4">
        <div className="space-y-4 pl-4">
          <div className="flex items-start gap-2.5">
            <span className="text-red-600 font-bold shrink-0">→</span>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Get an expert to identify, write, and structure your comprehensive academic literature review writing service and gap analyses report efficiently, ensuring it meets professional and quality standards while accurately conveying your case study.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-red-600 font-bold shrink-0">→</span>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Customize your{" "}
              <Link
                href="/academy/literature-review/literature-review-in-research-methodology/"
                className="text-blue-600 font-medium no-underline hover:no-underline"
              >
                professional literature review service
              </Link>{" "}
              report&apos;s scope to align with your specific requirements and budget, providing a tailored approach for your unique needs.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-red-600 font-bold shrink-0">→</span>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Benefit from{" "}
              <Link
                href="/academy/literature-review/importance-of-literature-review-in-research/"
                className="text-blue-600 font-medium no-underline hover:no-underline"
              >
                literature review consulting service
              </Link>{" "}
              by a professional medical expert who assists in identifying relevant literature and connects with your research question (PCOS), leveraging our{" "}
              <Link
                href="/services/research-services/systematic-review/"
                className="text-blue-600 font-medium no-underline hover:no-underline"
              >
                systematic review consulting
              </Link>{" "}
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
