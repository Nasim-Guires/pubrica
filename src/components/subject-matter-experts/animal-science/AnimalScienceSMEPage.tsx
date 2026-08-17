"use client";

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

export default function AnimalScienceSMEPage() {
  // --- 1. CORE DISCIPLINES DATA ---
  const coreDisciplines = [
    {
      title: "Genetics and Breeding",
            iconSrc: "/images/subject-matter-experts/animal-science/Genetics-and-Breeding.png",
      highlight: "Genetics and",
      desc: "Understanding heredity and genetic traits allows scientists and farmers to select animals with desirable characteristics. Techniques such as selective breeding, crossbreeding, and genomic selection optimize performance and health, creating resilient herds.",
      icon: Dna,
    },
    {
      title: "Nutrition and Feed Technology",
            iconSrc: "/images/subject-matter-experts/animal-science/Nutrition-and-Feed-Technology.png",
      highlight: "Nutrition and",
      desc: "Animals require a balanced diet to grow, reproduce, and stay healthy. Animal nutritionists study feed composition, digestion, and metabolism to develop optimal diets. Specialized feed formulations support growth, lactation, immunity, and reproduction.",
      icon: Wheat,
    },
    {
      title: "Physiology and Health Management",
            iconSrc: "/images/subject-matter-experts/animal-science/Physiology-and-Health-Management.png",
      highlight: "Physiology and",
      desc: "Physiology explores how animals’ organs and systems function, influencing growth, reproduction, and productivity. Coupled with veterinary science, it ensures disease prevention, early diagnosis, and effective treatment, maintaining herd health.",
      icon: HeartPulse,
    },
    {
      title: "Reproductive Biology",
            iconSrc: "/images/subject-matter-experts/animal-science/Reproductive-Biology.png",
      highlight: "Reproductive",
      desc: "Reproductive science addresses fertility, artificial insemination, embryo transfer, and assisted reproductive technologies. Optimizing reproduction increases productivity, genetic diversity, and herd sustainability.",
      icon: Baby,
    },
    {
      title: "Animal Behavior and Welfare",
            iconSrc: "/images/subject-matter-experts/animal-science/Animal-Behavior-and-Welfare.png",
      highlight: "Animal Behavior",
      desc: "Behavioural studies reveal how animals interact with each other and their environment. Proper understanding of behavior enhances welfare, reduces stress, and improves productivity. Ethical treatment and humane practices are central to this discipline.",
      icon: ShieldAlert,
    },
    {
      title: "Biotechnology and Emerging Technologies",
            iconSrc: "/images/subject-matter-experts/animal-science/Biotechnology-and-Emerging-Technologies.png",
      highlight: "Biotechnology and",
      desc: "Modern animal science integrates biotechnology for genetic improvement, cloning, transgenic animals, and disease-resistant breeds. Advanced diagnostic tools, bioreactors, and molecular biology techniques are transforming livestock production and healthcare.",
      icon: Microscope,
    },
  ];

  // --- 2. WHY CHOOSE / EXPERTISE CARDS (WITH HOVER OVERLAY EFFECT) ---
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
      title: "Data Collection for AI & ML",
      desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
      icon: Database,
      imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
    },
    {
      title: "Translation Services",
      desc: "Accurate scientific translations to broaden the reach of your research.",
      icon: Languages,
      imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
    },
    {
      title: "Artwork Editing",
      desc: "Professional visuals for your figures, tables, and graphical abstracts.",
      icon: PenTool,
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
      title: "Journal Selection",
      desc: "Strategic journal selection to maximize publication success.",
      icon: BookCheck,
      imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
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
      <header className="w-full bg-[#1e2e2b] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-500/50 py-8 px-6 bg-[#1a2825]/40 backdrop-blur-sm rounded-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Animal Science
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive research, publication, and editing support for animal science scholars, researchers, and industry professionals, bridging science and sustainable animal production.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* INTRO & BULLET POINTS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e2e2b] leading-tight">
              Empowering Research Excellence in Animal Science through Expert Guidance
            </h2>

            <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
              <p>
                Animal Science is a multidisciplinary field that explores the biology, care, breeding, nutrition, and management of domestic and wild animals. At Pubrica, we support researchers, academicians, and professionals in producing high-quality manuscripts and projects that contribute to advancements in livestock production, animal health, welfare, and sustainable agriculture.
              </p>
              <p>
                Our expert team, comprising veterinarians, biologists, geneticists, and research editors, provides end-to-end assistance, ensuring that your work meets scientific, ethical, and regulatory standards across global journals and institutions.
              </p>
            </div>

            {/* Bullet List */}
            <div className="pt-2 space-y-2.5 text-xs text-gray-700">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                Our Expertise in Animal Science Includes
              </h3>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Reproductive Physiology:</strong> Advancing techniques in artificial insemination, embryo transfer, and reproductive efficiency.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Dairy, Poultry, and Livestock Management:</strong> Improving farming practices for efficiency, quality, and environmental sustainability.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Wildlife and Aquatic Animal Science:</strong> Exploring conservation biology and sustainable management of wildlife and aquatic species.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Animal Genetics and Breeding:</strong> Enhancing livestock productivity and disease resistance through advanced genetic analysis and breeding strategies.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Animal Nutrition and Feed Science:</strong> Research on balanced diet formulation, feed additives, and nutritional optimization for better growth and yield.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Veterinary Medicine and Public Health:</strong> Supporting studies on animal diseases, zoonotic infections, vaccination, and preventive healthcare.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Animal Behavior and Welfare:</strong> Promoting ethical care and stress-free environments for animals through behavioural and welfare research.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#quote"
                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-sm transition-colors duration-150"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Circle Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/subject-matter-experts/animal-science/Empowering-Research-Excellence-in-Animal-Science-through-Expert-Guidance.png"
                alt="Animal Science Researcher with Laboratory Animal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* CORE DISCIPLINES IN ANIMAL SCIENCE */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-[#1e2e2b]">
              Core Disciplines In Animal Science
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreDisciplines.map((item, index) => {
              const Icon = item.icon;
              const restTitle = item.title.slice(item.highlight.length).trim();
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex justify-between gap-3 h-48 relative"
                >
                  <div className="flex-1 flex flex-col min-w-0">
                    <h3 className="text-xs font-bold text-gray-900 leading-snug shrink-0 mb-2">
                      <span className="text-[#b81c1c]">{item.highlight} </span>
                      {restTitle}
                    </h3>

                    {/* Scrollable description box */}
                    <div className="flex-1 overflow-y-auto card-scrollbar pr-2 text-[11px] text-gray-500 leading-relaxed max-h-28">
                      <p>{item.desc}</p>
                    </div>
                  </div>

                  {/* Indicator bar visual column */}
                  <div className="flex flex-col items-center justify-between flex-shrink-0 w-8 border-l border-gray-100 pl-2 pointer-events-none">
                    {(item as any).iconSrc ? <Image src={(item as any).iconSrc} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" /> : <Icon className="w-5 h-5 text-gray-700 shrink-0" />}

                    <div className="flex flex-col items-center justify-between h-24 my-1">
                      <ChevronUp className="w-3 h-3 text-gray-400" />
                      <div className="w-1 flex-1 my-1 bg-gray-200 rounded-full relative overflow-hidden">
                        <div className="absolute top-0 w-full h-1/2 bg-gray-800 rounded-full" />
                      </div>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE PUBRICA (8 CARDS GRID WITH HOVER OVERLAY EFFECT) */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1e2e2b] flex items-center gap-2">
              <span>Why Choose Pubrica for Animal Science Research and Publishing?</span>
              <span className="h-0.5 w-16 bg-gray-400 inline-block"></span>
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Pubrica is committed to advancing scientific knowledge in Animal Science through high-quality editorial support, research guidance, and publication assistance. Our team of experts ensures accuracy, clarity, and adherence to international research standards. We provide services such:
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
                  {/* Card Header Background Image */}
                  <div className="relative h-40 w-full bg-gray-100">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Center Circular Icon */}
                  <div className="absolute top-[8.5rem] left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 rounded-full border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {(card as any).iconSrc ? <Image src={(card as any).iconSrc} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" /> : <CardIcon className="w-5 h-5 text-[#12433e]" />}
                  </div>

                  {/* Sliding Overlay Panel with Hover Effect */}
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