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
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function InternetOfThingsPage() {
    const disciplines = [
        {
            title: "IoT Architecture and System Design",
            iconSrc:
                "/images/subject-matter-experts/internet-of-things/IoT-Architecture-and-System-Design.webp",
            description:
                "To create an Internet of Things (IoT) system that is scalable and secure requires the design of a system that incorporates all the components required to support the seamless movement of information between smart devices, communication gateways, communication protocols, and cloud-based storage.",
            icon: Atom,
        },
        {
            title: "Embedded Systems and Sensor Technologies",
            iconSrc:
                "/images/subject-matter-experts/internet-of-things/Embedded-Systems-and-Sensor-Technologies.webp",
            description:
                "The development of embedded and smart sensors, microcontrollers, and platforms to enable devices to collect data in real-time for the purpose of establishing intelligent decision-making capabilities at the device level.",
            icon: Cog,
        },
        {
            title: "IoT Communication and Networking",
            iconSrc:
                "/images/subject-matter-experts/internet-of-things/IoT-Communication-and-Networking.webp",
            description:
                "The development of wireless communication technologies (5G, LPWAN, and Bluetooth) will enable the reliable flow of information and transfer of data between IoT devices.",
            icon: Stethoscope,
        },
        {
            title: "Data Analytics and Artificial Intelligence for IoT",
            iconSrc:
                "/images/subject-matter-experts/internet-of-things/Data-Analytics-and-Artificial-Intelligence-for-IoT.webp",
            description: (
                <>
                    Machine Learning (ML) and data analytical tools will enable{" "}
                    <Link
                        href="/services/data-analytics-machine-learning/predictive-analytics/"
                        className="text-blue-600 no-underline hover:no-underline"
                    >
                        predictive analysis
                    </Link>{" "}
                    for use in smart decisions with a strong focus on ML and data
                    analysis solutions to process large volumes of IoT data.
                </>
            ),
            icon: Activity,
        },
        {
            title: "Edge and Cloud Computing",
            iconSrc:
                "/images/subject-matter-experts/internet-of-things/Edge-and-Cloud-Computing.webp",
            description:
                "Distributed computing architecture can enhance the productivity of processing IoT data by allowing Edge and Cloud Computing environments to efficiently share the processing load and reduce latency between Edge and Cloud Computing environments.",
            icon: TestTube2,
        },
        {
            title: "IoT Security and Privacy",
            iconSrc:
                "/images/subject-matter-experts/internet-of-things/IoT-Security-and-Privacy.webp",
            description:
                "The challenges of developing IoT solutions for Cybersecurity, such as protecting data, authenticating devices and ensuring that secure communications occur in an IoT ecosystem.",
            icon: FileSearch,
        },
    ];
    const expertiseCards = [
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: UserCheck,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Activity,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileSearch,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: PenTool,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Internet of Things"
                description="The Internet of Things (IoT) is changing how we connect, talk to each other, and make intelligent decisions about time as well as transforming how we connect the physical world and the digital world. The Internet of Things is enabling smarter everyday lives, more efficient industries and innovative businesses."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing Innovation by Transforming Scientific Ideas into Breakthrough IoT Research
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            {/* Text Content */}
                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        The IoT or the Internet of Things refers to all the different ways of linking devices, whether they be computers or physical object(s). The goal of these links is to allow for the collection and exchange of data in real time (without needing to go to an external source) using computer networks.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        IoT is concerned with the communication and operation of smart environments (via the use of hardware, software, and network connections), as well as the development of smart systems within a business,{" "}
                                        healthcare industry,
                                        <Link href="/subject-matter-experts/agriculture" className="text-blue-600 no-underline hover:no-underline"> agricultural</Link>, and energy sectors.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica provides customized{" "}
                                        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline hover:no-underline">IoT research and publication services</Link> to global researchers, engineers or industry personnel in various fields or areas of research regarding IoT. Our IoT Services include expert research guidance, technical editing, and data interpretation, and we will assist you in preparing your research for publication from the conception of your idea until the final version is published. Our team of experienced experts in IoT will assist in turning a newly developed idea concept or technology into a{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline hover:no-underline">high-quality publication-ready manuscript services</Link> that meets worldwide standards for academic and industry journals.
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
                        title="Our Core Disciplines In Internet Of Things"
                        description="Internet of Things combines cutting-edge technology to provide intelligent and connected systems with real-time sensing, interaction, and decision-making capabilities. Our main areas of expertise include supporting secure, scalable, and data-driven IoT technologies across multiple industries and applications:"
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Internet of Things Research and Publication"
                    description="We specialize in delivering high-quality, publication-ready research in the field of the Internet of Things (IoT). Our expertise spans conceptual development, technical writing, data analysis, and journal submission support, ensuring that complex IoT innovations are presented with clarity, accuracy, and global research relevance:"
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}