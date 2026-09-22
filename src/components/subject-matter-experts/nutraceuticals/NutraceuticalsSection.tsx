"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Briefcase,
    FileText,
    HeartPulse,
    Brain,
    Shield,
    Activity,
    Bone,
    Sparkles
} from 'lucide-react';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const emergingTrendsData = [
    {
        id: 'personalized-nutrition',
        title: 'Personalized Nutrition & Nutrigenomics',
        description: 'Tailoring dietary recommendations and nutraceutical interventions based on individual genetic profiles, microbiome analysis, and metabolic needs.'
    },
    {
        id: 'microbiome-health',
        title: 'Microbiome & Gut Health Innovations',
        description: 'Advanced prebiotics, probiotics, synbiotics, and postbiotics aimed at optimizing gut flora and systemic wellness.'
    },
    {
        id: 'plant-based-bioactives',
        title: 'Plant-Based & Botanical Bioactives',
        description: 'Novel extraction techniques to isolate high-purity phytochemicals, polyphenols, and bioactive adaptogens.'
    },
    {
        id: 'nanotechnology-delivery',
        title: 'Nanotechnology for Bioavailability Enhancement',
        description: 'Utilizing liposomes, nano-emulsions, and encapsulation technologies to improve nutrient absorption and stability.'
    },
    {
        id: 'regulatory-compliance',
        title: 'Global Regulatory & Safety Compliance',
        description: 'Navigating EFSA, FDA, and international guidelines for novelty, safety dossiers, and health claim substantiation.'
    },
    {
        id: 'clinical-validation',
        title: 'Clinical Validation & Evidence-Based Formulations',
        description: 'Rigorous double-blind clinical trials to scientifically validate the efficacy and safety of novel nutraceutical ingredients.'
    },
    {
        id: 'clean-label',
        title: 'Clean-Label & Sustainable Sourcing',
        description: 'Consumer-driven demand for organic, non-GMO, sustainably harvested, and transparently labeled ingredient sources.'
    },
    {
        id: 'functional-beverages',
        title: 'Functional Foods & Fortified Beverages',
        description: 'Integrating bioactive compounds seamlessly into everyday food products, snacks, and ready-to-drink formulations.'
    }
];
const applicationsData = [
    {
        title: "Cardiovascular Health",
        desc: "Omega-3 fatty acids, plant sterols, and polyphenols help reduce cholesterol, improve endothelial function, and mitigate the risk of heart disease.",
        icon: HeartPulse,
        iconSrc:
            "/images/subject-matter-experts/nutraceuticals/Cardiovascular-Health.webp",
    },
    {
        title: "Cognitive Function",
        desc: "Nutraceuticals like ginkgo biloba, phosphatidylserine, and DHA support memory, focus, and neuroprotection.",
        icon: Brain,
        iconSrc:
            "/images/subject-matter-experts/nutraceuticals/Cognitive-Function.webp",
    },
    {
        title: "Immune Modulation",
        desc: "Vitamins C and D, zinc, and probiotics enhance immune response and protect against infections.",
        icon: Shield,
        iconSrc:
            "/images/subject-matter-experts/nutraceuticals/Immune-Modulation.webp",
    },
    {
        title: "Metabolic Health",
        desc: "Compounds such as berberine, cinnamon extracts, and chromium contribute to glucose regulation and metabolic syndrome management.",
        icon: Activity,
        iconSrc:
            "/images/subject-matter-experts/nutraceuticals/Metabolic-Health.webp",
    },
    {
        title: "Bone and Joint Health",
        desc: "Calcium, Vitamin D, glucosamine, and chondroitin support skeletal integrity and reduce the risk of osteoporosis.",
        icon: Bone,
        iconSrc:
            "/images/subject-matter-experts/nutraceuticals/Bone-and-Joint-Health.webp",
    },
    {
        title: "Anti-Aging and Skin Health",
        desc: "Antioxidants like coenzyme Q10, resveratrol, and lycopene protect cells from oxidative damage and support skin vitality.",
        icon: Sparkles,
        iconSrc:
            "/images/subject-matter-experts/nutraceuticals/Anti-Aging-and-Skin-Health.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ethan Caldwell",
        degree: "PhD in Nutritional Science",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/subject-matter-experts/nutraceuticals/gb.png",
        avatar:
            "/images/subject-matter-experts/nutraceuticals/Dr.-Michael-Anderson.webp",
    },
    {
        name: "Dr. Priya Mehta",
        degree: "MSc in Food and Nutraceutical Technology",
        experience: "10 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/subject-matter-experts/nutraceuticals/us.png",
        avatar:
            "/images/subject-matter-experts/nutraceuticals/Dr.-Priya-Mehta.webp",
    },
    {
        name: "Dr. Ananya Rao",
        degree: "PhD in Pharmacognosy",
        experience: "11 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/subject-matter-experts/nutraceuticals/us.png",
        avatar:
            "/images/subject-matter-experts/nutraceuticals/Dr.-Ananya-Rao.webp",
    },
];

export default function NutraceuticalsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Applications of Nutraceuticals */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Nutraceuticals"
                    description="Nutraceuticals have a wide range of applications in preventive health, therapeutic support, and overall wellness. Some notable applications include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/nutraceuticals/Applications-of-Nutraceuticals.webp"
                    imageAlt="Applications of Nutraceuticals"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/nutraceuticals/Nutraceuticals.webp",
                    imageAlt: "Nutraceuticals in Immune Function Journal Cover",
                    paperTitle:
                        "Analysis of Osmotic Pump-Administered Xylitol in a Syngeneic Mouse Melanoma Model",
                    author: "Cannon, M., Dempsey, E., Cosantino, A., & Ghoreishi, N",
                    journalName: "Nutraceuticals",
                    publisher: "MDPI",
                    impactFactor: "1.944 (2024)",
                }}
            />

            {/* SECTION: Our Expert Nutraceuticals Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Nutraceuticals Editors"
                    description="Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}