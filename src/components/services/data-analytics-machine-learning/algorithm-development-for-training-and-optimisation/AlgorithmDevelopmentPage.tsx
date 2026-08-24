"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AlgorithmDevelopmentService() {
    // Accordion state for "How We Do" section (null = all closed by default)
    const [openHowWeDo, setOpenHowWeDo] = useState<number | null>(null);

    // Accordion state for "Our Expertise" grid cards
    const [openExpertiseCard, setOpenExpertiseCard] = useState<number | null>(null);

    const toggleHowWeDo = (index: number) => {
        setOpenHowWeDo(openHowWeDo === index ? null : index);
    };

    const toggleExpertiseCard = (index: number) => {
        setOpenExpertiseCard(openExpertiseCard === index ? null : index);
    };

    // Data for "How We Do" Accordions
    const howWeDoItems = [
        {
            title: "Thorough Algorithm Refinement",
            content:
                "Post your initial algorithm development, our service offers a meticulous review to refine and optimize your algorithm for precision and effectiveness. We focus on clarity, coherence, and alignment with market dynamics to ensure impactful performance.",
        },
        {
            title: "Diverse Expertise Coverage",
            content:
                "Our team of healthcare algorithm development experts spans various industries and sectors, guaranteeing that your algorithm not only meets technical standards but also aligns with industry-specific norms and expectations, enhancing its relevance and effectiveness.",
        },
        {
            title: "Readability and Strategic Appeal",
            content:
                "We prioritize enhancing the strategic appeal and readability of your algorithm, ensuring it effectively addresses market nuances and objectives. Our revisions aim to elevate the overall strategic impact and relevance of your algorithmic approach.",
        },
        {
            title: "Quality Assurance Guarantee",
            content:
                "Pubrica’s algorithm development services include a final quality assurance check to seamlessly integrate all refinements, presenting a coherent and polished algorithm ready for implementation.",
        },
        {
            title: "Timely and Dependable Support",
            content:
                "We recognize the importance of timely implementation and offer reliable services to ensure your algorithm progresses smoothly, meeting your strategic objectives and project deadlines.",
        },
    ];

    // Data for "Our Expertise in Custom Algorithm Development" Cards
    const expertiseCards = [
        {
            id: 1,
            title: "AI & Machine Learning Algorithms",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/AI-Machine-Learning-Algorithms.png",
            content:
                "Predictive models for drug discovery, patient outcomes, nutrition science, and life sciences research.",
        },
        {
            id: 2,
            title: "Deep Learning Algorithms",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Deep-Learning-Algorithms.png",
            content:
                "Neural networks for medical imaging, computer vision, face and emotion recognition, video, and speech analysis.",
        },
        {
            id: 3,
            title: "Privacy & Security Algorithms",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Privacy-Security-Algorithms.png",
            content:
                "Safeguarding sensitive research and healthcare data while ensuring compliance with HIPAA, GDPR, and FDA/EMA regulations.",
        },
        {
            id: 4,
            title: "Multi-Objective Optimization",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Multi-Objective-Optimization.png",
            content:
                "Balancing efficiency, accuracy, and cost for scientific and industrial applications.",
        },
        {
            id: 5,
            title: "Text & Web Mining Algorithms",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Text-Web-Mining-Algorithms.png",
            content:
                "Extracting insights from clinical trial data, EHRs, regulatory documents, and scientific literature.",
        },
        {
            id: 6,
            title: "Data Visualization Algorithms",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Data-Visualization-Algorithms.png",
            content:
                "Turning complex datasets into clear, actionable narratives for faster decision-making.",
        },
        {
            id: 7,
            title: "Workflow & Business Logic Models",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Workflow-Business-Logic-Models.png",
            content:
                "Automating processes in healthcare, food R&D, and pharma research to improve efficiency and scalability.",
        },
        {
            id: 8,
            title: "Networking & IoT Algorithms",
            iconSrc: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Networking-IoT-Algorithms.png",
            content:
                "Enabling wireless communication and connectivity for smart medical devices and digital health systems.",
        },
    ];

    return (
        <main className="w-full bg-[#f8fbf9] text-[#222222] font-sans">
            {/* 1. HERO HEADER BANNER SECTION */}
            <section className="bg-[#1b3d36] text-white py-12 px-4 sm:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-[#3b6058] p-8 rounded-lg bg-[#193832]">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-wide mb-4">
                        Algorithm Development for Training and Optimisation
                    </h1>
                    <p className="text-sm md:text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Pubrica specializes in algorithm development for training and
                        optimization. Our expert team ensures robust and efficient
                        algorithms tailored to your specific needs, driving optimal
                        performance in various applications.
                    </p>
                </div>
            </section>

            {/* 2. OVERVIEW & INTRO SECTION */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-4">
                    Custom Algorithm Development for Healthcare, Life Sciences & Beyond
                </h2>
                <p className="text-[#3b6058] font-semibold text-sm md:text-base mb-6">
                    From AI and deep learning to data mining and optimization, Pubrica
                    builds intelligent algorithms that accelerate discovery and improve
                    decision-making.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Text */}
                    <div className="lg:col-span-7 text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                        <p>
                            Healthcare and life science providers face constant challenges in
                            handling vast, complex datasets, ensuring privacy and regulatory
                            compliance, and converting raw information into actionable
                            insights. At Pubrica, we specialize in custom{" "}
                            <a href="#" className="text-teal-700 underline font-medium">
                                algorithm development
                            </a>{" "}
                            for scientific, healthcare, pharma, medical device, food, and
                            nutraceutical applications.
                        </p>
                        <p>
                            Our team of data science experts collaborates with researchers,
                            clinicians, and businesses to design and optimize algorithms that
                            automate workflows, accelerate discovery, and improve
                            decision-making. From model training to fine-tuned optimization,
                            we deliver scalable, real-world-ready solutions including AI,
                            machine learning, and deep learning algorithms for computer
                            vision, speech, text, emotion recognition, and knowledge
                            exploration.
                        </p>

                        {/* Expertise Bullet Points */}
                        <div className="pt-4">
                            <h3 className="text-lg font-bold text-[#1b3d36] mb-3">
                                Pubrica's Expertise
                            </h3>
                            <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm md:text-base">
                                <li>
                                    <strong className="text-gray-900">
                                        Domain-specific focus:
                                    </strong>{" "}
                                    Healthcare, life sciences, pharma, medical devices, food &
                                    nutraceuticals.
                                </li>
                                <li>
                                    <strong className="text-gray-900">
                                        Proven experience:
                                    </strong>{" "}
                                    Over 350+{" "}
                                    <a href="#" className="text-teal-700 underline">
                                        algorithms
                                    </a>{" "}
                                    developed and optimized for global clients.
                                </li>
                                <li>
                                    <strong className="text-gray-900">
                                        Expertise in AI, machine learning, deep learning,
                                        optimization, and data visualization.
                                    </strong>
                                </li>
                                <li>
                                    <strong className="text-gray-900">
                                        End-to-end support:
                                    </strong>{" "}
                                    From design, training, and validation to implementation.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section Image */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="p-2 rounded-2xl w-full max-w-md">
                            <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Algorithm-Development-for-Training-and-Optimisation.webp"
                                    alt="Software developer analyzing code algorithm on multiple monitors"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. "HOW WE DO" ACCORDION SECTION */}
            <section className="max-w-6xl mx-auto py-10 px-4 sm:px-6 md:px-8 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-2">
                    How We Do
                </h2>
                <p className="text-[#3b6058] font-semibold text-sm md:text-base mb-4">
                    Scientific Algorithm Development for Training and Optimization
                </p>
                <p className="text-gray-700 text-sm md:text-base max-w-4xl mb-8 leading-relaxed">
                    At Pubrica, we design, train, and optimize intelligent algorithms that
                    empower researchers, healthcare providers, and businesses to extract
                    actionable insights from complex data. Our end-to-end services ensure
                    that every algorithm is not only accurate but also efficient,
                    scalable, and ready for real-world deployment.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm h-[300px] rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/How-We-Do.png"
                                alt="Healthcare analytics and algorithm development planning"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                    {/* Right Accordion List */}
                    <div className="lg:col-span-7 space-y-3">
                        {howWeDoItems.map((item, index) => {
                            const isOpen = openHowWeDo === index;
                            return (
                                <div
                                    key={index}
                                    className="border-b border-gray-300 pb-3 transition-all"
                                >
                                    <button
                                        onClick={() => toggleHowWeDo(index)}
                                        aria-expanded={isOpen}
                                        className="w-full flex justify-between items-center text-left text-base md:text-lg font-bold text-[#1b3d36] hover:text-teal-700 focus:outline-none"
                                    >
                                        <span>{item.title}</span>
                                        <span className="text-xl font-bold ml-2">
                                            {isOpen ? "-" : "+"}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed pl-1">
                                            {item.content}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Closing Paragraph */}
                <div className="mt-12 text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl">
                    Choose Pubrica for professional and strategic algorithm refinement
                    services that elevate your performance. With our expert guidance and
                    support, your algorithm is poised to maximize efficiency and drive
                    impactful outcomes. Contact us today to explore how we can enhance
                    your algorithmic approach and achieve your strategic objectives.
                </div>
            </section>

            {/* 4. OUR EXPERTISE IN CUSTOM ALGORITHM DEVELOPMENT GRID */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-3">
                    Our Expertise in Custom Algorithm Development
                </h2>
                <p className="text-gray-700 text-sm md:text-base max-w-5xl mb-8 leading-relaxed">
                    We specialize in building domain-specific algorithms that address the
                    unique challenges of scientific research, healthcare, pharma, medical
                    devices, food, and nutraceutical industries. Pubrica's experts design
                    and implement intelligent systems that power innovation and ensure
                    real-world impact:
                </p>

                {/* 2-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertiseCards.map((card) => {
                        const isOpen = openExpertiseCard === card.id;
                        return (
                            <div
                                key={card.id}
                                className="bg-[#edf6f2] rounded-md p-4 transition-all duration-200 hover:shadow-sm"
                            >
                                <button
                                    onClick={() => toggleExpertiseCard(card.id)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between text-left focus:outline-none"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="relative w-8 h-8 shrink-0">
                                            <Image src={card.iconSrc} alt="" fill className="object-contain" />
                                        </span>
                                        <h3 className="text-sm md:text-base font-bold text-[#1b3d36]">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <span className="text-lg font-bold text-[#1b3d36] ml-2">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>

                                {/* Closed by default. Expanded when state matches card.id */}
                                {isOpen && (
                                    <div className="mt-3 pt-3 border-t border-teal-200 text-xs md:text-sm text-gray-700 leading-relaxed">
                                        {card.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}