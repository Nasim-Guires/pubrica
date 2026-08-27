import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageCardProps {
    badge: string;
    badgeBg: string;
    title: string;
    subtitle: string;
    headerBg: string;
    idealFor: string;
    includes: string[];
}

const packages: PackageCardProps[] = [
    {
        badge: "S",
        badgeBg: "bg-sky-100 text-sky-600",
        title: "Starter",
        subtitle: "Foundation Training Content",
        headerBg: "bg-[#d8e8e6]",
        idealFor:
            "Internal team education, departmental sessions, or pilot CME programs.",
        includes: [
            "1 specialty-specific slide deck (up to 20 slides)",
            "1 clinical case study or scenario",
            "1 evidence summary handout or quick-reference guide",
            "Visual design aligned with branding",
            "Based on current guidelines (AHA, NICE, ADA, etc.)",
        ],
    },
    {
        badge: "P",
        badgeBg: "bg-red-500 text-white",
        title: "Professional",
        subtitle: "CME & Workshop-Ready",
        headerBg: "bg-[#e2d5e8]",
        idealFor:
            "CME-accredited programs, workshops, and physician engagement initiatives.",
        includes: [
            "2–3 custom slide decks (up to 30 slides each)",
            "Clinical case series with discussion points",
            "Assessment questions (pre/post-tests or MCQs)",
            "CME learning objectives and outcomes",
            "CME/CPD alignment (ACCME, EACCME format)",
            "Supporting references and reading list",
        ],
    },
    {
        badge: "P",
        badgeBg: "bg-red-500 text-white",
        title: "Premium",
        subtitle: "Full Training Program Development",
        headerBg: "bg-[#e2cda9]",
        idealFor:
            "Hospitals, pharmaceutical/medtech companies, or academic institutions building structured physician education programs.",
        includes: [
            "4–6 interactive slide decks with speaker notes",
            "Full set of case studies and simulations",
            "Facilitator guide and instructor toolkit",
            "Participant workbook or training manual",
            "Assessment tools + answer keys",
            "CME accreditation support documentation",
            "Custom branding and LMS-ready formats (SCORM/xAPI)",
        ],
    },
];

export default function PhysicianTrainingPackage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 pb-16">
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
                {/* Top Feature / Banner Section */}
                <section className="bg-[#f2faf5] rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Image Box */}
                        <div className="md:col-span-5 relative h-64 md:h-80 w-full overflow-hidden rounded-lg shadow">
                            <Image
                                src="/images/physician-writing-services/physician-training/Physician-Training-Content-Development-Sample-Work-Discover-More.jpg" // Replace with your image path
                                alt="Physician Training Session"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Banner Actions */}
                        <div className="md:col-span-7 flex flex-col justify-center space-y-6 text-center">
                            {/* Box 1 */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                    Physician Training Content Development Sample Work
                                </h3>
                                <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-slate-800 text-white font-medium px-8 py-2 rounded-full text-sm transition">
                                    Discover More
                                </Link>
                            </div>

                            {/* Box 2 */}
                            <div className="pt-2 border-t border-slate-200/60">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                    Download the full Report Now
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 max-w-lg mx-auto mb-4 leading-relaxed">
                                    Look at our samples of physician training modules, designed with clinical accuracy, evidence-based standards, and aligned to specialty-specific guidelines. All our modules are also designed to be implementable in a real practice setting and compliant with CME.
                                </p>
                                <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-slate-800 text-white font-medium px-8 py-2 rounded-full text-sm transition">
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Heading */}
                <section className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                        Evidence-Based Physician Training Content Development: Packages
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        At Pubrica, we provide flexible and scalable packages designed to accommodate the unique training needs of healthcare organizations, academic institutions, and life sciences companies. Whether you are planning a single CME session or a comprehensive clinical education curriculum, our knowledgeable team will develop scientifically reliable and specialty-matched content based on your intentions.
                    </p>
                </section>

                {/* Packages Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-slate-50 shadow-sm"
                        >
                            {/* Header */}
                            <div className="bg-white p-4 border-b border-slate-200 flex items-center gap-3">
                                <span
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-inner ${pkg.badgeBg}`}
                                >
                                    {pkg.badge}
                                </span>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg leading-tight">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium">
                                        {pkg.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Ideal For Section */}
                            <div className={`${pkg.headerBg} p-4 text-xs`}>
                                <span className="font-bold text-slate-900 block mb-1">
                                    Ideal for:
                                </span>
                                <p className="text-slate-700 leading-snug">{pkg.idealFor}</p>
                            </div>

                            {/* Includes List */}
                            <div className="p-4 flex-1 bg-slate-100/70 text-xs">
                                <span className="font-bold text-slate-900 block mb-3">
                                    Includes:
                                </span>
                                <ul className="space-y-2.5">
                                    {pkg.includes.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-2 text-slate-700">
                                            <span className="text-slate-900 mt-0.5">▪</span>
                                            <span className="leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            {/* Fixed Sticky CTA Bar */}
           <div className="flex justify-center py-4">
  <GetFreeQuoteButton/>
</div>
        </div>
    );
}