'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type ServiceItem = {
    title: string;
    description: string;
};

const servicesData: ServiceItem[] = [
    {
        title: 'Assessment of Test Papers and Assessment',
        description: 'Your test paper will be assessed for readability, relevance to your syllabus, balanced difficulty levels, and',
    },
    {
        title: 'Grading Rubric and Grading System Review',
        description: 'Rubric/grading criteria will be reviewed and evaluated by one of our actively qualified staff members for equity.',
    },
    {
        title: 'The evaluation of Learning Outcomes for Test alignment',
        description: 'Will determine if the test items assess the desired Learning Outcomes, the learner\'s thinking, and the',
    },
    {
        title: 'Bias Review Fairness',
        description: 'We will review test questions/assignments for every cultural, linguistic, or cognitive bias that may exist.',
    },
    {
        title: 'Ongoing assessment of assessments',
        description: 'The baseline of quiz assignment/project/formative assessment will be determined and used to',
    },
    {
        title: 'Compliance with Accreditation Process',
        description: 'To validate that the evaluation is following both the institution and the requirements of the',
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

            {/* EXACT BANNER CONTAINER WITH BORDER FRAME */}
            <div className="w-full bg-[#1b3b32] py-16 px-4 md:px-12 flex justify-center mb-12">
                <div className="w-full max-w-5xl border border-[#2b5447] bg-[#1b3b32] text-white py-10 px-6 md:px-16 text-center space-y-3">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                        Assessment and Exam Review Services
                    </h1>
                    <p className="text-xs md:text-sm text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Diagnostic Assessments and Test Review Services help students discover areas of weakness and increase their likelihood of passing the exam while enhancing self-confidence through structured diagnostics and focused review.
                    </p>
                </div>
            </div>

            <div className="w-full bg-white text-gray-800 pb-16 px-4 md:px-8 space-y-16">

                {/* MAIN CONTENT SECTION */}
                <section className="max-w-5xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
                            Ensure Fair, Accurate, and Outcome-Aligned Assessments with Pubrica&apos;s Expert Assessment & Exam Review Services
                        </h2>
                    </div>

                    <div className="clearfix text-gray-700 text-sm md:text-base leading-relaxed space-y-6">
                        {/* FLOATING IMAGE CONTAINER */}
                        <div className="float-right ml-8 mb-6 w-full md:w-[380px] lg:w-[420px] bg-[#1b3b32] p-3 rounded-2xl shadow-lg">
                            <div className="relative w-full h-[220px] md:h-[240px] rounded-xl overflow-hidden bg-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                                    alt="Assessment and Exam Review session"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <p>
                            The importance of education has shifted to evaluation of results in academic and professional sectors; therefore, evaluations, tests, and exams are essential elements in measuring the competency, academic integrity, and effectiveness of student learning. However, small issues with validity, including ambiguous test questions, inaccurate learning outcomes, inconsistent scorecards, and biases in scoring, can negatively affect the validity of an assessment and the student&apos;s confidence in their abilities.
                        </p>
                        <p>
                            At Pubrica, we have established an Assessment and Exam Review Service that assists educational institutions, faculty, and trainers in creating valid, equitable, inclusive assessments that adhere to accountability; this is accomplished through expert review for ensuring the integrity and credibility of assessments:
                        </p>
                    </div>

                    {/* THE PUBRICA ASSESSMENT AND EXAM REVIEW PROVIDE SECTION */}
                    <div className="clear-both pt-4">
                        <div className="bg-[#f2f7f5] border border-[#d5e4de] rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b3b2c]">
                                The Pubrica Assessment and Exam Review provide:
                            </h3>

                            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                                <li className="flex items-start space-x-3">
                                    <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                                    <span><strong>A significant decrease in the number of cluttered, confusing questions.</strong></span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                                    <span><strong>An increase in aligned objectives learning outcomes.</strong></span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                                    <span><strong>More balance between cognitive levels of difficulty.</strong></span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                                    <span><strong>All courses have the same criteria for grading of assessment items.</strong></span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                                    <span><strong>All assessments comply with the accrediting body&apos;s requirements.</strong></span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                                    <span><strong>A just assessment process develops materials for teachers&apos; learners that do not discriminate against any group of people.</strong></span>
                                </li>
                            </ul>

                            <div className="pt-2 text-left">
                                <Link href="#" className="inline-block bg-[#c5221f] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#a51a17] transition-colors shadow">
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TYPES OF ASSESSMENT AND EXAM REVIEW SERVICES WE OFFER */}
                <section className="max-w-6xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
                            Types of Assessment and Exam Review Services We Offer
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
                            Pubrica Assessment & Exam Review Services provide educational institutions with the ability to conduct High-Quality Assessments. Pubrica is committed to providing educational institutions with services that enhance and maintain a high level of Clarity, Consistency, and Academic Rigor throughout each type of assessment performed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.map((service, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                                <div>
                                    <div className="w-12 h-12 rounded-lg bg-[#0b3b2c]/10 flex items-center justify-center text-[#0b3b2c] font-bold text-lg mb-4">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base mb-2">{service.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{service.description}</p>
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