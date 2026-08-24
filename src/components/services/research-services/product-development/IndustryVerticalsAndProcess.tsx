"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export interface WhoWeServeItem {
  id: string;
  title: string;
  imageUrl: string;
  bullets: React.ReactNode[];
}

export interface IndustryVerticalsAndProcessProps {
  className?: string;
}

export default function IndustryVerticalsAndProcess({
  className = "",
}: IndustryVerticalsAndProcessProps) {
  // Move data inside component using useMemo so React compiles <Link> components properly
  const whoWeServeData: WhoWeServeItem[] = useMemo(
    () => [
      {
        id: "pharma",
        title: "Pharmaceutical Companies",
        imageUrl: "/images/product-development/Pharmaceutical-Companies.png",
        bullets: [
          <span>
            Support for drug discovery, composition of matter analysis, biomarker
            identification, and scientific validation aligned with{" "}
            <Link
              href="https://www.fda.gov"
              className="text-[#38bdf8] font-semibold  hover:text-sky-300 relative z-30 cursor-pointer"
            >
              FDA
            </Link>
            ,{" "}
            <Link
              href="https://www.ema.europa.eu/en/homepage"
              className="text-[#38bdf8] font-semibold  hover:text-sky-300 relative z-30 cursor-pointer"
            >
              EMA
            </Link>
            , and ICMR requirements.
          </span>,
        ],
      },
      {
        id: "nutra",
        title: "Nutraceutical & Dietary Supplement Companies",
        imageUrl:
          "/images/product-development/Nutraceutical-Dietary-Supplement-Companies.png",
        bullets: [
          <span>
            Discovery of bioactive ingredients, clinical literature review,
            ingredient sourcing, and compliance with{" "}
            <Link
              href="https://fssai.gov.in"
              className="text-[#38bdf8] font-semibold  hover:text-sky-300 relative z-30 cursor-pointer"
            >
              FSSAI
            </Link>
            , FDA, and{" "}
            <Link
              href="https://www.efsa.europa.eu/en"
              className="text-[#38bdf8] font-semibold  hover:text-sky-300 relative z-30 cursor-pointer"
            >
              EFSA
            </Link>{" "}
            standards.
          </span>,
        ],
      },
      {
        id: "food-bev",
        title: "Food & Functional Beverage Manufacturers",
        imageUrl:
          "/images/product-development/Food-Functional-Beverage-Manufacturers.png",
        bullets: [
          "Support for functional ingredient research, efficacy data collection, and regulatory evidence for novel foods and health claims.",
        ],
      },
      {
        id: "cosmetics",
        title: "Cosmetics & Personal Care Brands",
        imageUrl:
          "/images/product-development/Cosmetics-Personal-Care-Brands.png",
        bullets: [
          "Ingredient discovery, toxicology intelligence, and mechanism-of-action research to support skin, hair, and oral care formulations aligned with INCI, REACH, and safety assessment standards.",
        ],
      },
      {
        id: "medical-devices",
        title: "Medical Device Manufacturers",
        imageUrl:
          "/images/product-development/Medical-Device-Manufacturers.png",
        bullets: [
          "Scientific support for devices that incorporate biologically active materials, combination products, or require regulatory intelligence around material selection and biocompatibility.",
        ],
      },
      {
        id: "startups",
        title: "Startups & Entrepreneurs",
        imageUrl: "/images/product-development/Startups-Entrepreneurs.png",
        bullets: [
          "Support in identifying novel ingredients, clinical backing, and competitive intelligence for product concept validation and investor documentation.",
        ],
      },
      {
        id: "cros",
        title: "Contract Research Organizations (CROs)",
        imageUrl:
          "/images/product-development/Contract-Research-Organizations-CROs.png",
        bullets: [
          "Scientific content development, target and compound validation, secondary research, and regulatory literature reviews to support sponsors and submissions.",
        ],
      },
      {
        id: "academic",
        title: "Academic Institutions & Research Bodies",
        imageUrl:
          "/images/product-development/Academic-Institutions-Research-Bodies.png",
        bullets: [
          "Collaboration on translational research, technology scouting, and ingredient or compound commercialization through evidence mapping and IP intelligence.",
        ],
      },
      {
        id: "cosmeceutical",
        title: "Cosmeceutical & Derma Companies",
        imageUrl:
          "/images/product-development/Cosmeceutical-Derma-Companies.png",
        bullets: [
          "Scientific evaluation of active ingredients, dermatological evidence collection, and discovery of anti-aging, acne, and skin-repair compounds using clinical and preclinical data.",
        ],
      },
      {
        id: "pet-health",
        title: "Pet Food & Veterinary Health Companies",
        imageUrl:
          "/images/product-development/Pet-Food-Veterinary-Health-Companies.png",
        bullets: [
          "Discovery of safe and effective bioactive herbs and functional ingredients for companion animal health, including clinical support for gut health, joint care, and immune support claims.",
        ],
      },
      {
        id: "biotech",
        title: "Biotechnology Companies",
        imageUrl:
          "/images/product-development/Biotechnology-Companies.png",
        bullets: [
          "Early-stage discovery services, including gene/protein target validation, biomarker discovery, and mechanism insights to accelerate preclinical programs.",
        ],
      },
    ],
    []
  );

  return (
    <section className={`py-16 bg-white border-t border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
            Who We Serve
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            At Pubrica, we provide Core Discovery & Intelligence Services to a
            diverse range of industries and organizations developing
            scientifically grounded, market-ready products. From early-stage
            research to regulatory-aligned discovery documentation, our
            services are tailored to meet the distinct R&D needs of each client
            segment.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeData.map((card) => (
            <div
              key={card.id}
              className="group relative h-64 sm:h-72 rounded-sm overflow-hidden bg-black shadow-md transition-all duration-300"
            >
              {/* Default Image View */}
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-0">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Default Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0 flex items-end">
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black p-5 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-start">
                <h3 className="font-bold text-sm sm:text-base border-b border-gray-700 pb-2 mb-3">
                  {card.title}
                </h3>

                <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="select-none">•</span>
                      <div className="relative z-30 pointer-events-auto">
                        {bullet}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>     
      </div>
    </section>
  );
}