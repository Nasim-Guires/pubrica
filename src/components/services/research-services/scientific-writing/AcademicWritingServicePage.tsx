"use client";

import React, { useState } from "react";
import Script from "next/script";
import Image from "next/image";

// ==========================================
// TYPES & ACCORDION DATA
// ==========================================

export interface AccordionItemData {
    id: string;
    title: string;
    items: string[];
}

const ACCORDION_DATA: AccordionItemData[] = [
    {
        id: "stage",
        title: "By Research Stage",
        items: [
            "Proposal Writing",
            "Draft Writing",
            "Polishing for Final Submission",
        ],
    },
    {
        id: "type",
        title: "By Document Type",
        items: [
            "Research Article",
            "Thesis / Dissertation",
            "White Paper",
            "Case Study",
        ],
    },
    {
        id: "model",
        title: "By Journal Model",
        items: ["Open Access Journals", "Subscription Journals", "Hybrid Journals"],
    },
    {
        id: "indexing",
        title: "By Journal Indexing",
        items: ["Scopus Indexed", "PubMed Indexed", "Web of Science (WoS)", "UGC CARE / DOAJ"],
    },
    {
        id: "addons",
        title: "(Optional add Ons) Each tab accordion would expand to",
        items: ["Short description", "Benefits of customized writing for that type"],
    },
];

// ==========================================
// ALL-IN-ONE PAGE COMPONENT
// ==========================================

