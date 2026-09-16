"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    TrendingUp,
    FileText,
    Database,
    AlertTriangle,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function ForensicPage() {
    const disciplines = [
        {
            title: "Forensic Pathology",
            iconSrc: "/images/subject-matter-experts/forensics/Forensic-Pathology.webp",
            description: "Involves conducting postmortem examinations and analysing biopsies and other biologically qualitative samples to establish causes and mechanisms of death. Forensic Pathology helps to identify how and why a person died in criminal investigations and gives insight into the type of injuries sustained because of violence perpetrated against an individual.",
            icon: Search
        },
        {
            title: "Forensic Toxicology",
            iconSrc: "/images/subject-matter-experts/forensics/Forensic-Toxicology.webp",
            description: "studies chemical agents, toxins and drugs, and their metabolites in humans and animals through testing biological fluids (blood, urine, saliva). Forensic Toxicologists utilize this science to help determine the cause of death or injuries from poisonings, drug overdoses and DUI cases.",
            icon: TrendingUp
        },
        {
            title: "DNA forensic science",
            iconSrc: "/images/subject-matter-experts/forensics/DNA-forensic-science.webp",
            description: "Refers to gathering evidence from DNA for use in law enforcement to assist with identifying suspects, victims, and/or other biological samples used in evidence. It is also a key technique used in the investigation of cold cases, the resolution of paternity, and the identification of bodies involved in crimes.",
            icon: FileText
        },
        {
            title: "Digital Forensics",
            iconSrc: "/images/subject-matter-experts/forensics/Digital-Forensics.webp",
            description: "Includes locating, preserving and evaluating of data that has been electronically stored on computers, smartphones and other electronic devices. Digital Forensics also provides important information in relation to Cybercrime investigations, Data Breach investigations and Digital Evidence in a court of law.",
            icon: Database
        },
        {
            title: "Anthropological Factors",
            iconSrc: "/images/subject-matter-experts/forensics/Anthropological-Factors.webp",
            description: "In Forensics Identify Human Skeletons and Analyze Samples to Determine Identity, Death, Cause of Death; They Help Law Enforcement with Cases Involving Human Remains.",
            icon: AlertTriangle
        },
        {
            title: "Forensic psychology",
            iconSrc: "/images/subject-matter-experts/forensics/Forensic-Psychology-1.webp",
            description: "Applies psychological principles to issues of law in connection with criminal behaviour, witness accounts, and mental competency evaluations, all of which are necessary for determining if someone meets the standard of civil competency to stand trial. Forensic psychologists are often used in criminal profiling and assessing the mental state of individuals involved in civil court cases.",
            icon: Layers
        }
    ];
    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileSearch,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Cpu,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Cpu,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: Layers,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support",
            imageUrl: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: BarChart3,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSearch,
        },
        {
            title: "Case Report Writing Service",
            desc: "Detailed description of a rare or unusual disease, symptom, or treatment outcome.",
            href: "/services/physician-writing-services/case-report",
            imageUrl: "/images/subject-matter-experts/forensics/How-to-Structure-Case-Reports-and-Review-Articles-for-Medical-Journals.jpg",
            icon: FileText,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Forensic"
                description="Forensic research makes use of the skills of experts and the analysis of data as a way of coming to conclusions in a federal court for criminal matters. The forensic research can be the most critical element to build the basis of a criminal investigation to substantiate justice in the courts of law."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Forensic research and practice through expert analysis, data interpretation, and publication support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/forensics/Forensic.webp"
                                        alt="Forensic research visualization"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        The practice and research associated with forensics incorporate the use of science to address issues relating to crime, civil law, and other legal concerns. This area of research uses physical, chemical, and biological evidence collected from crime scenes, from people, or from objects and analyses that evidence to determine how it relates to a legal action. By providing expert analysis on the validity of evidence, forensic specialists allow the legal system to build cases, recreate events, and ascertain how an individual died or was injured. In addition, they provide support in terms of the analysis of data from various sciences such as DNA testing and digital forensics.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica offers full{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            research and publishing services
                                        </Link>{" "}
                                        around forensics for criminal investigators, forensic scientists, and lawyers. Our highly trained specialists in forensic pathology, toxicology, investigations, and digital forensics will work closely with you to develop a quality, data-driven study that is published in a high-impact,{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            peer-reviewed journal
                                        </Link>
                                        . We are available for assistance with all types of forensics including{" "}
                                        <Link href="/insights/sample-work/dyskeratosis-congenita-rare-case-report/" className="text-blue-600 no-underline">
                                            case studies
                                        </Link>
                                        , laboratory work, and digital crime investigation so that you can rest assured that your work is complete, accurate, and ready for legal and academic examination.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <GetFreeQuoteButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Forensic
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we have developed capabilities in a wide variety of Core Forensic disciplines that facilitate Legal & Criminal Investigations. We have several area(s) of expertise across many scientific fields, and each area is critical to accurately analysing the evidence and providing expert witness testimony. The Core Forensic disciplines are:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Forensic Research and Publication"
                    description="At Pubrica, we offer research support to Forensic Science, within the realm of Forensic Science (i.e., Forensic Sciences) and in Forensic Science research collaboration. We have a multidisciplinary team that provides evidence analysis, interpretation of data, and publication. Our experts offer customised solutions based on our customers' requirements within various disciplines:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}