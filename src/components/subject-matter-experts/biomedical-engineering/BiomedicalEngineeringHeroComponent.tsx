"use client";

import React from "react";
import Image from "next/image";

export default function BiomedicalEngineeringHeroComponent() {
  return (
    <div className="font-sans text-gray-800 bg-white py-12 px-4 space-y-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Top Dark Banner */}
        <div className="w-full bg-[#0d3630] rounded-lg px-8 py-10 text-center text-white shadow-md">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Biomedical Engineering
          </h1>

          <p className="mt-3 text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive research, publication, and editing support for biomedical engineers,
            clinicians, and researchers, advancing innovations that integrate engineering
            precision with healthcare solutions.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
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
                This is especially crucial for publishing innovative research, obtaining grants, preparing regulatory documentation, or contributing to the development of new medical technologies. At Pubrica, we provide comprehensive <span className="text-[#0d3630] font-medium">Biomedical Engineering research support</span>, <span className="text-[#0d3630] font-medium">scientific writing services</span>, and <span className="text-[#0d3630] font-medium">publication assistance</span> to help scholars and institutions achieve high-quality outcomes.
              </p>

              {/* Call to Action Button */}
              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-block bg-[#d9381e] hover:bg-[#c23119] text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>

            {/* Circular Image Container matching the layout */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
                <Image
                  src="/images/subject-matter-experts/biomedical-engineering/Biomedical-Engineering.webp"
                  alt="Biomedical Research and Healthcare Innovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}