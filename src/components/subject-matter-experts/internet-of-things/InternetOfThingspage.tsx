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

export default function InternetOfThingsPage() {
    const disciplines = [
        {
            title: "IoT System Architecture",
            iconSrc: "/images/subject-matter-experts/internet-of-things/IoT-Architecture-and-System-Design.webp",
            description: "To create an Internet of Things (IoT) system that is scalable and secure requires the design of a system that incorporates all the components required to support the seamless movement of information between smart devices, communication gateways, communication protocols, and cloud-based storage.",
            icon: Atom
        },
        {
            title: "Embedded Systems and Sensor Technologies",
            iconSrc: "/images/subject-matter-experts/internet-of-things/Embedded-Systems-and-Sensor-Technologies.webp",
            description: "The development of embedded and smart sensors, microcontrollers, and platforms to enable devices to collect data in real-time for the purpose of establishing intelligent decision-making capabilities at the device level.",
            icon: Cog
        },
        {
            title: "IoT Communication and Networking",
            iconSrc: "/images/subject-matter-experts/internet-of-things/IoT-Communication-and-Networking.webp",
            description: "The development of wireless communication technologies (5G, LPWAN, and Bluetooth) will enable the reliable flow of information and transfer of data between IoT devices.",
            icon: Stethoscope
        },
        {
            title: "Data Analytics and Artificial Intelligence for IoT",
            iconSrc: "/images/subject-matter-experts/internet-of-things/Data-Analytics-and-Artificial-Intelligence-for-IoT.webp",
            description: "Machine Learning (ML) and data analytical tools will enable predictive analysis for use in smart decisions with a strong focus on ML and data analysis solutions to process large volumes of IoT data.",
            icon: Activity
        },
        {
            title: "Edge and Cloud Computing",
            iconSrc: "/images/subject-matter-experts/internet-of-things/Edge-and-Cloud-Computing.webp",
            description: "Distributed computing architecture can enhance the productivity of processing IoT data by allowing Edge and Cloud Computing environments to efficiently share the processing load and reduce latency between Edge and Cloud Computing environments.",
            icon: TestTube2
        },
        {
            title: "IoT Security and Privacy",
            iconSrc: "/images/subject-matter-experts/internet-of-things/IoT-Security-and-Privacy.webp",
            description: "The challenges of developing IoT solutions for Cybersecurity, such as protecting data, authenticating devices and ensuring that secure communications occur in an IoT ecosystem.",
            icon: FileSearch
        }
    ];

    const services = [
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: UserCheck
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Activity
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileSearch
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: PenTool
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Internet of Things
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                       The Internet of Things (IoT) is changing how we connect, talk to each other, and make intelligent decisions about time as well as transforming how we connect the physical world and the digital world. The Internet of Things is enabling smarter everyday lives, more efficient industries and innovative businesses.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing Innovation by Transforming Scientific Ideas into Breakthrough IoT Research
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The IoT or the Internet of Things refers to all the different ways of linking devices, whether they be computers or physical object(s). The goal of these links is to allow for the collection and exchange of data in real time (without needing to go to an external source) using computer networks.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            IoT is concerned with the communication and operation of smart environments (via the use of hardware, software, and network connections), as well as the development of smart systems within a business,{" "}
                            <Link href="/industries" className="text-sky-600 hover:underline">healthcare industry</Link>,{" "}
                            <Link href="/subject-matter-experts/agriculture" className="text-sky-600 hover:underline">agricultural</Link>, and energy sectors.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica provides customized{" "}
                            <Link href="/subject-matter-experts/internet-of-things" className="text-sky-600 hover:underline">IoT research and publication services</Link> to global researchers, engineers or industry personnel in various fields or areas of research regarding IoT. Our IoT Services include expert research guidance, technical editing, and data interpretation, and we will assist you in preparing your research for publication from the conception of your idea until the final version is published. Our team of experienced experts in IoT will assist in turning a newly developed idea concept or technology into a{" "}
                            <Link href="/services/publication-support" className="text-sky-600 hover:underline">high-quality publication-ready manuscript services</Link> that meets worldwide standards for academic and industry journals.
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
                                src="/images/subject-matter-experts/internet-of-things/Internet-of-Things-.webp"
                                alt="IoT Microchip Concept"
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
                            Our Core Disciplines In Internet Of Things
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Internet of Things combines cutting-edge technology to provide intelligent and connected systems with real-time sensing, interaction, and decision-making capabilities. Our main areas of expertise include supporting secure, scalable, and data-driven IoT technologies across multiple industries and applications:
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
                            Our Expertise in Internet of Things Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We specialize in delivering high-quality, publication-ready research in the field of the Internet of Things (IoT). Our expertise spans conceptual development, technical writing, data analysis, and journal submission support, ensuring that complex IoT innovations are presented with clarity, accuracy, and global research relevance:
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