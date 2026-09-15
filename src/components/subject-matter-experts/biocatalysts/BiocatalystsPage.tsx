import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Dna,
    Workflow,
    GitBranch,
    Lock,
    SearchCheck,
    Leaf,
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



export default function BiocatalystsPage() {
    const disciplines = [
        {
            title: "Enzyme Engineering and Optimization",
            iconSrc:
                "/images/subject-matter-experts/biocatalysts/Enzyme-Engineering-and-Optimization.webp",
            description:
                "Our team focuses on the design, modification, and optimization of enzymes for industrial and laboratory applications. From improving catalytic efficiency to enhancing stability under diverse conditions, we assist in developing enzymes tailored to specific biochemical processes.",
            icon: Dna,
        },
        {
            title: "Biocatalytic Process Development",
            iconSrc:
                "/images/subject-matter-experts/biocatalysts/Biocatalytic-Process-Development.webp",
            description:
                "We provide end-to-end support for the development of biocatalytic processes, including substrate screening, reaction optimization, and scale-up. Our approach ensures reproducibility, efficiency, and cost-effectiveness in industrial biocatalysis.",
            icon: Workflow,
        },
        {
            title: "Metabolic Pathway Analysis",
            iconSrc:
                "/images/subject-matter-experts/biocatalysts/Metabolic-Pathway-Analysis.webp",
            description:
                "Understanding metabolic pathways is key to improving biocatalyst performance. We assist in mapping, modelling, and analysing metabolic networks to identify bottlenecks and optimize production of desired bioproducts.",
            icon: GitBranch,
        },
        {
            title: "Enzyme Immobilization Techniques",
            iconSrc:
                "/images/subject-matter-experts/biocatalysts/Enzyme-Immobilization-Techniques.webp",
            description:
                "We specialize in enzyme immobilization strategies that enhance enzyme reusability and stability. Our solutions include various carriers, matrices, and novel techniques to maximize biocatalyst efficiency in industrial applications.",
            icon: Lock,
        },
        {
            title: "Biocatalyst Screening and Characterization",
            iconSrc:
                "/images/subject-matter-experts/biocatalysts/Biocatalyst-Screening-and-Characterization.webp",
            description:
                "Through advanced screening methods, we identify enzymes with high activity, selectivity, and compatibility for specific reactions. Our characterization services include kinetic studies, substrate specificity profiling, and structural analysis.",
            icon: SearchCheck,
        },
        {
            title: "Green Chemistry and Sustainable Bioprocessing",
            iconSrc:
                "/images/subject-matter-experts/biocatalysts/Green-Chemistry-and-Sustainable-Bioprocessing.webp",
            description:
                "We emphasize environmentally friendly approaches, promoting the use of biocatalysts to reduce chemical waste, energy consumption, and the carbon footprint in industrial processes.",
            icon: Leaf,
        },
    ];
    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: FileText,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Peer-Review.webp",
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
                title="Biocatalysts"
                description="Comprehensive research, publication, and editing support for biocatalyst studies, empowering scientists, researchers, and industry professionals to innovate in sustainable bioprocesses and enzymatic technologies."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Expert Biocatalyst Research and Publishing Support to Accelerate Your Scientific Innovations
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/biocatalysts/Biocatalysts.webp"
                                        alt="Biocatalyst research in laboratory"
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
                                        Biocatalysts, commonly referred to as enzymes, are biological molecules that accelerate chemical reactions with remarkable specificity and efficiency. In today's rapidly evolving world of <Link href="/industries/biotechnology/" className="text-blue-600 no-underline hover:no-underline">biotechnology</Link>, biocatalysts, enzymes, and whole-cell systems that accelerate chemical reactions are central to sustainable innovation. Whether in <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline hover:no-underline">pharmaceuticals</Link>, food technology, <Link href="/subject-matter-experts/animal-science" className="text-blue-600 no-underline hover:no-underline">animal science</Link>, or environmental applications, biocatalysts have revolutionized production methods, enabling more sustainable and efficient processes. At Pubrica, we provide comprehensive biocatalyst research and <Link href="/services/publication-support" className="text-blue-600 no-underline hover:no-underline">publication support</Link>, empowering scientists, scholars, and industry professionals to advance their research, optimize experiments, and disseminate knowledge effectively.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Our services integrate cutting-edge scientific expertise with publication-focused strategies, ensuring your research achieves both technical excellence and global visibility. With Pubrica, your <Link href="/services/research-services/" className="text-blue-600 no-underline hover:no-underline">biocatalyst research</Link> transitions seamlessly from the laboratory to high-impact publications.
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
                        title="Our Core Disciplines In Biocatalyst"
                        description="At Biocatalyst, we specialize in providing comprehensive support across a range of disciplines that are critical to advancing research and innovation in enzymology, biotechnology, and applied life sciences. Our expertise ensures that researchers, industry professionals, and academic scholars can achieve accurate, high-quality results efficiently."
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <CommonExpertiseCards
                    title="Our Expertise in Biocatalyst Research and Publication"
                    description="At Biocatalyst, we specialize in providing comprehensive support for researchers, scholars, and industry professionals working in the field of biocatalysis. Our expertise spans the entire research and publication lifecycle, from conceptualization and experimental design to manuscript preparation and journal submission. Our core services include:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}