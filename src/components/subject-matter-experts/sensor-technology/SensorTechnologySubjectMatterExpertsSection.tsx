"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, Activity, Watch, Stethoscope, Radio, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "intelligent-smart",
        title: "Intelligent and Smart Sensors",
        description:
            "Through the incorporation of AI and machine learning techniques with sensors, sensor technologies can analyze data instantly, calibrate themselves, and make adaptive decisions thus creating opportunities for improved accuracy and efficiency.",
    },
    {
        id: "wearable-implantable",
        title: "Wearable and Implantable Sensors",
        description:
            "Wearable and implantable sensors enable the monitoring of patients' health continuously and remotely in a way that is more comfortable and dependable than the traditional models using very small and flexible sensors.",
    },
    {
        id: "iot-sensors",
        title: "Sensors with Internet of Things (IOT) Functionality",
        description:
            "IoT-enabled sensors can communicate with each other, which allows for real-time monitoring, the collection of large amounts of data and the ability to be designed in such a way that they can integrate seamlessly into our current systems.",
    },
    {
        id: "nanomaterials",
        title: "Sensor Development with Nanomaterials and Advanced Materials",
        description:
            "Nanotechnology and advanced material are utilized to make this new generation of sensors more sensitive, specific, durable, and thereby enhancing all aspects of sensing such as environmental, biological, or chemical.",
    },
    {
        id: "smart-efficient",
        title: "Smart and Efficient Sensor Technology",
        description:
            "A few different technologies such as solar, piezoelectric, and thermal harvesting technologies can provide a sensor with the ability to use naturally occurring energy, thus supporting the need for longer-lasting sensors' operational lifetime while also creating an energy-efficient sensor.",
    },
    {
        id: "sensor-fusion",
        title: "Fusion of Sensors and Data Analytics",
        description:
            "The fusion of multiple sensors provides increased accuracy, reliability, and contextual understanding when working within complex environments.",
    },
];

