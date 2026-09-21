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
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function NanotechnologyPage() {
    const disciplines = [
        {
            title: "Nanomaterials and Nanostructures",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanomaterials-and-Nanostructures.webp",
            description: "The synthesis, characterization & functionalization’s of Nanomaterials are key components to nanotechnology research. Our expert team can also support the design of nanomaterials, the surface modification and evaluation of advanced Nanostructures through tailored properties.",
            icon: Search
        },
        {
            title: "Nanoelectronics and Nanophonics",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanoelectronics-and-Nanophononics.webp",
            description: "Research related to nanoscale electronic and photonic systems, as well as assistance with fabrication, performance evaluation, and modelling of semiconductor nanodevices, optics and sensors to further the development of new and improved electronic and photonic technologies.",
            icon: TrendingUp
        },
        {
            title: "Nanobiotechnology and Nanomedicine",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanobiotechnology-and-Nanomedicine.webp",
            description: "Our specialist team is here to help you integrate nanotechnology together with biological systems for applications including targeted drug delivery, imaging and diagnostics. Our company supports nanoparticle synthesis, assessment of biocompatibility and therapeutic evaluation to facilitate innovation in the field of healthcare.",
            icon: FileText
        },
        {
            title: "Computational and Theoretical Nanotechnology",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Computational-and-Theoretical-Nanotechnology.webp",
            description: "Our company, providing nanoscale modelling and simulation, also aids researchers in the field of nanotechnology by providing the support of our experts to help research projects that utilize molecular dynamics, quantum simulations and predictive modelling to study and optimize the behaviours of nanoscale phenomena.",
            icon: Database
        },
        {
            title: "Nano energy and Environmental Nanotechnology",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nano-energy-and-Environmental-Nanotechnology.webp",
            description:
                'We provide Knowledge in the Nanotechnology Applications to produce "Energy" with stored in "Environmental Remediation". We help Developers to design and develop Sustainable and Eco-Friendly Solutions with Nanocatalaughtic and/or Energy-Efficient Materials.',
            icon: AlertTriangle,
        },
        {
            title: "Nanofabrication and Nanomanufacturing",
            iconSrc: "/images/subject-matter-experts/nanotechnology/Nanofabrication-and-Nanomanufacturing.webp",
            description: "In addition to providing our clients with nanoscale fabrication methods such as photolithography, self-assembly, and 3D printing; we help clients optimize their fabrication processes and scale up their production while providing quality assurance between laboratory research and commercial use.",
            icon: ShieldAlert
        }
    ];

    const expertiseCards = [
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: FileText,
        },
        {
            title: "Grant Writing",
            desc: "Crafting compelling research proposals to secure funding for innovative projects.",
            href: "/services/research-services/grant-writing",
            imageUrl: "/images/subject-matter-experts/biotechnology/Grant-writing-.webp",
            icon: PenTool,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/nanotechnology/Editing-And-Proofreading-Your-Research-Paper.webp",
            icon: Cpu,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Layers,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Nanotechnology"
                description="Nanotechnology can be defined as manipulating matter at the molecular level to design and manufacture new materials and create devices that possess characteristics not found in the parent substance."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Research Excellence in Nanotechnology through Expert Guidance and Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/nanotechnology/Empowering-Research-Excellence-in-Nanotechnology.webp"
                                        alt="Nanotechnology research visualization"
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
                                        The field of nanotechnology encompasses a diverse range of disciplines, including physics, chemistry, biology, and engineering. The integration of these scientific fields has led to innovative solutions across multiple industries such as healthcare, electronics, energy, and materials science. Nanotechnology manipulates materials and processes at the atomic/molecular scale; the result is new, enhanced-performance materials and processes.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        By manipulating materials on an atomic level, we can create{" "}
                                        <Link href="/subject-matter-experts/drug-delivery-system/" className="text-blue-600 no-underline">
                                            drug delivery systems
                                        </Link>
                                        , as well as materials that are stronger and lighter (known as composite materials), for many different industries.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        <strong>Nanotechnology has more than 100 current uses including:</strong> medical imaging, targeted drug therapies, and developing energy storage technologies. In the electronic industry, nanotechnology plays a vital role in miniaturization (getting smaller chips), increasing computer performance, and creating &quot;smarter&quot; products.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica provides researchers, scholars, and professionals in the nanotechnology industry with access to an experienced team of experts who can provide advice, assist with the{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            nanotechnology publication process
                                        </Link>
                                        , and offer complete{" "}
                                        <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline">
                                            research support
                                        </Link>
                                        , thereby accelerating scientific discovery and advancement within the fast-paced world of nanotechnology.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <Link
                                            href="/order-now"
                                            className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                                        >
                                            Get a Free Quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Disciplines In Nanotechnology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-full">
                            Areas of specialization comprise a broad set of fields which inspire the next generation of innovation in nanotechnology. Areas of expertise within the fields of material science, engineering, biology and physics are all used to enhance the development of new technologies in the nanoscale space and resolve challenges in society, that in turn support the development of scientific advancement at a rapid rate.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Cards Grid with title & description passed directly */}
                    <CommonExpertiseCards
                        title="Why Choose Pubrica for Nanotechnology Research and Publishing?"
                        description={
                            <>
                                Pubrica provides subject matter guidance, accurate <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 hover:underline">editing services</Link> and provide comprehensive publishing solutions for researchers within the field of Nanotechnology to help achieve top quality published materials with broad impact around the globe:
                            </>
                        }
                        cards={expertiseCards}
                    />

                </div>
            </section>
        </main>
    );
}