"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Tractor,
  Stethoscope,
  Trees,
  Factory,
  BookOpen,
  ChevronRight,
  Award,
  FileText,
} from "lucide-react";
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function AnimalScienceContinuedSections() {
  // --- 1. EMERGING TRENDS DATA ---
  const emergingTrends = [
    {
      id: "plf",
      title: "Precision Livestock Farming (PLF)",
      description:
        "Utilizing sensors, AI, and data analytics to monitor animal health, behavior, and environmental conditions in real-time, enabling predictive management decisions.",
    },
    {
      id: "nutrigenomics",
      title: "Nutrigenomics",
      description:
        "Exploring the relationship between nutrition and gene expression to tailor diets for improved health and productivity.",
    },
    {
      id: "eco-friendly",
      title: "Sustainable and Eco-Friendly Practices",
      description:
        "Development of feed alternatives, waste-to-energy solutions, and carbon footprint reduction strategies in livestock systems.",
    },
    {
      id: "vaccines",
      title: "Vaccines and Biotherapeutics",
      description:
        "Advances in immunology and biotechnology support the development of next-generation vaccines and therapeutics for disease prevention.",
    },
    {
      id: "welfare",
      title: "Animal Welfare Regulations and Certification",
      description:
        "Global demand for ethically produced animal products drives compliance with welfare standards and certification programs.",
    },
  ];

  const [activeTrend, setActiveTrend] = useState(emergingTrends[0]); // Default: PLF

  // --- 2. AREAS OF STUDY DATA ---
  const areasOfStudy = [
    "Poultry Science",
    "Food Processing",
    "Food Science",
    "Cloning",
    "Animal Nutrition",
    "Dairy Science",
    "Farm Animal Breeding",
    "Embryo Technology",
    "Fermentation",
    "Animal Health Sciences",
    "Reproductive Management",
    "Genetics and Animal Breeding",
  ];

  // --- 3. EDITORS DATA ---
  const editors: ExpertEditorItem[] = [
    {
      name: "Warvien",
      degree: "PhD in Animal Science",
      flag: "/images/country/gb.png",
      avatar:
        "/images/subject-matter-experts/animal-science/warvien.png",
      experience: "14 years of experience",
      manuscripts: "100+ manuscripts edited",
    },
    {
      name: "Victor",
      degree: "Masters in Animal Nutrition",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/animal-science/victor.png",
      experience: "8 years of experience",
      manuscripts: "70+ manuscripts edited",
    },
    {
      name: "Karrel",
      degree: "PhD in Animal Science",
      flag: "/images/country/us.png",
      avatar:
        "/images/subject-matter-experts/animal-science/karrel.png",
      experience: "5 years of experience",
      manuscripts: "55+ manuscripts edited",
    },
  ];

  const applications = [
    {
      title: "Agriculture & Livestock Management",
      desc: "Enhancing productivity and sustainability in dairy, poultry, and meat industries.",
      icon: Tractor,
    },
    {
      title: "Veterinary Medicine",
      desc: "Informing disease prevention, treatment, and diagnostics.",
      icon: Stethoscope,
    },
    {
      title: "Wildlife Conservation",
      desc: "Protecting endangered species through research on reproduction, genetics, and behavior.",
      icon: Trees,
    },
    {
      title: "Pharmaceutical and Biotech Industries",
      desc: "Developing vaccines, therapeutics, and animal models for research.",
      icon: Factory,
    },
    {
      title: "Education & Research",
      desc: "Training the next generation of scientists, veterinarians, and animal welfare specialists.",
      icon: BookOpen,
    },
  ];

  const publication: AuthorPublicationData = {
    imageSrc:
      "/images/subject-matter-experts/animal-science/animal.jpg",
    imageAlt: "Journal of Animal Science Cover",
    paperTitle:
      "A primer on sequencing and genotype imputation in cattle",
    author: "Troy N Rowan",
    publisher: "American Society of Animal Science",
    journalName: "Journal of Animal Science",
    impactFactor: "2.9",
  };

  return (
    <div className="w-full bg-[#fcfcfc] font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-20">

        {/* SECTION 1: EMERGING TRENDS */}

        <EmergingTrendsSection
          title="Emerging Trends in Animal Science"
          description="The field of animal science is rapidly evolving due to technological innovations and global challenges:"
          trends={emergingTrends}
          footerText=""
        />

        {/* SECTION 2: APPLICATIONS OF ANIMAL SCIENCE */}
        <ApplicationsSection
          title="Applications of Animal Science"
          description="Animal Science is applied in diverse sectors:"
          applications={applications}
          imageSrc="/images/subject-matter-experts/animal-science/Applications-of-Animal-Science.png"
          imageAlt="Veterinarian examining a rabbit with a stethoscope"
        />
      </div>

      {/* SECTION 3: AREAS OF STUDY (FULL WIDTH BANNER) */}
      <section className="w-full bg-[#0d3630] mt-8 font-['Poppins',sans-serif]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Left Side: Image with Text Overlay */}
          <div className="md:w-5/12 relative min-h-[300px]">
            <Image
              src="/images/subject-matter-experts/animal-science/Empowering-Research-Excellence-in-Animal-Science-through-Expert-Guidance.png"
              alt="Laboratory research with rabbit"
              fill
              className="object-cover"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d3630]/90 to-[#0d3630]/60 p-8 flex items-center">
              <p className="text-white text-sm md:text-base leading-relaxed max-w-sm font-medium">
                Pubrica's team of experts is equipped with the knowledge and experience to assist you in all aspects of animal science research, ensuring your work is accurately represented and reaches the right audience effectively.
              </p>
            </div>
          </div>

          {/* Right Side: Grid of Areas */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left relative inline-block">
              Areas of <span className="underline decoration-2 underline-offset-4 decoration-white">Study</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {areasOfStudy.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-sm py-2.5 px-3 flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-[#0d3630] rounded-full p-0.5 flex-shrink-0">
                    <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-800 truncate">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 space-y-20">
        {/* SECTION 4: WHERE OUR AUTHORS PUBLISH */}
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={publication}
        />

        {/* SECTION 5: OUR EXPERT ANIMAL SCIENCE EDITORS */}
        <ExpertEditorsSection
          title="Our Expert Animal Science Editors"
          description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
          editors={editors}
        />
      </div>
    </div>
  );
}