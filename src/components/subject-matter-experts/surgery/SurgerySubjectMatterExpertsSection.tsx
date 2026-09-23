"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, ClipboardList, Syringe, Stethoscope, HeartPulse } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "mis",
        title: "Minimally Invasive Surgery (MIS)",
        description:
            "Techniques such as laparoscopy, endoscopy, and robotic surgery reduce incision size, recovery time, and postoperative pain.",
    },
    {
        id: "robotic-surgery",
        title: "Robotic Surgery",
        description:
            "Robots provide high precision, better visualization, and enhanced dexterity for complex procedures.",
    },
    {
        id: "imaging-navigation",
        title: "Imaging and Navigation Systems",
        description:
            "MRI, CT scans, and intraoperative navigation assist surgeons in accurate targeting and planning.",
    },
    {
        id: "3d-printing-prosthetics",
        title: "3D Printing and Prosthetics",
        description:
            "Custom implants and surgical models improve outcomes in orthopaedics, craniofacial surgery, and reconstructive procedures.",
    },
    {
        id: "telemedicine-remote-surgery",
        title: "Telemedicine and Remote Surgery",
        description:
            "Digital technology allows for remote consultations, surgical planning, and even robotic-assisted interventions across distances.",
    },
];

const surgicalProcessData = [
    {
        title: 'Preoperative Assessment',
        iconSrc: "/images/subject-matter-experts/surgery/General-Surgery.webp",
        description: 'Before surgery, patients undergo thorough evaluations, including medical history review, physical examination, imaging, and laboratory tests. This ensures appropriate risk assessment and surgical planning.',
        icon: ClipboardList
    },
    {
        title: 'Anaesthesia and Preparation',
        iconSrc: "/images/subject-matter-experts/surgery/Cardiothoracic-Surgery.webp",
        description: 'Administered by specialized anaesthesiologists, anaesthesia ensures patient comfort and safety during the procedure. Preoperative preparation also includes sterilization protocols, patient positioning, and equipment readiness.',
        icon: Syringe
    },
    {
        title: 'Surgical Procedure',
        iconSrc: "/images/subject-matter-experts/surgery/Neurosurgery.webp",
        description: 'Surgeons operate using a variety of techniques, ranging from traditional open surgery to advanced minimally invasive surgery research techniques such as laparoscopy or robotic-assisted surgery.',
        icon: Stethoscope
    },
    {
        title: 'Postoperative Care',
        iconSrc: "/images/subject-matter-experts/surgery/Orthopaedic-Surgery.webp",
        description: 'Recovery begins immediately after surgery with careful monitoring of vital signs, pain management, and prevention of complications. Rehabilitation may include physical therapy, wound care, and lifestyle modifications.',
        icon: HeartPulse
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Arjun Mehta",
        degree: "MS in General Surgery",
        experience: "8 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/surgery/Dr.-Arjun-Mehta.webp",
    },
    {
        name: "Dr. Sophia Reynolds",
        degree: "PhD in Surgical Sciences",
        experience: "8 years of experience",
        manuscripts: "70+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/surgery/Dr.-Sophia-Reynolds.webp",
    },
    {
        name: "Dr. Michael Carter",
        degree: "PhD in Surgical Oncology",
        experience: "7 years of experience",
        manuscripts: "80+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/surgery/Dr.-Michael-Carter.webp",
    },
];

export default function SurgerySubjectMatterExpertsSection() {
    // Tab State for Advances in Surgical Technology
    const [activeTechTab, setActiveTechTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: The Surgical Process */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-3 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        The Surgical Process
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The journey of a surgical patient is structured and meticulous, emphasizing safety and efficacy at every step:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {surgicalProcessData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col items-center text-center px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-200 last:border-r-0 last:border-b-0"
                            >
                                <div className="mb-4 text-[#0e3b32] p-3 rounded-full bg-gray-50 border border-gray-100">
                                    {(item as { iconSrc?: string }).iconSrc ? (
                                        <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain shrink-0" />
                                    ) : (
                                        <IconComponent className="w-10 h-10 stroke-[1.5]" />
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-[#0e3b32] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 2: Advances in Surgical Technology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Advances in Surgical Technology"
                    description="Surgical practice has undergone a significant transformation due to technological innovation. Key advancements include:"
                    trends={emergingTrendsData}
                    footerText=""
                />

                <p className="text-gray-700 text-sm sm:text-base pt-2">
                    These innovations have not only improved surgical safety but also expanded the range of treatable conditions.
                </p>
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/surgery/sample-works-1.webp",
                    imageAlt: "Annals of Surgery Journal Cover",
                    paperTitle:
                        "Provider Perceptions Regarding Cardiopulmonary Resuscitation in Surgical Patients With Frailty",
                    author: "Allen, M. B., Reich, A. J., Collins, P., et al",
                    journalName: "Annals of Surgery",
                    publisher: "American Surgical Association",
                    impactFactor: "6.4",
                }}
            />

            {/* SECTION 4: Our Expert Surgery Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Surgery Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}