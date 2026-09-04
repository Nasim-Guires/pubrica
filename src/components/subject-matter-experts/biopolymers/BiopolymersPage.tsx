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

export default function BiopolymersPage() {
    const disciplines = [
        {
            title: "Structural  Biopolymers",
            iconSrc: "/images/subject-matter-experts/biopolymers/Structural-Biopolymers.webp",
            description: "Focused on naturally occurring polymers such as cellulose, chitin, starch, lignin, collagen, keratin, and alginate. We assist researchers in exploring molecular composition, functional properties, chemical modifications, and structural performance for industrial and biomedical applications.",
            icon: Atom
        },
        {
            title: "Functional Biopolymers",
            iconSrc: "/images/subject-matter-experts/biopolymers/Functional-Biopolymers.webp",
            description: "Covering active biomaterials and polymers tailored for functionality such as antimicrobial activity, drug delivery, biocompatibility, or bioactivity. We assist in studies focusing on surface interactions, molecular engineering, and biological response.",
            icon: Cog
        },
        {
            title: "Biomedical and Biopolymeric Materials",
            iconSrc: "/images/subject-matter-experts/biopolymers/Biomedical-and-Biopolymeric-Materials.webp",
            description: "Expert writing and research guidance for tissue engineering scaffolds, drug delivery systems, wound dressings, 3D-biopolymer printing, artificial organs, and implant materials, ensuring compliance with biomedical research ethics and scientific standards.",
            icon: Stethoscope
        },
        {
            title: "Biopolymers in Biomedical Engineering",
            iconSrc: "/images/subject-matter-experts/biopolymers/Biopolymers-in-Biomedical-Engineering.webp",
            description: "A major research area covering hydrogels, scaffolds, tissue engineering materials, wound dressings, nanocomposites, and implant systems. We help researchers align results with safety standards, regulatory requirements, and clinical validation expectations.",
            icon: Activity
        },
        {
            title: "Biopolymer Synthesis and Processing",
            iconSrc: "/images/subject-matter-experts/biopolymers/Biopolymer-Synthesis-and-Processing.webp",
            description: "Guidance on enzymatic, microbial, and plant-based synthesis of biodegradable polymers. We support detailed assessment of fermentation processes, molecular polymerization methods, and optimization of production for scale-up.",
            icon: TestTube2
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews..",
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
            <HeroBanner
                title="Biopolymers"
                description="Comprehensive research, publication, and editing support for biopolymer scientists, material researchers, and industry innovators, advancing sustainable polymer development and eco-friendly material solutions."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Science with Sustainable Biopolymer Research and Publishing Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biopolymers are polymers that are synthesized by living organisms or polymeric biomolecules. They are of three types: polynucleotides, polypeptides, and polysaccharides, which include DNA, RNA, proteins, and polymeric carbohydrates.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The growing global preference for sustainable polymers and biodegradable plastics has driven significant innovation in polymer research. These materials are increasingly applied in{" "}
                            <Link href="/subject-matter-experts/biotechnology" className="text-blue-600 no-underline hover:no-underline">biotechnology</Link>,{" "}
                            <Link href="/subject-matter-experts/pharmaceuticals" className="text-blue-600 no-underline hover:no-underline">pharmaceuticals</Link>,{" "}
                            <Link href="/subject-matter-experts/agriculture" className="text-blue-600 no-underline hover:no-underline">agriculture</Link>, food science, packaging, sensors, electronics, and more. Researchers and industries are exploring new extraction methods, biopolymer synthesis modification techniques, and composite developments to enhance mechanical performance, biocompatibility, chemical stability, and feasibility for mass production.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica supports researchers in biopolymer publishing with professional writing, editing, data analytics, publication guidance, and evidence-based content development. Our domain experts ensure that your research is presented accurately, compellingly, and in compliance with leading journal standards.
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
                                src="/images/subject-matter-experts/biopolymers/Biopolymers.webp"
                                alt="Biopolymer molecular model"
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
                            Our Core Disciplines In Biopolymers
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we specialize in multiple aspects of biopolymer research, ensuring a comprehensive understanding and practical implementation across scientific and industrial domains. Our core disciplines include:
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
                            Our Expertise in Biopolymer Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica has extensive experience supporting researchers, doctoral candidates, and industrial R&amp;D groups in creating high-impact manuscripts, patents, proposals, presentations, and technical reports focusing on biopolymers. Our expertise includes:
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