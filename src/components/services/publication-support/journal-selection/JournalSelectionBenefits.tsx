"use client";

import ServiceBanner from "@/components/common/ServiceBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JournalSelectionBenefits() {
  return (
    <div className="w-full font-sans">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: SATISFACTION GUARANTEE BANNER             */}
      {/* ---------------------------------------------------- */}


      <ServiceBanner
        heading="Speed up your Journey to Journal Selection with Pubrica"
        description={
          <>
            Improve your publication journey with Pubrica’s{" "}
            <Link
              href="/services/publication-support/journal-selection/right-journal-for-your-research/"
              className="text-blue-600 no-underline hover:no-underline"
            >
              journal selection
            </Link>{" "}
            support service. We will speed up the acceptance of your manuscript
            with customized support and expertise related to journal requirements.
          </>
        }
        bulletPoints={[
          "GDPR & Data Privacy",
          "No Predatory Journals Guarantee",
          "Ethical Journal Practices",
        ]}
      />
      {/* ---------------------------------------------------- */}
      {/* SECTION 2: BENEFITS OF OUR JOURNAL SELECTION PROCESS */}
      {/* ---------------------------------------------------- */}
      <section className="bg-white py-6 px-6 sm:px-12 lg:px-16 text-slate-800 font-poppins">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b44] text-left">
            Benefits of Our Journal Selection Process
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (Detailed Points) */}
            <div className="lg:col-span-7 space-y-5 text-base leading-relaxed text-slate-700">
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>
                  <strong className="text-slate-900 font-bold">
                    Bring decades of knowledge from experience.
                  </strong>{" "}
                  Tap into Pubrica’s 20+ years of{" "}
                  <Link href="/services/publication-support/journal-selection/journal-selection-manuscript-optimization" className="text-blue-600 no-underline hover:no-underline">
                    academic publishing experience
                  </Link>
                  . Our experienced team has helped over 800,000 researchers
                  publish in high-impact-factor journals. In addition, with
                  experience from more than 800,000 publications, our{" "}
                  <Link href="/insights/addressing-barriers-to-copd-care-three-innovative-evidence" className="text-blue-600 no-underline hover:no-underline">
                    journal selection service
                  </Link>{" "}
                  makes the process easier and increases the likelihood of your
                  paper being published.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>
                  <strong className="text-slate-900 font-bold">
                    Journal selection by publication experts:
                  </strong>{" "}
                  At Pubrica, we appreciate the struggles of selecting
                  peer-reviewed journals amongst the predatory ones. Our{" "}
                  <Link href="/insights/journal-selection-gastroenterology-workforce" className="text-blue-600 no-underline hover:no-underline">
                    journal selection
                  </Link>{" "}
                  service guarantees you in credible, peer-reviewed journals.
                  You can count on our experts’ knowledge in your subject area
                  to provide you with a detailed evaluation and fully considered
                  recommendations.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>
                  <strong className="text-slate-900 font-bold">
                    Choosing Pubrica’s professional{" "}
                  </strong>{" "}
                  <a href="/insights/addressing-barriers-to-copd-care-three-innovative-evidence" className="text-blue-600 no-underline hover:no-underline">
                    journal selection service{" "}
                  </a>
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
