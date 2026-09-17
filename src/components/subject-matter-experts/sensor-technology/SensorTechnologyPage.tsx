"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Brain,
    Users,
    HeartHandshake,
    ShieldAlert,
    UserCheck,
    Pill,
    Cpu,
    Globe,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    ChevronDown,
    Palette,
    FileSpreadsheet,
    Image as ImageIcon,
    Dna,
    Microscope,
    FlaskConical,
    FileSearch,
    ShieldCheck,
    CheckCircle,
    Settings,
    Clock,
    Sliders,
    Bot,
    Shield,
    Wrench,
    FileText,
    TrendingUp,
    Heart,
    Scissors,
    Sparkles,
    Baby,
    Stethoscope,
    Radio,
    Watch,
    CheckSquare
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function SensorTechnologyPage() {
    const disciplines = [
        {
            title: "Design & Development of Sensors",
            iconSrc: "/images/subject-matter-experts/sensor-technology/Design-Development-of-Sensors.webp",
            description: "Using modern techniques in the fabrication of. A TIM. Wireless Technologies. After the sensor is devised, it will be optimised to yield the greatest possible sensitivity and be manufactured using the highest quality of materials to maximise reliability and performance.",
            icon: Cpu,
        },
        {
            title: "Wearable & Portable Sensors",
            iconSrc: "/images/subject-matter-experts/sensor-technology/Wearable-Portable-Sensors.webp",
            description: "Designing and manufacturing Wearable and Portable devices to be used as sensors for health monitoring, Fitness Tracking and Man-machine interactions. Being able to use these sensor devices will enable us to gather data continuously and instantaneously.",
            icon: Watch,
        },
        {
            title: "Biosensors & Biomedical Sensors",
            iconSrc: "/images/subject-matter-experts/sensor-technology/Biosensors-Biomedical-Sensors.webp",
            description: "Developing Biosensing Platforms for Medical Diagnosis, Disease Detection, and Health Monitoring. Integrating Bio-recognition elements into the Electronic Signal Processing systems.",
            icon: Activity,
        },
        {
            title: "Sensor Networks & IoT",
            iconSrc: "/images/subject-matter-experts/sensor-technology/Sensor-Networks-IoT.webp",
            description: "Designing Sensor Networks and Systems that are Connected to the Internet using IoT. Enabling us to establish a connection between various environments for Communication, data acquisition and Remote Monitoring.",
            icon: Radio,
        },
        {
            title: "Microelectromechanical Systems (MEMS) & Nano sensors",
            iconSrc: "/images/subject-matter-experts/sensor-technology/Microelectromechanical-Systems-MEMS-Nano-sensors.webp",
            description: "Designing & Manufacturing small, very sensitive sensors using MEMS and Nano sensor Technology. This technology is used to develop sensors that can be utilised in applications relating to Health Care, Environmental Sensing, Industrial Automation etc.",
            icon: Settings,
        },
        {
            title: "Calibration Testing & Validation of Sensors",
            iconSrc: "/images/subject-matter-experts/sensor-technology/Calibration-Testing-Validation-of-Sensors.webp",
            description: "To Ensure that Sensors are Accurate, Reliable, and in Compliance with Standards, They Must be Rigorously Tested, Calibrated, and Performance Evaluated.",
            icon: CheckSquare,
        }
    ];
    const expertiseCards = [
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission",
            href: "/services/publication-support/peer-review-pre-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: BookOpen,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Sensor Technology"
                description="Expert guidance for medical imaging research, writing, and publication support, bridging technology, medicine, and innovation for precise diagnosis and improved patient care."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Healthcare Through Advanced Sensor Technology
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/sensor-technology/Sensor-Technology.webp"
                                        alt="Sensor Technology and Healthcare Research"
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
                                        The development of modern intelligent systems, as well as numerous industries (i.e., industrial automation and smart infrastructure), will be dependent on sensor technologies to enable real-time{" "}
                                        <Link href="/services/medical-data-collection/" className="text-blue-600 no-underline">
                                            data collection
                                        </Link>
                                        , analysis, and decision making. These sensors enable the collection, monitoring, reporting, and interpretation of physical and chemical signals, biological signals, and other forms of data accurately and reliably. New advances in the development of materials and materials sciences, electronics, wireless communications, and data analytics continue to enhance the overall capabilities of sensor systems and further increase the level of innovation in connected intelligent environments.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we acknowledge that{" "}
                                        <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline">
                                            sensor technology research
                                        </Link>{" "}
                                        involves precise technical requirements, interdisciplinary collaboration, and effective communication of scientific methodologies. Whether your research is based on a new design for a sensor, a biosensor, a wearable sensor, an implanted sensor, an IoT enabled sensor system, or a signal processing method, Pubrica's editorial team can provide the technical support necessary to ensure that your work conforms to the highest standards in both the fields of academia and industry. We can help authors to successfully communicate their findings to their respective markets through{" "}
                                        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline">
                                            peer-reviewed journal publications
                                        </Link>
                                        , conference presentations, and other worldwide platforms for{" "}
                                        <Link href="/services/scientific-communication/" className="text-blue-600 no-underline">
                                            scientific communication
                                        </Link>
                                        .
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

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Sensor Technology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The broad expertise with which we work across the sensor domain enables us to continue to innovate for people around the world, wherever sensors and intelligence are found, including healthcare, industry, environmental monitoring and innovative smart infrastructures.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Sensor Technology"
                    description="Pubrica delivers professional support for sensor technology research, ensuring clarity, accuracy, and global publication standards."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}