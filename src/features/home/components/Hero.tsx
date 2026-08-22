"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Headphones, Lightbulb } from "lucide-react";
import Container from "@/components/common/Container";

export default function HomeHeroWithAbout() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative text-white mt-[-190px] pt-[210px] pb-[100px] lg:pt-[230px] overflow-visible select-none">
        <Image
          src="/images/home/banner1-min-scaled-8.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Semi-transparent dark green overlay over the image */}
        <div className="absolute inset-0 bg-[#113839] opacity-[0.84]" />

        <Container className="relative z-10 max-w-7xl mx-auto flex flex-col items-center px-4">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.25] text-white text-center max-w-4xl font-display drop-shadow-md">
            Achieving Impactful Results with Pubrica’s Research and Publication
            Support
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base lg:text-[17px] text-gray-200/90 text-center leading-relaxed font-sans mt-6 max-w-4xl font-medium tracking-wide">
            Attain scholarly heights with our merit research services. We
            provide a complete list of research services that include research
            data analysis, publication support, manuscript editing, medical
            communication and original research articles.
          </p>

          {/* Pill Button CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
            <Link
              href="/services/editing-and-translation/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-[#042522] hover:bg-white border border-[#042522] text-white hover:text-[#042522] font-semibold px-8 py-3.5 rounded-full text-[15px] tracking-wide transition-all shadow-inner focus:outline-none cursor-pointer">
                Editing & Translation
              </button>
            </Link>

            <Link
              href="/services/publication-support/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-white hover:bg-[#042522] border border-[#042522] text-[#073632] hover:text-white font-bold px-8 py-3.5 rounded-full text-[15px] tracking-wide transition-all shadow-md focus:outline-none cursor-pointer">
                Publication Support
              </button>
            </Link>
          </div>

          {/* Feature 3D Flipping Cards Grid */}
          {/* Changed -mb to -mb-[180px] so ~70% of the card sits over the white background */}
          <div className="w-full max-w-6xl mx-auto mt-16 z-20 -mb-[180px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Card 1: Solutions Card */}
              <div className="group h-[250px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-[#fcfbf9] rounded-xl p-8 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center text-gray-800 [backface-visibility:hidden]">
                    <div className="h-14 w-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100">
                      <Lightbulb className="h-6 w-6 text-gray-700 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
                      Smart Solutions for Your Research Needs
                    </h3>
                    <p className="text-sm text-gray-600 font-sans mt-2 leading-relaxed">
                      Harness cutting-edge research and publications tools and
                      expertise for optimal results.
                    </p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#073632] rounded-xl p-8 shadow-xl border border-emerald-900/50 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-[15px] font-medium leading-relaxed tracking-wide text-gray-100">
                      We provide innovative solutions tailored to meet your
                      research goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Experience Team Card */}
              <div className="group h-[250px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-[#fcfbf9] rounded-xl p-8 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center text-gray-800 [backface-visibility:hidden]">
                    <div className="h-14 w-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100">
                      <Users className="h-6 w-6 text-gray-700 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
                      Experience Team
                    </h3>
                    <p className="text-sm text-gray-600 font-sans mt-2 leading-relaxed">
                      Our experienced team ensures top-notch quality and support
                      for your projects.
                    </p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#073632] rounded-xl p-8 shadow-xl border border-emerald-900/50 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-[15px] font-medium leading-relaxed tracking-wide text-gray-100">
                      Benefit from the expertise of seasoned SME’s dedicated to
                      your success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Support Card */}
              <div className="group h-[250px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-[#fcfbf9] rounded-xl p-8 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center text-gray-800 [backface-visibility:hidden]">
                    <div className="h-14 w-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100">
                      <Headphones className="h-6 w-6 text-gray-700 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
                      24/7 Customer Support
                    </h3>
                    <p className="text-sm text-gray-600 font-sans mt-2 leading-relaxed">
                      Got questions or need help? Reach out anytime for prompt
                      assistance.
                    </p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#073632] rounded-xl p-8 shadow-xl border border-emerald-900/50 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-[15px] font-medium leading-relaxed tracking-wide text-gray-100">
                      Our team is available around the clock to support your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- ABOUT US SECTION --- */}
      {/* Adjusted padding top (pt-52 lg:pt-56) to ensure clear spacing below the cards */}
      <section className="bg-white pt-28 pb-20 lg:pt-32 lg:pb-8">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative w-full aspect-[865/744] min-h-[280px]">
              <Image
                src="/images/home/1.webp"
                alt="Algorithm Development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Link
                href="/about-us/"
                className="text-sky-600 font-bold text-sm tracking-wider uppercase mb-3 font-sans underline underline-offset-4"
              >
                About Us
              </Link>

              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight leading-[1.3] font-display max-w-2xl">
                With 20+ years of groundbreaking contributions, we assist
                researchers in attaining research success with effectiveness and
                efficiency. We demonstrate proficiency in various fields and
                subfields of medical science with an extensive track record.
              </h2>

              <p className="text-gray-600 text-sm sm:text-base font-sans mt-5 leading-relaxed tracking-wide max-w-3xl">
                Pubrica is your reliable companion that helps you achieve new
                heights in research. Here, we transform your original ideas into
                straightforward reports that are supported by empirical evidence.
              </p>

              <p className="text-gray-600 text-sm sm:text-base font-sans mt-5 leading-relaxed tracking-wide max-w-3xl">
                Our versatile team of researchers and editors works in coordination
                with clinical experts to cross-verify methodologies to ensure
                accurate findings. Using our strong statistical capabilities, we
                derive remarkable outcomes each time.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}