import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

export default function MedicalWritingSection(): React.ReactElement {
  return (
    <div className="w-full font-sans text-slate-800">
      {/* Dark Hero Banner */}
      <section className="w-full bg-gradient-to-b from-[#112220] to-[#1a3330] py-16 px-4 sm:px-6 lg:px-12 text-white flex justify-center items-center">
        <div className="max-w-4xl w-full border border-slate-300/40 rounded-sm p-8 sm:p-10 text-center bg-black/10 backdrop-blur-sm shadow-inner">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Medical Writing
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            Pubrica provides expert medical writing services on manuscripts,
            regulatory documents, and other educational materials catered for
            healthcare and research.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-[#f8f9f9] py-12 px-4 sm:px-6 lg:px-12">
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
                <a
                  href="#ich-guidelines"
                  className="text-sky-600 hover:underline"
                >
                  ICH guidelines
                </a>
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
            <a href="#medical-writing" className="text-sky-600 hover:underline">
              medical writing
            </a>{" "}
            that turn medical language into content that engages, entertains and
            delivers high quality. Each of our medical writers is trained to
            combine scientific expertise, legal requirements, and accuracy of
            content, supporting the entire life sciences continuum. Whether
            submitting to regulatory bodies, publishing in journals, introducing
            a new therapy, or educating patients, our team of medical experts at
            Pubrica will provide comprehensive medical and{" "}
            <a
              href="#scientific-writing"
              className="text-sky-600 hover:underline"
            >
              scientific writing services
            </a>{" "}
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
          <div className="flex flex-wrap items-center gap-4 pt-4">
           <GetFreeQuoteButton/>
            <button
              type="button"
              className="bg-[#b30000] hover:bg-[#8e0000] text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full transition-colors duration-200 shadow-sm cursor-pointer"
            >
              View Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
