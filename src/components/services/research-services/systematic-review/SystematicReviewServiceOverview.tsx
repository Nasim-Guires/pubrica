import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SystematicReviewOverview: React.FC = () => {
  return (
    <section
      aria-label="Systematic Review Writing & Rewriting Services"
      className="w-full font-sans text-gray-900 leading-relaxed"
    >
      {/* Top Banner Header - Full Width Edge-to-Edge Breakout */}
      <header className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0d1d25] text-white text-center py-10 px-5 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Systematic Review Writing &amp; Rewriting Services
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Pubrica delivers expert literature synthesis, methodological
            precision, and publication-ready documentation to enhance the
            scientific credibility and impact of your research.
          </p>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Left Text Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2c3a] mb-3 leading-tight">
              Expert Systematic Review Services for Clinical and Evidence-Based
              Research
            </h2>

            <h3 className="text-base sm:text-lg text-[#0f2c3a] font-semibold mb-5 leading-snug">
              PRISMA, Cochrane &amp; PROSPERO-Compliant Reviews for Clinical,
              Healthcare, and Evidence-Based Research
            </h3>

            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              Crafting a high-quality{" "}
              <Link
                href="/insights/sample-work/bariatric-surgery-and-the-effects-of-cardiovascular-disease/"
                className="text-blue-600 hover:underline transition-colors font-medium"
              >
                systematic review manuscript writing services
              </Link>{" "}
              that complies with PRISMA guidelines,{" "}
              <Link
                href="/services/research-services/systematic-review/"
                className="text-blue-600 hover:underline transition-colors font-medium"
              >
                Cochrane methodology
              </Link>
              , and PROSPERO registration standards can be challenging, especially
              for busy researchers and clinicians. At Pubrica, our team of
              experienced systematic literature review editors, data extractors,
              and medical and life science PhD writers delivers comprehensive{" "}
              <Link
                href="/academy/systematic-review/prisma-systematic-review-guidelines/"
                className="text-blue-600 hover:underline transition-colors font-medium"
              >
                systematic review
              </Link>{" "}
              and{" "}
              <Link
                href="/services/research-services/meta-analysis/"
                className="text-blue-600 hover:underline transition-colors font-medium"
              >
                meta-analysis services
              </Link>{" "}
              across diverse disciplines, including clinical medicine, public
              health, nutrition and functional foods, pharma regulatory
              submissions, AI and machine learning research, and social sciences.
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              We offer high-quality{" "}
              <Link
                href="/services/research-services/literature-review-and-gap/"
                className="text-blue-600 hover:underline transition-colors font-medium"
              >
                systematic review literature review support
              </Link>
              ,{" "}
              <Link
                href="/services/research-services/systematic-review/"
                className="text-blue-600 hover:underline transition-colors font-medium"
              >
                data extraction for systematic review
              </Link>
              , evidence synthesis, risk of bias measures, and statistical
              meta-analysis, ensuring methodological rigor, accuracy, and
              publication-ready quality. Our experts also identify key research
              gaps, highlighting missing or inadequate evidence to guide clinical
              decision-making, policy formulation, and future research priorities.
            </p>

            {/* CTA Button placeholder element */}
            <div className="pt-2">
              {/* <GetFreeQuoteButton /> */}
            </div>
          </div>

          {/* Right Image Column with Custom Backing Effect */}
          <div className="relative flex justify-center w-full pt-4 lg:pt-0">
            <div className="relative w-full max-w-[480px]">
              {/* Background Accent Box */}
              <div className="absolute top-5 -left-4 w-full h-full  rounded-2xl z-0" />

              {/* Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <Image
                  src="/images/research-services/systematic-review/Systematic-Review-Services-for-Clinical-and-Evidence-Based-Research.webp"
                  alt="Medical researchers analyzing systematic review data and clinical evidence"
                  width={800}
                  height={560}
                  className="w-full h-auto block object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* "Why Pubrica" Cards Grid */}
        <section aria-labelledby="why-pubrica-title" className="mb-12">
          <h2
            id="why-pubrica-title"
            className="text-2xl sm:text-3xl font-bold text-[#0f2c3a] mb-6"
          >
            Why Pubrica
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="bg-white border-l-4 border-amber-500 p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Proven Expertise
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Skilled{" "}
                <Link
                  href="/services/editing-and-translation/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  systematic review editing services
                </Link>
                , data extractors, and medical/life science PhD writers with
                experience in PRISMA, Cochrane, and PROSPERO-compliant reviews.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-white border-l-4 border-emerald-500 p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Comprehensive Services
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From literature search strategy development and Rayyan/Covidence
                screening to{" "}
                <Link
                  href="/services/research-services/systematic-review/risk-of-bias-assessment-guide/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  risk of bias assessment
                </Link>
                ,{" "}
                <Link
                  href="/academy/systematic-review/ai-systematic-review-services-pubrica/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  systematic review data extraction services
                </Link>
                , and{" "}
                <Link
                  href="/services/research-services/meta-analysis/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  meta-analysis
                </Link>{" "}
                reporting.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Industry Coverage
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Expertise in clinical medicine, public health, nutrition,
                functional foods, pharma regulatory submissions, AI and machine
                learning, and environmental risk assessment.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Publication Support
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <Link
                  href="/services/publication-support/journal-submission/complete-guide-to-writing-cover-letter-for-medical-journals/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  High-impact journal submission support
                </Link>
                ,{" "}
                <Link
                  href="/services/publication-support/journal-manuscript-formatting-services/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  systematic review journal formatting services
                </Link>
                , and submission assistance to boost acceptance in high-impact
                journals.
              </p>
            </article>

            {/* Card 5 */}
            <article className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Tailored Solutions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Flexible scope, depth, and budget to match your research needs
                while maintaining methodological rigor and publication-ready
                quality.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};