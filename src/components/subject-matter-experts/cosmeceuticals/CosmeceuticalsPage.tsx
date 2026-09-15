"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FlaskConical,
    Sparkles,
    Dna,
    Activity,
    ShieldCheck,
    CheckCircle2,
    Microscope,
    FileText,
    Database,
    PenTool,
    Wrench,
    FileSpreadsheet,
    BookMarked,
    ChevronDown
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CosmeceuticalsPage() {
    const disciplines = [
        {
            title: "Cosmeceutical Formulation Science",
            iconSrc:
                "/images/subject-matter-experts/cosmeceuticals/Cosmeceutical-Formulation-Science.webp",
            description:
                "The development and optimization of stable, effective, and safe skincare formulations.",
            icon: FlaskConical,
        },
        {
            title: "Dermatological Science & Skin Biology",
            iconSrc:
                "/images/subject-matter-experts/cosmeceuticals/Dermatological-Science-Skin-Biology.webp",
            description:
                "The purpose of this project is to provide an overview of research into how the skin is formed and its function, how it changes in appearance, and how diseases develop in the body through time.",
            icon: Dna,
        },
        {
            title: "Active Ingredients & Bioactive",
            iconSrc:
                "/images/subject-matter-experts/cosmeceuticals/Active-Ingredients-Bioactive.webp",
            description:
                "Investigation of Peptides, Antioxidants, Botanicals, Growth Factors, and Novel Compounds.",
            icon: Sparkles,
        },
        {
            title: "Clinical Evaluation & Efficacy Studies",
            iconSrc:
                "/images/subject-matter-experts/cosmeceuticals/Clinical-Evaluation-Efficacy-Studies-1.webp",
            description:
                "In Vitro, In Vivo, and Clinical Studies Establishing the Efficacy of a Cosmeceutical Product.",
            icon: Activity,
        },
        {
            title: "Regulatory Affairs & Product Compliance",
            iconSrc:
                "/images/subject-matter-experts/cosmeceuticals/Regulatory-Affairs-Product-Compliance.webp",
            description:
                "Guidance on Global Cosmetic Regulatory Requirements and Safety Evaluation Procedures, as well as Making Valid Product Claims.",
            icon: ShieldCheck,
        },
        {
            title: "Quality Control & Safety Assessment",
            iconSrc:
                "/images/subject-matter-experts/cosmeceuticals/Quality-Control-Safety-Assessment.webp",
            description:
                "Perform Toxicity Studies, Conduct Stability Testing, and Ensure Product Quality.",
            icon: CheckCircle2,
        },
        {
            title: "Cosmetic Biotechnology",
            iconSrc:
                "/images/subject-matter-experts/animal-science/Biotechnology-and-Emerging-Technologies.png",
            description:
                "Using Biotechnology to Develop New Ingredients and Produce Cosmetic Products in a Sustainable Manner.",
            icon: Microscope,
        },
    ];



    const expertiseCards = [
        {
            title: "Editing & Proofreading",
            desc: "As a result of improved wording and sentence structure, scientific clarity and precise use of language will help improve how readers view and understand professional documents related to cosmeceutical products.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Collect, organize, and store structured and curated datasets to facilitate the use of artificial intelligence (AI) and machine learning (ML) for skin research, ingredient discovery, and formulation optimization.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Grant Writing",
            desc: "Use persuasive writing skills to develop research proposals that aim to gain funders’ support for new products in the cosmeceuticals market as well as.",
            href: "/services/research-services/grant-writing/",
            imageUrl: "/images/subject-matter-experts/biotechnology/Grant-writing-.webp",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            desc: "Create high-quality scientific figures, diagrams of formulations, illustrations of the biology of the skin, and graphical abstracts that will meet publication standards.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench,
        },
        {
            title: "Journal Formatting",
            desc: "Format your manuscript following the guidelines of both your selected journal and the regulations of any government agencies that require submission of your manuscript before publication.",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet,
        },
        {
            title: "Journal Selection",
            desc: "Identify the most appropriate journals in the areas of dermatology, cosmetic science, and cosmeceuticals that will maximize publication rates and provide the highest potential for earning a high impact factor.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Cosmeceutical"
                description="A cosmeceutical is a science backed skincare product that combines cosmetic benefits with therapeutic, skin improving effects."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Research Excellence in Cosmeceutical through Expert Guidance and Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#0e2723] flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/cosmeceuticals/Transforming-Ideas-into-Market-Ready-Cosmeceutical-Innovations.webp"
                                        alt="Cosmeceutical Laboratory Research"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Cosmeceuticals are an interdisciplinary collaboration between dermatologists, chemists, biotechnologists, and <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline hover:no-underline">pharmaceutical scientists</Link> that are leading the charge for how we view skin care, personal care, and aesthetics. Cosmeceuticals demonstrate the combination of looking good with treating skin problems like aging, pigmentation issues, acne, and improving barriers to purchase. New developments are being made in all areas of development; for example, developing actives, building formulations, understanding how skin grows, shaping the formulation of the product, verifying how well it works in a clinic, and taking scientific findings and turning them into skincare products that are state-of-the-art.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        There are now numerous <Link href="/industries/cosmeceutical-research/" className="text-blue-600 no-underline hover:no-underline">cosmeceutical products</Link> created worldwide containing bioactive, peptides, antioxidants, and growth factors for clinical and consumer skincare that treat skin health. New technologies used in formulation have been instrumental in the movement to use targeted delivery methods, improved stability, better performance, safety, and measurable results in skincare product development.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we provide researchers, scholars, and members of the cosmeceutical industry with the guidance, support, and research assistance necessary to promote and facilitate success in the development of cosmeceuticals.
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
                        title="Our Core Disciplines In Cosmeceutical"
                        description={
                            <>
                                Pubrica aids all types of cosmeceutical-related research and
                                development. These include all areas of pure and applied{" "}
                                <Link
                                    href="/academy/editing-and-translation/scientific-editing-complete-research-guide/"
                                    className="text-blue-600 no-underline hover:no-underline"
                                >
                                    scientific research
                                </Link>{" "}
                                related to cosmeceuticals.
                            </>
                        }
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <CommonExpertiseCards
                    title="Why Choose Pubrica for Cosmeceutical Research and Publishing?"
                    description={
                        <>
                            Pubrica is recognized as a reliable partner in providing cosmeceutical research and{" "}
                            <Link
                                href="/services/publication-support/journal-manuscript-formatting-services/"
                                className="text-blue-600 no-underline hover:no-underline"
                            >
                                publishing services
                            </Link>
                            . Our wide range of services allows us to assist researchers, formulators,
                            clinicians, and other industry stakeholders with all aspects associated with
                            their scientific endeavours. From{" "}
                            <Link
                                href="/services/publication-support/journal-manuscript-formatting-services/"
                                className="text-blue-600 no-underline hover:no-underline"
                            >
                                preparing manuscripts
                            </Link>
                            , compiling regulatory submission documents,{" "}
                            <Link
                                href="/insights/sample-work/incidence-cardiovascular-diseases-india-global/"
                                className="text-blue-600 no-underline hover:no-underline"
                            >
                                selecting journals
                            </Link>
                            , and developing a publishing strategy, we help cosmeceutical innovators
                            clearly, credibly, and effectively share their research:
                        </>
                    }
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}