"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Zap,
    HeartPulse,
    Scissors,
    Baby,
    Stethoscope,
    FileText,
    CheckCircle,
    Image as ImageIcon,
    UserCheck,
    Send,
    BookOpen,
    MessageSquare,
    PenTool,
    Search,
    ChevronDown,
    ArrowRight
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CardiologyPage() {
    const disciplines = [
        {
            title: "Interventional Cardiology",
            iconSrc: "/images/subject-matter-experts/cardiology/Interventional-Car-diology.png",
            description: "Focused on catheter-based treatments for heart diseases, including angioplasty and stenting, our team provides detailed editorial and research support for studies on minimally invasive procedures and emerging technologies.",
            icon: HeartPulse
        },
        {
            title: "Electrophysiology",
            iconSrc: "/images/subject-matter-experts/cardiology/Electrophysiology.png",
            description: "From arrhythmia management to advanced cardiac pacing techniques, we support research in heart rhythm disorders, device therapies, and diagnostic innovations.",
            icon: Zap
        },
        {
            title: "Heart Failure and Transplantation",
            iconSrc: "/images/subject-matter-experts/cardiology/Heart-Failure-and-Transplantation.png",
            description: "Our specialists assist in research on acute and chronic heart failure, ventricular assist devices, and cardiac transplantation, ensuring clarity and scientific rigor in manuscripts and grant proposals.",
            icon: Activity
        },
        {
            title: "Cardiac Surgery",
            iconSrc: "/images/subject-matter-experts/cardiology/Cardiac-Surgery.png",
            description: "We assist researchers in cardiac surgical techniques, postoperative outcomes, and innovative surgical interventions, ensuring manuscripts meet international publication standards.",
            icon: Scissors
        },
        {
            title: "Paediatric Cardiology",
            iconSrc: "/images/subject-matter-experts/cardiology/Paediatric-Cardiology.png",
            description: "Research involving congenital heart defects, paediatric heart surgery, and childhood cardiovascular disorders receives specialized attention to maintain accuracy and readability for diverse audiences.",
            icon: Baby
        },
        {
            title: "Cardiovascular Imaging",
            iconSrc: "/images/subject-matter-experts/cardiology/Cardiovascular-Imaging.png",
            description: "Our team aids in studies using echocardiography, MRI, CT, and nuclear imaging to advance non-invasive diagnostic techniques, providing precise scientific editing for high-impact publications.",
            icon: Stethoscope
        }
    ];

    const expertiseCards = [
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: CheckCircle,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: ImageIcon,
        },
        {
            title: "Peer-Review",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: UserCheck,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: BookOpen,
        },
        {
            title: "Responding to Reviewers",
            desc: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
            href: "/services/publication-support/responding-to-reviewers/",
            imageUrl: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: MessageSquare,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Search,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Cardiology"
                description="Comprehensive research, publication, and editing support for cardiology scholars, researchers, and healthcare professionals, advancing cardiovascular science and patient care."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Research Excellence in Cardiology through Expert Guidance
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/cardiology/Empowering-Research-Excellence-in-Cardiology-through-Expert-Guidance.webp"
                                        alt="Cardiology medical research anatomical heart model"
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
                                        Cardiology is the study of the cardiovascular system, and it is also called the circulatory system or vascular system. It is a specialized branch of medicine focused on the diagnosis, treatment, and prevention of diseases and conditions related to the heart and blood vessels. The human heart is a vital organ responsible for pumping blood throughout the body, supplying oxygen and nutrients to tissues, and maintaining overall physiological balance. Due to the critical role of the cardiovascular system, any disruption in heart function can have serious health consequences, ranging from mild fatigue to life-threatening conditions such as heart attacks or heart failure.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Cardiology plays a crucial role in modern medicine, given that cardiovascular diseases (CVDs) remain one of the leading causes of morbidity and mortality worldwide. According to the World Health Organization (WHO), an estimated 17.9 million people die each year from CVDs, accounting for 32% of global deaths. Conditions such as coronary artery disease, arrhythmias, valvular heart disease, and congenital heart defects require specialized medical attention. Cardiologists not only treat these conditions but also emphasize preventive care, helping patients reduce risk factors such as hypertension, high cholesterol, smoking, obesity, and sedentary lifestyles.
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
                    <CoreAreasSection
                        title="Our Core Disciplines In Cardiology"
                        description="At Pubrica, we provide comprehensive support in the field of cardiology, assisting researchers, clinicians, and industry professionals in advancing cardiovascular science. Our expertise spans multiple core disciplines in cardiology, ensuring comprehensive care and research excellence:"
                        items={disciplines}
                    />
                </div>
            </section>
            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Why Choose Pubrica for Cardiology Research and Publishing?"
                    description="At Pubrica, we empower cardiology researchers, clinicians, and industry professionals to achieve excellence in scientific research and publication. Our specialized services are designed to support every stage of your research journey, from conceptualization to publication."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}