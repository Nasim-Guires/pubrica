import React from 'react';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

export default function PhysicianTrainingHeroSection() {
  return (
    <div className="w-full bg-white text-slate-800">

      {/* 1. Dark Top Banner / Header Card */}
      <section className="bg-[#122826] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto border border-gray-500/40 p-6 sm:p-10 rounded-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Physician Training Content Development: Equip Clinical Professionals with High-Quality Educational Material
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Pubrica's physician training service provides specialized instruction materials to medical professionals for proficient medical journal publication.
          </p>
        </div>
      </section>

      {/* 2. Main Hero / Introductory Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] leading-tight">
                Evidence-Based Physician Training Content Development: Enhance Clinical Practice with Research & Publication Skills
              </h2>

              <h3 className="text-sm sm:text-base font-semibold text-[#0083a8]">
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
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
              What We do
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-4xl">
              At Pubrica, we provide systematic, expert-designed slide decks and instructional material that support workshops, CME sessions, and institutional training programs and facilitate clear, consistent delivery of clinical knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">

            {/* Left Overlapping Images Graphic */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md h-[340px]">
                {/* Background Shape / Backdrop */}
                <div className="absolute inset-0 bg-[#e3f0ed] rounded-full blur-2xl opacity-60 -z-10" />

                {/* Image 1 (Top Left) */}
                <div className="absolute top-0 left-0 w-3/5 h-48 rounded-xl overflow-hidden border-2 border-white shadow-lg z-10">
                  <img
                    src="/images/physician-writing-services/physician-training/Physician-Training-What-We-do.webp"
                    alt="Lab training"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 2 (Bottom Right) */}

              </div>
            </div>

            {/* Right Bullet Points List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a3832]">
                Our Physician Evidence-based Training Content Service Covers:
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Specialty-Specific Clinical Training Modules:</span> Created for General Medicine,{" "}
                    <a href="/subject-matter-experts/cardiology/" className="text-sky-600 ">Cardiology</a>,{" "}
                    <a href="/subject-matter-experts/neurology/" className="text-sky-600 ">Neurology</a>, Oncology, Paediatrics, etc.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Case-Based Learning & Simulation Scenarios:</span> Materials that will enhance diagnostic accuracy, therapeutic planning, and procedural competence.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">CME-Accredited Program Content:</span> Custom-developed content for compliance with continuing medical education (CME) and/or CPD.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Guided Clinical Guidelines Interpretation:</span> Content announcing{" "}
                    <a href="https://www.heart.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">AHA</a>,{" "}
                    <a href="https://diabetes.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">ADA</a>,{" "}
                    <a href="https://www.esmo.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">ESMO</a>,{" "}
                    <a href="https://www.nice.org.uk/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">NICE</a>, and other evidence-based standards for standardized delivery of care.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Evidence-Based Medicine (EBM) Training Modules:</span> Including literature appraisal, clinical trial evaluation, and insights from real-world data.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Digital Health & Diagnostic Tools Content:</span> Teaching materials on AI-enabled imaging, EMR systems, and clinical decision-support systems.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#b31217] font-extrabold text-base leading-none mt-0.5">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Research & Publication Training Resources:</span> Training materials for manuscript writing, clinical trial design, ethics submissions, and academic publishing.
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}