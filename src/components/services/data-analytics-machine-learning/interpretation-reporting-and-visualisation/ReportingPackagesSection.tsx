import React from 'react';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';

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

const packagesData: PackageItem[] = [
    {
        icon: "/images/editing-and-translation/basic-pacakge.png",
        title: "Basic",
        subtitle: "Essential Interpretation & Reporting",
        idealFor:
            "Researchers and professionals seeking quick, concise insights and simple data summaries.",
        includes: [
            "Data Interpretation with essential statistical analysis",
            "Concise reporting (2–3 pages)",
            "Basic charts, graphs, and tables",
        ],
        turnaround: "5–7 business days",
        cardBgColor: "#f4f8f8",
        titleColor: "#355252",
    },
    {
        icon: "/images/publication-support/poster-preparation/S.png",
        title: "Standard",
        subtitle: "Enhanced Reporting & Visualisation",
        idealFor:
            "Academic projects, journal submissions, and organisations needing structured reports with enhanced visuals.",
        includes: [
            "In-depth interpretation with methodological explanation",
            "Comprehensive reporting (structured per journal/industry standards)",
            "Advanced visualisations (heat maps, trend analysis, comparative charts)",
            "References to relevant guidelines and literature support",
        ],
        turnaround: "10–12 business days",
        cardBgColor: "#f9f5fc",
        titleColor: "#6a3b7d",
    },
    {
        icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
        title: "Premium",
        subtitle: "Advanced Interpretation & Visualisation",
        idealFor:
            "Clinical trials, regulatory submissions, grant applications, and high-impact publications.",
        includes: [
            "End-to-end data interpretation with advanced statistical modelling",
            "Detailed, guideline-compliant reporting (CONSORT, STROBE, PRISMA, TRIPOD, etc.)",
            "High-quality custom visualisations (interactive dashboards, infographics, predictive modelling visuals)",
            "Executive summary for decision-makers",
            "Multiple rounds of review and refinement",
        ],
        turnaround: "Customized based on scope",
        cardBgColor: "#f9f6f1",
        titleColor: "#705638",
    },
];

// --- Main Component ---
export const ReportingPackagesSection: React.FC = () => {
    return (
        <section className="w-full bg-white py-7 px-4 sm:px-6 lg:px-8 font-sans">
            <CommonPackages
                title="Interpretation, Reporting, and Visualisation – Our Packages"
                description="At Pubrica, we offer tailored packages designed to meet the diverse needs of researchers, clinicians, and businesses. Our flexible service models ensure that you receive the right level of support, whether you need end-to-end assistance or targeted expertise."
                packages={packagesData}
            />
            <GetFreeQuoteButton />
        </section>
    );
};

export default ReportingPackagesSection;