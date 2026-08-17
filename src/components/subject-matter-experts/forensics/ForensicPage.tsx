"use client";
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

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileText,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileSearch,
            href: "/services/editing-and-translation/translation"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Cpu,
            href: "/services/research-services/systematic-reviews"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Cpu,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: Layers,
            href: "/services/publication-support/journal-selection"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: BarChart3,
            href: "/services/publication-support"
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSearch,
            href: "/services/research-services/peer-review"
        },
        {
            title: "Case Report Writing Service",
            description: "Detailed description of a rare or unusual disease, symptom, or treatment outcome.",
            image: "/images/subject-matter-experts/forensics/DNA-forensic-science.webp",
            icon: FileText,
            href: "/services/research-services/case-report"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Forensic
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Forensic research makes use of the skills of experts and the analysis of data as a way of coming to conclusions in a federal court for criminal matters. The forensic research can be the most critical element to build the basis of a criminal investigation to substantiate justice in the courts of law.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Forensic research and practice through expert analysis, data interpretation, and publication support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The practice and research associated with forensics incorporate the use of science to address issues relating to crime, civil law, and other legal concerns. This area of research uses physical, chemical, and biological evidence collected from crime scenes, from people, or from objects and analyses that evidence to determine how it relates to a legal action. By providing expert analysis on the validity of evidence, forensic specialists allow the legal system to build cases, recreate events, and ascertain how an individual died or was injured. In addition, they provide support in terms of the analysis of data from various sciences such as DNA testing and digital forensics.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica offers full research and publishing services around forensics for criminal investigators, forensic scientists, and lawyers. Our highly trained specialists in forensic pathology, toxicology, investigations, and digital forensics will work closely with you to develop a quality, data-driven study that is published in a high-impact, peer-reviewed journal. We are available for assistance with all types of forensics including case studies, laboratory work, and digital crime investigation so that you can rest assured that your work is complete, accurate, and ready for legal and academic examination.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/order-now"
                                className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
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

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Forensic
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we have developed capabilities in a wide variety of Core Forensic disciplines that facilitate Legal & Criminal Investigations. We have several area(s) of expertise across many scientific fields, and each area is critical to accurately analysing the evidence and providing expert witness testimony. The Core Forensic disciplines are:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {disciplines.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={index}
                                    className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-base font-bold text-[#9E1B1E] group-hover:text-[#7d1417] transition-colors pr-2">
                                                {item.title}
                                            </h3>
                                            <div className="p-2 bg-gray-50 rounded-lg shrink-0 text-[#0e3b32]">
                                                {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                                </span>
                                            ) : (
                                                <IconComponent className="w-6 h-6" />
                                            )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Forensic Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we offer research support to Forensic Science, within the realm of Forensic Science (i.e., Forensic Sciences) and in Forensic Science research collaboration. We have a multidisciplinary team that provides evidence analysis, interpretation of data, and publication. Our experts offer customised solutions based on our customers&apos; requirements within various disciplines:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="relative h-[280px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group block bg-white"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-[65%]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 group-hover:h-full shadow-lg flex flex-col items-center justify-center text-center">

                                    {/* Floating Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32] group-hover:top-4 transition-all duration-300">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2 group-hover:mt-12 transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-2">
                                        {service.description}
                                    </p>

                                </div>
                            </Link>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}