export default function ScientificWritingPage() {
    // State: null means ALL accordion cards remain closed on initial load
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    // Dynamic FAQ Schema Injection for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ACCORDION_DATA.map((item) => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.items.join(", "),
            },
        })),
    };

    return (
        <>
            {/* SEO Structured Data */}
            <Script
                id="faq-json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="w-full bg-white font-sans text-gray-800">

                {/* SECTION 1: Academic Needs & Accordion (Closed by default) */}
                <section className="mx-auto max-w-6xl px-4 py-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">

                        {/* Left Content Column */}
                        <article className="md:col-span-7">
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1a3c34] sm:text-3xl">
                                Writing by Academic Need / Type
                            </h2>

                            <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                Choose the service that aligns with your research stage, document type, or journal preferences.
                            </p>

                            <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                At Pubrica, we know that academic writing is not uniform. Whether you are early in the research process or finalizing submission, our writing solutions will reflect your academic context. For example, we can provide you support customized by research stage, document type, journal publishing model, and indexing requirements, so you are confident your work meets measures of excellence in scientific and editorial matters. Whether you need a research proposal to submit for grant funding, a full-length article for peer review, or a thesis as per university requirements, our team of subject-matter experts and academic writers will provide accurate, publication-ready, and ethically defined writing.
                            </p>

                            <h2 className="mb-2 text-base font-semibold text-[#1a3c34]">
                                Our services match to:
                            </h2>
                            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-600">
                                <li>Game stage of your research (from idea to final tweaking)</li>
                                <li>Type of academic document you need to produce</li>
                                <li>Publishing model you are targeting (Open Access, Subscription)</li>
                                <li>Journal indexing requirements of your intended submission (Scopus, PubMed, Web of Science)</li>
                            </ul>
                        </article>

                        {/* Right Accordion Sidebar */}
                        <aside className="md:col-span-5">
                            <div className="w-full overflow-hidden rounded-md border border-[#1a3c34] bg-white shadow-sm">
                                {ACCORDION_DATA.map((item, index) => {
                                    const isOpen = openId === item.id;
                                    const isLast = index === ACCORDION_DATA.length - 1;

                                    return (
                                        <div
                                            key={item.id}
                                            className={`${!isLast ? "border-b border-[#1a3c34]" : ""}`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleItem(item.id)}
                                                aria-expanded={isOpen}
                                                aria-controls={`accordion-content-${item.id}`}
                                                id={`accordion-header-${item.id}`}
                                                className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-[#1a3c34] transition-colors hover:bg-emerald-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3c34]"
                                            >
                                                <span>{item.title}</span>
                                                <svg
                                                    className={`h-4 w-4 shrink-0 transform text-[#1a3c34] transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            <div
                                                id={`accordion-content-${item.id}`}
                                                role="region"
                                                aria-labelledby={`accordion-header-${item.id}`}
                                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                                    }`}
                                            >
                                                <div className="overflow-hidden bg-[#eaf2ed]">
                                                    <ul className="list-disc space-y-1.5 py-3 pl-8 pr-4 text-xs font-medium leading-relaxed text-[#1a3c34]">
                                                        {item.items.map((listItem, idx) => (
                                                            <li key={idx}>{listItem}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </aside>

                    </div>
                </section>

                {/* SECTION 2: Sample Work & Report Banner */}
                <section className="bg-[#f2f9f5] py-12">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">

                            <div className="relative h-64 w-full overflow-hidden rounded-md md:col-span-5 md:h-80">
                                <Image
                                    src="/images/research-services/scientific-writing/Journal-Selection-Sample-Work.webp"
                                    alt="Scientific & Academic Writing"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-6 md:col-span-7">
                                <div>
                                    <h3 className="mb-3 text-xl font-bold text-[#1a3c34]">
                                        Scientific & Academic Medical Writing Sample Work
                                    </h3>
                                    <button className="rounded-full bg-black px-8 py-2.5 text-xs font-medium text-white transition hover:bg-gray-800">
                                        Discover More
                                    </button>
                                </div>

                                <div>
                                    <h4 className="mb-2 text-base font-bold text-[#1a3c34]">
                                        Download the full Report Now
                                    </h4>
                                    <p className="mb-3 text-xs leading-relaxed text-gray-600">
                                        Explore our Scientific & Academic Medical Writing sample work aligned with your manuscript's formatting standards, ethical guidelines, and target publication timelines.
                                    </p>
                                    <button className="rounded-full bg-black px-8 py-2.5 text-xs font-medium text-white transition hover:bg-gray-800">
                                        Discover More
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 3: Why Choose Features */}
                <section className="mx-auto max-w-6xl px-4 py-16 text-center">
                    <h2 className="mb-2 text-2xl font-bold text-[#1a3c34]">
                        Why Choose Scientific and Academic Writing?
                    </h2>
                    <p className="mb-12 text-xs text-gray-600">
                        Scientific and academic writing is critical for promoting research findings with clarity, credibility, and a global impact.
                    </p>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-gray-200">

                        <div className="flex flex-col items-center px-4">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center">
                                <svg className="h-12 w-12 text-[#1a3c34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold text-[#1a3c34]">COPE compliance</h3>
                        </div>

                        <div className="flex flex-col items-center px-4">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center">
                                <svg className="h-12 w-12 text-[#1a3c34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold text-[#1a3c34]">No AI-generated or plagiarized content</h3>
                        </div>

                        <div className="flex flex-col items-center px-4">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center">
                                <svg className="h-12 w-12 text-[#1a3c34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold text-[#1a3c34]">Authorship integrity</h3>
                        </div>

                        <div className="flex flex-col items-center px-4">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center">
                                <svg className="h-12 w-12 text-[#1a3c34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold text-[#1a3c34]">GDPR-compliant handling of data</h3>
                        </div>

                    </div>
                </section>

                {/* SECTION 4: Packages & Pricing Table */}
                <section className="mx-auto max-w-6xl px-4 py-12">
                    <h2 className="mb-6 text-xl font-bold text-[#1a3c34]">
                        Packages & Pricing
                    </h2>

                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="w-full border-collapse text-left text-xs">
                            <thead>
                                <tr className="bg-[#1a3c34] text-white">
                                    <th className="p-3 font-semibold">Features</th>
                                    <th className="p-3 font-semibold">Basic</th>
                                    <th className="p-3 font-semibold">Standard</th>
                                    <th className="p-3 font-semibold">Premium</th>
                                    <th className="p-3 font-semibold">Institutional/Custom</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Word Count Limit</td>
                                    <td className="p-3">1,000–2,000</td>
                                    <td className="p-3">Up to 5,000</td>
                                    <td className="p-3">5,000+</td>
                                    <td className="p-3">As per requirement</td>
                                </tr>
                                <tr className="bg-[#eaf2ed]/40">
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Document Types</td>
                                    <td className="p-3">Abstract, Short Manuscript</td>
                                    <td className="p-3">Literature Review, Short Thesis</td>
                                    <td className="p-3">Systematic Review, Dissertation</td>
                                    <td className="p-3">All Academic & Research Docs</td>
                                </tr>
                                <tr>
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Writing & Editing</td>
                                    <td className="p-3">✓</td>
                                    <td className="p-3">✓✓</td>
                                    <td className="p-3">✓✓✓</td>
                                    <td className="p-3">✓✓✓✓</td>
                                </tr>
                                <tr className="bg-[#eaf2ed]/40">
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Reference Formatting</td>
                                    <td className="p-3">✓</td>
                                    <td className="p-3">✓</td>
                                    <td className="p-3">✓✓</td>
                                    <td className="p-3">✓✓</td>
                                </tr>
                                <tr>
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Plagiarism Check</td>
                                    <td className="p-3">–</td>
                                    <td className="p-3">✓</td>
                                    <td className="p-3">✓✓</td>
                                    <td className="p-3">✓✓✓</td>
                                </tr>
                                <tr className="bg-[#eaf2ed]/40">
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Revisions Included</td>
                                    <td className="p-3">1</td>
                                    <td className="p-3">2</td>
                                    <td className="p-3">Unlimited</td>
                                    <td className="p-3">Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Turnaround Time</td>
                                    <td className="p-3">5–7 Days</td>
                                    <td className="p-3">7–10 Days</td>
                                    <td className="p-3">10–15 Days</td>
                                    <td className="p-3">Based on Project Scope</td>
                                </tr>
                                <tr className="bg-[#eaf2ed]/40">
                                    <td className="bg-gray-50 p-3 font-medium text-gray-700">Price Range</td>
                                    <td className="p-3">$ (economical)</td>
                                    <td className="p-3">$$ (moderate)</td>
                                    <td className="p-3">$$$ (premium)</td>
                                    <td className="p-3">Custom Quote</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 5: Satisfaction Banner */}
                <section className="bg-[#0e3b2e] py-10 text-white">
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 md:flex-row">

                        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-emerald-400 bg-white">
                            <Image
                                src="/images/research-services/scientific-writing/Satisfaction_Guarantee.webp"
                                alt="100% Guarantee"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-2 text-center md:text-left">
                            <h2 className="text-lg font-bold sm:text-xl">
                                Speed Up Your Journey to Scientific and Academic Writing with Pubrica
                            </h2>
                            <p className="text-xs leading-relaxed text-emerald-100">
                                Speed up your publication goals with experienced Medical and Scientific writing assistance from Pubrica. We provide clarity, compliance and credibility in every manuscript. We help you make the writing process easy, from journal selection to submission.
                            </p>
                        </div>

                    </div>
                </section>

                {/* SECTION 6: Guarantee & Cards Section */}
                <section className="mx-auto max-w-6xl px-4 py-16">
                    <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-12">

                        <div className="space-y-3 md:col-span-8">
                            <h2 className="text-xl font-bold text-[#1a3c34]">
                                Why We are The De facto Choice for Scientific and Academic Writing
                            </h2>
                            <p className="text-xs leading-relaxed text-gray-600">
                                Pubrica offers professional writing that also takes the complexities of medical and scientific concepts and puts them into easy-to-read writing, creating clarity to any paper, manuscript, or research qualified. Our process is time-efficient, thus saving you time, and increasing the credibility of your research. Let us help to improve your academic publications.
                            </p>
                        </div>


                        <div className="flex justify-center md:col-span-4">
                            <div className="relative h-40 w-48 overflow-hidden rounded-md  ">
                                <Image
                                    src="/images/research-services/scientific-writing/download.webp"
                                    alt="100% Satisfaction Guaranteed"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>


                    </div>

                    {/* 3 Columns Guarantee Cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                        <div className="rounded-lg border-t-4 border-yellow-400 bg-amber-50/40 p-6 shadow-sm">
                            <h3 className="mb-3 text-sm font-bold text-gray-800">
                                Guaranteed Quality
                            </h3>
                            <p className="text-xs leading-relaxed text-gray-600">
                                We are committed to providing the highest-level scientific and academic writing possible. As part of our commitment, if our work does not meet your standards, we will revise it until you are completely satisfied. It is our commitment to quality that ensure your research is presented to the best possible academic standards and exactitude.
                            </p>
                        </div>

                        <div className="rounded-lg border-t-4 border-purple-400 bg-purple-50/40 p-6 shadow-sm">
                            <h3 className="mb-3 text-sm font-bold text-gray-800">
                                On Time Always
                            </h3>
                            <p className="text-xs leading-relaxed text-gray-600">
                                We know that deadlines are crucial in a scholarly context, and we do our absolute best to always adhere to them. In fact, we often turnaround your work in less than 8 hours! Being on time means that your manuscripts and research are always submitted right on time and with zero quality compromise.
                            </p>
                        </div>

                        <div className="rounded-lg border-t-4 border-teal-400 bg-teal-50/40 p-6 shadow-sm">
                            <h3 className="mb-3 text-sm font-bold text-gray-800">
                                Advanced Security
                            </h3>
                            <p className="text-xs leading-relaxed text-gray-600">
                                Your research is in safe hands. We ensure all your work is protected by advanced encryption, and our team members adhere to strict confidentiality through Non-Disclosure Agreements (NDAs). We guarantee the security of your data through rigorous protocols, providing you peace of mind throughout the writing process.
                            </p>
                        </div>

                    </div>
                </section>

            </div>
        </>
    );
}