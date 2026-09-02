'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';
import Image from 'next/image';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';



const packagesData: PackageItem[] = [
    {
        icon: "/images/editing-and-translation/basic-pacakge.png",
        title: "Basic",
        subtitle: "Foundational Predictive Analysis",
        idealFor:
            "Researchers and small teams starting with predictive analysis.",
        includes: [
            "Data cleaning and preprocessing",
            "Descriptive statistics and initial data exploration",
            "Simple predictive modeling (e.g., linear regression, decision trees)",
            "Basic visualization and reporting",
            "Guidance on interpreting results",
        ],
        turnaround: "1 - 2 weeks",
        cardBgColor: "#dce6e4",
        titleColor: "#1c3a34",
    },
    {
        icon: "/images/publication-support/poster-preparation/S.png",
        title: "Standard",
        subtitle: "Advanced Predictive Modeling",
        idealFor:
            "Mid-sized research projects or business applications.",
        includes: [
            "All features of the Basic Package",
            "Advanced predictive modeling (e.g., logistic regression, random forest, SVM)",
            "Feature selection and dimensionality reduction",
            "Model evaluation and validation",
            "Comprehensive reporting with actionable insights",
        ],
        cardBgColor: "#e5d9eb",
        titleColor: "#3d2352",
    },
    {
        icon:
            "/images/publication-support/peer-review-pre-submission/advanced.webp",
        title: "Advanced",
        subtitle: "Complex Predictive Analytics",
        idealFor:
            "Complex research studies or enterprise-level predictive projects.",
        includes: [
            "All features of the Standard Package",
            "Time-series forecasting and survival analysis",
            "Ensemble modeling and advanced machine learning techniques",
            "Hyperparameter tuning and cross-validation",
            "Publication-ready reports for journals or regulatory compliance",
        ],
        cardBgColor: "#e7d8b8",
        titleColor: "#483818",
    },
    {
        icon:
            "/images/data-analytics-machine-learning/predictive-analytics/C-icons.webp",
        title: "Custom",
        subtitle: "Tailored Predictive Analytics Solutions",
        idealFor:
            "Projects with unique or highly specialized requirements.",
        includes: [
            "Tailored predictive modeling based on your specific objectives",
            "Integration with your existing data systems and workflows",
            "Multi-source data analysis and predictive strategy consultation",
            "End-to-end support from data preparation to final deployment",
        ],
        turnaround: "4+ weeks (project-dependent)",
        cardBgColor: "#fcdede",
        titleColor: "#5c2424",
    },
];

export default function PredictiveAnalyticsPackages() {
    return (
        <section className="py-7 px-4 bg-white font-sans">
            <CommonPackages
                title="Predictive Analytics Service – Our Packages"
                description="At Pubrica, we offer comprehensive Predictive Analytics Services designed to help researchers, healthcare professionals, and businesses make data-driven decisions with confidence. Our packages are structured to cater to diverse needs, from exploratory data analysis to advanced predictive modeling."
                packages={packagesData}
            />
            <GetFreeQuoteButton />
        </section>
    );
}