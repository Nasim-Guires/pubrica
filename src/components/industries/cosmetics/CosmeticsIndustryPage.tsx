import React from 'react';
import Image from 'next/image';
import HeroBanner from '@/components/common/HeroBanner';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Link from 'next/link';

export default function CosmeticsIndustryPage() {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">
      {/* Hero Banner */}
      <HeroBanner
        title="Cosmetics"
        description="At Pubrica, we empower cosmetic brands with end-to-end scientific, regulatory, and publication support. From skincare to personal care, our expert team ensures your products meet industry standards and gain global recognition."
        headingAs="h1"
      />

      {/* Transforming Ideas into Market-Ready Cosmetic Innovations */}
      <section className="pt-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-5">
              <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                Transforming Ideas into Market-Ready Cosmetic Innovations
              </h2>
            </div>

            <div className="flow-root">
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                  <Image
                    src="/images/industries/cosmetics/Transforming-Ideas-into-Market-Ready-Cosmetic-Innovations.webp"
                    alt="Transforming cosmetic ideas"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 380px"
                  />
                </div>
              </div>

              <div className="space-y-5 text-slate-700">
                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    The cosmetic industry is a fast-evolving sector where science, technology, and consumer trends intersect. From skincare and haircare to personal care <Link href="/services/research-services/product-development/" className='text-blue-600'>products and advanced cosmeceuticals</Link>, brands must balance innovation with safety, regulatory compliance, and effective product positioning. With rising consumer demand for sustainable, clinically proven, and regulatory-compliant products, companies need expert guidance to navigate research, development, and market launch.
                  </p>

                  <p className="text-base leading-relaxed">
                    The cosmetic industry, also known as the cosmetics sector, encompasses all activities and companies involved in the research, development, production, and marketing of products for personal care and beautification. This dynamic and constantly evolving sector is made up of many segments, including skincare, hair care, makeup products, perfumes, and hygiene products.
                  </p>

                  <p className="text-base leading-relaxed">
                    At Pubrica, we provide end-to-end services tailored to cosmetic brands, manufacturers, and research teams. Our expertise helps you streamline R&amp;D, accelerate time-to-market, and ensure compliance with international cosmetic regulations.
                  </p>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <GetFreeQuoteButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise in the Cosmetics Industry Includes */}
      <section className="py-7 bg-gray-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Expertise in the Cosmetics Industry Includes
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
            At Pubrica, we specialize in delivering end-to-end expertise in the cosmetics industry, helping brands innovate, comply, and connect with consumers effectively.
          </p>
        </div>

        {/* Central Graphic with Surrounding Cards Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column Cards (First 3 items) */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Quality Assurance &amp; Compliance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ensuring all products meet international safety standards and regulatory requirements.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Research &amp; Innovation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Staying ahead with the latest cosmetic technologies, natural ingredients, and sustainable practices.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Distribution &amp; Retail Partnerships</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Strategically placing products in retail, e-commerce, and global markets.</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-6 md:my-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white shadow-md overflow-hidden">
              <Image
                src="/images/industries/cosmetics/Our-Expertise-in-the-Cosmetics-Industry-Includes.webp"
                alt="Cosmetic expert"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
                priority
              />
            </div>
          </div>

          {/* Right Column Cards (Remaining 4 items) */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Product Development &amp; Formulation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Creating innovative skincare, haircare, and makeup products tailored to market trends and consumer needs.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Brand Strategy &amp; Marketing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Developing compelling brand identities, packaging designs, and marketing campaigns that resonate with target audiences.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Manufacturing &amp; Supply Chain Management</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Efficient, scalable production with high-quality control and timely delivery.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">Consumer Insights &amp; Trend Analysis</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Understanding evolving beauty trends and consumer preferences to guide product innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetic Segments We Serve */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Cosmetic Segments We Serve
          </h2>
          <p className="text-gray-700 max-w-5xl text-sm md:text-base leading-relaxed">
            At Pubrica, we cater to a diverse range of segments within the cosmetics industry, offering specialized services tailored to each category. Our expertise spans the entire beauty and personal care spectrum, enabling brands to achieve regulatory compliance, market readiness, and consumer trust. Key segments we serve include:
          </p>
        </div>

        {/* Grid Section - 3 Columns Horizontal Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/cosmetics/Skincare-Dermatology.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Skincare &amp; Dermatology
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                We support brands and researchers in developing innovative skincare solutions, dermatological treatments, and cosmeceuticals that prioritize skin health, efficacy, and safety. Our expertise spans product formulation, clinical research, regulatory compliance, and market positioning.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/cosmetics/Haircare-Scalp-Treatments.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Haircare &amp; Scalp Treatments
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                From shampoos and conditioners to advanced scalp therapies, we help companies develop effective haircare products. Our services cover everything from ingredient research and clinical testing to regulatory approvals and product claims validation.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/cosmetics/Makeup-Color-Cosmetics.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Makeup &amp; Color Cosmetics
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                We help makeup and colour cosmetics brands launch high-quality, trend-forward products. Our expertise includes formulation guidance, safety assessments, regulatory compliance, and packaging optimization for various markets.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/cosmetics/Personal-Care-Hygiene.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Personal Care &amp; Hygiene
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                Pubrica supports the development of personal care essentials, including soaps, body washes, oral care, and hygiene products. We ensure these products meet stringent safety, quality, and regulatory standards while aligning with consumer needs.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/cosmetics/Natural-Organic-Sustainable-Beauty.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Natural, Organic &amp; Sustainable Beauty
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                We guide brands in creating eco-friendly and sustainable beauty products. From sourcing natural ingredients to achieving certifications, we help companies develop responsible and innovative products that resonate with conscious consumers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}