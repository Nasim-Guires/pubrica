"use client";
import React, { useState } from 'react';
import Head from 'next/head';

interface FaqItem {
    question: string;
    answer: string | string[]; // Can be a paragraph or a list of bullet points
}

const faqData: FaqItem[] = [
    {
        question: "What are the different types of scientific editing services for researchers and academicians?",
        answer: "We offer complete scientific, technical, and medical editing; moreover, proofreading for all kinds of documents. We deliver manuscripts on time and are delivered on time with highest standards of clarity, precision, and content. Get instant response via +91 9884350006."
    },
    {
        question: "What skills do medical writers and editors bring to the table?",
        answer: [
            "Sound knowledge in high-quality manuscript editing services & proofreading services and writing different types of scientific documents such as regulatory and clinical writing, research-related and drug or disease related documents, publication support services, and scientific publication support. They do the following:",
            "Scrutinize documents—requirement gathering through publishing",
            "Know-how in regulations such as EU, US standards and protocols.",
            "Analyze and visualize study outcomes.",
            "Build clear and consistent protocol and regulatory documents in compliance with regulatory standards.",
            "Liaise with clinical team",
            "Manage disciplinary document review process—editing and proofing",
            "Create templates that replicate the complete study; furthermore, we meet or exceed all international standards. Get instant response via +91 9884350006."
        ]
    },
    {
        question: "What kind of documents do medical writers edit?",
        answer: "Our certified medical writers assist in Scientific, Medical, Technical and Medical (STM) documents. Books and chapters, brochures, reports, résumé dissertations and theses, grant proposals, manuscripts, editorials, grant revisions, galley proofs, grant reviews, manuscript reviews, presentations, posters, letters, philosophy statements, promotion packages, technical writings, review articles—these are examples of the work we do."
    },
    {
        question: "Do you outsource your medical writers for projects?",
        answer: "Yes, at Scientific Writing & Publishing Support, our motto is to work hands-on with clients. We guarantee 100% project satisfaction. So we go exceed their expectations. Full-fledged writing services across all domains; moreover, we also provide animation, regulatory writing, medical writing, research, and biostatistical programming services as well. Call us now to get a quote."
    },
    {
        question: "Do you offer niche therapeutic support services for clinical trials?",
        answer: "Yes, indeed. We offer multiple yet niche therapeutic services. Our medical and regulatory writers will support you. We provide complete program development and delivery services for any phase of the trial; moreover, we can salvage a failing or faltering trial. Let our pros work with you. Get instant response via +91 9884350006."
    },
    {
        question: "Elaborate on the medical documents?",
        answer: "Clinical study report (CSR), Clinical Trial Report (CTR), Common Technical Document (CTD), Annual Safety Report (ASR), Investigational New Drug (IND), Pediatric Study Plan (PSR), Investigational Medicinal Product Dossier (IMPD), Periodic Safety Update Report (PSUP), Risk Management Plan (RMP), Statistical Analysis Plan (SAP)—these are some of the medical documents."
    },
    {
        question: "What are the types of scientific and medical writing services you offer?",
        answer: "Manuscript development, case report, original research article, meta-analysis, research proposal, review article, general review, systematic review, clinical & medical seminar paper development and medical grant proposal—these are some of our scientific and medical writing services."
    },
    {
        question: "What do your medical and scientific writers offer?",
        answer: "Regulatory and clinical writing, research-related and drug/disease related documents, publication support services, manuscript editing services and scientific publication support. Our experts will help you to"
    },
    {
        question: "What do your medical and scientific writers offer?",
        answer: [
            "Regulatory and clinical writing, research-related and drug/disease related documents, publication support services, manuscript editing services and scientific publication support. Our experts will help you to",
            "Thoroughly scrutinize document requirements",
            "Meet regulations pertaining to US and EU pharma and device industry",
            "Analyze and visualize output to demonstrate study outcome",
            "Build a clear and consistent compliant documents that meet regulatory requirements or native guidelines",
            "Regulate and coordinate essential inputs from the clinical team",
            "Stage-manage an effective and disciplinary document review process; and finally,",
            "Produce template documents that replicate the complete study information or data that meet regulatory requirements."
        ]
    },
    {
        question: "Which kind of documents do your medical writers prepare?",
        answer: "Clinical study report (CSR), Clinical Trial Report (CTR), Common Technical Document (CTD), Annual Safety Report (ASR), Investigational New Drug (IND), Pediatric Study Plan (PSR), Investigational Medicinal Product Dossier (IMPD), Periodic Safety Update Report (PSUP), Risk Management Plan (RMP), Statistical Analysis Plan (SAP)—these are the activities of our medical writers. This is not an exhaustive list. For more info, contact us via +91 9884350006."
    },
    {
        question: "What are the types of journal support and illustration enhancement services you offer?",
        answer: "Journal selection, journal submission, response to reviewer, peer review & pre-submission, poster creation & design and formatting Services, 2D & 3d medical animation, medical and technical drawing drawings—these are some of our journal and illustration services."
    },
    {
        question: "What are the types of medical animation services you offer?",
        answer: "We offer 2D, 3D and illustration services. Our 3D Medical animation services include surgical procedures & pharmaceutical Products, website animation, patient learning modules, patient case studies, videos, sales kits and marketing promotional material; furthermore, we offer study tools, KOL videos & presentation, blu-ray & DVD, brochures and exhibition touchscreen media content. This list is not over yet. We also offer 3D interactive content for booth displays, 3D modeling, 3D stereoscopic animation, music & sound effects, video editing, voice over recording. Contact us for details and pricing sheet. Get instant response via +91 9884350006."
    },
    {
        question: "What do medical illustrators and animators bring to the table?",
        answer: [
            "We offer all types of scientific and medical illustration, animation, and videos; they are",
            "Accident and injury animation, cellular action animation, surgical and medical device illustration, health gaming and augmented and virtual reality simulation and medical mobile app design; and finally,",
            "storyboarding, 3D modeling, 3D and 2D animation. Get instant response via +91 9884350006.",

        ]
    },
    {
        question: "What are the types of regulatory and clinical writing services you offer?",
        answer: "We do clinical study reports and protocols, investigation brochure for new drugs, biological, or medical devices, informed consent document, clinical study reports, plan I to III study report, non- clinical study reports, non-clinical summaries and overviews, safety narratives, all-inclusive data management, periodic safety update reports, safety surveillance plan and case report form. For more info, reach us via +91 9884350006."
    },
    {
        question: "What are the different types of physician writing services you offer?",
        answer: "Abstracts, poster preparation, newsletter, white papers, literature review, CME Slide Presentation, medical websites, patient education tutorials, speaker kits and monographs—these are our physician-writing offerings"
    },
    {
        question: "What are the clinical biostatistics services and data management services you offer?",
        answer: "Study randomization, protocol Design, sample size computation, trial sizes and power calculations, data analysis from pre-clinical, clinical and epidemiological trials, database design and setup, managing EDC data, statistics consulting and medical report writing—these are our biostatistical and data management services. For more info, contact us via +91 9884350006."
    },
    {
        question: "What value addition do your biostatisticians offer?",
        answer: "We are veterans in clinical biostatistics analysis services, statistical programming, scientific documentation such as regulatory and clinical writing, research, drug or disease related documents, publication support services, manuscript editing services and scientific publication support.Our pool of experts help you in medical writing, clinical biostatistics analysis and data management."
    },
    {
        question: "I have lots of other questions. How do I reach you folks?",
        answer: "Get instant response via +91 9884350006 alternatively, email or request quote on website."
    },
    {
        question: "What are the chances of turning my manuscript into a video?",
        answer: "It depends on your content. We will review your content and if we are sure that your content can be successfully converted into an audiovisual format will we proceed with the video production process."
    },
    {
        question: "Do you publicize my video?",
        answer: "We take your permission before we do anything to your content. We know that you may have constraints on sharing your content; therefore, we will only share your video with your permission. After your permission, we will do our best to boost your video exposure. This includes uploading the video to Pubrica's Vimeo, YouTube channel, our website, and sharing the message on social media networks. Using the embed code we share with you, you will also be able to include the video on other websites and share the link with your peers and colleagues."
    },
    {
        question: "How much involvement (work) do I have and will you revise the output if required?",
        answer: "We will communicate with you primarily at two phases: for the go-ahead of the script and for approval of the final version of the video. You can use these instances to share your feedback with our team. We revise only before the final video launch"
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Head>
                <title>FAQ - Pubrica</title>
                <meta
                    name="description"
                    content="Pubrica's FAQ provides comprehensive answers to frequently asked questions about their academic and scientific research services."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className="min-h-screen bg-gray-50 text-gray-800">
                {/* Top Banner Section */}
                <section className="bg-[#415a55] text-white py-16 px-4 text-center">
                    <div className="max-w-4xl mx-auto border border-gray-400 p-8">
                        <h1 className="text-4xl font-bold mb-4">FAQ</h1>
                        <p className="text-sm md:text-base text-gray-200">
                            Pubrica&apos;s FAQ provides comprehensive answers to frequently asked questions about their academic and scientific research services.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-5xl mx-auto py-12 px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900 mb-4">
                            FREQUENTLY ASKED QUESTIONS (FAQ)
                        </h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            We are with you the whole nine yards. In this section, we answer the tough questions. For any information, contact us via +91 9884350006; meanwhile, here are some of those queries.
                        </p>
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-3">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="shadow-sm transition-all">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`w-full text-left py-3 px-4 flex items-center justify-between font-medium text-sm md:text-base focus:outline-none text-white ${isOpen ? 'bg-[#333333]' : 'bg-[#808a87]'
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="text-lg font-semibold">{isOpen ? '−' : '+'}</span>
                                            {item.question}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="bg-white text-gray-800 px-6 py-4 text-sm leading-relaxed border border-t-0 border-gray-300">
                                            {Array.isArray(item.answer) ? (
                                                <>
                                                    <p className="mb-3">{item.answer[0]}</p>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        {item.answer.slice(1, -1).map((point, i) => (
                                                            <li key={i}>{point}</li>
                                                        ))}
                                                    </ul>
                                                    {item.answer.length > 2 && (
                                                        <p className="mt-3">{item.answer[item.answer.length - 1]}</p>
                                                    )}
                                                </>
                                            ) : (
                                                <p>{item.answer}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}