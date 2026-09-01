"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

export const PostEditingOverview: React.FC = () => {
  const bulletPoints = [
    {
      title: "Comprehensive Manuscript Refinement",
      description:
        "After you’ve revised your manuscript, our post-editing process involves a thorough review to refine the content for clarity, flow, and impact. We address any remaining issues related to language, structure, and presentation.",
    },
    {
      title: "Expertise in Diverse Disciplines",
      description:
        "Our team of editors has expertise across a wide range of disciplines, ensuring that your manuscript is not only linguistically accurate but also adheres to disciplinary norms and expectations.",
    },
    {
      title: "Enhancement of Revised Content",
      description:
        "We focus on enhancing the readability and scholarly appeal of your manuscript, ensuring that the revisions effectively address peer reviewer comments and enhance the overall argument or contribution of your work.",
    },
    {
      title: "Final Quality Assurance",
      description:
        "Pubrica’s post-editing services include a final quality check to ensure that all modifications are seamlessly integrated and that the manuscript presents a coherent and polished piece ready for submission or publication.",
    },
    {
      title: "Timely and Reliable Service",
      description:
        "We understand the importance of meeting publication deadlines and provide timely services to ensure that your manuscript progresses smoothly through the final stages of preparation.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      {/* 1. Dark Banner Header */}
      <HeroBanner
        title="Post Editing Service"
        description="Pubrica’s Post Editing Service ensures polished, error-free content, enhancing clarity and coherence. From academic papers to business documents, our expert editors refine your work for professional presentation."
        headingAs="h1"
      />

      {/* 2. Overview Section with Image Grid */}
      <section className="w-full py-6 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-4">
          Perfect Your Manuscript With Pubrica’s Post Editing Service
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-4">
          Writing may be complete, but refining your work is essential. With our
          expert post-editing, we ensure your research is presented with
          clarity, precision, and maximum impact.
        </p>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-8">
          Pubrica’s{" "}
          <Link
            href="/services/editing-and-translation/manuscript-editing"
            className="text-blue-600 no-underline hover:no-underline"
          >
            Post-Editing Services
          </Link>{" "}
          are designed to refine and enhance your revised{" "}
          <Link
            href="/services/editing-and-translation/manuscript-editing"
            className="text-blue-600 no-underline hover:no-underline"
          >
            manuscripts
          </Link>
          , ensuring they meet the highest standards of academic and
          professional publishing. This service is ideal for authors who have
          incorporated reviewer comments or made significant revisions and
          require a final, meticulous review to ensure precision and coherence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bullet Points */}
          <div className="lg:col-span-7 space-y-4">
            <ul className="space-y-4">
              {bulletPoints.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span className="text-red-600 font-bold mr-2 text-base leading-none">
                    •
                  </span>
                  <div>
                    <strong className="text-slate-900 font-bold">
                      {item.title}:{" "}
                    </strong>
                    <span>{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Editing Preview Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/editing-and-translation/post-editing/Perfect-Your-Manuscript-With-Pubricas-Post-Editing-Service.webp"
                  alt="Perfect your manuscript with Pubrica’s post-editing service"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Callout Paragraph & Call to Action Button */}
        <div className="mt-8 space-y-6">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Let Pubrica’s experts elevate your post-edited content to
            publication-ready quality. With our skilled team and personalized
            support, we refine your manuscript to meet the highest standards.
            Connect with us today to explore your post-editing requirements and
            benefit from our precise, efficient, and expert-driven services.
          </p>

          <div>
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>
    </div>
  );
};
