"use client";

import React from "react";
import Image from "next/image";
import HeroBanner from "@/components/common/HeroBanner";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function BiomedicalEngineeringHeroComponent() {
  return (
    <div className="">
      <HeroBanner
        title="Biomedical Engineering"
        description="Comprehensive research, publication, and editing support for biomedical engineers, clinicians, and researchers, advancing innovations that integrate engineering precision with healthcare solutions."
        headingAs="h1"
      />
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Top Dark Banner */}

        {/* Main Content Section */}
        <div className="space-y-8">
          <section className="max-w-7xl mx-auto px-4 py-4">
            {/* Section heading placed above everything */}
            <div className="space-y-3 max-w-3xl mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#0d3630] leading-snug">
                Empowering healthcare innovation through advanced Biomedical Engineering research, writing, editing, and publication support.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Text Content */}
              <div className="lg:col-span-7 space-y-4 text-xs md:text-sm text-gray-600 leading-relaxed">
                <p>
                  Biomedical Engineering (BME) is an interdisciplinary field that merges engineering principles with biological sciences to develop technologies that advance healthcare, improve clinical practices, and enhance the quality of patient life. As one of the fastest-growing engineering domains worldwide, BME plays a vital role in designing medical devices, developing diagnostic tools, creating biomaterials, and enabling next-generation therapeutic solutions. The field is driven by innovation, integrating concepts from mechanical engineering, electrical engineering, materials science, computer science, molecular biology, and medicine.
                </p>
                <p>
                  BME continues to evolve with rapid advancements in artificial intelligence, robotics, regenerative medicine, nanotechnology, and personalized healthcare. Because of its interdisciplinary nature, scholars and researchers working in this field require clear, precise, and impactful scientific communication.
                </p>
                <p>
                  This is especially crucial for publishing innovative research, obtaining grants, preparing regulatory documentation, or contributing to the development of new medical technologies. At Pubrica, we provide comprehensive{' '}
                  <Link href="/services/research-services/" className="text-blue-600">
                    Biomedical Engineering research support
                  </Link>
                  ,{' '}
                  <Link href="/services/research-services/scientific-writing/" className="text-blue-600">
                    scientific writing services
                  </Link>
                  , and{' '}
                  <Link href="/services/publication-support/" className="text-blue-600">
                    publication assistance
                  </Link>{' '}
                  to help scholars and institutions achieve high-quality outcomes.
                </p>

                {/* Call to Action Button */}
                <div className="pt-2">
                  <GetFreeQuoteButton />
                </div>
              </div>

              {/* Circular Image Container matching the layout */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden shadow-lg border-4 border-gray-100 flex-shrink-0">
                  <Image
                    src="/images/subject-matter-experts/biomedical-engineering/Biomedical-Engineering.webp"
                    alt="Biomedical Research and Healthcare Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </section>
        </div>

      </div>
    </div>
  );
}