import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BioChemistryPage() {
    const disciplines = [
        {
            title: "Molecular Biology and Genetics",
            iconSrc: "/images/subject-matter-experts/biochemistry/Molecular-Biology-and-Genetics.webp",
            description: "Understanding gene expression, DNA replication, transcription, translation, and epigenetic modifications is central to molecular biology. Biochemists study how genetic information translates into functional proteins and how alterations in these processes can lead to disease.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m-4-14h8m-8 12h8m-6-8h4m-4 4h4" />
                </svg>
            )
        },
        {
            title: "Enzymology and Protein Chemistry",
            iconSrc: "/images/subject-matter-experts/biochemistry/Enzymology-andProtein-Chemistry.webp",
            description: "Enzymes are biological catalysts that facilitate virtually all biochemical reactions. By studying enzyme kinetics, regulation, and structure-function relationships, biochemists can develop targeted therapeutics and understand metabolic control mechanisms.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.022.547l-1.373 1.373a2 2 0 00-.547 1.022l-.12.602a2 2 0 001.99 2.387h15.084a2 2 0 001.99-2.387l-.12-.602a2 2 0 00-.547-1.022l-1.373-1.373zM12 3v9" />
                </svg>
            )
        },
        {
            title: "Metabolism and Bioenergetics",
            iconSrc: "/images/subject-matter-experts/biochemistry/Metabolism-and-Bioenergetics.webp",
            description: "Biochemical research on metabolic pathways provides insight into how cells generate energy, manage resources, and maintain homeostasis. Metabolic studies are critical for understanding conditions such as diabetes, obesity, and cancer.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
            )
        },
        {
            title: "Structural Biology",
            iconSrc: "/images/subject-matter-experts/biochemistry/Structural-Biology.webp",
            description: "Determining the three-dimensional structures of biomolecules using techniques like X-ray crystallography, NMR spectroscopy, and cryo-electron microscopy helps elucidate their functions, interactions, and therapeutic potential.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 6.75l5.571 3m0 0l4.179-2.25L17.571 6.75m0 5.25l4.179 2.25-4.179 2.25m0-4.5l-5.571 3-5.571-3m11.142 0L12 17.25l-5.571-3" />
                </svg>
            )
        },
        {
            title: "Cell Signalling and Molecular Interactions",
            iconSrc: "/images/subject-matter-experts/biochemistry/Cell-Signalling-and-Molecular-Interactions.webp",
            description: "Cells communicate through intricate signalling networks. Biochemical studies of receptors, second messengers, and signal transduction pathways reveal mechanisms behind cellular responses, development, and disease progression.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9l6 6m0-6l-6 6" />
                </svg>
            )
        },
        {
            title: "Biotechnology and Applied Biochemistry",
            iconSrc: "/images/subject-matter-experts/biochemistry/Biotechnology-and-Applied-Biochemistry.webp",
            description: "Modern biotechnology leverages biochemical principles for industrial, agricultural, and medical applications, including recombinant protein production, gene therapy, biomarker discovery, and synthetic biology.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
            )
        },
        {
            title: "Data Science & Analytics",
            description: "Advanced statistical analysis and interpretation to uncover actionable insights.",
            image: "/images/subject-matter-experts/biochemistry/Data-Science-Analytics.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            )
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            )
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
            )
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
            )
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        }
    ];
    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            {/* SECTION 1: Banner */}
            <header className="bg-[#1C2C2E] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-500/50 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Biochemistry
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Advance your research with precision editing, manuscript preparation, and publication guidance from our team of seasoned biochemistry experts.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] leading-snug">
                            Unlocking the Molecular Secrets of Life: Advanced Biochemistry Research &amp; Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biochemistry is the cornerstone of modern life sciences, providing a molecular understanding of biological processes that govern life itself. At its core, biochemistry bridges biology and chemistry, exploring the chemical structures, functions, and interactions of biomolecules such as proteins, nucleic acids, lipids, and carbohydrates. These molecular insights are fundamental to deciphering complex cellular mechanisms, disease pathology, metabolic pathways, and therapeutic interventions.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            In the contemporary scientific landscape, biochemistry plays a pivotal role in translational research, drug discovery, diagnostics, and{" "}
                            <Link href="/subject-matter-experts/biotechnology" className="text-sky-600 hover:underline">
                                biotechnology
                            </Link>
                            . From unravelling the intricacies of enzyme catalysis to understanding genetic regulation and signal transduction, biochemistry provides the tools and knowledge essential for scientific innovation.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we specialize in providing extensive biochemistry support, guiding researchers, students, and professionals through every stage of the research and publication process. Whether it's{" "}
                            <Link href="/services/editing-and-translation/manuscript-editing" className="text-sky-600 hover:underline">
                                manuscript editing
                            </Link>
                            , research methodology consultation, or data interpretation, our services ensure that biochemistry research is communicated with clarity, accuracy, and scientific rigor.
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
                                src="/images/subject-matter-experts/biochemistry/Biochemistry.webp"
                                alt="Biochemistry lab research"
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] mb-4">
                            Our Core Modalities in Biomedical Imaging
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biomedical imaging has revolutionized modern medicine by providing clinicians and researchers with non-invasive techniques to visualize the structure and function of the human body. These imaging modalities are fundamental in diagnostics, treatment planning, monitoring, and clinical imaging support, making them central to diagnostic imaging research.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (3 Cards per Row) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B]">
                            Our Expertise in Biomedical Imaging Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0F393B] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we specialize in advancing biomedical imaging research by offering comprehensive support across all stages of study design, data interpretation, and scholarly publication. Our team of experts combines scientific rigor with technical proficiency to ensure that your research is presented clearly, accurately, and in alignment with the highest standards of the field.{" "}
                        <Link href="/subject-matter-experts" className="text-sky-600 hover:underline">
                            subject matter experts
                        </Link>
                        , and publication strategists with deep domain expertise in material science, nanotechnology, chemical engineering, and applied physics. Our services include:
                    </p>
                </div>

                {/* 3 Cards Per Row Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Bottom White Overlay Card (Slides up on Hover) */}
                            <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                {/* Floating Circle Icon */}
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0">
                                    {service.icon}
                                </div>

                                {/* Card Title */}
                                <h3 className="text-sm font-bold text-[#0F393B] mt-4 mb-2">
                                    {service.title}
                                </h3>

                                {/* Hidden Description (Appears on Hover) */}
                                <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {service.description}
                                </p>

                            </div>
                        </article>
                    ))}
                </div>

            </section>

        </main>
    );
}