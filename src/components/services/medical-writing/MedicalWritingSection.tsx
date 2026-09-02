import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";
import Link from "next/link";
import React from "react";

export default function MedicalWritingSection(): React.ReactElement {
  return (
    <div className="w-full font-sans text-slate-800">
      {/* Dark Hero Banner */}
      <HeroBanner
        title="Medical Writing"
        description="Pubrica provides expert medical writing services on manuscripts, regulatory documents, and other educational materials catered for healthcare and research."
        headingAs="h1"
      />

      {/* Main Content Section */}
      <section className="w-full bg-[#f8f9f9] py-6 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-snug">
            Medical writing Services for Life Sciences, Pharma and Research:
            Solving Complexity with Clarity
          </h2>

          {/* Subheading Lead Paragraph */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            To translate your scientific genius into message-driven content that
            informs, complies, educates and persuades – without compromising
            accuracy and credibility
          </p>

          {/* Bulleted Points */}
          <ul className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="text-red-600 text-base leading-none mt-0.5">
                •
              </span>
              <span>
                Translate complex data submissions into regulatory-compliant
                submissions
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-600 text-base leading-none mt-0.5">
                •
              </span>
              <span>
                Comply with rigorous global regulations (SFDA, FDA, EMA, MDR,{" "}
                <Link
                  href="/services/medical-writing/ich-guidelines-clinical-trials-drug-development"
                  className="text-blue-600 no-underline hover:no-underline"
                >
                  ICH guidelines
                </Link>
                )
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-600 text-base leading-none mt-0.5">
                •
              </span>
              <span>Publish content in high-impact journals</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-600 text-base leading-none mt-0.5">
                •
              </span>
              <span>
                Educate healthcare professionals and patients in a clear,
                ethical, and engaging manner
              </span>
            </li>
          </ul>

          {/* Paragraph 1 */}
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
            Many face an incomplete internal resource, intricate regulations,
            article rejection, or variable quality of content. At Pubrica, we
            can provide clinical writing and{" "}
            <Link href="/academy/medical-writing/differences-between-scientific-and-medical-writing" className="text-blue-600 no-underline hover:no-underline">
              medical writing
            </Link>{" "}
            that turn medical language into content that engages, entertains and
            delivers high quality. Each of our medical writers is trained to
            combine scientific expertise, legal requirements, and accuracy of
            content, supporting the entire life sciences continuum. Whether
            submitting to regulatory bodies, publishing in journals, introducing
            a new therapy, or educating patients, our team of medical experts at
            Pubrica will provide comprehensive medical and{" "}
            <Link
              href="/services/research-services/scientific-writing"
              className="text-blue-600 no-underline hover:no-underline"
            >
              scientific writing services
            </Link>{" "}
            during each stage of the product lifecycle, including early-stage
            research, regulatory submission, and patient communication.
          </p>

          {/* Paragraph 2 */}
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Our writer, editor, and content writers have expertise across
            different therapeutic areas, and we team with academic researchers
            and authors, pharmaceutical, biotechnology, medical device
            companies, digital health innovators and clinical and contract
            research organizations (CRO) to produce scientifically accurate,
            regulatory-compliant, and target audience-specific content.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <GetFreeQuoteButton />
            <Link
              href="/uploads/medical-writing/Medical-Writing_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-sm font-bold px-6 py-3 rounded hover:bg-white hover:text-black transition-colors"
            >
              View Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
