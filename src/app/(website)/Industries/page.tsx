import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/seo/Breadcrumb";

const INDUSTRIES = [
  {
    title: "Medical Device",
    description:
      "We offer a wide range of research services for medical device companies...",
    iconSrc: "/images/industries/hub/Medical-Device.webp",
    href: "/Industries/medical-device",
  },
  {
    title: "Pharmaceutical",
    description:
      "We offer a wide range of research services for the pharmaceutical industry...",
    iconSrc: "/images/industries/hub/Pharmaceutical.webp",
    href: "/Industries/pharmaceutical",
  },
  {
    title: "Generics",
    description:
      "We offer a wide range of research services for the generics pharmaceutical...",
    iconSrc: "/images/industries/hub/Generics.webp",
    href: "/Industries/generics",
  },
  {
    title: "Biosimilar",
    description:
      "We offer a wide range of research services for a biosimilar Research...",
    iconSrc: "/images/industries/hub/Biosimilar.webp",
    href: "/Industries/biosimilar",
  },
  {
    title: "Biotechnology",
    description:
      "We offer a wide range of research services for biotechnology...",
    iconSrc: "/images/industries/hub/Biotechnology-5.webp",
    href: "/Industries/biotechnology",
  },
  {
    title: "Cosmetics",
    description:
      "We offer a wide range of research services for the cosmetic industry...",
    iconSrc: "/images/industries/hub/Cosmetics.webp",
    href: "/Industries/cosmetics",
  },
  {
    title: "Foods and Nutraceuticals",
    description:
      "We offer a wide range of research services for nutraceutical ingredients...",
    iconSrc: "/images/industries/hub/Foods-and-Nutraceuticals-2.webp",
    href: "/Industries/foods-nutraceuticals",
  },
  {
    title: "Cosmeceutical",
    description:
      "We offer a wide range of research services for cosmeceutical industry...",
    iconSrc: "/images/industries/hub/Cosmeceutical-1.webp",
    href: "/Industries/cosmeceutical-research",
  },
  {
    title: "Nutraceutical",
    description:
      "We offer a wide range of research services for nutraceutical industry...",
    iconSrc: "/images/industries/hub/Nutraceutical-1.webp",
    href: "/Industries/nutraceutical-research",
  },
];

export default function IndustryPage() {
  return (
    <>
      <header aria-label="Breadcrumb Navigation" className="bg-white py-2">
        <Breadcrumb items={[{ label: "Industries", href: "/Industries" }]} />
      </header>

      <main className="bg-gray-100 min-h-screen pb-24">
        <section
          className="bg-gradient-to-r from-[#172b26] via-[#1f3831] to-[#172b26] py-16 px-4 border-b border-emerald-900/20"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 text-center rounded-sm backdrop-blur-xs">
            <h1
              id="hero-heading"
              className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-3 font-display"
            >
              End-to-end scientific &amp; medical Industries
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-medium font-sans">
              Gamut of services: Medical Device, Nutraceuticals, Pharmaceutical
              and more...
            </p>
          </div>
        </section>

        <section className="mt-12" aria-label="Our Core Industries">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((industry) => {
                return (
                  <article
                    key={industry.title}
                    className="bg-white rounded-md p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-gray-500/60 flex items-center justify-center p-4 mb-5 group-hover:border-emerald-600 transition-colors relative overflow-hidden">
                      <Image
                        src={industry.iconSrc}
                        alt={`${industry.title} icon`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    <h2 className="text-gray-900 font-bold text-lg mb-3 tracking-tight font-display">
                      {industry.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans flex-grow">
                      {industry.description}
                    </p>

                    <Link
                      href={industry.href}
                      className="text-gray-900 font-bold text-sm tracking-wide border-b-2 border-transparent hover:border-emerald-600 transition-all font-sans"
                    >
                      Read More
                    </Link>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
