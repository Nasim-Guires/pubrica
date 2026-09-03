'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';

const packagesData: (PackageItem & { price: string; ctaText: string; ctaUrl: string })[] = [
    {
        icon: "/images/editing-and-translation/basic-pacakge.png",
        title: "Basic Package",
        subtitle: "Simplified Scientific Media Summary",
        idealFor:
            "Individual researchers needing a simplified media summary for general outreach.",
        includes: [
            "One scientific news report (400–500 words)",
            "Audience: General public or science-interested readers",
            "Language editing by a native English editor",
            "1 round of revision",
        ],
        turnaround: "5–7 business days",
        cardBgColor: "#f3eafb",
        titleColor: "#6b2d82",
        price: "350",
        ctaText: "Check Pricing & Get a Quote",
        ctaUrl: "/contact-us/",
    },
    {
        icon: "/images/publication-support/poster-preparation/S.png",
        title: "Standard Package",
        subtitle: "Media-Ready Research Communication",
        idealFor:
            "Research teams or universities looking for media-ready summaries for websites and PR.",
        includes: [
            "One structured news report (600–700 words)",
            "Highlights and key messages section",
            "Aligned with journal media style (e.g., Nature, PLOS, Elsevier)",
            "2 rounds of revision",
        ],
        turnaround: "7 business days",
        cardBgColor: "#f2f7f0",
        titleColor: "#355f2f",
        price: "450",
        ctaText: "Check Pricing & Get a Quote",
        ctaUrl: "/contact-us/",
    },
    {
        icon: "/images/publication-support/responding-to-reviewers/pa-icons-.png",
        title: "Premium Package",
        subtitle: "Comprehensive Scientific Outreach",
        idealFor:
            "Institutions, funded projects, or research groups with outreach and policy goals.",
        includes: [
            "One in-depth scientific news report (700–900 words)",
            "Custom-tailored for policymakers, journalists, or institutional communications",
            "Key messages, impact statement, and simplified abstract",
            "Media pitch draft for journal publishing + institutional news",
            "Optional summary graphic (at additional cost)",
        ],
        turnaround: "7–10 business days",
        cardBgColor: "#faf3ec",
        titleColor: "#805826",
        price: "650",
        ctaText: "Check Pricing & Get a Quote",
        ctaUrl: "/contact-us/",
    },
];

export default function ScientificNewsReportPackages() {
    return (
        <>
            <CommonPackages
                title="Scientific News Report Packages"
                description="Pubrica's scientific news report solutions deliver accurate, concise, and reader-aligned summaries of current research, tailored for academic institutions, clinical departments, and research communication teams. We offer three service tiers to suit your dissemination strategy and target audience."
                packages={packagesData}
            />

            {/* Delivery and Pricing Section */}
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-[#10343a] mb-6">Delivery and Pricing</h3>

                <div className="w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 mb-6">
                    
                    {/* Pricing Display */}
                    <div className="flex items-center justify-center gap-3 py-4 px-6 bg-white">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-lg shadow-sm">
                            $
                        </span>
                        <span className="text-gray-800 font-medium text-lg">
                            Starts from <strong className="text-gray-900 font-bold">350</strong>
                        </span>
                    </div>

                    {/* Turnaround / Delivery Display */}
                    <div className="flex items-center justify-center gap-3 py-4 px-6 bg-white">
                        <span className="text-blue-500 text-xl">
                            📅
                        </span>
                        <span className="text-gray-800 font-medium text-lg">
                            <strong className="text-gray-900 font-bold">7 days</strong>
                        </span>
                    </div>
                </div>

                {/* Styled CTA Button */}
                <Link
                    href="/contact-us/"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#10343a] hover:bg-[#1a5059] text-white font-medium rounded-full shadow-md transition-all duration-200 text-base"
                >
                    Check Pricing & Get a Quote
                </Link>
            </div>
        </>
    );
}