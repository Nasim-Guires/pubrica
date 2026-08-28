"use client";

import React from "react";
import Image from "next/image";

// --- Support Services Data ---
interface SupportService {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  iconBgColor: string;
}

const SUPPORT_ICON_BASE =
  "/images/editing-and-translation/translation-with-editing/";

const supportServices: SupportService[] = [
  {
    id: "formatting",
    title: "Journal-specific Formatting",
    description:
      "Our technical experts help you comply with your target journal's guidelines, including word limit, language style, and general layout requirements.",
    iconSrc: `${SUPPORT_ICON_BASE}Journal-specific-Formatting.png`,
    iconAlt: "Journal-specific Formatting",
    iconBgColor: "bg-purple-100",
  },
  {
    id: "qna",
    title: "Free and Unlimited Q&A with your editor",
    description:
      "Communicate with your translator or editor to clarify any doubts, request revision of sections, respond to queries, etc.",
    iconSrc: `${SUPPORT_ICON_BASE}Free-and-Unlimited-QA-with-your-editor.png`,
    iconAlt: "Free and Unlimited Q&A with your editor",
    iconBgColor: "bg-amber-100",
  },
  {
    id: "retranslation",
    title: "Free re-translation",
    description:
      "Our quality guarantee is paramount to every service we offer. If you are not satisfied with the quality of the translation, we will retranslate your paper at no added cost.",
    iconSrc: `${SUPPORT_ICON_BASE}Free-re-translation.png`,
    iconAlt: "Free re-translation",
    iconBgColor: "bg-purple-100",
  },
  {
    id: "certificate",
    title: "Free editing certificate",
    description:
      "On completion of translation and editing, you can request an editing certificate, which has been recommended by many international journals.",
    iconSrc: `${SUPPORT_ICON_BASE}Free-editing-certificate.png`,
    iconAlt: "Free editing certificate",
    iconBgColor: "bg-amber-100",
  },
  {
    id: "reediting",
    title: "Re-editing support",
    description:
      "If you've made further changes to the document after our translation and editing, please resubmit your updated document for a 60% discount on further editing assistance.",
    iconSrc: `${SUPPORT_ICON_BASE}Re-editing-support.png`,
    iconAlt: "Re-editing support",
    iconBgColor: "bg-purple-100",
  },
];

export default function SupportServicesAndSampleWork() {
  return (
    <div className="w-full bg-[#f4f6f8] text-slate-800 font-sans py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ======================================= */}
        {/* SECTION 1: SUPPORT SERVICES             */}
        {/* ======================================= */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
              Additional And Post-Translation Support Services
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We provide several free, value-added benefits to help you make the
              most of our expertise. You can be assured of assistance from our
              expert translators and editors even after we have sent you the
              translated manuscript. Check out the details of the free benefits
              we provide and our post-translation support services.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {supportServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
              >
                {/* Circular Pastel Icon Container */}
                <div
                  className={`relative w-12 h-12 rounded-full ${service.iconBgColor} flex items-center justify-center shrink-0 mt-1 overflow-hidden`}
                >
                  <Image
                    src={service.iconSrc}
                    alt={service.iconAlt}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================= */}
        {/* SECTION 2: SAMPLE WORK SHOWCASE         */}
        {/* ======================================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
              Translation with Editing Services Sample Work
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Ensure your research communicates globally with Pubrica&apos;s
              Translation with Editing Services. Achieve accurate, polished, and
              publication-ready translations with expert guidance.
            </p>
          </div>

          {/* Document Sample Outer Frame */}
          <div className="bg-white border border-slate-300 rounded-md shadow-sm overflow-hidden max-w-5xl mx-auto">
            {/* Grey Banner Header */}
            <div className="bg-[#e2e8f0] border-b border-slate-300 py-3 px-4 text-center">
              <h3 className="text-sm sm:text-base font-bold text-[#003B46] tracking-wide">
                Checkout Our Sample Work of the Translation with Editing Service
              </h3>
            </div>

            {/* Document Content */}
            <div className="relative w-full aspect-[1379/576] bg-white">
              <Image
                src="/images/editing-and-translation/translation-with-editing/Translation-with-Editing-Service-sample-work.png"
                alt="Translation with Editing Service sample work"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
