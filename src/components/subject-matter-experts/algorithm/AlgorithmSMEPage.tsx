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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

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
            iconSrc:
                "/images/subject-matter-experts/algorithm/Algorithm-Design-Analysis.webp",
            highlight: "Algorithm Design &",
            desc: "We create efficient algorithms (computational procedures) to solve complicated computer-based problems through the development and evaluation phases.",
            icon: Cpu,
        },
        {
            title: "Data Structure & Optimisation",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Data-Structure-Optimisation.webp",
            highlight: "Data Structure &",
            desc: "For algorithms to work efficiently, we must create efficient methods for retrieving and storing information/data.",
            icon: Database,
        },
        {
            title: "Computational Complexity",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Computational-Complexity.webp",
            highlight: "Computational",
            desc: "To determine how efficient algorithms will work, we analyse both time and space complexity.",
            icon: Binary,
        },
        {
            title: "Machine Learning Algorithms",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Machine-Learning-Algorithms.webp",
            highlight: "Machine Learning",
            desc: "For developing predictive models and/or intelligent agents, we develop and implement machine learning algorithms.",
            icon: Sparkles,
        },
        {
            title: "Network Graph Algorithms",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Network-Graph-Algorithms.webp",
            highlight: "Network Graph",
            desc: "Algorithms that can solve network-related problems (i.e., routing, connectivity and shortest-path routing-related problems) using graphs.",
            icon: Share2,
        },
        {
            title: "Parallel & Distributed Algorithms",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Parallel-Distributed-Algorithms.webp",
            highlight: "Parallel & Distributed",
            desc: "Algorithms designed specifically to run on parallel and/or distributed high-performance computing systems.",
            icon: Workflow,
        },
        {
            title: "Heuristic and Metaheuristic Algorithms",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Heuristic-and-Metaheuristic-Algorithms.webp",
            highlight: "Heuristic and Metaheuristic",
            desc: "For when no definitive solution can be found to a complicated optimisation problem, we use heuristic/approximate methods to provide the best possible solutions.",
            icon: Layers,
        },
        {
            title: "Numerical Algorithm",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Numerical-Algorithm.webp",
            highlight: "Numerical",
            desc: "We develop algorithms and methods for resolving mathematical issues such as equations, simulations, and optimizations of numerical problems.",
            icon: Calculator,
        },
        {
            title: "Big Data Algorithms",
            iconSrc:
                "/images/subject-matter-experts/algorithm/Big-Data-Algorithms.webp",
            highlight: "Big Data",
            desc: "We create efficient algorithms for processing and analysing large volumes of data sets.",
            icon: Network,
        },
    ];

    // 2. Expertise Cards Data with Navigation URLs
    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            icon: Search,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Research-Services.png",
            href: "/services/research-services/",
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            icon: FileText,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            href: "/services/editing-and-translation/",
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports",
            icon: HelpCircle,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            href: "/services/publication-support/",
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            icon: PenTool,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            href: "/services/research-services/scientific-writing/",
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            icon: ImageIcon,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            href: "/services/publication-support/art-work-preparation/",
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            icon: Layout,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            icon: BarChart2,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            href: "/services/research-impact/graphical-abstract/",
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            icon: BookOpen,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            href: "/services/research-services/literature-review-and-gap/",
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
            <HeroBanner
                title="Algorithm"
                description="The discipline of Algorithm combines certain theoretical aspects of Chemistry, Biology and Physics to allow for the ability to have greater control over how molecules behave in various types of technology."
                headingAs="h1"
            />
            {/* MAIN CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
                {/* INTRO SECTION */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e2e2b] leading-tight">
                            Transforming Complex Problems into Efficient Solutions with Advanced Algorithm
                        </h2>

                        <div className="flow-root">
                            {/* Right-Floated Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
                                <div className="relative w-full max-w-md aspect-square overflow-hidden">
                                    <Image
                                        src="/images/subject-matter-experts/algorithm/Algorithm-1.webp"
                                        alt="Algorithm Research Visualization"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 28rem"
                                    />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                                <p>
                                    The algorithms area of research is undergoing rapid change, owing to the rise in demand for efficient computing, data-oriented business decision-making, and scalable software systems. In order to foster the growth of these new trends, Pubrica provides or will provide enhanced services for algorithm researchers, including: design; testing algorithms for execution and optimization; and offering complete solutions for computer scientists, engineers and other practitioners in an academic environment.
                                </p>

                                <p>
                                    Each of our services will contribute to the improved quality, accuracy and impact of research-based products throughout the full breadth of algorithms research. Algorithm employs algorithm concepts such as: algorithm design; data structures; computational complexity; and applied computing to create optimal methods for solving computational problems. By employing engineering principles to problem-solving techniques, optimization techniques for problem solving, data handling methods, and system performance, research can develop representations of the algorithmic problem space.
                                </p>

                                <p>
                                    Among the various engineering principles employed are mathematical models; complexity evaluation; heuristic methods; and algorithm optimisation methods, to allow researchers to address the requirements associated with solving difficult computational problems.
                                </p>

                                <p>
                                    Research projects in computational algorithms develop the basis for researchers to use advanced predictive and analytical tools to emulate problems, to analyse the effectiveness of their solution and to quantify the effectiveness of their solution.
                                </p>

                                <div className="pt-2">
                                    <GetFreeQuoteButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* CORE AREAS SECTION WITH ACTIVE INTERNAL SCROLLING */}
                <CoreAreasSection
                    title="Our Core Areas Of Algorithm"
                    description="Our company's focus is to utilise our knowledge to drive innovation in three fundamental categories of algorithms:"
                    items={coreAreas}
                />

                {/* EXPERTISE GRID WITH HOVER OVERLAY */}
                <CommonExpertiseCards
                    title="Our Expertise in Algorithm Research and Publication"
                    description="At Pubrica, we offer specialised expertise in algorithm research and publication, supporting scientists, researchers, and industry professionals in advancing their work. Our services include:"
                    cards={expertiseCards}
                />
            </main>
        </div>
    );
}