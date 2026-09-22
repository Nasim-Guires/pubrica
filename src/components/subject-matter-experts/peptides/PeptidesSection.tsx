"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "vaccine-immunotherapy",
        title: "Vaccine and Immunotherapy Development",
        description:
            "Using Peptides As research progresses on the use of peptide-based vaccines to produce specific antigenic responses, peptide-based vaccines will likely become a more prominent method for developing treatment for infectious disease and cancer due to their applicability to the field of infection control.",
    },
    {
        id: "medication-delivery",
        title: "Medication Delivery Via Peptide-Based",
        description:
            "Nanomedicine Peptide-based nanomedicine is a promising new area of research and could lead to creating advanced drug delivery systems by utilizing peptide/nanoparticle conjugates to allow for greater localization, improved bioavailability/scalable risk reduction via peptide/nanoparticle conjugate applications",
    },
    {
        id: "peptide-protein-interacting",
        title: "Peptide/Protein Interacting Systems",
        description:
            "An improved understanding of peptide/protein interaction models will allow for the creation of peptides to modulate complex cellular networks for the treatment of diseases that affect multiple cell types (e.g., cancer and autoimmune disorders).",
    },
    {
        id: "peptide-biosimilars",
        title: "Development of Peptide Biosimilars",
        description:
            "Due to the expiration of patents, the number of companies developing biosimilars for peptides is growing rapidly. These biosimilars provide similar therapeutic benefits to those produced under the patent, but at significantly lower costs.",
    },
    {
        id: "personalized-medicine",
        title: "Personalized Medicine",
        description:
            "Methods for creating peptide therapeutics is quickly gaining popularity in personalized medicine. Scientists take the genetic profile of a patient, and from this they create peptides specifically designed for that patient. This process substantially increases the accuracy and success of the treatment",
    },
    {
        id: "synthetic-biology",
        title: "Synthetic Biology scientists",
        description:
            "can produce new, engineered peptides that have improved stability, specificity and activity. Engineered peptides can be used as either therapeutic agents or to aid in diagnosis, as they represent an entirely new direction for applications of Peptides outside of their traditionally known uses.",
    },
];

const applicationsData = [
    {
        title: "",
        desc: "Peptide vaccines are an important part of developing vaccines against cancer and infectious diseases by specifically targeting antigens.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Peptide-Vaccines.webp",
    },
    {
        title: "",
        desc: "Diagnostic tools allow for the identification of disease biomarkers through various assays which facilitate diagnosing diseases as well as monitoring their progression.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Diagnostic-Tools.webp",
    },
    {
        title: "",
        desc: "Antimicrobial peptides provide an alternative to antibiotics and can be used to prevent infection and support wound healing.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Antimicrobial-Peptides.webp",
    },
    {
        title: "",
        desc: "Peptide hormones are used to treat metabolic and hormonal disorders such as insulin and human growth hormone.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Peptide-Hormones.webp",
    },
    {
        title: "",
        desc: "Targeted Drug Delivery Peptides have been used to facilitate the delivery of therapeutic agents for higher efficacy and lower toxicity at the site of action.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Targeted-Drug-Delivery-1.webp",
    },
    {
        title: "",
        desc: "Cosmetics and anti-aging agents using peptides stimulate the production of collagen which helps in reducing wrinkles in the skin.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Cosmetics-and-Anti-Aging.webp",
    },
    {
        title: "",
        desc: "Peptide Biosensors can be used to detect pollutants, pathogens, and toxins with quick and accurate monitoring capabilities.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Peptide-Biosensors.webp",
    },
    {
        title: "",
        desc: "Enzyme Inhibitors can be used to control the activity of enzymes in the biological process of disease management.",
        iconSrc:
            "/images/subject-matter-experts/peptides/Enzyme-Inhibitors.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ethan Caldwell",
        degree: "PhD in Nutritional Science",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp",
    },
    {
        name: "Dr. Priya Mehta",
        degree: "MSc in Food and Nutraceutical Technology",
        experience: "10 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/algorithm/Dr.-Ananya-Iyer-1.webp",
    },
    {
        name: "Dr. Ananya Rao",
        degree: "PhD in Pharmacognosy",
        experience: "11 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/medicinal-chemistry/Dr.-Hiroshi-Nakamura.webp",
    },
];

export default function PeptidesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Peptides */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Peptides"
                    description="Peptide research is changing medicine as we know it. Advances in products such as peptide therapies and focused approaches to specific diseases, including cancer and autoimmune diseases, will open new avenues for personalizing medicines further:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Peptides */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Peptides"
                    description="The most effective way to treat diseases such as autoimmunity, cancer, and diabetes is through therapeutic peptides which provide low-side effects and highly targeted therapy."
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/peptides/Applications-of-Peptides.webp"
                    imageAlt="Applications of Peptides"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/peptides/sample-works-13-5.webp",
                    imageAlt: "Journal of Food Composition and Analysis Cover",
                    paperTitle:
                        "Peptide biomarkers identified by LC–MS in processed meats of five animal species",
                    author:
                        "Gui-Ji Wang, Guang-Yun Zhou, Hao-Wei Ren, Yan Xu, Yan Yang, Li-Hai Guo, Ning Liu",
                    journalName: "Journal of Food Composition and Analysis",
                    publisher: "Elsevier",
                    impactFactor: "4.6 (2024)",
                }}
            />
            {/* SECTION: Our Expert Peptides Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Peptides Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}