import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Atom,
    Cog,
    Stethoscope,
    Activity,
    TestTube2,
    FileSearch,
    FileText,
    UserCheck,
    Languages,
    PenTool,
    Send,
    Image as ImageIcon,
    BookMarked,
    ChevronDown
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function BiopolymersPage() {
    const disciplines = [
        {
            title: "Structural Biopolymers",
            iconSrc:
                "/images/subject-matter-experts/biopolymers/Structural-Biopolymers.webp",
            description:
                "Focused on naturally occurring polymers such as cellulose, chitin, starch, lignin, collagen, keratin, and alginate. We assist researchers in exploring molecular composition, functional properties, chemical modifications, and structural performance for industrial and biomedical applications.",
            icon: Atom,
        },
        {
            title: "Functional Biopolymers",
            iconSrc:
                "/images/subject-matter-experts/biopolymers/Functional-Biopolymers.webp",
            description:
                "Covering active biomaterials and polymers tailored for functionality such as antimicrobial activity, drug delivery, biocompatibility, or bioactivity. We assist in studies focusing on surface interactions, molecular engineering, and biological response.",
            icon: Cog,
        },
        {
            title: "Biomedical and Biopolymeric Materials",
            iconSrc:
                "/images/subject-matter-experts/biopolymers/Biomedical-and-Biopolymeric-Materials.webp",
            description:
                "Expert writing and research guidance for tissue engineering scaffolds, drug delivery systems, wound dressings, 3D-biopolymer printing, artificial organs, and implant materials, ensuring compliance with biomedical research ethics and scientific standards.",
            icon: Stethoscope,
        },
        {
            title: "Biopolymers in Biomedical Engineering",
            iconSrc:
                "/images/subject-matter-experts/biopolymers/Biopolymers-in-Biomedical-Engineering.webp",
            description:
                "A major research area covering hydrogels, scaffolds, tissue engineering materials, wound dressings, nanocomposites, and implant systems. We help researchers align results with safety standards, regulatory requirements, and clinical validation expectations.",
            icon: Activity,
        },
        {
            title: "Biopolymer Synthesis and Processing",
            iconSrc:
                "/images/subject-matter-experts/biopolymers/Biopolymer-Synthesis-and-Processing.webp",
            description:
                "Guidance on enzymatic, microbial, and plant-based synthesis of biodegradable polymers. We support detailed assessment of fermentation processes, molecular polymerization methods, and optimization of production for scale-up.",
            icon: TestTube2,
        },
    ];

    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews..",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-proofreading/",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: FileText,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: UserCheck,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl:
                "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl:
                "/images/subject-matter-experts/biopolymers/Graphical-Abstract.webp",
            icon: ImageIcon,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: BookMarked,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Biopolymers"
                description="Comprehensive research, publication, and editing support for biopolymer scientists, material researchers, and industry innovators, advancing sustainable polymer development and eco-friendly material solutions."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Science with Sustainable Biopolymer Research and Publishing Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/biopolymers/Biopolymers.webp"
                                        alt="Biopolymer molecular model"
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
                                        Biopolymers are polymers that are synthesized by living organisms or polymeric biomolecules. They are of three types: polynucleotides, polypeptides, and polysaccharides, which include DNA, RNA, proteins, and polymeric carbohydrates.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        The growing global preference for sustainable polymers and biodegradable plastics has driven significant innovation in polymer research. These materials are increasingly applied in{" "}
                                        <Link href="/subject-matter-experts/biotechnology" className="text-blue-600 no-underline hover:no-underline">biotechnology</Link>,{" "}
                                        <Link href="/subject-matter-experts/pharmaceuticals" className="text-blue-600 no-underline hover:no-underline">pharmaceuticals</Link>,{" "}
                                        <Link href="/subject-matter-experts/agriculture" className="text-blue-600 no-underline hover:no-underline">agriculture</Link>, food science, packaging, sensors, electronics, and more. Researchers and industries are exploring new extraction methods, biopolymer synthesis modification techniques, and composite developments to enhance mechanical performance, biocompatibility, chemical stability, and feasibility for mass production.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica supports researchers in biopolymer publishing with professional writing, editing, data analytics, publication guidance, and evidence-based content development. Our domain experts ensure that your research is presented accurately, compellingly, and in compliance with leading journal standards.
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
                        title="Our Core Disciplines In Biopolymers"
                        description="At Pubrica, we specialize in multiple aspects of biopolymer research, ensuring a comprehensive understanding and practical implementation across scientific and industrial domains. Our core disciplines include:"
                        items={disciplines}
                    />
                </div>
            </section>
            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Biopolymer Research and Publication"
                    description={
                        <>
                            Pubrica has extensive experience supporting researchers, doctoral candidates, and industrial R&amp;D groups in creating high-impact manuscripts, patents, proposals, presentations, and technical reports focusing on biopolymers. Our expertise includes:
                        </>
                    }
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}