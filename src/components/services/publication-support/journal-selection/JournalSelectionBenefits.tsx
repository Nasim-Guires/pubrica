"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JournalSelectionBenefits() {
  return (
    <div className="w-full font-sans">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: SATISFACTION GUARANTEE BANNER             */}
      {/* ---------------------------------------------------- */}


      <section className="bg-[#052b1e] text-white py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">

          {/* Satisfaction Guarantee Image */}
          <div className="shrink-0 flex items-center justify-center min-w-[144px] min-h-[144px]">
            <Image
              src="/images/publication-support/Satisfaction_Guarantee.webp"
              alt="100% Satisfaction Guarantee"
              width={160}
              height={160}
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain block"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Speed up your Journey to Journal Selection with Pubrica
            </h2>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Improve your publication journey with Pubrica’s{" "}
              <Link
                href="/services/publication-support/journal-selection/right-journal-for-your-research/"
                className="text-cyan-300 hover:underline"
              >
                journal selection
              </Link>{" "}
              support service. We will speed up the acceptance of your
              manuscript with customized support and expertise related to
              journal requirements.
            </p>

            <ul className="space-y-2 pt-1 text-xs sm:text-sm">
              <li className="flex items-center gap-2 font-semibold text-slate-100">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block shrink-0" />
                GDPR & Data Privacy
              </li>

              <li className="flex items-center gap-2 font-semibold text-slate-100">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block shrink-0" />
                No Predatory Journals Guarantee
              </li>

              <li className="flex items-center gap-2 font-semibold text-slate-100">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block shrink-0" />
                Ethical Journal Practices
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: BENEFITS OF OUR JOURNAL SELECTION PROCESS */}
      {/* ---------------------------------------------------- */}
      <section className="bg-white py-14 px-6 sm:px-12 lg:px-16 text-slate-800">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] text-left">
            Benefits of Our Journal Selection Process
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (Detailed Points) */}
            <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm leading-relaxed text-slate-700">
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <p>
                  <strong className="text-slate-900">
                    Bring decades of knowledge from experience.
                  </strong>{" "}
                  Tap into Pubrica’s 20+ years of{" "}
                  <a href="/services/publication-support/journal-selection/journal-selection-manuscript-optimization" className="text-cyan-600 hover:underline">
                    academic publishing experience
                  </a>
                  . Our experienced team has helped over 800,000 researchers
                  publish in high-impact-factor journals. In addition, with
                  experience from more than 800,000 publications, our{" "}
                  <a href="/insights/sample-work/addressing-barriers-to-copd-care-three-innovative-evidence" className="text-cyan-600 hover:underline">
                    journal selection service
                  </a>{" "}
                  makes the process easier and increases the likelihood of your
                  paper being published.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <p>
                  <strong className="text-slate-900">
                    Journal selection by publication experts:
                  </strong>{" "}
                  At Pubrica, we appreciate the struggles of selecting
                  peer-reviewed journals amongst the predatory ones. Our{" "}
                  <a href="/insights/sample-work/journal-selection-gastroenterology-workforce" className="text-cyan-600 hover:underline">
                    journal selection
                  </a>{" "}
                  service guarantees you in credible, peer-reviewed journals.
                  You can count on our experts’ knowledge in your subject area
                  to provide you with a detailed evaluation and fully considered
                  recommendations.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <p>
                  <strong className="text-slate-900">
                    Choosing Pubrica’s professional{" "}
                    <a href="/insights/sample-work/addressing-barriers-to-copd-care-three-innovative-evidence" className="text-cyan-600 hover:underline">
                      journal selection service
                    </a>
                  </strong>{" "}
                  will decrease scope-based rejections from your target
                  journals. We will also help you identify other reasons for
                  rejection, such as research design not meeting requirements,
                  or lack of literature review detail, and we provide custom
                  publication packages designed to support you in publishing
                  faster.
                </p>
              </div>
            </div>

            {/* Right Graphic Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              {/* Ribbon Graphic */}
              <div className="mb-6">
                <Image
                  src="/images/publication-support/journal-selection/journals-recommend-us.webp"
                  alt="1,600+ journals officially recommend our editing services"
                  width={600}
                  height={100}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
