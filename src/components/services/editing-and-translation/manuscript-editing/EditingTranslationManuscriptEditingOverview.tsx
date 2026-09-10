import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export const EditingTranslationManuscriptEditingOverview: React.FC = () => {
  return (
    <section className="pt-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
            Get Manuscript Published with Confidence | Expert Manuscript Editing Services
          </h2>

          <div className="flow-root">
            {/* Rectangular Image (Non-rounded, matching style) */}
            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
              <div className="relative w-full max-w-sm h-[320px] sm:h-[380px] lg:w-[380px] lg:h-[320px]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/editing-and-translation/manuscript-editing/Get-Manuscript-Published-with-Confidence-Expert-Manuscript-Editing-Services.webp"
                    alt="Get Manuscript Published with Confidence — Expert Manuscript Editing Services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 text-slate-700">
              <p className="text-base font-medium leading-relaxed">
                From manuscript preparation to journal publication, our expert editors provide high-quality academic and scientific manuscript editing services.
              </p>

              <p className="text-base leading-relaxed">
                Pubrica offers the most prestigious{" "}
                <Link
                  href="/services/editing-and-translation/translation-with-editing"
                  className="text-blue-600 font-medium no-underline hover:no-underline"
                >
                  manuscript editing services
                </Link>{" "}
                and peer-reviewing support services to scholars and researchers to submit manuscripts that are free of errors and in an acceptable format for top international journals. Our professional editing for journals is delivered by PhD-qualified field-specific editors who examine the manuscript content in significant detail. We work with scientists and researchers across the globe to write manuscripts in a clear and cohesive structure. We provide prepublishing services, including manuscript proofreading services, editing, rewriting, and translation services for your manuscript.
              </p>

              <p className="text-base leading-relaxed">
                Our customers publish in SCI, SSCI, SCIE, and IEEE journals as well as similarly reputed international journals, disseminating research across medicine, life sciences, physical sciences, engineering, humanities, social sciences, business, finance, and the arts. Choose Pubrica and accelerate your publication success journey with:
              </p>

              {/* Bullet List */}
              <div className="pt-2 space-y-4">
                <div className="space-y-4 pl-4">
                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      Provide academic{" "}
                      <Link
                        href="sights/sample-work/phenotypic-variations-of-atopic-dermatitis-a-systemic-review-of-dupilumab-efficacy-and-safety"
                        className="text-blue-600 font-medium no-underline hover:no-underline"
                      >
                        medical manuscript editing
                      </Link>{" "}
                      across 1,640+ niche and broad subject areas
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      Two experts will support the editing process to ensure quality output
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      Multiple editing rounds for ultimate contentment and support
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      Flexible editing plans with premium add-on packages
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      Ensure on-time delivery, starting with 8-hour turnaround times
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      20+ years of expertise in publication and editing services
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      AI-powered system to perfectly match your manuscript to a specialist in your field
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold shrink-0">→</span>
                    <p className="text-base leading-relaxed">
                      Customized solutions for researchers, including PhD editing services
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <GetFreeQuoteButton />
                <Link
                  href="/uploads/editing-and-translation/manuscript-editing/Journal-Manuscript-Formatting.pdf"
                  className="bg-red-600 hover:bg-white hover:text-black text-white font-semibold py-2.5 px-6 rounded-md transition-colors duration-200 text-sm sm:text-base shadow-sm inline-flex items-center justify-center select-none"
                >
                  View Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
