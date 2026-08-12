"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    BarChart2,
    Globe,
    FileText,
    Apple,
    ShieldAlert,
    Heart,
    Users,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    UserCheck,
    ChevronDown
} from 'lucide-react';

export default function PublicHealthPage() {
    const disciplines = [
        {
            title: "Epidemiology",
            description: "Epidemiologists assess disease patterns and cause to enable effective prevention and controlling illnesses using epidemiological data.",
            icon: Activity,
        },
        {
            title: "Biostatistics",
            description: "Biostatistics uses statistical techniques to evaluate data related to health and help researchers with their evidence-based decision-making.",
            icon: BarChart2,
        },
        {
            title: "Environmental Health",
            description: "Environmental Health assesses environmental factors and how they affect the health of individuals, including exposure to air pollutants, water sources, and other occupational hazards.",
            icon: Globe,
        },
        {
            title: "Global Health",
            description: "Global Health provides solutions for addressing health-related challenges among different populations with a focus on addressing health inequities, developing health policies, and improving international health systems.",
            icon: Users,
        },
        {
            title: "Health Policy and Management",
            description: "Health Policy and Management perform research related to health systems, developing health policies, understanding the economics of healthcare, and evaluating healthcare programs.",
            icon: FileText,
        },
        {
            title: "Nutrition and Public Health",
            description: "Nutrition and Public Health examine how a person's diet and nutritional intake influence a population's overall health.",
            icon: Apple,
        },
        {
            title: "Epidemiology and Disease Prevention",
            description: "Epidemiology and Disease Prevention evaluate the trends in disease and establish systems for the surveillance of diseases, and to develop preventive measures to reduce risk to the population at large.",
            icon: ShieldAlert,
        },
        {
            title: "Health Promotion and Behavioural Sciences",
            description: "Health Promotion and Behavioural Sciences focus on the behaviours that contribute to an individual's health status, and to develop interventions that improve these types of behaviours.",
            icon: Heart,
        },
        {
            title: "Maternal and Child Health and Community Health",
            description: "Maternal and Child Health and Community Health work to enhance the quality of life for mothers, infants, children, and low-income populations living in poverty.",
            icon: Users,
        }
    ];

    const services = [
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
            icon: Search,
            href: "/services/editing-and-translation"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
            icon: Languages,
            href: "/services/editing-and-translation"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
            icon: Layers,
            href: "/services/research-services"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            icon: BookOpen,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: UserCheck,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Public health
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Advancing healthier communities through prevention, research, and evidence based solutions that improve lives worldwide.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing Public health Research Through Expert Editing, Writing & Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Through continued development in the areas of epidemiology, health policy, biostatistics, environmental health, and health promotion, the research of public health will continue to grow. For example, the introduction of more sophisticated methods of evaluation (e.g., dual use evaluations or aggregate effects) will enable researchers to gather accurate data over longer periods of time and provide more reliable comparisons between groups. It will also give them additional tools to refine their methods and enhance the accuracy of their findings.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Your article has been prepared with the understanding of the importance of <span className="text-[#0e3b32] font-semibold">public health research</span> and how you can use this knowledge to make a difference in the world. We help you with the entire process of producing high-quality and informative manuscripts starting from your initial study design through to submission to the appropriate <span className="text-[#0e3b32] font-semibold">peer-reviewed journals</span>. Your research will have maximum visibility and scientific impact.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#a3c9bd]/30 flex items-center justify-center">
                            <Image
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                                alt="Public health medical research"
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
                            Our Core Disciplines In Public Health
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The following are the areas of focus that we at Pubrica have to offer when it comes to improving the lifestyles of people around the world through public health efforts:
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
                            Our Expertise in Public health Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we offer fully integrated support for the entire public health research process to ensure that scholars, organizations, and practitioners have the means necessary to generate their studies into high-quality audio or video records that are suitable for publication in peer-reviewed journals. We are committed to aiding at every stage of this process - from conception to realization of a project (preliminary research question formulation) through to submission of your final manuscript.
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