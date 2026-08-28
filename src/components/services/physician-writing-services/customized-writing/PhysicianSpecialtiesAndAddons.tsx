"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

// --- Types ---
interface SpecialtyAccordion {
    id: string;
    title: string;
    content: string[];
}

interface ComprehensiveAddOn {
    id: string;
    title: string;
    items: string[];
}

// --- Data ---
const specialtyData: SpecialtyAccordion[] = [
    {
        id: "specialties",
        title: "Physicians Across Specialties",
        content: [
            "Internal Medicine and Subspecialties (Cardiology, Endocrinology, Pulmonology, etc.)",
            "Surgical Specialties (Orthopedics, General Surgery, Neurosurgery, etc.)",
            "Oncology, Haematology, and Palliative Care",
            "Pediatrics, Neonatology, and Adolescent Medicine",
            "Obstetrics & Gynecology and Reproductive Medicine",
            "Emergency Medicine and Critical Care",
            "Psychiatry, Neurology, and Behavioral Health",
            "Family Medicine, Community Health, and General Practice",
            "Dermatology, Ophthalmology, ENT, and other focused specialties",
        ],
    },
    {
        id: "around-world",
        title: "Physicians Around the World",
        content: [
            "Physicians in the United States, United Kingdom, Europe, Middle East, and Asia",
            "Doctors in academic institutions, private medical practice, or public health institutions",
            "International physicians seeking writing support that meets global journal, CME, and regulatory standards",
            "Multilingual support and regional formatting as per local submission or documentation needs",
        ],
    },
    {
        id: "researchers",
        title: "Physician-Researchers and Academics",
        content: [
            "Academic faculty and researchers publishing in high-impact journals",
            "Physicians seeking higher degrees (MD, DM, PhD, etc.)",
            "Clinician scientists applying for competitive research grants or presenting at international conferences",
        ],
    },
    {
        id: "thought-leaders",
        title: "Thought Leaders, Speakers, and Educators",
        content: [
            "KOLs developing white papers, consensus guidelines, or CME modules",
            "Physicians leading seminars, keynote talks, and public health initiatives",
            "Trainers and certification board members are creating evidence-based content",
        ],
    },
];

const comprehensiveAddOns: ComprehensiveAddOn[] = [
    {
        id: "post-writing",
        title: "Post-Writing Services (Optional but Strategic)",
        items: [
            "Peer-review response assistance",
            "Journal selection guidance",
            "Submission support services (handling journal systems, formatting, uploading)",
        ],
    },
    {
        id: "language",
        title: "Language Localization / Multilingual Support",
        items: [
            "Especially if you serve non-native English-speaking physicians internationally",
            "Medical writing in American/British English, or translation + editing support",
        ],
    },
    {
        id: "graphics",
        title: "Graphics and Visual Aid Support",
        items: [
            "Support with tables, figures, charts, and visual abstracts",
            "Optional statistical illustration or infographic preparation",
        ],
    },
    {
        id: "strategy",
        title: "Medical Communication Strategy",
        items: [
            "For physicians who are KOLs or want long-term publication planning, white papers, or thought leadership development",
        ],
    },
    {
        id: "revisions",
        title: "Feedback and Revisions Policy",
        items: [
            "Clear mention of how many revisions are included",
            "Optional consultation or Q&A with the assigned writer (adds a premium feel)",
        ],
    },
];

export default function PhysicianSpecialtiesAndAddons() {
    // All closed by default
    const [openSpecialty, setOpenSpecialty] = useState<string | null>(null);
    const [openAddOn, setOpenAddOn] = useState<string | null>(null);

    const toggleSpecialty = (id: string) => {
        setOpenSpecialty((prev) => (prev === id ? null : id));
    };

    const toggleAddOn = (id: string) => {
        setOpenAddOn((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full bg-white py-6 text-slate-800">
            <div className="max-w-6xl mx-auto px-4 space-y-16">

                {/* SECTION 1: Supporting Physicians Across Specialties */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1a2b49] mb-2">
                            Supporting Physicians Across Specialties
                        </h2>
                        <p className="text-xs md:text-sm text-slate-600 max-w-4xl leading-relaxed">
                            We empower clinicians worldwide—across diverse specialties and professional pathways—with expert support tailored to their academic, clinical, and educational goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                        {/* Left Staggered Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-md h-64 md:h-72 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                <Image
                                    src="/images/physician-writing-services/customized-writing/Physicians-Across-Specialties.webp"
                                    alt="Doctor with stethoscope reviewing documents"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right Accordion (Closed by default) */}
                        <div className="lg:col-span-7 divide-y divide-slate-300 border-t border-b border-slate-300">
                            {specialtyData.map((item) => {
                                const isOpen = openSpecialty === item.id;
                                return (
                                    <div key={item.id} className="py-3">
                                        <button
                                            onClick={() => toggleSpecialty(item.id)}
                                            className="w-full flex items-center justify-between text-left group py-1"
                                        >
                                            <span className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                                                {item.title}
                                            </span>
                                            <span className="text-slate-600 ml-4 flex-shrink-0">
                                                {isOpen ? (
                                                    <Minus className="w-4 h-4 text-teal-800" />
                                                ) : (
                                                    <Plus className="w-4 h-4 text-slate-600" />
                                                )}
                                            </span>
                                        </button>

                                        {/* Accordion Content */}
                                        {isOpen && (
                                            <div className="pt-3 pb-2 pl-2 space-y-2 text-xs text-slate-700 leading-relaxed">
                                                <p className="text-[11px] font-medium text-slate-500">
                                                    {item.id === "specialties" && "We serve doctors from a wide range of clinical disciplines, including but not limited to:"}
                                                    {item.id === "around-world" && "We cater to a worldwide audience of health professionals, including:"}
                                                    {item.id === "researchers" && "We work directly with:"}
                                                </p>
                                                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                                                    {item.content.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: What You Could Add */}
                <section className="space-y-6 pt-4">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1a2b49]">
                        What You Could Add (if you want to be fully comprehensive):
                    </h2>

                    {/* 5 Horizontal Tabs Grid (Closed by default) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-start">
                        {comprehensiveAddOns.map((addon) => {
                            const isOpen = openAddOn === addon.id;
                            return (
                                <div
                                    key={addon.id}
                                    className="bg-[#f0f9f8] border border-teal-100 rounded-sm p-4 transition-all"
                                >
                                    {/* Tab Header */}
                                    <div
                                        onClick={() => toggleAddOn(addon.id)}
                                        className="flex items-start justify-between gap-2 cursor-pointer select-none"
                                    >
                                        <h3 className="text-xs font-bold text-slate-900 leading-snug">
                                            {addon.title}
                                        </h3>
                                        <span className="text-slate-700 mt-0.5 flex-shrink-0">
                                            {isOpen ? (
                                                <Minus className="w-3.5 h-3.5 text-teal-800" />
                                            ) : (
                                                <Plus className="w-3.5 h-3.5 text-slate-600" />
                                            )}
                                        </span>
                                    </div>

                                    {/* Expandable Content */}
                                    {isOpen && (
                                        <div className="mt-3 pt-3 border-t border-teal-200/60">
                                            <ul className="list-disc pl-4 space-y-1.5 text-[11px] text-slate-700 leading-relaxed">
                                                {addon.items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

            </div>
        </div>
    );
}