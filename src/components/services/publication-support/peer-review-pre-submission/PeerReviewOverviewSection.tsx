"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";

export default function PeerReviewOverviewSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-5 font-sans text-gray-800">
      {/* 2-Column Section: Text (Left) & Image Showcase (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
        {/* Left Column: Intro + First 3 Bullets */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Enhance the quality and credibility of your research with Pubrica&apos;s pre-submission peer
            review services. Our manuscript pre-submission peer review gives you a rigorous review
            from a subject-specific expert who will assess your scholarly work and provide assurance
            that it meets the standard in your field and discipline before submission to a journal.
          </p>

          <ul className="space-y-4 list-none pl-0 text-sm sm:text-base leading-relaxed text-gray-700">
            {/* Bullet 1 */}
            <li className="flex items-start space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-gray-900 font-bold">
                  Expert Review and Feedback:{" "}
                </strong>
                Our peer review is conducted by experts in the field who will compile a detailed report
                and provide feedback on your manuscript. The expert review process will check for potential
                problems, such as false claims or unacceptable implications, and ensure that your
                manuscript is constructed and argued properly.
              </div>
            </li>

            {/* Bullet 2 */}
            <li className="flex items-start space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-gray-900 font-bold">
                  Enhancing Manuscript Quality:{" "}
                </strong>
                The feedback from our peer reviewers is an opportunity to improve your manuscript by
                improving clarity, structure, and academic strength. It allows you to address weaknesses
                before submitting for journal peer review. We also offer complete{" "}
                <Link href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 font-medium hover:underline">
                  manuscript editing
                </Link>{" "}
                that brings your manuscript up to journal standards.
              </div>
            </li>

            {/* Bullet 3 */}
            <li className="flex items-start space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-gray-900 font-bold">
                  Pre-print Peer Review Service:{" "}
                </strong>
                We also support researchers in publishing through open peer review platforms such as F1000
                Research, PubPeer, arXiv Comments (via arXivLabs tools), SciRate, PREreview, and overlay
                journals like Overlay Journals. Besides, we also assist in preparing manuscripts for other open
                science platforms such as eLife, Peer Community In, Qeios, ScienceOpen, and tools like OSF
                and Protocols.io to enhance transparency, reproducibility, and preprint visibility. These
                platforms use a publish-first, peer-review-later format, with the reviewers&apos; names and
                comments visible on the page. Data availability is required, increasing transparency and
                reproducible research. Many of these platforms are either hosted or financially supported by
                publishers such as Taylor &amp; Francis.
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Clean Frameless Image Showcase */}
        <div className="lg:col-span-5 relative w-full h-auto min-h-[300px]">
          <Image
            src="/images/publication-support/peer-review-pre-submission/Pre-Submission-Peer-Review-Pubrica-1.jpg"
            alt="Published Journal Covers Showcase"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Content Continuing Below Image */}
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
        <ul className="space-y-4 list-none pl-0">
          {/* Bullet 4 */}
          <li className="flex items-start space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
            <div>
              <strong className="text-gray-900 font-bold">
                Upholding Academic Standards:{" "}
              </strong>
              Our peer review services provide authors with the means to meet their disciplinary
              community&apos;s standards and expectations and produce a high-quality publication. The
              pre-submission review protects the quality control of the research—whether it&apos;s an
              original research article,{" "}
              <Link href="/services/research-services/systematic-review" className="text-blue-600 font-medium hover:underline">
                systematic review
              </Link>
              , or{" "}
              <Link href="/services/research-services/meta-analysis" className="text-blue-600 font-medium hover:underline">
                meta-analysis
              </Link>
              , we ensure it meets rigorous academic standards.
            </div>
          </li>

          {/* Bullet 5 */}
          <li className="flex items-start space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
            <div>
              <strong className="text-gray-900 font-bold">
                Supporting Successful Publication:{" "}
              </strong>
              By undergoing our pre-submission peer review, you significantly improve your chances of a
              successful journal submission through our academic editing. This service helps ensure that
              personal views or flawed data do not hinder the acceptance of your work. Our integrated
              approach, including{" "}
              <Link href="/services/physician-writing-services/case-report" className="text-blue-600 font-medium hover:underline">
                case report writing
              </Link>{" "}
              and{" "}
              <Link href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 font-medium hover:underline">
                manuscript editing
              </Link>
              , ensures your manuscript is submission-ready.
            </div>
          </li>
        </ul>

        {/* Closing Paragraph */}
        <p className="pt-2 text-gray-700 leading-relaxed">
          Choose Pubrica&apos;s pre-submission peer review and manuscript enhancement services for the best
          chance of getting your research vetted and ready to publish. Our specialist manuscript reviewers
          help get your academic work into its best form, giving you the highest chance of acceptance into a
          journal. Contact us today to see how we can help with your manuscript.
        </p>

        {/* CTA Button */}
        <CommonUploadButton />
      </div>
    </section>
  );
}