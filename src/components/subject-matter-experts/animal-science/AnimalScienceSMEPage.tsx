"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import Image from "next/image";
import Link from "next/link";
import {
  Dna,
  Wheat,
  HeartPulse,
  Baby,
  ShieldAlert,
  Microscope,
  ChevronUp,
  ChevronDown,
  Search,
  FileText,
  Database,
  Languages,
  PenTool,
  Layout,
  BarChart2,
  BookCheck,
} from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function AnimalScienceSMEPage() {
  // --- 1. CORE DISCIPLINES DATA ---
  // const coreDisciplines = [
  //   {
  //     title: "Genetics and Breeding",
  //     iconSrc: "/images/subject-matter-experts/animal-science/Genetics-and-Breeding.png",
  //     highlight: "Genetics and",
  //     desc: "Understanding heredity and genetic traits allows scientists and farmers to select animals with desirable characteristics. Techniques such as selective breeding, crossbreeding, and genomic selection optimize performance and health, creating resilient herds.",
  //     icon: Dna,
  //   },
  //   {
  //     title: "Nutrition and Feed Technology",
  //     iconSrc: "/images/subject-matter-experts/animal-science/Nutrition-and-Feed-Technology.png",
  //     highlight: "Nutrition and",
  //     desc: "Animals require a balanced diet to grow, reproduce, and stay healthy. Animal nutritionists study feed composition, digestion, and metabolism to develop optimal diets. Specialized feed formulations support growth, lactation, immunity, and reproduction.",
  //     icon: Wheat,
  //   },
  //   {
  //     title: "Physiology and Health Management",
  //     iconSrc: "/images/subject-matter-experts/animal-science/Physiology-and-Health-Management.png",
  //     highlight: "Physiology and",
  //     desc: "Physiology explores how animals’ organs and systems function, influencing growth, reproduction, and productivity. Coupled with veterinary science, it ensures disease prevention, early diagnosis, and effective treatment, maintaining herd health.",
  //     icon: HeartPulse,
  //   },
  //   {
  //     title: "Reproductive Biology",
  //     iconSrc: "/images/subject-matter-experts/animal-science/Reproductive-Biology.png",
  //     highlight: "Reproductive",
  //     desc: "Reproductive science addresses fertility, artificial insemination, embryo transfer, and assisted reproductive technologies. Optimizing reproduction increases productivity, genetic diversity, and herd sustainability.",
  //     icon: Baby,
  //   },
  //   {
  //     title: "Animal Behavior and Welfare",
  //     iconSrc: "/images/subject-matter-experts/animal-science/Animal-Behavior-and-Welfare.png",
  //     highlight: "Animal Behavior",
  //     desc: "Behavioural studies reveal how animals interact with each other and their environment. Proper understanding of behavior enhances welfare, reduces stress, and improves productivity. Ethical treatment and humane practices are central to this discipline.",
  //     icon: ShieldAlert,
  //   },
  //   {
  //     title: "Biotechnology and Emerging Technologies",
  //     iconSrc: "/images/subject-matter-experts/animal-science/Biotechnology-and-Emerging-Technologies.png",
  //     highlight: "Biotechnology and",
  //     desc: "Modern animal science integrates biotechnology for genetic improvement, cloning, transgenic animals, and disease-resistant breeds. Advanced diagnostic tools, bioreactors, and molecular biology techniques are transforming livestock production and healthcare.",
  //     icon: Microscope,
  //   },
  // ];

  // --- 2. WHY CHOOSE / EXPERTISE CARDS (WITH HOVER OVERLAY EFFECT) ---
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
      title: "Data Collection for AI & ML",
      desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
      icon: Database,
      imageUrl:
        "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
      href: "/services/data-analytics-machine-learning/data-collection/",
    },
    {
      title: "Translation Services",
      desc: "Accurate scientific translations to broaden the reach of your research.",
      icon: Languages,
      imageUrl:
        "/images/subject-matter-experts/animal-science/Translation-Services.png",
      href: "/services/editing-and-translation/",
    },
    {
      title: "Artwork Editing",
      desc: "Professional visuals for your figures, tables, and graphical abstracts.",
      icon: PenTool,
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
      title: "Journal Selection",
      desc: "Strategic journal selection to maximize publication success.",
      icon: BookCheck,
      imageUrl:
        "/images/subject-matter-experts/animal-science/Journal-Selection.png",
      href: "/services/publication-support/journal-selection/",
    },
  ];

  const coreDisciplines = [
    {
      title: "Genetics and Breeding",
      iconSrc:
        "/images/subject-matter-experts/animal-science/Genetics-and-Breeding.png",
      highlight: "Genetics and",
      desc: "Understanding heredity and genetic traits allows scientists and farmers to select animals with desirable characteristics. Techniques such as selective breeding, crossbreeding, and genomic selection optimize performance and health, creating resilient herds.",
      icon: Dna,
    },
    {
      title: "Nutrition and Feed Technology",
      iconSrc:
        "/images/subject-matter-experts/animal-science/Nutrition-and-Feed-Technology.png",
      highlight: "Nutrition and",
      desc: "Animals require a balanced diet to grow, reproduce, and stay healthy. Animal nutritionists study feed composition, digestion, and metabolism to develop optimal diets. Specialized feed formulations support growth, lactation, immunity, and reproduction.",
      icon: Wheat,
    },
    {
      title: "Physiology and Health Management",
      iconSrc:
        "/images/subject-matter-experts/animal-science/Physiology-and-Health-Management.png",
      highlight: "Physiology and",
      desc: "Physiology explores how animals’ organs and systems function, influencing growth, reproduction, and productivity. Coupled with veterinary science, it ensures disease prevention, early diagnosis, and effective treatment, maintaining herd health.",
      icon: HeartPulse,
    },
    {
      title: "Reproductive Biology",
      iconSrc:
        "/images/subject-matter-experts/animal-science/Reproductive-Biology.png",
      highlight: "Reproductive",
      desc: "Reproductive science addresses fertility, artificial insemination, embryo transfer, and assisted reproductive technologies. Optimizing reproduction increases productivity, genetic diversity, and herd sustainability.",
      icon: Baby,
    },
    {
      title: "Animal Behavior and Welfare",
      iconSrc:
        "/images/subject-matter-experts/animal-science/Animal-Behavior-and-Welfare.png",
      highlight: "Animal Behavior",
      desc: "Behavioural studies reveal how animals interact with each other and their environment. Proper understanding of behavior enhances welfare, reduces stress, and improves productivity. Ethical treatment and humane practices are central to this discipline.",
      icon: ShieldAlert,
    },
    {
      title: "Biotechnology and Emerging Technologies",
      iconSrc:
        "/images/subject-matter-experts/animal-science/Biotechnology-and-Emerging-Technologies.png",
      highlight: "Biotechnology and",
      desc: "Modern animal science integrates biotechnology for genetic improvement, cloning, transgenic animals, and disease-resistant breeds. Advanced diagnostic tools, bioreactors, and molecular biology techniques are transforming livestock production and healthcare.",
      icon: Microscope,
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
          background: #1e2e2b;
        }
      `}</style>

      {/* HEADER HERO BANNER */}
      <HeroBanner
        title="Animal Science"
        description="Comprehensive research, publication, and editing support for animal science scholars, researchers, and industry professionals, bridging science and sustainable animal production."
        headingAs="h1"
      />

      {/* MAIN CONTENT AREA */}
      <main className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 py-3 space-y-16">
        {/* INTRO & BULLET POINTS SECTION */}
        <section className="pt-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                Empowering Research Excellence in Animal Science through Expert Guidance
              </h2>

              <div className="flow-root">
                {/* Circle Image */}
                <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white mx-auto">
                    <Image
                      src="/images/subject-matter-experts/animal-science/Empowering-Research-Excellence-in-Animal-Science-through-Expert-Guidance.png"
                      alt="Animal Science Researcher with Laboratory Animal"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                    />
                  </div>
                </div>

                <div className="space-y-5 text-slate-700">
                  <p className="text-base leading-relaxed">
                    Animal Science is a multidisciplinary field that explores the biology, care, breeding, nutrition, and management of domestic and wild animals. At Pubrica, we support researchers, academicians, and professionals in producing high-quality manuscripts and projects that contribute to advancements in livestock production, animal health, welfare, and sustainable agriculture.
                  </p>

                  <p className="text-base leading-relaxed">
                    Our expert team, comprising veterinarians, biologists, geneticists, and research editors, provides end-to-end assistance, ensuring that your work meets scientific, ethical, and regulatory standards across global journals and institutions.
                  </p>

                  {/* Bullet List */}
                  <div className="pt-2 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base">
                      Our Expertise in Animal Science Includes
                    </h3>

                    <div className="space-y-4 pl-4">
                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Reproductive Physiology: Advancing techniques in artificial insemination, embryo transfer, and reproductive efficiency.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Dairy, Poultry, and Livestock Management: Improving farming practices for efficiency, quality, and environmental sustainability.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Wildlife and Aquatic Animal Science: Exploring conservation biology and sustainable management of wildlife and aquatic species.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Animal Genetics and Breeding: Enhancing livestock productivity and disease resistance through advanced genetic analysis and breeding strategies.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Animal Nutrition and Feed Science: Research on balanced diet formulation, feed additives, and nutritional optimization for better growth and yield.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Veterinary Medicine and Public Health: Supporting studies on animal diseases, zoonotic infections, vaccination, and preventive healthcare.
                        </p>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">
                          Animal Behavior and Welfare: Promoting ethical care and stress-free environments for animals through behavioural and welfare research.
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

        {/* CORE DISCIPLINES IN ANIMAL SCIENCE */}
        <CoreAreasSection
          title="Core Disciplines In Animal Science"
          description=""
          items={coreDisciplines}
        />

        {/* WHY CHOOSE PUBRICA (8 CARDS GRID WITH HOVER OVERLAY EFFECT) */}
        <CommonExpertiseCards
          title="Why Choose Pubrica for Animal Science Research and Publishing?"
          description="Pubrica is committed to advancing scientific knowledge in Animal Science through high-quality editorial support, research guidance, and publication assistance. Our team of experts ensures accuracy, clarity, and adherence to international research standards. We provide services such:"
          cards={expertiseCards}
        />
      </main>
    </div>
  );
}