"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Apple,
  Bug,
  Microscope,
  FlaskConical,
  Wrench,
  TrendingUp,
  Dna,
  Trees,
  ChevronUp,
  ChevronDown,
  Layout,
  BookCheck,
  MessageSquare,
  PenTool,
  BarChart2,
  Users,
  FileText,
  Send,
} from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function AgricultureSMEPage() {
  // --- 1. CORE DISCIPLINES DATA (9 CARDS) ---
  const coreDisciplines = [
    {
      title: "Agronomy",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Agronomy.png",
      desc: "It focuses on the science and technology of crop production and soil management. It involves studying crop physiology, soil fertility, irrigation, and sustainable practices to optimize yield while maintaining environmental balance.",
      icon: Sprout,
    },
    {
      title: "Horticulture",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Horticulture.png",
      desc: "Deals with the cultivation of fruits, vegetables, flowers, and ornamental plants. It encompasses plant breeding, pest management, post-harvest technology, and landscape design, emphasizing both productivity and aesthetic value.",
      icon: Apple,
    },
    {
      title: "Plant Pathology",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Plant-Pathology.png",
      desc: "This discipline studies plant diseases caused by pathogens such as fungi, bacteria, viruses, and nematodes. Understanding disease mechanisms and developing effective control strategies is critical for maintaining healthy crops and food security.",
      icon: Microscope,
    },
    {
      title: "Entomology",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Entomology.png",
      desc: "It is the study of insects that affect agriculture, both as pests and beneficial species. Integrated pest management, biological control, and ecological studies help minimize crop losses and support sustainable farming practices.",
      icon: Bug,
    },
    {
      title: "Soil Science",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Soil-Science.png",
      desc: "Explores soil properties, classification, fertility, and conservation. Knowledge of soil chemistry, physics, and biology is essential for sustainable crop production and environmental stewardship.",
      icon: FlaskConical,
    },
    {
      title: "Agricultural Engineering",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Agricultural-Engineering.png",
      desc: "This discipline focuses on mechanization, irrigation systems, post-harvest technology, and sustainable farming infrastructure. Our expertise helps optimize farm efficiency and reduce environmental impact.",
      icon: Wrench,
    },
    {
      title: "Agricultural Economics",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Agricultural-Economics.png",
      desc: "Efficient management of agricultural resources is essential for economic sustainability. We assist in research related to farm management, market analysis, policy planning, and rural development.",
      icon: TrendingUp,
    },
    {
      title: "Agricultural Biotechnology",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Agricultural-Biotechnology.png",
      desc: "It is revolutionizing agriculture through genetic modification, tissue culture, and molecular biology techniques. Pubrica supports innovations aimed at enhancing crop resilience, productivity, and nutritional quality.",
      icon: Dna,
    },
    {
      title: "Agroforestry",
      iconSrc:
        "/images/subject-matter-experts/agriculture/Agroforestry.png",
      desc: "It combines agriculture and forestry to improve biodiversity, soil health, and climate resilience. Agroforestry practices integrate trees, crops, and livestock for sustainable resource use.",
      icon: Trees,
    },
  ];;

  // --- 2. WHY CHOOSE / EXPERTISE CARDS (8 OVERLAY CARDS) ---
  const expertiseCards: ExpertiseCardItem[] = [
    {
      title: "Journal Formatting",
      desc: "Tailored manuscript formatting to meet specific journal guidelines.",
      icon: Layout,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
      href: "/services/publication-support/journal-manuscript-formatting-services/",
    },
    {
      title: "Journal Selection",
      desc: "Guidance on selecting the most appropriate journals for your research.",
      icon: BookCheck,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
      href: "/services/publication-support/journal-selection/",
    },
    {
      title: "Responding to Reviewers",
      desc: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
      icon: MessageSquare,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
      href: "/services/publication-support/responding-to-reviewers/",
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
      title: "Biostatistical Programming",
      desc: "Advanced statistical analysis to support your research findings.",
      icon: BarChart2,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Biostatistical-Programming.webp",
      href: "/services/data-analytics-machine-learning/biostatistical-programming/",
    },
    {
      title: "Peer-Review",
      desc: "Comprehensive review to refine and validate your research pre-submission.",
      icon: Users,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Peer-Review.webp",
      href: "/services/publication-support/peer-review-pre-submission/",
    },
    {
      title: "Editing & Proofreading",
      desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      icon: FileText,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
      href: "/services/editing-and-translation/",
    },
    {
      title: "Journal Submission",
      desc: "Helping select the right journals and manage the submission process seamlessly.",
      icon: Send,
      imageUrl:
        "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
      href: "/services/publication-support/journal-submission/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
      {/* Scrollbar styling for inner card text containers */}
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
          background: #0d3630;
        }
      `}</style>

      {/* HEADER HERO BANNER */}
      <HeroBanner
        title="Agriculture"
        description="Comprehensive research, publication, and editing support for agriculture scholars, researchers, and industry professionals, bridging science and sustainable agricultural practices"
        headingAs="h1"
      />

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
        {/* INTRO & BULLET POINTS SECTION */}
        <section className="pt-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                Empowering Sustainable Agriculture Through Expert Research, Innovation, and Insight.
              </h2>

              <div className="flow-root">
                {/* Circle Image */}
                <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white mx-auto">
                    <Image
                      src="/images/subject-matter-experts/agriculture/Empowering-Sustainable-Agriculture-Through-Expert-Research-Innovation-and-Insight.webp"
                      alt="Agricultural Data Analytics Dashboard on Tablet"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                    />
                  </div>
                </div>

                <div className="space-y-5 text-slate-700">
                  <p className="text-base leading-relaxed">
                    Navigating the complexities of publishing impactful research in agricultural science can be daunting, especially when it involves cutting-edge methodologies and advancements in crop cultivation, soil management, crops or crop rotations, fertilizer applications, pest control or tillage practices, and the rearing of livestock. Researchers in this sector often face challenges in effectively communicating their findings and ensuring their work reaches the right audience with the appropriate and meaningful impact.
                  </p>

                  <p className="text-base leading-relaxed">
                    In response to these challenges, Pubrica offers extensive{" "}
                    <Link href="/services/publication-support/" className="text-blue-600">
                      publication support
                    </Link>{" "}
                    to researchers in the agricultural research community. Our expertise helps bridge the gap between innovation research and its publication in prestigious journals. Whether its drafting full research paper critical reviews,{" "}
                    <Link
                      href="/services/physician-writing-services/case-report-writing/"
                      className="text-blue-600"
                    >
                      case reports
                    </Link>{" "}
                    (case studies based on
                  </p>

                  <p className="text-base leading-relaxed">
                    technological success), Hypotheses (short articles based on published results), debate article (present argument based on scientific basis on debate issues related to agriculture), commentaries, opinions and policy issues, or facilitating the complex submission process, Pubrica ensures that your research is presented compellingly to leading international journals, including those published by prestigious publishers like Springer, Wiley, and Elsevier.
                  </p>

                  {/* Bullet List */}
                  <div className="pt-2 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base">
                      Our Expertise in Agriculture Includes:
                    </h3>

                    <div className="space-y-4 pl-4">
                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-gray-900">Crop Production & Management:</strong>{" "}
                          Advanced practices in sustainable farming, precision agriculture, and high-yield crop cultivation.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-gray-900">Soil Science & Fertility:</strong>{" "}
                          Soil analysis, nutrient management, and organic farming solutions to enhance productivity.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-gray-900">Plant Protection & Pest Management:</strong>{" "}
                          Integrated pest management, disease control, and eco-friendly crop protection strategies.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-gray-900">Agricultural Research & Innovation:</strong>{" "}
                          Cutting-edge research in crop genetics, biotechnology, and modern farming technologies.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-gray-900">Irrigation & Water Management:</strong>{" "}
                          Efficient water use, drip irrigation systems, and sustainable water conservation practices.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          <strong className="text-gray-900">Agri-Business & Market Solutions:</strong>{" "}
                          Strategic planning, market analysis, and value chain development for farmers and agripreneurs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <GetFreeQuoteButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CORE DISCIPLINES IN AGRICULTURE */}
        <CoreAreasSection
          title="Our Core Disciplines In Agriculture"
          description="At Pubrica, we understand that agriculture is a multidisciplinary field that blends science, technology, and practical expertise to enhance food security, sustainability, and rural development. Our expertise spans the core disciplines of agriculture, enabling researchers, scholars, and professionals to advance knowledge and practice in the sector."
          items={coreDisciplines}
        />

        {/* WHY CHOOSE PUBRICA FOR AGRICULTURE RESEARCH */}
        <CommonExpertiseCards
          title="Why Choose Pubrica for Agriculture Research and Publishing?"
          description="Pubrica stands out as a trusted partner for agriculture research and publishing due to its comprehensive, multidisciplinary support tailored to the unique needs of agricultural sciences. Pubrica provides a full spectrum of research support, such as:"
          cards={expertiseCards}
        />
      </main>
    </div>
  );
}