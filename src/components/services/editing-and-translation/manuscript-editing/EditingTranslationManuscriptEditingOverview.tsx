import React from "react";
import Image from "next/image";
import Link from "next/link";

export const EditingTranslationManuscriptEditingOverview: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          Get Manuscript Published with Confidence | Expert Manuscript Editing
          Services
        </h2>

        {/* Subheading */}
        <p className="text-lg font-medium text-slate-700 mb-6 leading-relaxed">
          From manuscript preparation to journal publication, our expert editors
          provide high-quality academic and scientific manuscript editing
          services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Text Content & Bullet Points */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              Pubrica offers the most prestigious{" "}
              <Link
                href="/services/editing-and-translation/manuscript-editing"
                className="text-sky-600 hover:underline font-medium"
              >
                manuscript editing services
              </Link>{" "}
              and peer-reviewing support services to scholars and researchers to
              submit manuscripts that are free of errors and in an acceptable
              format for top international journals. Our professional editing
              for journals is delivered by PhD-qualified field-specific editors
              who examine the manuscript content in significant detail. We work
              with scientists and researchers across the globe to write
              manuscripts in a clear and cohesive structure. We provide
              prepublishing services, including manuscript proofreading
              services, editing, rewriting, and translation services for your
              manuscript.
            </p>

            <p>
              Our customers publish in SCI, SSCI, SCIE, and IEEE journals as
              well as similarly reputed international journals, disseminating
              research across medicine, life sciences, physical sciences,
              engineering, humanities, social sciences, business, finance, and
              the arts. Choose Pubrica and accelerate your publication success
              journey with:
            </p>

            {/* Feature List */}
            <ul className="space-y-3 pt-2 text-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  Provide academic{" "}
                  <Link
                    href="/services/editing-and-translation/medical-editing"
                    className="text-sky-600 hover:underline"
                  >
                    medical manuscript editing
                  </Link>{" "}
                  across 1,640+ niche and broad subject areas
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  Two experts will support the editing process to ensure quality
                  output
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  Multiple editing rounds for ultimate contentment and support
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>Flexible editing plans with premium add-on packages</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  Ensure on-time delivery, starting with 8-hour turnaround times
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  20+ years of expertise in publication and editing services
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  AI-powered system to perfectly match your manuscript to a
                  specialist in your field
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none">
                  •
                </span>
                <span>
                  An AI-powered system to perfectly match your manuscript to a
                  specialist in your field Customized solutions for researchers,
                  including PhD editing services
                </span>
              </li>
            </ul>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/quote"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 text-sm sm:text-base shadow-sm"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/brochure"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 text-sm sm:text-base shadow-sm"
              >
                View Brochure
              </Link>
            </div>
          </div>

          {/* Right Column: Journal Covers Image Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="bg-emerald-950/80 rounded-2xl p-6 shadow-xl">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/services/manuscript-editing-journals.webp"
                  alt="Sample Published Manuscripts in Top Scopus and SCI Journals including JAMA, Cancer Cell, and JCI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
