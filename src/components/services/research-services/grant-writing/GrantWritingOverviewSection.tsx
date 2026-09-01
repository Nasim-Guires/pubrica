"use client";

import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";

interface ExpertisePoint {
  id: string;
  text: string;
  highlightText?: string;
  highlightUrl?: string;
}

const expertiseList: ExpertisePoint[] = [
  {
    id: "exp-years",
    text: "20+ years of experience in academic and ",
    highlightText: "scientific writing",
    highlightUrl: "/services/research-services/scientific-writing",
  },
  {
    id: "exp-domain",
    text: "Specialist consultants across life sciences, medicine, engineering, and technology.",
  },
  {
    id: "exp-track",
    text: "Track record: Over 1,200+ research grant proposal writing and editing projects completed with a high success rate.",
  },
  {
    id: "exp-compliance",
    text: "Familiar with compliance requirements of major funding agencies (government, foundations, and institutional).",
  },
];

export default function GrantWritingOverviewSection() {
  return (
    <div className="w-full text-slate-800">
      {/* ========================================================= */}
      {/* 1. TOP HIGHLIGHT BANNER                                   */}
      {/* ========================================================= */}
      <HeroBanner
        title="Turn Grant Challenges into Funding Success"
        description="Low success rates, tough compliance rules, and high competition make grant writing difficult. Pubrica’s expert team helps you win with clear, persuasive, and agency-aligned proposals."
        headingAs="h2"
      />

      {/* ========================================================= */}
      {/* 2. MAIN CONTENT SECTION                                   */}
      {/* ========================================================= */}
      <section className="w-full bg-[#f8fafc] py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e3b38] leading-tight">
              Professional Research Grant Writing Services to Secure Funding
            </h2>

            {/* Intro Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                From NIH and NSF to Horizon Europe, Wellcome Trust, DBT, and
                ICMR, Pubrica’s expert grant writing consultants craft
                persuasive, compliant proposals that maximise your funding
                success. Our professional grant writing services are designed to
                help researchers secure competitive funding.
              </p>
              <p>
                Winning competitive research funding isn’t easy. Grants like NIH
                (National Institutes of Health), NSF (National Science
                Foundation), Horizon Europe, Wellcome Trust, UKRI, DBT-India,
                and ICMR receive thousands of proposals every year, but only a
                few are awarded. Success depends on submitting a clear,
                compliant, and compelling proposal that convinces reviewers this
                is where expert grant writing help becomes essential.
              </p>
            </div>

            {/* Expertise Subheading */}
            <div className="pt-2 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0e3b38]">
                Pubrica’s Expertise in Grant Writing
              </h3>

              {/* Bulleted List */}
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {expertiseList.map((item) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-base leading-none mt-1">
                      •
                    </span>
                    <span>
                      {item.text}
                      {item.highlightText && item.highlightUrl && (
                        <Link
                          href={item.highlightUrl}
                          className="text-blue-600"
                        >
                          {item.highlightText}
                        </Link>
                      )}
                      {item.text.endsWith(".") ? "" : "."}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <CommonUploadButton
                href="/uploads/research-services/grant-writing/10-03-2026-GRANT-WRITING-BROCHURE.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Brochure
              </CommonUploadButton>
            </div>
          </div>

          {/* Right Column: Layered Card Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11]">
              {/* Back Dark Teal Backdrop Card */}
              <div className="absolute top-6 left-0 right-6 bottom-0 rounded-xl z-0" />

              {/* Foreground Image Card */}
              <div className="absolute top-0 left-6 right-0 bottom-6 rounded-2xl overflow-hidden z-10 border border-slate-100">
                <Image
                  src="/images/research-services/grant-writing/Professional-Research-Grant-Writing-Services.webp"
                  alt="Researcher working on grant proposal draft with laptop and notebook"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
