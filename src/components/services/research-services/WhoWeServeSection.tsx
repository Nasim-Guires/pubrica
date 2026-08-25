import React from "react";
import Image from "next/image";

interface SectorItem {
  title: string;
  imageUrl?: string;
  description: string;
}

interface WhoWeServeProps {
  title?: string;
  subtitle?: React.ReactNode;
  sectors?: SectorItem[];
  bannerTitle?: string;
  bannerSubtitle?: string;
}

const DEFAULT_SECTORS: SectorItem[] = [
  {
    title: "Academic Researchers & Universities",
    imageUrl: "/images/research-services/Academic-Researchers-Universities.png",
    description:
      "Supporting faculty, postdoctoral researchers, and graduate students with systematic review writing, meta-analysis, statistical analysis, and manuscript publication to improve the quality, visibility, and impact of scientific work.",
  },
  {
    title: "Pharmaceutical & Biotechnology Companies",
    imageUrl:
      "/images/research-services/Pharmaceutical-Biotechnology-Companies.png",
    description:
      "Providing data-driven research support for drug discovery, pre-clinical & clinical trials, regulatory submissions, and scientific communications.",
  },
  {
    title: "Healthcare Institutions & Hospitals",
    imageUrl:
      "/images/research-services/Healthcare-Institutions-Hospitals.png",
    description:
      "Partnering with clinicians and healthcare professionals to design and analyse studies, publish findings, and improve patient outcomes.",
  },
  {
    title: "Government & Public Health Agencies",
    imageUrl:
      "/images/research-services/Government-Public-Health-Agencies.png",
    description:
      "Delivering evidence-based research, policy briefs, and epidemiological reviews to inform healthcare policies, strengthen health systems, and guide public health interventions.",
  },
  {
    title: "CROs (Contract Research Organizations)",
    imageUrl:
      "/images/research-services/CROs-Contract-Research-Organizations.png",
    description:
      "Offering end-to-end clinical research support, including protocol writing, statistical analysis plans (SAP), systematic reviews, regulatory writing, and journal submission assistance.",
  },
  {
    title:
      "Non-Governmental Organizations (NGOs) & Global Health Organizations",
    imageUrl:
      "/images/research-services/Non-Governmental-Organizations-NGOs-Global-Health-Organizations.png",
    description:
      "Enhancing research capacity, monitoring & evaluation, and scientific communication for health, nutrition, and development programs.",
  },
  {
    title: "Medical Device Companies",
    imageUrl: "/images/research-services/Medical-Device-Companies.png",
    description:
      "Developing clinical evaluation reports (CERs), safety and performance reviews, post-market surveillance literature reviews, and regulatory-compliant submissions.",
  },
  {
    title: "Food, Nutraceutical & Cosmeceutical Companies",
    imageUrl:
      "/images/research-services/Food-Nutraceutical-Cosmeceutical-Companies.png",
    description:
      "Providing scientific evidence gathering, regulatory dossiers, white papers, and publication support to substantiate health claims, product efficacy, and market entry compliance.",
  },
];

export const WhoWeServeSection: React.FC<WhoWeServeProps> = ({
  title = "Who We Serve",
  subtitle = (
    <>
      Our academic research assistance and clinical{" "}
      <a
        href="/services/research-services"
        className="text-[#3b82f6] hover:underline"
      >
        research support services
      </a>{" "}
      cater to a diverse spectrum of professionals and organizations across the
      academic, clinical, and industrial landscape. We provide customized
      support to meet the specific research goals and regulatory needs of each
      client.
    </>
  ),
  sectors = DEFAULT_SECTORS,
  bannerTitle = "Speed up your Research Services with Pubrica",
  bannerSubtitle = "Gain access to your dedicated research expert, guiding you through every stage of your project with precision and clarity.",
}) => {
  return (
    <section className="w-full bg-white font-sans text-[#111827]">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-black aspect-[4/3] cursor-pointer rounded-none"
            >
              {/* Default State: Image background */}
              {sector.imageUrl && (
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}

              {/* Default Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Default View (Title at bottom) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white text-base md:text-[17px] font-bold leading-snug tracking-wide">
                  {sector.title}
                </h3>
              </div>

              {/* Hover View (Solid Black Card with Title & Description) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-start bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-white text-base font-bold mb-3 leading-snug tracking-wide">
                  {sector.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-To-Action Banner */}
      <div className="w-full bg-[#032b1d] text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide">
            {bannerTitle}
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-light tracking-wide">
            {bannerSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
