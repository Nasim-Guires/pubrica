import type { Metadata } from "next";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import Image from "next/image";
import Link from "next/link";
import {
    Cpu,
    Database,
    Network,
    Binary,
    Share2,
    Workflow,
    Sparkles,
    Calculator,
    Layers,
    Search,
    FileText,
    HelpCircle,
    PenTool,
    Image as ImageIcon,
    BookOpen,
    Layout,
    BarChart2,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Algorithm Research & Publication | Subject Matter Experts | Pubrica",
    description:
        "Specialized expertise in algorithm research, development, and publication support for scientists and researchers.",
};

export default function AlgorithmSMEPage() {
    // 1. Core Areas Data (Expanded text to showcase full scrolling)
    const coreAreas = [
        {
            title: "Algorithm Design & Analysis",
            iconSrc: "/images/subject-matter-experts/algorithm/Algorithm-Design-Analysis.webp",
            highlight: "Algorithm Design &",
            desc: "We create efficient algorithms (computational procedures) to solve complicated computer-based problems through the development and evaluation phases.",
            icon: Cpu,
        },
        {
            title: "Data Structure & Optimisation",
            iconSrc: "/images/subject-matter-experts/algorithm/Data-Structure-Optimisation.webp",
            highlight: "Data Structure &",
            desc: "For algorithms to work efficiently, we must create efficient methods for retrieving and storing information/data.",
            icon: Database,
        },
        {
            title: "Computational Complexity",
            iconSrc: "/images/subject-matter-experts/algorithm/Computational-Complexity.webp",
            highlight: "Computational",
            desc: "To determine how efficient algorithms will work, we analyse both time and space complexity.",
            icon: Binary,
        },
        {
            title: "Machine Learning Algorithms",
            iconSrc: "/images/subject-matter-experts/algorithm/Machine-Learning-Algorithms.webp",
            highlight: "Machine Learning",
            desc: "For developing predictive models and/or intelligent agents, we develop and implement machine learning algorithms.",
            icon: Sparkles,
        },
        {
            title: "Network Graph Algorithms",
            iconSrc: "/images/subject-matter-experts/algorithm/Network-Graph-Algorithms.webp",
            highlight: "Network Graph",
            desc: "Algorithms that can solve network-related problems (i.e., routing, connectivity and shortest-path routing-related problems) using graphs.",
            icon: Share2,
        },
        {
            title: "Parallel & Distributed Algorithms",
            iconSrc: "/images/subject-matter-experts/algorithm/Parallel-Distributed-Algorithms.webp",
            highlight: "Parallel & Distributed",
            desc: "Algorithms designed specifically to run on parallel and/or distributed high-performance computing systems.",
            icon: Workflow,
        },
        {
            title: "Heuristic and Metaheuristic Algorithms",
            iconSrc: "/images/subject-matter-experts/algorithm/Heuristic-and-Metaheuristic-Algorithms.webp",
            highlight: "Heuristic and Metaheuristic",
            desc: "For when no definitive solution can be found to a complicated optimisation problem, we use heuristic/approximate methods to provide the best possible solutions.",
            icon: Layers,
        },
        {
            title: "Numerical Algorithm",
            iconSrc: "/images/subject-matter-experts/algorithm/Numerical-Algorithm.webp",
            highlight: "Numerical",
            desc: "We develop algorithms and methods for resolving mathematical issues such as equations, simulations, and optimizations of numerical problems.",
            icon: Calculator,
        },
        {
            title: "Big Data Algorithms",
            iconSrc: "/images/subject-matter-experts/algorithm/Big-Data-Algorithms.webp",
            highlight: "Big Data",
            desc: "We create efficient algorithms for processing and analysing large volumes of data sets.",
            icon: Network,
        },
    ];

    // 2. Expertise Cards Data
    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            icon: Search,
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            icon: FileText,
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports",
            icon: HelpCircle,
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            icon: PenTool,
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            icon: ImageIcon,
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            icon: Layout,
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            icon: BarChart2,
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            icon: BookOpen,
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
            {/* Custom inline styles for cross-browser thin scrollbars */}
            <style>{`
        .card-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .card-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1e2e2b;
        }
      `}</style>

            {/* HERO BANNER SECTION */}
            <header className="w-full bg-[#1e2e2b] text-white py-12 px-4 text-center">
                <div className="max-w-4xl mx-auto border border-gray-500/50 py-8 px-6 bg-[#1a2825]/40 backdrop-blur-sm rounded-sm">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
                        Algorithm
                    </h1>
                    <p className="text-xs md:text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        The discipline of Algorithm combines certain theoretical aspects of
                        Chemistry, Biology and Physics to allow for the ability to have
                        greater control over how molecules behave in various types of
                        technology.
                    </p>
                </div>
            </header>

            {/* MAIN CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {/* INTRO SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1e2e2b] leading-tight">
                            Transforming Complex Problems into Efficient Solutions with
                            Advanced Algorithm
                        </h2>

                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                            <p>
                                The algorithms area of research is undergoing rapid change,
                                owing to the rise in demand for efficient computing,
                                data-oriented business decision-making, and scalable software
                                systems.
                            </p>
                            <p>
                                Each of our services will contribute to the improved quality,
                                accuracy and impact of research-based products throughout the
                                full breadth of algorithms research.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="#quote"
                                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-sm transition-colors duration-150"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/algorithm/Algorithm-1.webp"
                                alt="Algorithm Research Visualization"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* CORE AREAS SECTION WITH ACTIVE INTERNAL SCROLLING */}
                <section className="space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-[#1e2e2b]">
                            Our Core Areas Of Algorithm
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
                            Our company's focus is to utilise our knowledge to drive
                            innovation in three fundamental categories of algorithms:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={coreAreas} />
                </section>

                {/* EXPERTISE GRID WITH HOVER OVERLAY */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-[#1e2e2b]">
                            Our Expertise in Algorithm Research and Publication
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600">
                            At Pubrica, we offer specialised expertise in algorithm research
                            and publication, supporting scientists, researchers, and industry
                            professionals in advancing their work. Our services include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertiseCards.map((card, idx) => {
                            const CardIcon = card.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-300 rounded-none overflow-hidden shadow-sm h-64 cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <div className="relative h-40 w-full bg-gray-100">
                                        <Image
                                            src={card.imageUrl}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Center Circle Icon */}
                                    <div className="absolute top-[8.5rem] left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 rounded-full border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
                                        {(card as any).iconSrc ? <Image src={(card as any).iconSrc} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" /> : <CardIcon className="w-5 h-5 text-[#12433e]" />}
                                    </div>

                                    {/* Sliding White Panel Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 top-36 z-10 bg-white pt-7 pb-3 px-3 flex flex-col items-center justify-start text-center transition-all duration-300 ease-in-out group-hover:top-0 group-hover:pt-20 group-hover:justify-center">
                                        <h3 className="text-xs font-bold text-gray-900 group-hover:text-white group-hover:bg-[#12433e] group-hover:px-4 group-hover:py-1.5 group-hover:rounded-sm transition-all duration-300">
                                            {card.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-500 mt-2 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}