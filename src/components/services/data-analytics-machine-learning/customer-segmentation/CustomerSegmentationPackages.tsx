'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';
import Image from 'next/image';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';



const packagesData: PackageItem[] = [
    {
        icon: "/images/editing-and-translation/basic-pacakge.png",
        title: "Basic",
        subtitle: "Segment Starter",
        idealFor:
            "Small businesses or startups looking to understand their customer base.",
        includes: [
            "Analysis of up to 5,000 customer records",
            "Segmentation based on basic demographics (age, gender, location)",
            "Simple behavioral insights (purchase frequency, product preference)",
            "Visual segmentation map (PDF)",
            "One consultation session",
        ],
        turnaround: "1–2 weeks",
        cardBgColor: "#e2e8f0",
        titleColor: "#0f172a",
    },
    {
        icon: "/images/publication-support/poster-preparation/S.png",
        title: "Standard",
        subtitle: "Growth Segments",
        idealFor:
            "Medium-sized businesses seeking deeper insights.",
        includes: [
            "Analysis of up to 50,000 customer records",
            "Demographic + behavioral segmentation",
            "Psychographic insights (interests, lifestyle, preferences)",
            "Customer value scoring & priority segment identification",
            "Interactive segmentation dashboard",
            "Two consultation sessions for strategy recommendations",
        ],
        turnaround: "2–3 weeks",
        cardBgColor: "#e9d5ff",
        titleColor: "#3b0764",
    },
    {
        icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
        title: "Premium",
        subtitle: "Strategic Segmentation",
        idealFor:
            "Enterprises aiming to optimize marketing and product strategy.",
        includes: [
            "Analysis of unlimited customer records",
            "Advanced demographic, behavioral, and psychographic segmentation",
            "Predictive analytics for future customer behavior",
            "Segment-specific targeting recommendations",
            "Full interactive dashboard with filters and drill-down capabilities",
            "Detailed report with actionable insights",
            "Up to five consultation sessions for strategic planning",
        ],
        turnaround: "4–6 weeks",
        cardBgColor: "#d8c399",
        titleColor: "#78350f",
    },
];

export default function CustomerSegmentationPackages() {
    return (
        <section className="w-full bg-white py-7 px-4 font-sans text-slate-800">
            <CommonPackages
                title="Customer Segmentation Service – Our Packages"
                description="Unlock the power of your customer data with Pubrica’s customer segmentation services. Turn complex information into clear, actionable insights to drive growth, optimize marketing, and enhance customer engagement."
                packages={packagesData}
            />
            <GetFreeQuoteButton />
        </section>
    );
}