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

    const services = [
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Search,
            href: "/services/publication-support/peer-review-pre-submission"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
            href: "/services/editing-and-translation"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: BookOpen,
            href: "/services/research-services"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Sensor Technology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Expert guidance for medical imaging research, writing, and publication support, bridging technology, medicine, and innovation for precise diagnosis and improved patient care.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Healthcare Through Advanced Sensor Technology
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The development of modern intelligent systems, as well as numerous industries (i.e., industrial automation and smart infrastructure), will be dependent on sensor technologies to enable real-time data collection, analysis, and decision making. These sensors enable the collection, monitoring, reporting, and interpretation of physical and chemical signals, biological signals, and other forms of data accurately and reliably. New advances in the development of materials and materials sciences, electronics, wireless communications, and data analytics continue to enhance the overall capabilities of sensor systems and further increase the level of innovation in connected intelligent environments.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we acknowledge that sensor technology research involves precise technical requirements, interdisciplinary collaboration, and effective communication of scientific methodologies. Whether your research is based on a new design for a sensor, a biosensor, a wearable sensor, an implanted sensor, an IoT enabled sensor system, or a signal processing method, Pubrica's editorial team can provide the technical support necessary to ensure that your work conforms to the highest standards in both the fields of academia and industry. We can help authors to successfully communicate their findings to their respective markets through peer-reviewed journal publications, conference presentations, and other worldwide platforms for scientific communication.
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
                                src="/images/subject-matter-experts/sensor-technology/Sensor-Technology.webp"
                                alt="Sensor Technology and Healthcare Research"
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

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Sensor Technology
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica delivers professional support for sensor technology research, ensuring clarity, accuracy, and global publication standards.
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