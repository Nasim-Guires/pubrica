"use client";

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

export default function AgricultureSMEPage() {
  // --- 1. CORE DISCIPLINES DATA (9 CARDS) ---
  const coreDisciplines = [
    {
      title: "Agronomy",
            iconSrc: "/images/subject-matter-experts/agriculture/Agronomy.png",
      desc: "It focuses on the science and technology of crop production and soil management. It involves studying crop physiology, soil fertility, irrigation, and sustainable practices to optimize yield while maintaining environmental balance.",
      icon: Sprout,
    },
    {
      title: "Horticulture",
            iconSrc: "/images/subject-matter-experts/agriculture/Horticulture.png",
      desc: "Deals with the cultivation of fruits, vegetables, flowers, and ornamental plants. It encompasses plant breeding, pest management, post-harvest technology, and landscape design, emphasizing both productivity and aesthetic value.",
      icon: Apple,
    },
    {
      title: "Plant Pathology",
            iconSrc: "/images/subject-matter-experts/agriculture/Plant-Pathology.png",
      desc: "This discipline studies plant diseases caused by pathogens such as fungi, bacteria, viruses, and nematodes. Understanding disease mechanisms and developing effective control strategies is critical for maintaining healthy crops and food security.",
      icon: Microscope,
    },
    {
      title: "Entomology",
            iconSrc: "/images/subject-matter-experts/agriculture/Entomology.png",
      desc: "It is the study of insects that affect agriculture, both as pests and beneficial species. Integrated pest management, biological control, and ecological studies help minimize crop losses and support sustainable farming practices.",
      icon: Bug,
    },
    {
      title: "Soil Science",
            iconSrc: "/images/subject-matter-experts/agriculture/Agronomy.png",
      desc: "Explores soil properties, classification, fertility, and conservation. Knowledge of soil chemistry, physics, and biology is essential for sustainable crop production and environmental stewardship.",
      icon: FlaskConical,
    },
    {
      title: "Agricultural Engineering",
            iconSrc: "/images/subject-matter-experts/agriculture/Agricultural-Engineering.png",
      desc: "This discipline focuses on mechanization, irrigation systems, post-harvest technology, and sustainable farming infrastructure. Our expertise helps optimize farm efficiency and reduce environmental impact.",
      icon: Wrench,
    },
    {
      title: "Agricultural Economics",
            iconSrc: "/images/subject-matter-experts/agriculture/Agricultural-Economics.png",
      desc: "Efficient management of agricultural resources is essential for economic sustainability. We assist in research related to farm management, market analysis, policy planning, and rural development.",
      icon: TrendingUp,
    },
    {
      title: "Agricultural Biotechnology",
            iconSrc: "/images/subject-matter-experts/agriculture/Agricultural-Biotechnology.png",
      desc: "It is revolutionizing agriculture through genetic modification, tissue culture, and molecular biology techniques. Pubrica supports innovations aimed at enhancing crop resilience, productivity, and nutritional quality.",
      icon: Dna,
    },
    {
      title: "Agroforestry",
            iconSrc: "/images/subject-matter-experts/agriculture/Agroforestry.png",
      desc: "It combines agriculture and forestry to improve biodiversity, soil health, and climate resilience. Agroforestry practices integrate trees, crops, and livestock for sustainable resource use.",
      icon: Trees,
    },
  ];

  // --- 2. WHY CHOOSE / EXPERTISE CARDS (8 OVERLAY CARDS) ---
  const expertiseCards = [
    {
      title: "Journal Formatting",
      desc: "Tailored manuscript formatting to meet specific journal guidelines.",
      icon: Layout,
      imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
    },
    {
      title: "Journal Selection",
      desc: "Guidance on selecting the most appropriate journals for your research.",
      icon: BookCheck,
      imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
    },
    {
      title: "Responding to Reviewers",
      desc: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
      icon: MessageSquare,
      imageUrl: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
    },
    {
      title: "Scientific Writing",
      desc: "Crafting clear, precise, and publication-ready research manuscripts.",
      icon: PenTool,
      imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
    },
    {
      title: "Biostatistical Programming",
      desc: "Advanced statistical analysis to support your research findings.",
      icon: BarChart2,
      imageUrl: "/images/subject-matter-experts/agriculture/Biostatistical-Programming.webp",
    },
    {
      title: "Peer-Review",
      desc: "Comprehensive review to refine and validate your research pre-submission.",
      icon: Users,
      imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
    },
    {
      title: "Editing & Proofreading",
      desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      icon: FileText,
      imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
    },
    {
      title: "Journal Submission",
      desc: "Helping select the right journals and manage the submission process seamlessly.",
      icon: Send,
      imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
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
      <header className="w-full bg-[#0d3630] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-500/40 py-8 px-6 bg-[#0a2c27]/40 backdrop-blur-sm rounded-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Agriculture
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive research, publication, and editing support for agriculture scholars, researchers, and industry professionals, bridging science and sustainable agricultural practices
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* INTRO & BULLET POINTS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight">
              Empowering Sustainable Agriculture Through Expert Research, Innovation, and Insight.
            </h2>

            <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
              <p>
                Navigating the complexities of publishing impactful research in agricultural science can be daunting, especially when it involves cutting-edge methodologies and advancements in crop cultivation, soil management, crops or crop rotations, fertilizer applications, pest control or tillage practices, and the rearing of livestock. Researchers in this sector often face challenges in effectively communicating their findings and ensuring their work reaches the right audience with the appropriate and meaningful impact.
              </p>
              <p>
                In response to these challenges, Pubrica offers extensive <span className="text-[#0d3630] font-semibold underline">publication support</span> to researchers in the agricultural research community. Our expertise helps bridge the gap between innovation research and its publication in prestigious journals. Whether its drafting full research paper critical reviews, case reports (case studies based on technological success), Hypotheses (short articles based on published results), debate article (present argument based on scientific basis on debate issues related to agriculture), commentaries, opinions and policy issues, or facilitating the complex submission process, Pubrica ensures that your research is presented compellingly to leading international journals, including those published by prestigious publishers like Springer, Wiley, and Elsevier.
              </p>
            </div>

            {/* Bullet List */}
            <div className="pt-2 space-y-2.5 text-xs text-gray-700">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                Our Expertise in Agriculture Includes:
              </h3>

              <div className="flex items-start gap-2">
                <span className="text-[#b81c1c] font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Crop Production & Management:</strong> Advanced practices in sustainable farming, precision agriculture, and high-yield crop cultivation.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#b81c1c] font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Soil Science & Fertility:</strong> Soil analysis, nutrient management, and organic farming solutions to enhance productivity.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#b81c1c] font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Plant Protection & Pest Management:</strong> Integrated pest management, disease control, and eco-friendly crop protection strategies.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#b81c1c] font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Agricultural Research & Innovation:</strong> Cutting-edge research in crop genetics, biotechnology, and modern farming technologies.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#b81c1c] font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Irrigation & Water Management:</strong> Efficient water use, drip irrigation systems, and sustainable water conservation practices.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#b81c1c] font-bold shrink-0">→</span>
                <p>
                  <strong className="text-gray-900">Agri-Business & Market Solutions:</strong> Strategic planning, market analysis, and value chain development for farmers and agripreneurs.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#quote"
                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-sm shadow-sm transition-colors duration-150"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Circle Image with Dashboard Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/subject-matter-experts/agriculture/Empowering-Sustainable-Agriculture-Through-Expert-Research-Innovation-and-Insight.webp"
                alt="Agricultural Data Analytics Dashboard on Tablet"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* CORE DISCIPLINES IN AGRICULTURE */}
        <section className="space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0d3630]">
              Our Core Disciplines In Agriculture
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              At Pubrica, we understand that agriculture is a multidisciplinary field that blends science, technology, and practical expertise to enhance food security, sustainability, and rural development. Our expertise spans the core disciplines of agriculture, enabling researchers, scholars, and professionals to advance knowledge and practice in the sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreDisciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex justify-between gap-3 h-44 relative"
                >
                  <div className="flex-1 flex flex-col min-w-0">
                    <h3 className="text-xs font-bold text-gray-900 leading-snug shrink-0 mb-2">
                      {item.title}
                    </h3>

                    {/* Scrollable description box */}
                    <div className="flex-1 overflow-y-auto card-scrollbar pr-2 text-[11px] text-gray-500 leading-relaxed max-h-24">
                      <p>{item.desc}</p>
                    </div>
                  </div>

                  {/* Indicator bar visual column */}
                  <div className="flex flex-col items-center justify-between flex-shrink-0 w-8 border-l border-gray-100 pl-2 pointer-events-none">
                    {(item as any).iconSrc ? <span className="relative w-6 h-6 shrink-0"><Image src={(item as any).iconSrc} alt="" fill className="object-contain" /></span> : <Icon className="w-5 h-5 text-gray-700 shrink-0" />}

                    <div className="flex flex-col items-center justify-between h-20 my-1">
                      <ChevronUp className="w-3 h-3 text-gray-400" />
                      <div className="w-1 flex-1 my-1 bg-gray-200 rounded-full relative overflow-hidden">
                        <div className="absolute top-0 w-full h-1/2 bg-[#0d3630] rounded-full" />
                      </div>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE PUBRICA FOR AGRICULTURE RESEARCH */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#0d3630] flex items-center gap-2">
              <span>Why Choose Pubrica for Agriculture Research and Publishing?</span>
              <span className="h-0.5 w-16 bg-gray-400 inline-block"></span>
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Pubrica stands out as a trusted partner for agriculture research and publishing due to its comprehensive, multidisciplinary support tailored to the unique needs of agricultural sciences. Pubrica provides a full spectrum of research support, such as:
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
                    <CardIcon className="w-5 h-5 text-[#0d3630]" />
                  </div>

                  {/* Sliding Overlay Panel with Hover Effect */}
                  <div className="absolute inset-x-0 bottom-0 top-36 z-10 bg-white pt-7 pb-3 px-3 flex flex-col items-center justify-start text-center transition-all duration-300 ease-in-out group-hover:top-0 group-hover:pt-20 group-hover:justify-center">
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-white group-hover:bg-[#0d3630] group-hover:px-4 group-hover:py-1.5 group-hover:rounded-sm transition-all duration-300">
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