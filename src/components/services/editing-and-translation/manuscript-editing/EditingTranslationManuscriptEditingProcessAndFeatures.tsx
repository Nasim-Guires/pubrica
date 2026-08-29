'use client';

import React from 'react';
import Image from 'next/image';
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection';

export const EditingTranslationManuscriptEditingProcessAndFeatures: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      {/* SECTION 1: Step-by-Step Process with Hover Effects */}
      <EditorialWorkflowSection
        heading="How Our Manuscript Editing Service Works"
        subheading="Our Step-by-Step Process"
        description={
          <>
            We simplify the process of enhancing your research work. From submitting
            your order to receiving the polished manuscript, our expert team ensures
            precision and quality at every step.
          </>
        }
        steps={[
          {
            stepNumber: 1,
            title: "UPLOAD YOUR MANUSCRIPT, SELECT A SERVICE, AND PLAN",
            description:
              "You start by selecting a service according to your target journal. We analyse your document and recommend the best plans, including professional editing for journals.",
            iconSrc:
              "/images/editing-and-translation/manuscript-editing/Upload-Your-Manuscript-Select-a-Service-and-Plan.png",
            position: "bottom",
          },
          {
            stepNumber: 2,
            title:
              "THE TWO-STEP EDIT PROCESS DELIVERS TOP-NOTCH QUALITY AND TIMELY DELIVERY",
            description:
              "Two native editors provide expert scientific manuscript editing, ensuring your manuscript meets journal guidelines and quality standards.",
            iconSrc:
              "/images/editing-and-translation/manuscript-editing/The-Two-Step-Edit-Process-Delivers-Top-Notch-Quality-and-Timely-Delivery.png",
            position: "top",
          },
          {
            stepNumber: 3,
            title: "REVIEW FINAL FILES, ASK QUESTIONS, AND COLLABORATE",
            description:
              "Download edited files and collaborate with editors through multiple revisions, making our outsourced manuscript editing services highly flexible and user focused.",
            iconSrc:
              "/images/editing-and-translation/manuscript-editing/Review-Final-Files-Ask-Questions-and-Collaborate.png",
            position: "bottom",
          },
        ]}
      />

      {/* SECTION 2: Dark Emerald Banner */}
      <section className="w-full bg-emerald-950 text-white py-5 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Manuscript Editing Services at Pubrica
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Our editors ensure that your manuscript is flawless, impactful, and ready for publication through careful editing and expert feedback.
          </p>
        </div>
      </section>

      {/* SECTION 3: Features & Recommended Journals */}
      <section className="py-6 sm:py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Features Of Our Research Paper Manuscript Editing Services
        </h2>
        <p className="text-base text-slate-700 leading-relaxed mb-10">
          At Pubrica, we understand the significance of a successful publication to any world-leading journal. Our research paper editing services and proofreading service digs up every minute detail and leaves no stone unturned for its quality, thereby ensuring that you have your work polished and ready to be published, error-free and of the highest accuracy, clarity, and precision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Journal Recommendation Badge Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="relative w-full max-w-[380px] h-[300px]">
              <Image
                src="/images/editing-and-translation/manuscript-editing/Features-of-Our-Research-Paper-Manuscript-Editing-Services.png"
                alt="Features of our research paper manuscript editing services"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Key Feature Bullet Points */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-slate-900 font-bold text-xl leading-none mt-1">•</span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Experienced Subject-Matter Experts in Publishing:
                </strong>{' '}
                Manuscript editors at Pubrica have experienced and expert PhD holders, MDs, and long-standing researchers. They possess extensive knowledge in a wide range of subjects and undergo rigorous language and technical training to ensure precise editing. In addition, their deep understanding of subject-specific nuances assures richness, quality, and clarity about your manuscript.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-slate-900 font-bold text-xl leading-none mt-1">•</span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Complete Assessment of Language, Syntax, and Format:
                </strong>{' '}
                Manuscript editing by Pubrica ensures stringent correction of typographical, grammatical, and punctuation errors while giving refinement to language, clarity, tone, and style. All manuscripts are reviewed strictly on a two-tiered system by experts in editing.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-slate-900 font-bold text-xl leading-none mt-1">•</span>
              <div>
                <strong className="text-slate-900 font-bold">
                  Journal manuscript editing services:
                </strong>{' '}
                by Pubrica ensures stringent correction of typographical, grammatical, and punctuation errors while giving refinement to language, clarity, tone, and style. All manuscripts are reviewed strictly on a two-tiered system by experts in editing.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};