"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

export const EditingTranslationBookEditingHero: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      {/* Dark Hero Box Header */}
      <HeroBanner
        title="Book Editing Service"
        description="Pubrica’s Book editing service enhances your book’s appeal with compelling content and captivating design. Our editing experts refine your language and assist in shaping your ideas, plot, and characters for maximum reader engagement."
        headingAs="h1"
      />

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-6">
          Polish Your Pages to Perfection With Pubrica’s Book Editing Service
        </h2>

        {/* Intro Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-8">
          <p>
            Writing a book isn’t an easy process. Now that your work is ready,
            you’re keen to make sure your research is showcased in the best
            possible way.
          </p>
          <p>
            At Pubrica, we understand the complexity and demands of editing
            scientific academic books, which are often extensive, technically
            dense, and subject to tight publication deadlines. Our book editing
            services are designed to address every aspect of book{" "}
            <Link href="/services/publication-support" className="text-blue-600 no-underline hover:no-underline">
              publication
            </Link>
            , from initial drafts to final proofs, ensuring compliance with the
            stringent formatting and content standards set by publishers.
          </p>
        </div>

        {/* Grid Container: Bullet Points & Side Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Bullet Points Column */}
          <div className="lg:col-span-7 space-y-4">
            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5 marker:text-red-600">
              <li>
                <strong className="font-semibold text-slate-900">
                  Expert Editing Team:
                </strong>{" "}
                Our editors hold advanced degrees (PhD, M Pharm, MD, ME, MS) and
                bring a wealth of experience in various scientific and technical
                fields. This expertise enables them to handle the complex
                content typically found in academic books with precision and
                depth.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Detailed Editing Process:
                </strong>{" "}
                Book editing at Pubrica is characterized by rigorous attention
                to detail. We meticulously review and refine your text for
                clarity, structure, and coherence, ensuring that each chapter
                meets the high standards expected in scholarly publishing.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Comprehensive Support:
                </strong>{" "}
                We assist authors at every stage of the book publication
                process. This includes providing constructive feedback, detailed
                reports, and expert advice to enhance the quality and impact of
                your book.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Adherence to Publishing Standards:
                </strong>{" "}
                Our editors are well-versed in the{" "}
                <Link href="/services/publication-support/journal-manuscript-formatting-services" className="text-blue-600 no-underline hover:no-underline">
                  formatting
                </Link>{" "}
                guidelines of major publishers. We ensure that your book not
                only reads well but also looks professional and adheres to all
                necessary publication standards.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Timely and Efficient Service:
                </strong>{" "}
                Recognizing the importance of meeting publication deadlines, we
                are committed to delivering high-quality{" "}
                <Link href="/services/editing-and-translation" className="text-blue-600 no-underline hover:no-underline">
                  editing services
                </Link>{" "}
                quickly and efficiently, ensuring that your project remains on
                schedule.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Competitive Pricing:
                </strong>{" "}
                At Pubrica, we offer our comprehensive book editing services at
                a competitive price, making professional editing accessible for
                academic authors.
              </li>
            </ul>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md  p-3 rounded-2xl">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/editing-and-translation/book-editing/Polish-Your-Pages-to-Perfection-With-Pubricas-Book-Editing-Service-1.webp"
                  alt="Polish your pages to perfection with Pubrica's Book Editing Service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Closing Paragraph & CTA */}
        <div className="mt-8 space-y-6">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Let the Pubrica experts take your academic book to the next level.
            With our experienced team and dedicated support, we ensure your book
            is well-prepared for successful publication. Contact us today to
            discuss your book editing needs and take advantage of our efficient,
            expert-driven services.
          </p>

          <div>
            <GetFreeQuoteButton />
          </div>
        </div>
      </div>
    </div>
  );
};
