"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/common/HeroBanner";

/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */

interface AccordionItem {
    id: string;
    title: string;
    description: React.ReactNode;
}

const whatWeDoData: AccordionItem[] = [
    {
        id: "economic-evaluation",
        title: "Economic evaluation in healthcare & Cost-Effectiveness Analysis",
        description:
            "We develop robust economic models that evaluate treatment costs, value for money, and healthcare resource allocation. Our cost-effectiveness analysis services support HTA submissions, payer negotiations, and peer-reviewed publications.",
    },
    {
        id: "rwe-generation",
        title: "Real-World Evidence (RWE) Generation",
        description:
            "Pubrica’s experts analyze clinical, observational, and claims data to generate real-world evidence. These insights help healthcare providers, regulators, and payers make informed decisions that enhance patient outcomes and value-based care.",
    },
    {
        id: "slr-meta-analyses",
        title: "Systematic Literature Reviews (SLRs) & Meta-Analyses",
        description: (
            <>
                We conduct{" "}
                <Link
                    href="/services/research-services/systematic-review/"
                    className="text-blue-600"
                >
                    systematic literature reviews
                </Link>{" "}
                and{" "}
                <Link
                    href="/services/research-services/meta-analysis/"
                    className="text-blue-600"
                >
                    meta-analyses
                </Link>{" "}
                to synthesize published data. These outputs strengthen clinical guidelines, health technology assessments (HTAs), and product positioning in global healthcare markets.
            </>
        ),
    },
    {
        id: "pro-outcomes",
        title: "Patient-Reported Outcomes (PROs)",
        description:
            "Our team designs and validates patient-reported outcomes studies to capture patient perspectives on quality of life, treatment satisfaction, and therapy benefits. PRO evidence supports regulatory approval and high-impact journal publication.",
    },
    {
        id: "market-access",
        title: "Market Access & Reimbursement Strategy",
        description:
            "We create market access strategies and reimbursement dossiers tailored to payer requirements. Our HEOR experts align evidence with national and international HTA frameworks, helping products secure funding and adoption.",
    },
    {
        id: "cer-research",
        title: "Comparative Effectiveness Research (CER)",
        description:
            "Pubrica delivers comparative effectiveness research that evaluates alternative interventions and therapies. CER evidence guides clinical decision-making, policy development, and formulary inclusion, ensuring your research is impactful and relevant.",
    },
    {
        id: "hta-support",
        title: "Health Technology Assessment (HTA) Support",
        description:
            "Our experts offer end-to-end HTA submission support services, including evidence synthesis, modeling, and dossier preparation. We align research outputs with international HTA frameworks, ensuring your study meets the requirements of regulators, payers, and healthcare authorities.",
    },
    {
        id: "modeling-approaches",
        title: "Modeling Approaches (Advanced Methods)",
        description:
            "Pubrica specializes in advanced HEOR modeling approaches, including Markov models, decision-analytic models, and survival models. These methods provide a robust framework to evaluate long-term clinical and economic outcomes. Our customized HEOR models support clinical development, pricing strategies, and value demonstration for publication.",
    },
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function HealthEconomicsOutcomeResearch() {
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordionId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className="w-full bg-slate-50 pb-6 text-slate-800 font-sans">
            {/* 1. HERO BANNER */}
            <div className="w-full">
                <HeroBanner
                    title="Health Economics & Outcome Research"
                    description="Pubrica's Health Economics & Outcomes Research (HEOR) services provide evidence-based insights to support healthcare decision-making. From cost-effectiveness analyses to real-world evidence generation, we help stakeholders improve patient outcomes and advance value-based care initiatives."
                    headingAs="h1"
                />
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-12 sm:mt-16">
                {/* ------------------------------------------------------------------
           2. TURN EVIDENCE INTO IMPACT SECTION
           ------------------------------------------------------------------ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Text Block */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26] leading-tight">
                            Turn Evidence Into Impact, Research Into Results With Our Health Economics & Outcomes Research (HEOR) Expertise
                        </h2>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            At Pubrica, we help healthcare stakeholders bridge the gap between clinical outcomes and economic value through comprehensive{" "}
                            <Link
                                href="/academy/health-economics/health-economics-research-and-heor-services/"
                                className="text-blue-600"
                            >
                                Health Economics & Outcomes Research
                            </Link>{" "}
                            services. Our team of health economists, statisticians, epidemiologists, and medical writers collaborates to generate real-world evidence that supports outcomes-based healthcare and value-based care decisions worldwide.
                        </p>

                        <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>1,500+ HEOR projects completed across cost-effectiveness, real-world evidence, and patient-reported outcomes.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>Multidisciplinary team of economists, statisticians, epidemiologists, and medical writers.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>
                                    Exclusive focus on researchers preparing manuscripts,{" "}
                                    <Link
                                        href="/services/data-analytics-machine-learning/health-economics-outcome-research/thesis-vs-dissertation-differences-similarities/"
                                        className="text-blue-600"
                                    >
                                        dissertations
                                    </Link>
                                    , publications and policy makers.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>Proven track record in supporting successful submissions to peer-reviewed journals.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>Global expertise across multiple therapeutic areas and healthcare systems.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>
                                    Compliance with international guidelines (
                                    <a
                                        href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600"
                                    >
                                        CONSORT
                                    </a>
                                    , SPIRIT,{" "}
                                    <a
                                        href="https://www.icmje.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600"
                                    >
                                        ICMJE
                                    </a>
                                    , HTA standards).
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                                <span>Evidence tailored for publication as well as funding and market access success.</span>
                            </li>
                        </ul>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
                            Our proven track record ensures that your research demonstrates both scientific credibility and economic value, increasing its potential for peer-reviewed journal acceptance and funding success.
                        </p>
                    </div>

                    {/* Right Image Container */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md h-72 sm:h-80 rounded-2xl overflow-hidden p-2">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="/images/data-analytics-machine-learning/health-economics-outcome-research/Health-Economics-Outcomes-Research-HEOR-Expertise.webp"
                                    alt="Health Economics and Outcomes Research Team Analysis"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------------
           3. WHAT WE DO (ACCORDION - CLOSED BY DEFAULT)
           ------------------------------------------------------------------ */}
                <div className="space-y-8 pt-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26]">
                            What We Do
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            At Pubrica, our{" "}
                            <Link
                                href="/academy/health-economics/health-economics-research-and-heor-services/"
                                className="text-blue-600"
                            >
                                Health Economics & Outcomes Research (HEOR)
                            </Link>{" "}
                            services help researchers, pharma companies, and healthcare organizations generate evidence for publication, funding, and regulatory approval.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Image Side */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="/images/data-analytics-machine-learning/health-economics-outcome-research/What-We-Do-3.png"
                                    alt="HEOR Professionals Collaborating"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Accordion Side */}
                        <div className="lg:col-span-7 space-y-3">
                            {whatWeDoData.map((item) => {
                                const isOpen = openAccordionId === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className="border-b border-slate-200 pb-3 transition-all"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(item.id)}
                                            className="w-full text-left flex items-center justify-between py-2 text-[#0b2b26] font-semibold text-sm sm:text-base hover:text-emerald-800 transition-colors focus:outline-none"
                                        >
                                            <span className="flex items-center gap-2 pr-4">
                                                <span className="font-bold text-lg leading-none">
                                                    {isOpen ? "—" : "+"}
                                                </span>
                                                <span>{item.title}</span>
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="pl-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}