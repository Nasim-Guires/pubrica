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

export default function BiocatalystsPage() {
    const disciplines = [
        {
            title: "Enzyme Engineering and Optimization",
            iconSrc: "/images/subject-matter-experts/biocatalysts/Enzyme-Engineering-and-Optimization.webp",
            description: "Our team focuses on the design, modification, and optimization of enzymes for industrial and laboratory applications. From improving catalytic efficiency to enhancing stability under diverse conditions, we assist in developing enzymes tailored to specific biochemical processes.",
            icon: Dna
        },
        {
            title: "Biocatalytic Process Development",
            iconSrc: "/images/subject-matter-experts/biocatalysts/Biocatalytic-Process-Development.webp",
            description: "We provide end-to-end support for the development of biocatalytic processes, including substrate screening, reaction optimization, and scale-up. Our approach ensures reproducibility, efficiency, and cost-effectiveness in industrial biocatalysis.",
            icon: Workflow
        },
        {
            title: "Metabolic Pathway Analysis",
            iconSrc: "/images/subject-matter-experts/biocatalysts/Metabolic-Pathway-Analysis.webp",
            description: "Understanding metabolic pathways is key to improving biocatalyst performance. We assist in mapping, modelling, and analysing metabolic networks to identify bottlenecks and optimize production of desired bioproducts.",
            icon: GitBranch
        },
        {
            title: "Enzyme Immobilization Techniques",
            iconSrc: "/images/subject-matter-experts/biocatalysts/Enzyme-Immobilization-Techniques.webp",
            description: "We specialize in enzyme immobilization strategies that enhance enzyme reusability and stability. Our solutions include various carriers, matrices, and novel techniques to maximize biocatalyst efficiency in industrial applications.",
            icon: Lock
        },
        {
            title: "Biocatalyst Screening and Characterization",
            iconSrc: "/images/subject-matter-experts/biocatalysts/Biocatalyst-Screening-and-Characterization.webp",
            description: "Through advanced screening methods, we identify enzymes with high activity, selectivity, and compatibility for specific reactions. Our characterization services include kinetic studies, substrate specificity profiling, and structural analysis.",
            icon: SearchCheck
        },
        {
            title: "Green Chemistry and Sustainable Bioprocessing",
            iconSrc: "/images/subject-matter-experts/biocatalysts/Green-Chemistry-and-Sustainable-Bioprocessing.webp",
            description: "We emphasize environmentally friendly approaches, promoting the use of biocatalysts to reduce chemical waste, energy consumption, and the carbon footprint in industrial processes.",
            icon: Leaf
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: FileText
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: UserCheck
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/biopolymers/Graphical-Abstract.webp",
            icon: ImageIcon
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Biocatalysts
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for biocatalyst studies, empowering scientists, researchers, and industry professionals to innovate in sustainable bioprocesses and enzymatic technologies.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Expert Biocatalyst Research and Publishing Support to Accelerate Your Scientific Innovations
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biocatalysts, commonly referred to as enzymes, are biological molecules that accelerate chemical reactions with remarkable specificity and efficiency. In today's rapidly evolving world of <Link href="/subject-matter-experts/biotechnology" className="text-sky-600 hover:underline">biotechnology</Link>, biocatalysts, enzymes, and whole-cell systems that accelerate chemical reactions are central to sustainable innovation. Whether in <Link href="/subject-matter-experts/pharmaceuticals" className="text-sky-600 hover:underline">pharmaceuticals</Link>, food technology, <Link href="/subject-matter-experts/animal-science" className="text-sky-600 hover:underline">animal science</Link>, or environmental applications, biocatalysts have revolutionized production methods, enabling more sustainable and efficient processes. At Pubrica, we provide comprehensive biocatalyst research and <Link href="/services/publication-support" className="text-sky-600 hover:underline">publication support</Link>, empowering scientists, scholars, and industry professionals to advance their research, optimize experiments, and disseminate knowledge effectively.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our services integrate cutting-edge scientific expertise with publication-focused strategies, ensuring your research achieves both technical excellence and global visibility. With Pubrica, your <Link href="/subject-matter-experts/biocatalysts" className="text-sky-600 hover:underline">biocatalyst research</Link> transitions seamlessly from the laboratory to high-impact publications.
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
                                src="/images/subject-matter-experts/biocatalysts/Biocatalysts.webp"
                                alt="Biocatalyst research in laboratory"
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Biocatalyst
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Biocatalyst, we specialize in providing comprehensive support across a range of disciplines that are critical to advancing research and innovation in enzymology, biotechnology, and applied life sciences. Our expertise ensures that researchers, industry professionals, and academic scholars can achieve accurate, high-quality results efficiently.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Biocatalyst Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Biocatalyst, we specialize in providing comprehensive support for researchers, scholars, and industry professionals working in the field of biocatalysis. Our expertise spans the entire research and publication lifecycle, from conceptualization and experimental design to manuscript preparation and journal submission. Our core services include:
                    </p>
                </div>

                {/* 4 Cards Per Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <article
                                key={index}
                                className="relative h-[260px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom White Overlay Card (Slides up on Hover) */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description (Appears on Hover) */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}