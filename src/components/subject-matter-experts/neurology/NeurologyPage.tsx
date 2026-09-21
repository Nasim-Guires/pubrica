"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    TrendingUp,
    FileText,
    Database,
    ShieldAlert,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    BookOpen,
    UserCheck,
    Wrench
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function NeurologyPage() {
    const disciplines = [
        {
            title: "Clinical Neurology",
            iconSrc: "/images/subject-matter-experts/neurology/Clinical-Neurology.webp",
            description: (
                <>
                    It focuses on diagnosing and managing neurological disorders affecting the brain, spinal cord, peripheral nerves, and muscles. Our team assists researchers and clinicians in developing evidence-based manuscripts, clinical case studies, and{" "}
                    <Link
                        href="/services/research-services/systematic-review/"
                        className="text-blue-600 "
                    >
                        systematic reviews
                    </Link>{" "}
                    related to stroke, epilepsy, multiple sclerosis, migraine, and other neurological conditions.
                </>
            ),
            icon: Search,
        },
        {
            title: "Cognitive and Behavioural Neurology",
            iconSrc: "/images/subject-matter-experts/neurology/Cognitive-and-Behavioural-Neurology.webp",
            description: "This discipline explores the relationship between brain function and behavior. Our experts support studies involving memory disorders, dementia, Alzheimer’s disease, Parkinson’s disease with cognitive symptoms, and neuropsychiatric syndromes.",
            icon: TrendingUp,
        },
        {
            title: "Neurophysiology",
            iconSrc: "/images/subject-matter-experts/neurology/Neurophysiology.webp",
            description: "It delves into the electrical activity of the nervous system. Our editorial and analytical services in this area include manuscripts on EEG, EMG, and nerve conduction studies, as well as advanced research on synaptic transmission and neuronal communication.",
            icon: FileText,
        },
        {
            title: "Neuroimaging and Neurodiagnostic",
            iconSrc: "/images/subject-matter-experts/neurology/Neuroimaging-and-Neurodiagnostic.webp",
            description: "Modern neurology relies heavily on imaging modalities such as MRI, CT, PET, and fMRI. Our experts provide end-to-end assistance in neuroimaging research, from study design and data analysis to image interpretation and publication writing.",
            icon: Database,
        },
        {
            title: "Neurogenetics and Molecular Neurology",
            iconSrc: "/images/subject-matter-experts/animal-science/Animal-Behavior-and-Welfare.png",
            description: (
                <>
                    This rapidly advancing field examines the genetic and molecular basis of neurological disorders. Our specialists offer{" "}
                    <Link
                        href="#"
                        className="text-blue-600 "
                    >
                        neurology writing services
                    </Link>{" "}
                    and analytical support for studies on gene mutations, hereditary neuropathies, neurodevelopmental disorders, and molecular pathways involved in neurodegeneration.
                </>
            ),
            icon: ShieldAlert,
        },
        {
            title: "Paediatric Neurology",
            iconSrc: "/images/subject-matter-experts/neurology/Paediatric-Neurology.webp",
            description: "They focus on neurological disorders in infants, children, and adolescents. Our editorial team assists with manuscripts addressing epilepsy, cerebral palsy, neurodevelopmental delays, congenital anomalies, and paediatric movement disorders.",
            icon: Layers,
        },
        {
            title: "Neuromuscular Disorders",
            iconSrc: "/images/subject-matter-experts/neurology/Neuromuscular-Disorder.webp",
            description: "It focuses on diseases affecting the motor neurons, peripheral nerves, neuromuscular junctions, and muscles. We assist in writing and reviewing content on conditions such as amyotrophic lateral sclerosis (ALS), muscular dystrophies, and peripheral neuropathies.",
            icon: BookOpen,
        },
        {
            title: "Neurocritical Care",
            iconSrc: "/images/subject-matter-experts/neurology/Neurocritical-Care.webp",
            description: "This discipline addresses life-threatening neurological and neurosurgical emergencies. Our team supports projects involving traumatic brain injury, intracerebral haemorrhage, ischemic stroke, and neurointensive care research.",
            icon: BarChart3,
        },
        {
            title: "Neurorehabilitation",
            iconSrc: "/images/subject-matter-experts/neurology/Neurorehabilitation.webp",
            description: "It aims to restore function and improve the quality of life for patients with neurological impairments. Our writers and clinicians collaborate to prepare reviews, clinical reports, and rehabilitation research manuscripts emphasizing evidence-based interventions, physiotherapy, and cognitive training outcomes.",
            icon: FileSearch,
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: FileSearch,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: BookOpen,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: UserCheck,
        },
        // {
        //     title: "Journal Selection",
        //     desc: "Strategic journal selection to maximize publication success.",
        //     href: "/services/publication-support/journal-selection",
        //     imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
        //     icon: UserCheck,
        // },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Transforming Nutraceutical Research Into High-Impact Scientific Publications"
                description="From functional foods to bioactive supplements, we support researchers, manufacturers, and healthcare innovators in presenting reliable, regulatory-compliant, and publication-ready nutraceutical research."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering discoveries in Neurology through expert writing, editing, and publication support.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/neurology/Neurology.webp"
                                        alt="Neurology research visualization"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Neurology is the branch of medicine that focuses on the diagnosis and treatment of disorders related to the nervous system, including the brain, spinal cord, and peripheral nerves. It is a rapidly advancing field that bridges clinical medicine and{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            neuroscience research
                                        </Link>
                                        , aiming to understand and treat conditions that affect millions worldwide, from stroke, epilepsy, and Parkinson&apos;s disease to Alzheimer&apos;s, multiple sclerosis, and neuromuscular disorders. At Pubrica, we provide comprehensive neurology research support,{" "}
                                        <Link href="/services/research-services/scientific-writing/" className="text-blue-600 no-underline">
                                            scientific writing services
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/" className="text-blue-600 no-underline">
                                            neurology publication assistance
                                        </Link>{" "}
                                        to help researchers, clinicians, and academicians successfully communicate their findings in{" "}
                                        <Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide/" className="text-blue-600 no-underline">
                                            high-impact neurology journals
                                        </Link>
                                        .
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <GetFreeQuoteButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Disciplines In Nutraceuticals
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            At Pubrica, our Neurology division encompasses a wide spectrum of specialized disciplines dedicated to understanding, diagnosing, and treating disorders of the nervous system. Our experts collaborate with clinicians, researchers, and academicians to deliver high-quality scientific, editorial, and analytical support across every subfield of neurology.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Neurology Research and Publication"
                    description="At Pubrica, we understand that publishing in high-impact neurology journals requires more than clinical data; it demands clear scientific communication, accurate methodology, and rigorous analysis. Our neurology research support services are designed to meet these exact needs through:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}