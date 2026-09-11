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
          <section className="pt-6 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Section heading placed above everything */}
                <div className="mb-5">
                  <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                    Empowering healthcare innovation through advanced Biomedical Engineering research, writing, editing, and publication support.
                  </h2>
                </div>

                <div className="flow-root">
                  {/* Circular Image */}
                  <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                    <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-[350px] lg:w-[350px] rounded-full overflow-hidden shadow-lg border-4 border-gray-100 flex-shrink-0 mx-auto">
                      <Image
                        src="/images/subject-matter-experts/biomedical-engineering/Biomedical-Engineering.webp"
                        alt="Biomedical Research and Healthcare Innovation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-5 text-slate-700">
                    <div className="space-y-5">
                      <p className="text-base leading-relaxed">
                        Biomedical Engineering (BME) is an interdisciplinary field that merges engineering principles with biological sciences to develop technologies that advance healthcare, improve clinical practices, and enhance the quality of patient life. As one of the fastest-growing engineering domains worldwide, BME plays a vital role in designing medical devices, developing diagnostic tools, creating biomaterials, and enabling next-generation therapeutic solutions. The field is driven by innovation, integrating concepts from mechanical engineering, electrical engineering, materials science, computer science, molecular biology, and medicine.
                      </p>

                      <p className="text-base leading-relaxed">
                        BME continues to evolve with rapid advancements in artificial intelligence, robotics, regenerative medicine, nanotechnology, and personalized healthcare. Because of its interdisciplinary nature, scholars and researchers working in this field require clear, precise, and impactful scientific communication.
                      </p>

                      <p className="text-base leading-relaxed">
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}