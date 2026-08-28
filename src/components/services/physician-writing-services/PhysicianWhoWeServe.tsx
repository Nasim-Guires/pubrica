import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AudienceCard {
  title: string;
  imageUrl: string;
}

export const PhysicianWhoWeServe: React.FC = () => {
  const IMG = "/images/physician-writing-services";
  const audiences: AudienceCard[] = [
    {
      title: "Clinicians and Physicians",
      imageUrl: `${IMG}/Clinicians-and-Physicians.jpg`,
    },
    {
      title: "Medical Researchers and Academics",
      imageUrl: `${IMG}/Medical-Researchers-and-Academics.jpg`,
    },
    {
      title: "Hospitals and Healthcare Institutions",
      imageUrl: `${IMG}/Hospitals-and-Healthcare-Institutions.jpg`,
    },
    {
      title: "Pharmaceutical and Biotechnology Companies",
      imageUrl: `${IMG}/Pharmaceutical-and-Biotechnology-Companies.jpg`,
    },
    {
      title: "Contract Research Organizations",
      imageUrl: `${IMG}/Contract-Research-Organizations.jpg`,
    },
    {
      title: "Medical Education Providers",
      imageUrl: `${IMG}/Medical-Education-Providers.jpg`,
    },
    {
      title: "Medical Device and Diagnostics Companies",
      imageUrl: `${IMG}/Medical-Device-and-Diagnostics-Companies.jpg`,
    },
    {
      title: "Healthcare Marketing and MedCom Agencies",
      imageUrl: `${IMG}/Healthcare-Marketing-and-MedCom-Agencies.jpg`,
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-left">
      {/* --- Section: Who We Serve --- */}
      <section className="py-6 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Title Header */}
        <h2 className="text-[#083c4c] text-xl md:text-2xl lg:text-[26px] font-extrabold leading-tight tracking-tight mb-4">
          Who We Serve
        </h2>

        {/* Introduction Context Paragraph */}
        <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-8 max-w-6xl">
          Pubrica's physician writing service supports clinicians from clinical
          content development to{" "}
          <Link href="/services/publication-support/journal-submission" className="text-[#3b82f6] hover:underline">
            journal submission
          </Link>
          , while providing medically accurate, compliant, and publication-ready
          manuscripts.
        </p>

        {/* 8-Column Grid Layout (2 columns mobile, 3 tablet, 4 desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {audiences.map((card, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/3] rounded-sm overflow-hidden group shadow-sm bg-gray-100 border border-gray-100"
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Semi-transparent dark gradient masking to match image references */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Foreground Title Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 z-20">
                <h3 className="text-white text-xs md:text-sm font-bold leading-snug tracking-wide">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section: Dark Green CTA Banner --- */}
      <section className="w-full bg-[#05261e] py-6 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          {/* Main Display Headline */}
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
            Physician Writing Services at Pubrica
          </h2>

          {/* Detailed Paragraph Copy */}
          <p className="text-gray-200 text-xs md:text-sm lg:text-[15px] leading-relaxed max-w-3xl mx-auto font-light">
            Tailored for practicing clinicians, busy physicians, and medical
            researchers, our expert editors ensure your manuscript is
            publication-ready delivering precise editing, scientific clarity,
            and impactful writing that meets the standards of top medical
            journals.
          </p>

          {/* Action Button Trigger */}
          <div className="pt-2">
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>
    </div>
  );
};
