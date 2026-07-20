import React from "react";

interface SectorItem {
  title: string;
  imageUrl: string;
  description?: string;
}

interface WhoWeServeProps {
  title?: string;
  subtitle?: string;
  sectors?: SectorItem[];
  bannerTitle?: string;
  bannerSubtitle?: string;
}

export const WhoWeServeSection: React.FC<WhoWeServeProps> = ({
  title = "Who We Serve",
  subtitle = "Our academic research assistance and clinical research support services cater to a diverse spectrum of professionals and organizations across the academic, clinical, and industrial landscape. We provide customized support to meet the specific research goals and regulatory needs of each client.",
  sectors = [
    {
      title: "Academic Researchers & Universities",
      imageUrl: "/images/serve-academic.jpg",
    },
    {
      title: "Pharmaceutical & Biotechnology Companies",
      imageUrl: "/images/serve-pharma.jpg",
    },
    {
      title: "Healthcare Institutions & Hospitals",
      imageUrl: "/images/serve-healthcare.jpg",
    },
    {
      title: "Government & Public Health Agencies",
      imageUrl: "/images/serve-government.jpg",
    },
    {
      title: "CROs (Contract Research Organizations)",
      imageUrl: "/images/serve-cro.jpg",
    },
    {
      title:
        "Non-Governmental Organizations (NGOs) & Global Health Organizations",
      imageUrl: "/images/serve-ngo.jpg",
    },
    {
      title: "Medical Device Companies",
      imageUrl: "/images/serve-medical-device.jpg",
    },
    {
      title: "Food, Nutraceutical & Cosmeceutical Companies",
      imageUrl: "",
      description:
        "Providing scientific evidence gathering, regulatory dossiers, white papers, and publication support to substantiate health claims, product efficacy, and market entry compliance.",
    },
  ],
  bannerTitle = "Speed up your Research Services with Pubrica",
  bannerSubtitle = "Gain access to your dedicated research expert, guiding you through every stage of your project with precision and clarity.",
}) => {
  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">
            {subtitle}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sectors.map((sector, index) => {
            // Text-only default fallback card
            if (!sector.imageUrl && sector.description) {
              return (
                <div
                  key={index}
                  className="bg-black text-white p-6 flex flex-col justify-start min-h-[240px]"
                >
                  <h4 className="text-base font-bold mb-4 tracking-wide">
                    {sector.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    {sector.description}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="relative group overflow-hidden min-h-[240px] bg-black flex items-end cursor-pointer"
              >
                {/* Background Image: fades out to 0 opacity on hover to reveal the black parent background */}
                <img
                  src={sector.imageUrl}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />

                {/* Default Dark Bottom Gradient Overlay: also fades away on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Card Title Container: Absolute position handles the slide from bottom-left to top-left */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end group-hover:justify-start transition-all duration-300 ease-in-out">
                  <h4 className="text-white text-base font-bold leading-snug tracking-wide max-w-[90%]">
                    {sector.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Speed Up Call-To-Action Banner */}
      <div className="w-full bg-[#042c1c] text-white py-10 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
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
