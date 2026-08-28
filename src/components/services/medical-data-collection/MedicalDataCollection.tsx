import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MedicalDataCollection: React.FC = () => {
  return (
    <div className="w-full bg-[#fcfdfd] font-sans antialiased text-left selection:bg-emerald-100">
      {/* ==========================================================
          HEADER HERO BLOCK (Dark Banner)
          ========================================================== */}
      <div className="w-full bg-[#112529] text-white py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto border border-gray-400/30 rounded-none p-6 md:p-8 text-center space-y-3 bg-black/10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Medical Data Collection
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed font-normal">
            Pubrica provides robust medical data collection services, ensuring
            accuracy, confidentiality, and compliance with rigorous standards
            for research and analysis.
          </p>
        </div>
      </div>

      {/* ==========================================================
          MAIN INTRODUCTION & IMAGE LAYOUT
          ========================================================== */}
      <section className="pt-7 pb-6 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative Content Block */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-[#082a32] text-xl md:text-2xl font-black tracking-tight leading-tight">
              Medical Data Collection: Integrating Clinical Insight and Research
              Precision for Reliable Evidence
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-[14px] leading-relaxed text-justify font-normal">
              Accurate medical{" "}
              <span className="text-sky-700 font-medium hover:underline cursor-pointer">
                data collection
              </span>{" "}
              is essential for credible research and clinical decision-making.
              At Pubrica, we know that reliable research in healthcare and life
              sciences starts with ethically collected and accurate data. Our
              bespoke medical{" "}
              <span className="text-sky-700 font-medium hover:underline cursor-pointer">
                data collection services
              </span>{" "}
              are designed for clinicians, researchers, CROs, and academic
              institutions, ensuring the delivery of high-quality,
              research-grade datasets that support evidence-based findings.
            </p>

            {/* CTA Option Buttons (Row 1) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <GetFreeQuoteButton />
              <Link
                href="/uploads/medical-data-collection/Data-Analytics-Machine-Learning-service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b30000] hover:bg-red-800 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-sm transition-colors duration-150"
              >
                View Brochure
              </Link>
            </div>
          </div>

          {/* Right Visual Frame Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] aspect-[4/3] rounded-xl relative p-2.5">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image
                  src="/images/medical-writing/Medical-Data-Collection.webp"
                  alt="Medical / Clinical Research Visual Asset - Medical Data Collection"
                  fill
                  priority // Consider priority if this is in the initial viewport
                  className="object-cover object-center"
                  sizes="(max-width: 420px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          DETAILED SERVICES & BULLET ATTRIBUTES SECTION
          ========================================================== */}
      <section className="py-6 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
        <div className="space-y-6">
          {/* Subheading Header */}
          <h3 className="text-[#082a32] text-xl md:text-2xl font-black tracking-tight leading-snug">
            Healthcare, Medical, and Life Science Data Collection and Extraction
            Services by Pubrica
          </h3>

          <p className="text-gray-700 text-xs sm:text-sm md:text-[14px] leading-relaxed text-justify font-normal">
            Pubrica provides complete{" "}
            <span className="text-sky-700 font-medium hover:underline cursor-pointer">
              data collection
            </span>{" "}
            and extraction solutions across healthcare, medical, and life
            sciences. Our expertise includes cleaning and structuring clinical
            trial data, patient health records, and biological datasets for
            data-heavy studies while providing the utmost levels of accuracy and
            integrity.
          </p>

          {/* Detailed Bullet Architecture */}
          <ul className="space-y-5 pt-2">
            <li className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal text-justify relative pl-4">
              <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-600" />
              <strong className="text-black font-extrabold">
                Systematic and Ethical Medical Data Collection:{" "}
              </strong>
              Our trained specialists are experts in structured medical{" "}
              <span className="text-sky-700 font-medium hover:underline cursor-pointer">
                data collection
              </span>{" "}
              and clinical data management as they handle significant volumes of
              complex information using ethical standards with regulatory
              compliance. We will ensure your data is clean, structured, and
              ready for substantial data analytics and interpretation.
            </li>

            <li className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal text-justify relative pl-4">
              <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-600" />
              <strong className="text-black font-extrabold">
                Tailored Data Extraction Aligned with Research Goals:{" "}
              </strong>
              All of our medical data extraction project designs can be specific
              to your research needs and budget constraints. From clinical
              research data management, real-world patient data, or biological
              sample extraction, our services are flexible and fully scalable to
              optimize your research results.
            </li>

            <li className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal text-justify relative pl-4">
              <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-600" />
              <strong className="text-black font-extrabold">
                Advanced Tools for Data Extraction and Analysis:{" "}
              </strong>
              Leverage our deep expertise in{" "}
              <span className="text-sky-700 font-medium hover:underline cursor-pointer">
                medical data analytics
              </span>{" "}
              to convert raw information into actionable scientific insights.
              Our team applies both traditional methods and cutting-edge data
              extraction tools to analyse diverse datasets from controlled
              trials to real-world evidence studies.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
