"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";

export default function VideoAbstractHero() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* Dark Hero Banner */}
      <section className="w-full bg-[#0a1e1c] text-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto border border-slate-600 rounded-sm p-8 md:p-12 text-center bg-[#0d2523]/60 shadow-lg">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Video Abstract Service: Professionally Crafted, Journal-Compliant
            Visual Summaries
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turn your research article into an attractive video abstract that is
            very appealing, explains the research, generates visibility and
            reach, and is sustainable for sharing across different platforms.
          </p>
        </div>
      </section>

      {/* Intro & Overview Section */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4 leading-tight">
          Professional Scientific and Academic Video Abstract Service: Visually
          Present Your Research with Precision and Clarity
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 font-medium">
          Make an impact with an expert-scripted, journal-compliant video
          abstract that effectively communicates your findings and increases
          your visibility on academic platforms.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
            <p>
              A Video Abstract is a short, animated video that summarizes the
              key message of a research output in an audiovisual format. With
              thousands of research papers being published every day, a powerful{" "}
              <Link
                href="/services/publication-support/video-abstract/create-perfect-video-abstract-research-paper"
                className="text-sky-600 hover:underline"
              >
                video abstract
              </Link>{" "}
              for peer-reviewed publications can help your work stand out and
              reach a wider audience.
            </p>

            <p>
              To rise above the publication noise, you need a compelling way to
              share your research.
            </p>

            <p>
              With our{" "}
              <Link
                href="#service-details"
                className="text-sky-600 hover:underline"
              >
                video abstract service
              </Link>
              , you can turn your published manuscript into a 2–3 minute video
              for publication, ready to present in your journal, that visually
              and succinctly highlights your important findings. Created by
              experts in scientific communications animation, this brief
              audiovisual summary is perfect for distributing across academic
              channels, conferences, and funding pitches to improve visibility,
              citations, and research impact.
            </p>

            <p className="pt-2">
              Pubrica converts research into short, engaging video abstracts
              with journal specifications. Our experts create concise, clear
              video summaries, video abstract services for scientific research
              that are intended to promote your research successfully, enhancing
              visibility and engagement with your research.
            </p>
          </div>

          {/* Right Image Graphic */}
          <div className="lg:col-span-5 flex justify-center pt-2">
            <div className="relative w-full max-w-md h-[260px] sm:h-[320px]">
              {/* Dark Green Background Accent Box */}
              <div className="absolute top-3 left-0 w-[95%] h-[95%] bg-[#0c373b] rounded-lg -z-0" />
              {/* Foreground Image */}
              <div className="absolute top-0 right-0 w-[95%] h-[95%] rounded-lg overflow-hidden shadow-lg z-10">
                <Image
                  src="/images/publication-support/video-abstract/Video-Abstract-Service.webp"
                  alt="Video Abstract Editing Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <CommonUploadButton />
        </div>
      </section>
    </div>
  );
}
