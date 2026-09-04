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
    Cpu
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";

export default function EnvironmentalSciencePage() {
    const disciplines = [
        {
            title: "Ecological",
            iconSrc: "/images/subject-matter-experts/environmental-science/Ecological.webp",
            description: "studies include examining ecosystems and organisms as well as how they interact with each other and with their environment. Ecologists also study the biodiversity of different ecosystems and the ecosystem services that are necessary for maintaining a balanced ecological system.",
            icon: Search
        },
        {
            title: "Environmental Chemistry",
            iconSrc: "/images/subject-matter-experts/environmental-science/Environmental-Chemistry.webp",
            description: "is primarily concerned with the chemical reactions that take place in the environment, including the study of environmental pollution and how those chemical reactions and pollutants affect the quality of soil, air, and water.",
            icon: TrendingUp
        },
        {
            title: "Climate Science",
            iconSrc: "/images/subject-matter-experts/environmental-science/Climate-Science.webp",
            description: "Research on climate change, atmospheric dynamics, and its impacts on global weather patterns, ecosystems, and human societies, with an emphasis on mitigation and adaptation strategies.",
            icon: FileText
        },
        {
            title: "Sustainable agriculture",
            iconSrc: "/images/subject-matter-experts/environmental-science/Sustainable-agriculture.webp",
            description: "includes finding ways to grow food by using farming techniques that reduce the environmental impact of agriculture while improving the health of the soil, conserving water, and producing food for the increasing number of people globally.",
            icon: Database
        },
        {
            title: "Environmental Policy and Management",
            iconSrc: "/images/subject-matter-experts/environmental-science/Environmental-Policy-and-Management.webp",
            description: "focus on the intersection of environmental science and public policy, especially in developing and implementing strategies for sustainable management of our planet's resources and protecting the environment.",
            icon: AlertTriangle
        }
    ];

    const services = [
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines",
            image: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: FileText,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Journal Selection",
            description: "Guidance on selecting the most appropriate journals for your research.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: PenTool,
            href: "/services/publication-support/journal-selection"
        },
        {
            title: "Peer-Review",
            description: "Comprehensive review to refine and validate your research pre-submission",
            image: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: Cpu,
            href: "/services/publication-support/peer-review-pre-submission"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Responding to Reviewers",
            description: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
            image: "/images/subject-matter-experts/agriculture/Biostatistical-Programming.webp",
            icon: FileSearch,
            href: "/services/publication-support/responding-to-reviewers"
        },
        {
            title: "Literature Review and Gap",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Search,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Layers,
            href: "/services/publication-support/journal-submission"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Environmental Science"
                description="Agrotechnology focuses on leveraging advanced methods and technologies to optimize agricultural processes, increase crop yields, and promote sustainable farming practices."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Environmental Science: Shaping Sustainable Agriculture Through Innovation and Research
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Environmental Science is a discipline concerned with the development and use of scientific principles to address issues related to our environment. Environmental Scientists apply their knowledge of how our environment functions and how it has been impacted by human activity to create solutions that will enable sustainable development in both the Urban & Rural Areas.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline hover:no-underline">Environmental Science</Link> will be very important in addressing Climate Change, Resource Conservation, and Biodiversity. Recent advances in Environmental Science will also drive the advancement and sustainability of Agriculture, Manufacturing, and Urban Planning to ensure the continued health of our planet for future generations.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-base font-bold text-[#0e3b32] mb-2">
                                Key Farming Techniques in Environmental Science
                            </h3>
                            <p className="text-xs text-gray-500 mb-2">Methods of Growing Food Using Environmentally Friendly Ways</p>
                            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Sustainable Agriculture:</strong> Utilization of agricultural practices including crop rotation and agroforestry that support both soil and biological diversity but still achieve the maximum yield of crops.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Precision Farming:</strong> The use of modern technology including satellite positioning systems (GPS) and drones to increase farming efficiency, creating least amount of waste and highest amount of water efficiency.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Organic Agriculture:</strong> Utilizes natural techniques for soil improvement, reduction of chemical inputs and increase in the sustainability of food production.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Agroecology:</strong> The integration of ecological principles in agriculture producing the least amount of external assistance to enhance ecosystem health.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Vertical Farming:</strong> Cultivation of crops inside stacked layers, which utilizes less land and water use; these farms are mainly located in cities.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Biotechnological Agriculture:</strong> The modification of crops through genetics to develop disease resistant and high yield crops has significantly lowered the number of pesticides applied.</span>
                                </li>
                            </ul>
                        </div>

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
                                src="/images/subject-matter-experts/environmental-science/Environmental-Science.webp"
                                alt="Environmental science sustainability visual"
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
                            Our Core Disciplines in Environmental Science
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Pubrica offers a wealth of experience in Environmental Sciences in various areas that seek to understand and tackle the huge environmental challenges that our planet is currently facing. Since there are many facets of environmental science, Pubrica offers a diversity of experience with the ability to provide "cutting-edge," innovative environmental solutions towards Sustainable Development (SD), Conservation & Environmental Protection (C&EP). Examples of key Environmental Science Disciplines include.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for Environmental Science Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We have superior expertise in the field of environmental science and publishing. Our extensive knowledge enables us to support researchers, academic institutions and businesses to produce high-quality publications and impactful scientific research. The following are reasons to work with us:
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