const applicationsData = [
    {
        title: "Patient Monitoring",
        iconSrc:
            "/images/subject-matter-experts/sensor-technology/Design-Development-of-Sensors.webp",
        desc: "Ongoing assessment of vital signs can facilitate the early identification of illness and produce better health results.",
        icon: Activity,
    },
    {
        title: "Wearable and Implantable Devices",
        iconSrc:
            "/images/subject-matter-experts/sensor-technology/Wearable-Portable-Sensors.webp",
        desc: "Sensors allow for prolonged health monitoring and customized therapy.",
        icon: Watch,
    },
    {
        title: "Diagnostic Support",
        iconSrc:
            "/images/subject-matter-experts/sensor-technology/Biosensors-Biomedical-Sensors.webp",
        desc: "Advanced sensors will improve diagnosis of disease and improve the diagnostic image.",
        icon: Stethoscope,
    },
    {
        title: "Remote Healthcare",
        iconSrc:
            "/images/subject-matter-experts/sensor-technology/Sensor-Networks-IoT.webp",
        desc: "Sensor based systems support remote medical care and telehealth services.",
        icon: Radio,
    },
    {
        title: "Precision Medicine",
        iconSrc:
            "/images/subject-matter-experts/sensor-technology/Microelectromechanical-Systems-MEMS-Nano-sensors.webp",
        desc: "The use of real-time data will provide tailored treatment and enhance the ability to make better clinical decisions.",
        icon: Cpu,
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Alex Carter",
        degree: "PhD in Sensor Technology",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/medical-animation/John-Miller.webp",
    },
    {
        name: "Dr. Neha Rao",
        degree: "PhD in Embedded Systems and Sensors",
        experience: "11 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/sensor-technology/Dr.-Neha-Rao.webp",
    },
    {
        name: "Dr. Rahul Mehta",
        degree: "PhD in Smart Sensor Systems",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/big-data-hadoop/Dr.-S.-Rao.webp",
    },
];
export default function SensorTechnologySubjectMatterExpertsSection() {
    // Tab State for Emerging Trends in Sensor Technology
    const [activeTechTab, setActiveTechTab] = useState(0);

    // Toggle State for Importance of Sensor Technology list items (all closed by default)
    const [openImportanceItems, setOpenImportanceItems] = useState<{ [key: number]: boolean }>({});

    const toggleImportanceItem = (index: number) => {
        setOpenImportanceItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const importanceList = [
        {
            title: 'Real-Time Tracking',
            content: 'Continuous tracking of physiological, environmental and operational parameters, enables quick identification of changes to the system and abnormalities in the Physiological parameters being monitored.'
        },
        {
            title: 'Early Identification and Prevention',
            content: 'The use of advanced sensors provides the ability to identify and/or eliminate many problems at the earliest possible time, thereby enhancing preventive medical treatment, predictive maintenance, and risk prosperity.'
        },
        {
            title: 'Non-Invasively and Remote',
            content: 'The data gathered by most sensor technologies can be done without the need for any kind of physical interventions; thus, they provide for comfort, safety and access in both industrial and healthcare settings.'
        },
        {
            title: 'Improved Accuracy and Automation',
            content: 'High-precision radar sensors produce improved dependability of measurements and are the foundation of automated systems and equipment such as diagnostic, manufacturing, and intelligent infrastructures.'
        },
        {
            title: 'Decision Making Based on Data',
            content: 'The data generated from sensors is utilized to provide intelligent analytic processes along with real-time information required for making informed decisions across many medical, industrial, and environmental sectors.'
        }
    ];

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Importance of Sensor Technology and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Importance of Sensor Technology and Healthcare
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Modern-day healthcare, industries, and smart systems depend heavily on sensor technology since it allows for real-time data gathering and decision-making for a variety of uses. The advancement of sensor technology has allowed for the monitoring, assessing, and collecting information on physical, chemical, and biological variables with great accuracy, allowing for intelligent decision-making in a multitude of different types of applications and areas of use. Here are some of the most notable advantages of sensor technology:
                        </p>
                        <div className="space-y-2 pt-2">
                            {importanceList.map((item, index) => {
                                const isOpen = !!openImportanceItems[index];
                                return (
                                    <div key={index} className="border-b border-gray-100 pb-2">
                                        <button
                                            onClick={() => toggleImportanceItem(index)}
                                            className="w-full flex items-center justify-between text-left text-sm sm:text-base font-semibold text-gray-800 hover:text-[#0e3b32] transition-colors py-1 focus:outline-none"
                                        >
                                            <span className="flex items-center space-x-2">
                                                <span className="text-[#0e3b32] font-bold text-lg w-5 text-center">
                                                    {isOpen ? '−' : '+'}
                                                </span>
                                                <span>{item.title}</span>
                                            </span>
                                            {isOpen ? (
                                                <ChevronUp className="w-4 h-4 text-gray-500" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-500" />
                                            )}
                                        </button>
                                        {isOpen && (
                                            <div className="pl-7 pr-4 py-2 text-xs sm:text-sm text-gray-600 bg-gray-50 rounded-md mt-1 animate-fadeIn">
                                                {item.content}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/sensor-technology/Importance-of-Sensor-Technology-and-Healthcare.webp"
                            alt="Importance of Sensor Technology and Healthcare"
                            fill
                            sizes="(max-width: 1024px) 100vw, 360px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Emerging Trends in Sensor Technology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Sensor Technology"
                    description="The acceleration of sensor technology is being driven by notable advancements made in the fields of material sciences, artificial intelligence, and connectivity. With these advancements comes the development of a large variety of sensor capabilities that address healthcare, industrial applications, environmental monitoring, and smart infrastructures. The trends that are currently emerging include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 3: Clinical Applications of Sensor Technology */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ApplicationsSection
                    title="Clinical Applications of Sensor Technology"
                    description="Sensor technology plays a transformative role in modern clinical practice by enabling accurate diagnosis, continuous monitoring, and personalized patient care. Advanced sensors enhance clinical efficiency, improve patient outcomes, and support data-driven medical decisions across a wide range of healthcare settings:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/sensor-technology/Clinical-Applications-of-Sensor-Technology.webp"
                    imageAlt="Clinical Applications of Sensor Technology"
                />
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/sensor-technology/sample-works-13-1.webp",
                    imageAlt: "Biosensors & Bioelectronics Journal Cover",
                    paperTitle:
                        "Extended Strand-Mediated Target Unmasking Synergized with Lyophilized Hairpin Probes for One-Step Viral RNA Detection.",
                    author:
                        "Jiwei Wang, Chuankun Yang, Ran Xu, Shuo Ma, Ai Chen, YumingYao, Guoqiu Wu.",
                    journalName: "Biosensors & Bioelectronics",
                    publisher: "Elsevier",
                    impactFactor: "2.0 (2024)",
                }}
            />
            {/* SECTION 5: Our Expert Sensor Technology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Sensor Technology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}