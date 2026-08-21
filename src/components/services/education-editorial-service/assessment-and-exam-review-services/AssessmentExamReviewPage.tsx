'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

const servicesData: ServiceItem[] = [
  {
    title: 'Assessment of Test Papers and Assessment',
    description:
      'Your test paper will be assessed for readability; relevance to your syllabus; balanced difficulty levels; and competency being tested according to how you define and/or require it.',
    icon: '/images/education-editorial-service/assessment-and-exam-review-services/Assessment-of-Test-Papers-and-Assessment.webp',
  },
  {
    title: 'Grading Rubric and Grading System Review',
    description:
      'Rubric/grading criteria will be reviewed and evaluated by one of our actively qualified staff members for equity; consistency; openness; and alignment with your evaluation plan objectives.',
    icon: '/images/education-editorial-service/assessment-and-exam-review-services/Grading-Rubric-and-Grading-System-Review.webp',
  },
  {
    title: 'The evaluation of Learning Outcomes for Test alignment',
    description:
      "Will determine if the test items assess the desired Learning Outcomes, the learner's thinking, and the mode(s) in which the learning objectives will be accomplished.",
    icon: '/images/education-editorial-service/assessment-and-exam-review-services/The-evaluation-of-Learning-Outcomes-for-Test-alignment.webp',
  },
  {
    title: 'Bias Review Fairness',
    description:
      'We will review test questions/assignments for every cultural, linguistic, or cognitive bias that may exist, so that the assessments are inclusive and fair for all learners, regardless of their background.',
    icon: '/images/education-editorial-service/assessment-and-exam-review-services/Bias-Review-Fairness.webp',
  },
  {
    title: 'Ongoing assessment of assessments',
    description:
      'The baseline of quiz assignment/project/formative assessment will be determined and used to ensure consistency relative to the development of the assessments and to determine the amount of progress made on these items.',
    icon: '/images/education-editorial-service/assessment-and-exam-review-services/Ongoing-assessment-of-assessments.webp',
  },
  {
    title: 'Compliance with Accreditation Process',
    description:
      'To validate that the evaluation is following both the institution and the requirements of the Accreditation Bodies, we will perform an assessment of compliance.',
    icon: '/images/education-editorial-service/assessment-and-exam-review-services/Compliance-with-Accreditation-Process.webp',
  },
];

const AssessmentExamReviewPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Assessment and Exam Review Services | Pubrica</title>
        <meta
          name="description"
          content="Explore Pubrica's Assessment and Exam Review Services designed to ensure fair, accurate, and outcome-aligned evaluations for educational institutions."
        />
        <link
          rel="canonical"
          href="https://pubrica.com/services/education-editorial-service/assessment-and-exam-review-services/"
        />
      </Head>

      {/* TOP HERO BANNER */}
      <div className="w-full bg-[#1b3b32] py-12 px-4 sm:px-8 flex justify-center">
        <div className="w-full max-w-5xl border border-[#2b5447] bg-[#1b3b32] text-white py-10 px-6 sm:px-12 text-center space-y-3 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Assessment and Exam Review Services
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Diagnostic Assessments and Test Review Services help students discover areas of weakness and increase their likelihood of passing the exam while enhancing self-confidence through structured diagnostics and focused review.
          </p>
        </div>
      </div>

      <div className="w-full bg-white text-gray-800 py-12 px-4 sm:px-6 md:px-8">
        {/* MAIN SECTION: INTRO & OFFSET FLOATING IMAGE */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b3b2c] mb-6">
            Ensure Fair, Accurate, and Outcome-Aligned Assessments with Pubrica&apos;s Expert Assessment & Exam Review Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Text Content & Bullet Points */}
            <div className="md:col-span-7 space-y-4">
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                The importance of education has shifted to evaluation of results in academic and professional sectors; therefore, evaluations, tests, and exams are essential elements in measuring the competency, academic integrity, and effectiveness of student learning. However, small issues with validity, including ambiguous test questions, inaccurate learning outcomes, inconsistent scorecards, and biases in scoring, can negatively affect the validity of an assessment and the student&apos;s confidence in their abilities.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                At Pubrica, we have established an Assessment and Exam Review Service that assists educational institutions, faculty, and trainers in creating valid, equitable, inclusive assessments that adhere to accountability; this is accomplished through expert review for ensuring the integrity and credibility of assessments:
              </p>

              {/* LIST & CTA BLOCK */}
              <div className="pt-2 space-y-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  The Pubrica Assessment and Exam Review provide:
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#c5221f] text-xs mt-0.5">▪</span>
                    <span>A significant decrease in the number of cluttered, confusing questions.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#c5221f] text-xs mt-0.5">▪</span>
                    <span>An increase in aligned objectives learning outcomes.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#c5221f] text-xs mt-0.5">▪</span>
                    <span>More balance between cognitive levels of difficulty.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#c5221f] text-xs mt-0.5">▪</span>
                    <span>All courses have the same criteria for grading of assessment items.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#c5221f] text-xs mt-0.5">▪</span>
                    <span>All assessments comply with the accrediting body&apos;s requirements.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#c5221f] text-xs mt-0.5">▪</span>
                    <span>A just assessment process develops materials for teachers&apos; learners that do not discriminate against any group of people.</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <GetFreeQuoteButton />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Offset Dark Green Backdrop Image Box */}
            <div className="md:col-span-5 relative flex justify-center md:justify-end mt-2 md:mt-0">
              <div className="relative w-full max-w-[360px] h-[210px] sm:h-[230px]">
                {/* Dark Green Offset Box */}
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#1b3b32] rounded-2xl -z-10" />

                {/* Main Front Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                  <Image
                    src="/images/education-editorial-service/assessment-and-exam-review-services/poster-presentation-1-2.webp"
                    alt="Assessment and Exam Review session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES OFFERED GRID SECTION */}
        <section className="max-w-5xl mx-auto mt-16 pb-16">
          <div className="space-y-3 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b3b2c]">
              Types of Assessment and Exam Review Services We Offer
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl">
              Pubrica Assessment & Exam Review Services provide educational institutions with the ability to conduct High-Quality Assessments. Pubrica is committed to providing educational institutions with services that enhance and maintain a high level of Clarity, Consistency, and Academic Rigor throughout each type of assessment performed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="relative flex items-start space-x-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow min-h-[160px] overflow-hidden"
              >
                {/* Left Side Icon */}
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>

                {/* Right Content Area + Dark Accent Line */}
                <div className="relative flex-1 pr-3 space-y-1">
                  {/* Right Vertical Accent Line */}
                  <div className="absolute right-0 top-1 bottom-1 w-[2px] bg-gray-800 rounded-full" />

                  <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AssessmentExamReviewPage;