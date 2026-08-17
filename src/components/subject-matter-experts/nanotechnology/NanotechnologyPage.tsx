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

    const services = [
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/biotechnology/Artwork-Editing.webp",
            icon: FileText,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Grant Writing",
            description: "Crafting compelling research proposals to secure funding for innovative projects.",
            image: "/images/subject-matter-experts/biotechnology/Grant-writing-.webp",
            icon: PenTool,
            href: "/services/research-services/grant-writing"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/nanotechnology/Editing-And-Proofreading-Your-Research-Paper.webp",
            icon: Cpu,
            href: "/services/editing-and-translation"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Layers,
            href: "/services/medical-data-collection"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Nanotechnology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Nanotechnology can be defined as manipulating matter at the molecular level to design and manufacture new materials and create devices that possess characteristics not found in the parent substance.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Research Excellence in Nanotechnology through Expert Guidance and Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The field of nanotechnology encompasses a diverse range of disciplines, including physics, chemistry, biology, and engineering. The integration of these scientific fields has led to innovative solutions across multiple industries such as healthcare, electronics, energy, and materials science. Nanotechnology manipulates materials and processes at the atomic/molecular scale; the result is new, enhanced-performance materials and processes.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            By manipulating materials on an atomic level, we can create drug delivery systems, as well as materials that are stronger and lighter (known as composite materials), for many different industries.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong>Nanotechnology has more than 100 current uses including:</strong> medical imaging, targeted drug therapies, and developing energy storage technologies. In the electronic industry, nanotechnology plays a vital role in miniaturization (getting smaller chips), increasing computer performance, and creating &quot;smarter&quot; products.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica provides researchers, scholars, and professionals in the nanotechnology industry with access to an experienced team of experts who can provide advice, assist with the nanotechnology publication process, and offer complete research support, thereby accelerating scientific discovery and advancement within the fast-paced world of nanotechnology.
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
                                src="/images/subject-matter-experts/nanotechnology/Empowering-Research-Excellence-in-Nanotechnology.webp"
                                alt="Nanotechnology research visualization"
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
                            Our Core Disciplines In Nanotechnology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Areas of specialization comprise a broad set of fields which inspire the next generation of innovation in nanotechnology. Areas of expertise within the fields of material science, engineering, biology and physics are all used to enhance the development of new technologies in the nanoscale space and resolve challenges in society, that in turn support the development of scientific advancement at a rapid rate.
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
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" />
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
                            Why Choose Pubrica for Nanotechnology Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica provides subject matter guidance, accurate editing services and provide comprehensive publishing solutions for researchers within the field of Nanotechnology to help achieve top quality published materials with broad impact around the globe:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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