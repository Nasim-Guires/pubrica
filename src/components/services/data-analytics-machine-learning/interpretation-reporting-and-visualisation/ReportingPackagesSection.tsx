import React from 'react';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

// --- Types ---
interface PackagePlan {
    id: string;
    badge?: string;
    badgeSrc: string;
    name: string;
    headerBg: string; // Tailored colors matching screenshot
    headerTextColor: string;
    badgeBg: string;
    cardBg: string;
    idealFor: string;
    includes: string[];
    turnaroundTime: string;
}

// --- Data ---
const PACKAGES_DATA: PackagePlan[] = [
    {
        id: 'basic',
        badgeSrc: '/images/editing-and-translation/basic-pacakge.png',
        name: 'Basic',
        headerBg: 'bg-[#e2ebeb]',
        headerTextColor: 'text-[#355252]',
        badgeBg: 'bg-[#d1e0e0] text-[#355252]',
        cardBg: 'bg-[#f4f8f8]',
        idealFor: 'Researchers and professionals seeking quick, concise insights and simple data summaries.',
        includes: [
            'Data Interpretation with essential statistical analysis',
            'Concise reporting (2–3 pages)',
            'Basic charts, graphs, and tables',
        ],
        turnaroundTime: '5–7 business days',
    },
    {
        id: 'standard',
        badgeSrc: '/images/publication-support/poster-preparation/S.png',
        name: 'Standard',
        headerBg: 'bg-[#eee3f5]',
        headerTextColor: 'text-[#6a3b7d]',
        badgeBg: 'bg-[#dfcbeb] text-[#6a3b7d]',
        cardBg: 'bg-[#f9f5fc]',
        idealFor: 'Academic projects, journal submissions, and organisations needing structured reports with enhanced visuals.',
        includes: [
            'In-depth interpretation with methodological explanation',
            'Comprehensive reporting (structured per journal/industry standards)',
            'Advanced visualisations (heat maps, trend analysis, comparative charts)',
            'References to relevant guidelines and literature support',
        ],
        turnaroundTime: '10–12 business days',
    },
    {
        id: 'premium',
        badgeSrc: '/images/editing-and-translation/translation-with-editing/pro.webp',
        name: 'Premium',
        headerBg: 'bg-[#e9ded0]',
        headerTextColor: 'text-[#705638]',
        badgeBg: 'bg-[#dbcbb9] text-[#705638]',
        cardBg: 'bg-[#f9f6f1]',
        idealFor: 'Clinical trials, regulatory submissions, grant applications, and high-impact publications.',
        includes: [
            'End-to-end data interpretation with advanced statistical modelling',
            'Detailed, guideline-compliant reporting (CONSORT, STROBE, PRISMA, TRIPOD, etc.)',
            'High-quality custom visualisations (interactive dashboards, infographics, predictive modelling visuals)',
            'Executive summary for decision-makers',
            'Multiple rounds of review and refinement',
        ],
        turnaroundTime: 'Customized based on scope',
    },
];

// --- Main Component ---
export const ReportingPackagesSection: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Section Header */}
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b36]">
                        Interpretation, Reporting, and Visualisation – Our Packages
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                        At Pubrica, we offer tailored packages designed to meet the diverse needs of researchers, clinicians, and businesses. Our flexible service models ensure that you receive the right level of support, whether you need end-to-end assistance or targeted expertise.
                    </p>
                </div>

                {/* Pricing/Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {PACKAGES_DATA.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`rounded-t-lg overflow-hidden border border-slate-200/70 shadow-sm flex flex-col ${pkg.cardBg}`}
                        >
                            {/* Header Banner */}
                            <div className={`p-4 flex items-center justify-center gap-3 border-b border-slate-200/50 ${pkg.headerBg}`}>
                                <div className="relative w-9 h-9 shrink-0">
                                    <Image src={pkg.badgeSrc} alt={`${pkg.name} package`} fill className="object-contain" />
                                </div>
                                <h3 className={`text-xl font-bold ${pkg.headerTextColor}`}>
                                    {pkg.name}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col space-y-5 text-slate-700 text-xs sm:text-sm">

                                {/* Ideal For */}
                                <div className="flex items-start gap-2.5">
                                    <ArrowRightCircle className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-slate-900">Ideal For: </span>
                                        <span>{pkg.idealFor}</span>
                                    </div>
                                </div>

                                {/* Includes */}
                                <div className="space-y-2.5 flex-1">
                                    <div className="flex items-center gap-2.5">
                                        <ArrowRightCircle className="w-4 h-4 text-slate-800 shrink-0" />
                                        <span className="font-bold text-slate-900">Includes:</span>
                                    </div>

                                    <ul className="pl-6 space-y-2 list-disc marker:text-slate-500">
                                        {pkg.includes.map((item, index) => (
                                            <li key={index} className="leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Turnaround Time */}
                                <div className="flex items-start gap-2.5 pt-4 border-t border-slate-200/60">
                                    <ArrowRightCircle className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-slate-900">Turnaround Time: </span>
                                        <span>{pkg.turnaroundTime}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <GetFreeQuoteButton />
        </section>
    );
};

export default ReportingPackagesSection;