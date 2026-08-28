import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { constructMetadata } from "@/lib/metadata";
import HeroBanner from "@/components/common/HeroBanner";

export const metadata = constructMetadata({
  title: "Industries | Medical Research, Writing, Editing & Publishing",
  description:
    "Explore our expertise in medical research, writing, editing, and publishing services across industries, delivers high-quality solutions for healthcare professionals",
  keywords: ["Industries"],
  slug: "/industries",
});

const INDUSTRIES = [
  {
    title: "Medical Device",
    description:
      "We offer a wide range of research services for medical device companies...",
    iconSrc: "/images/industries/hub/Medical-Device.webp",
    href: "/industries/medical-device",
  },
  {
    title: "Pharmaceutical",
    description:
      "We offer a wide range of research services for the pharmaceutical industry...",
    iconSrc: "/images/industries/hub/Pharmaceutical.webp",
    href: "/industries/pharmaceutical",
  },
  {
    title: "Generics",
    description:
      "We offer a wide range of research services for the generics pharmaceutical...",
    iconSrc: "/images/industries/hub/Generics.webp",
    href: "/industries/generics",
  },
  {
    title: "Biosimilar",
    description:
      "We offer a wide range of research services for a biosimilar Research...",
    iconSrc: "/images/industries/hub/Biosimilar.webp",
    href: "/industries/biosimilar",
  },
  {
    title: "Biotechnology",
    description:
      "We offer a wide range of research services for biotechnology...",
    iconSrc: "/images/industries/hub/Biotechnology-5.webp",
    href: "/industries/biotechnology",
  },
  {
    title: "Cosmetics",
    description:
      "We offer a wide range of research services for the cosmetic industry...",
    iconSrc: "/images/industries/hub/Cosmetics.webp",
    href: "/industries/cosmetics",
  },
  {
    title: "Foods and Nutraceuticals",
    description:
      "We offer a wide range of research services for nutraceutical ingredients...",
    iconSrc: "/images/industries/hub/Foods-and-Nutraceuticals-2.webp",
    href: "/industries/functional-foods-and-nutraceuticals",
  },
  {
    title: "Cosmeceutical",
    description:
      "We offer a wide range of research services for cosmeceutical industry...",
    iconSrc: "/images/industries/hub/Cosmeceutical-1.webp",
    href: "/industries/cosmeceutical-research",
  },
  {
    title: "Nutraceutical",
    description:
      "We offer a wide range of research services for nutraceutical industry...",
    iconSrc: "/images/industries/hub/Nutraceutical-1.webp",
    href: "/industries/nutraceutical-research",
  },
];

export default function IndustryPage() {
  return (
    <>
      <header aria-label="Breadcrumb Navigation" className="bg-white py-2">
        <Breadcrumb items={[{ label: "Industries", href: "/industries" }]} />
      </header>

      <main className="bg-gray-100 min-h-screen pb-10">
        <HeroBanner
          title="End-to-end scientific & medical Industries"
          description="Gamut of services: Medical Device, Nutraceuticals, Pharmaceutical and more..."
          headingAs="h1"
        />

        <section className="mt-12" aria-label="Our Core Industries">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((industry) => {
                return (
                  <article
                    key={industry.title}
                    className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md group border border-transparent hover:border-gray-200"
                  >
                    {/* Clean Icon Container with NO border classes */}
                    <div className="w-24 h-24 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={industry.iconSrc}
                        alt={`${industry.title} icon`}
                        width={96}
                        height={96}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Heading (> 16px) */}
                    <h2 className="text-black font-bold text-xl mb-3 tracking-tight">
                      {industry.title}
                    </h2>

                    {/* Description (Exactly 16px) */}
                    <p className="text-[#666666] text-base leading-relaxed mb-8 flex-grow max-w-xs font-normal">
                      {industry.description}
                    </p>

                    {/* Action Link */}
                    <Link
                      href={industry.href}
                      className="text-black font-bold text-base hover:text-emerald-700 transition-colors inline-block"
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