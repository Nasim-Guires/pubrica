import React from 'react';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

export default function PhysicianTrainingHeroSection() {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* 1. Dark Top Banner / Header Card */}
      <HeroBanner
        title="Physician Training Content Development: Equip Clinical Professionals with High-Quality Educational Material"
        description="Pubrica's physician training service provides specialized instruction materials to medical professionals for proficient medical journal publication."
        headingAs="h1"
      />

      {/* 2. Main Hero / Introductory Overview Section */}
      <section className="py-6 sm:py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] leading-tight">
                Evidence-Based Physician Training Content Development: Enhance Clinical Practice with Research & Publication Skills
              </h2>

              <h3 className="text-sm sm:text-base font-semibold  text-[#1a3832]">
                Advance Clinical Education Through Professionally Developed, Specialty-Aligned Materials
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  At Pubrica, we specialize in developing high-quality, evidence-based training content tailored for physicians, specialists, hospital-based clinicians, and healthcare educators. Our materials are designed to support skills development, clinical decision-making, and academic growth, aligned with the latest standards in medical education. Rather than offering direct training services, we create structured, specialty-focused educational content that empowers healthcare organizations, academic institutions, and industry partners to deliver impactful learning experiences.
                </p>
                <p>
                  Our multidisciplinary team of clinician-scientists, editors, and statisticians ensures every training session aligns with international publishing and research standards.
                </p>
              </div>

              <div className="pt-2">
                <GetFreeQuoteButton />
              </div>
            </div>

            {/* Right Image Container with Accent Border */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2 rounded-2xl ">
                <img
                  src="/images/physician-writing-services/physician-training/Physician-Training-Content-Development.webp"
                  alt="Medical team reviewing clinical training materials"
                  className="rounded-xl object-cover w-full h-[320px] sm:h-[380px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "What We Do" & Services Covered List */}
      <section className="py-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5">
              What We do
            </h2>

            <div className="flow-root">
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-full max-w-[380px] h-[260px] sm:h-[280px] mx-auto overflow-hidden">
                  <img
                    src="/images/physician-writing-services/physician-training/Physician-Training-What-We-do.webp"
                    alt="Lab training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5 text-slate-700">

                <p className="text-base leading-relaxed">
                  At Pubrica, we provide systematic, expert-designed slide decks and instructional material that support workshops, CME sessions, and institutional training programs and facilitate clear, consistent delivery of clinical knowledge.
                </p>

                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                    Our Physician Evidence-based Training Content Service Covers:
                  </h3>

                  <ul className="space-y-4 pl-4 list-disc marker:text-red-600">

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        Specialty-Specific Clinical Training Modules:
                      </strong>{" "}
                      Created for General Medicine,{" "}
                      <Link
                        href="/subject-matter-experts/cardiology"
                        className="text-blue-600 no-underline hover:no-underline"
                      >
                        Cardiology
                      </Link>
                      ,{" "}
                      <Link
                        href="/subject-matter-experts/neurology"
                        className="text-blue-600 no-underline hover:no-underline"
                      >
                        Neurology
                      </Link>
                      , Oncology, Paediatrics, etc.
                    </li>

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        Case-Based Learning & Simulation Scenarios:
                      </strong>{" "}
                      Materials that will enhance diagnostic accuracy, therapeutic planning, and procedural competence.
                    </li>

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        CME-Accredited Program Content:
                      </strong>{" "}
                      Custom-developed content for compliance with continuing medical education (CME) and/or CPD.
                    </li>

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        Guided Clinical Guidelines Interpretation:
                      </strong>{" "}
                      Content announcing{" "}
                      <a
                        href="https://www.heart.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        AHA
                      </a>
                      ,{" "}
                      <a
                        href="https://diabetes.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        ADA
                      </a>
                      ,{" "}
                      <a
                        href="https://www.esmo.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        ESMO
                      </a>
                      ,{" "}
                      <a
                        href="https://www.nice.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        NICE
                      </a>
                      , and other evidence-based standards for standardized delivery of care.
                    </li>

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        Evidence-Based Medicine (EBM) Training Modules:
                      </strong>{" "}
                      Including literature appraisal, clinical trial evaluation, and insights from real-world data.
                    </li>

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        Digital Health & Diagnostic Tools Content:
                      </strong>{" "}
                      Teaching materials on AI-enabled imaging, EMR systems, and clinical decision-support systems.
                    </li>

                    <li className="leading-relaxed">
                      <strong className="text-slate-900">
                        Research & Publication Training Resources:
                      </strong>{" "}
                      Training materials for manuscript writing, clinical trial design, ethics submissions, and academic publishing.
                    </li>

                  </ul>
                </div>

              </div>
            </div>

          </div>
]
        </div>
      </section>


    </div>
  );
}