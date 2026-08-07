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
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';

export default function NanobiotechnologyPage() {
    const disciplines = [
        {
            title: "Drug delivery and systems",
            description: "Are focused on using nanoparticle formulations to provide accurate, regulated, and efficacious dosing to support improved therapeutic outcomes while minimizing adverse effects.",
            icon: Search
        },
        {
            title: "Diagnostic tools and biosensors",
            description: "Are designed around nanoscale devices that can detect disease, pathogen, and biomarker early and accurately using nanoscale techniques.",
            icon: TrendingUp
        },
        {
            title: "Gene therapy and regulation",
            description: "Involve the use of nanomaterials to deliver genes or regulatory nucleotides to cells or tissues of interest for the purpose of gene editing and therapeutic intervention.",
            icon: FileText
        },
        {
            title: "Industrial",
            description: "bioprocessing will benefit from the use of nanobiotechnology to enhance manufacturing and production of biopharmaceuticals, biofuels, and other biobased materials efficiently.",
            icon: Database
        },
        {
            title: "Nanomedicine",
            description: "is using nanotechnology to explore new ways to treat patients, including through cancer nanotherapeutics, individualized medicine, and regenerative capabilities.",
            icon: AlertTriangle
        },
        {
            title: "Nanoscale imaging techniques and molecular",
            description: "modelling methodologies are being developed using advanced imaging and computational technology to facilitate the understanding of molecular mechanisms within biological systems at the nanoscale.",
            icon: ShieldAlert
        }
    ];

    const services = [
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            icon: FileText,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts through our biomolecular engineering editing services.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: Cpu,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: BookOpen,
            href: "/services/publication-support/"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch,
            href: "/services/research-services/literature-review-and-gap"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Nano Biotechnology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for nanobiotechnology scholars, researchers, and industry experts, driving innovation in nanomaterials, drug delivery systems, and nanoscale applications in healthcare and environmental sustainability.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming into Real-World Solutions through Innovation, Precision, and Advanced Nano Biotechnology.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Nanobiotechnology is a blend of nanotechnology and biological systems to develop cutting-edge technologies for medical care, environmental sustainability and industrial biomanufacturing. Using nanotechnology, researchers can manipulate molecules and cells with precision at the nanoscale, leading to innovative solutions in diagnostics, treatment and delivering medicines, bioprocessing and so much more. At Pubrica, we provide several unique services to the nano biotech industry such as research support, regulatory analysis, and educational resources for both academic and industrial users of nanobiotechnology. Our aim is to increase the accuracy and effectiveness of all nanobiotechnology research products. The field of nanobiotechnology includes nanoparticles, nanomaterials and nanodevices, all of which interact in ways not possible with larger and more traditional forms of biological materials.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            This field allows for the creation of specially designed nanoparticles for drug delivery, diagnostics and biosensing and for manipulating and controlling the interactions of biomolecules to achieve therapeutic goals.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Through our research support, we assist researchers in developing better understanding of how molecular systems function at the nanoscale and applying this knowledge to identify new targets for minimally invasive therapies in medicine, renewable energy and the preservation of our planet.
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
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                                alt="Nanobiotechnology research visualization"
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
                            Our Core Areas Of Nano Biotechnology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Biomolecular engineering encompasses several interconnected areas, each contributing to the development of efficient biological systems and products. These core disciplines include:
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
                                                <IconComponent className="w-6 h-6" />
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
                            Our Expertise in Nano Biotechnology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we pride ourselves on our extensive expertise in nanobiotechnology research and publication. Our team of seasoned researchers, scientists, and technical writers is dedicated to advancing the field of nanobiotechnology by providing cutting-edge research support and delivering high-quality publications:
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