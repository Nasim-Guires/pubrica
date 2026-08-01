import React from "react";
import Link from "next/link";
import {
  Activity,
  Pill,
  Dna,
  Syringe,
  Component,
  Sparkles,
  FlameKindling,
  Droplet,
  Leaf,
} from "lucide-react";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/seo/Breadcrumb";

// Industry data gathered directly from the design mockups
const INDUSTRIES = [
  {
    title: "Medical Device",
    description:
      "We offer a wide range of research services for medical device companies...",
    icon: Activity,
    href: "/Industries/medical-device",
  },
  {
    title: "Pharmaceutical",
    description:
      "We offer a wide range of research services for the pharmaceutical industry...",
    icon: Pill,
    href: "/industries/pharmaceutical",
  },
  {
    title: "Generics",
    description:
      "We offer a wide range of research services for the generics pharmaceutical...",
    icon: Dna,
    href: "/industries/generics",
  },
  {
    title: "Biosimilar",
    description:
      "We offer a wide range of research services for a biosimilar Research...",
    icon: Syringe,
    href: "/industries/biosimilar",
  },
  {
    title: "Biotechnology",
    description:
      "We offer a wide range of research services for biotechnology...",
    icon: Component,
    href: "/industries/biotechnology",
  },
  {
    title: "Cosmetics",
    description:
      "We offer a wide range of research services for the cosmetic industry...",
    icon: Sparkles,
    href: "/industries/cosmetics",
  },
  {
    title: "Foods and Nutraceuticals",
    description:
      "We offer a wide range of research services for nutraceutical ingredients...",
    icon: FlameKindling,
    href: "/industries/foods-nutraceuticals",
  },
  {
    title: "Cosmeceutical",
    description:
      "We offer a wide range of research services for cosmeceutical industry...",
    icon: Droplet,
    href: "/industries/cosmeceutical",
  },
  {
    title: "Nutraceutical",
    description:
      "We offer a wide range of research services for nutraceutical industry...",
    icon: Leaf,
    href: "/industries/nutraceutical",
  },
];

export default function IndustryPage() {
  return (
    <>
      {/* Dynamic SEO Structure Elements */}
      <header aria-label="Breadcrumb Navigation" className="bg-white py-2">
        <Breadcrumb items={[{ label: "Industries", href: "/industries" }]} />
      </header>

      <main className="bg-gray-100 min-h-screen pb-24">
        {/* Banner Section with Dark Gradient and Framed Outlined Box */}
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

        {/* 3-Column Industry Grid Layout */}
        <section className="mt-12" aria-label="Our Core Industries">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <article
                    key={industry.title}
                    className="bg-white rounded-md p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md group"
                  >
                    {/* Circle Framed Outline Vector Icon container */}
                    <div className="w-20 h-20 rounded-full border-2 border-gray-500/60 flex items-center justify-center p-4 mb-5 group-hover:border-emerald-600 transition-colors">
                      <IconComponent className="w-10 h-10 text-emerald-600 stroke-[1.5]" />
                    </div>

                    {/* Content Section */}
                    <h2 className="text-gray-900 font-bold text-lg mb-3 tracking-tight font-display">
                      {industry.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans flex-grow">
                      {industry.description}
                    </p>

                    {/* Interactive CTA Link */}
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
