"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";
import HeroBanner from "@/components/common/HeroBanner";

export default function VideoAbstractHero() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* Dark Hero Banner */}
      <HeroBanner
        title="Video Abstract Service: Professionally Crafted, Journal-Compliant Visual Summaries"
        description="Turn your research article into an attractive video abstract that is very appealing, explains the research, generates visibility and reach, and is sustainable for sharing across different platforms."
        headingAs="h1"
      />

      {/* Intro & Overview Section */}
      <section className="pt-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
              Professional Scientific and Academic Video Abstract Service: Visually Present Your Research with Precision and Clarity
            </h2>

            <div className="flow-root">
              {/* Rectangular Image (Matching previous style, non-rounded) */}
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-full max-w-md h-[260px] sm:h-[320px] lg:w-[380px] lg:h-[300px]">
                  {/* Foreground Image */}
                  <div className="absolute top-0 right-0 w-full h-full rounded-lg overflow-hidden z-10">
                    <Image
                      src="/images/publication-support/video-abstract/Video-Abstract-Service.webp"
                      alt="Video Abstract Editing Workspace"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-slate-700">
                <p className="text-base leading-relaxed font-medium">
                  Make an impact with an expert-scripted, journal-compliant video abstract that effectively communicates your findings and increases your visibility on academic platforms.
                </p>

                <p className="text-base leading-relaxed">
                  A Video Abstract is a short, animated video that summarizes the key message of a research output in an audiovisual format. With thousands of research papers being published every day, a powerful{" "}
                  <Link
                    href="/services/publication-support/video-abstract/create-perfect-video-abstract-research-paper"
                    className="text-blue-600 font-medium no-underline hover:no-underline"
                  >
                    video abstract
                  </Link>{" "}
                  for peer-reviewed publications can help your work stand out and reach a wider audience.
                </p>

                <p className="text-base leading-relaxed">
                  To rise above the publication noise, you need a compelling way to share your research.
                </p>

                <p className="text-base leading-relaxed">
                  With our{" "}
                  <Link
                    href="/academy/video-abstract/how-to-create-video-abstract"
                    className="text-blue-600 font-medium no-underline hover:no-underline"
                  >
                    video abstract service
                  </Link>
                  , you can turn your published manuscript into a 2–3 minute video for publication, ready to present in your journal, that visually and succinctly highlights your important findings. Created by experts in scientific communications animation, this brief audiovisual summary is perfect for distributing across academic channels, conferences, and funding pitches to improve visibility, citations, and research impact.
                </p>

                <p className="text-base leading-relaxed">
                  Pubrica converts research into short, engaging video abstracts with journal specifications. Our experts create concise, clear video summaries,{' '}
                  <Link
                    href="/services/publication-support/video-abstract/video-abstracts-enhancing-research-impact/"
                    className="text-blue-600 font-medium no-underline hover:no-underline"
                  >
                    video abstract
                  </Link>{' '}
                  services for scientific research that are intended to promote your research successfully, enhancing visibility and engagement with your research.
                </p>

                <div className="pt-2">
                  <CommonUploadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
