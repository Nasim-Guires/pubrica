"use client";

import { useState } from "react";
import type { FC } from "react";
import Image from "next/image";

/**
 * Path: /industries/medical-device
 * Component: ClientTestimonials ("What Our Client Says About Us")
 *
 * Reusable, typed testimonial carousel. Avatar + flag image slots are
 * rendered as labelled placeholder <div>s unless avatarSrc / flagSrc are set.
 */

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorLocation: string;
  /** Alt/label for the avatar image-section placeholder */
  avatarLabel: string;
  /** Alt/label for the country-flag image-section placeholder */
  flagLabel: string;
  avatarSrc?: string;
  flagSrc?: string;
}

export interface ClientTestimonialsProps {
  heading: string;
  testimonials: Testimonial[];
  /** How many cards are visible per "page" on desktop */
  itemsPerPage: number;
}

const WhatClientsSays: FC<ClientTestimonialsProps> = ({
  heading,
  testimonials,
  itemsPerPage,
}) => {
  const pageCount = Math.max(1, Math.ceil(testimonials.length / itemsPerPage));
  const [activePage, setActivePage] = useState(0);

  return (
    <section
      aria-labelledby="client-testimonials-heading"
      className="w-full bg-white py-6 px-4 sm:px-8"
    >
      <h2
        id="client-testimonials-heading"
        className="text-center text-2xl font-bold text-[#0b3b3c] sm:text-3xl"
      >
        {heading}
      </h2>

      <div className="mx-auto mt-10 max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activePage * 100}%)`,
          }}
        >
          {Array.from({ length: pageCount }).map((_, pageIndex) => (
            <div
              key={`testimonial-page-${pageIndex}`}
              className="grid w-full flex-shrink-0 grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {testimonials
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((testimonial) => (
                  <article
                    key={testimonial.id}
                    className="relative flex flex-col rounded-md bg-[#fdf6e3] p-6 sm:p-8"
                  >
                    <span
                      aria-hidden="true"
                      className="mb-3 text-3xl font-serif italic text-orange-400"
                    >
                      &ldquo;
                    </span>

                    <p className="flex-1 text-sm leading-relaxed text-gray-800 sm:text-base">
                      {testimonial.quote}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      {testimonial.avatarSrc ? (
                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                          <Image
                            src={testimonial.avatarSrc}
                            alt={testimonial.avatarLabel}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                      <div
                        role="img"
                        aria-label={testimonial.avatarLabel}
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-100"
                      >
                        <span className="px-1 text-center text-[6px] font-medium uppercase leading-tight tracking-wide text-gray-500">
                          Image Section
                        </span>
                      </div>
                      )}

                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">
                          — {testimonial.authorName}
                        </p>
                        <p className="text-xs text-gray-600 sm:text-sm">
                          {testimonial.authorRole}
                        </p>
                        <p className="text-xs text-gray-600 sm:text-sm">
                          {testimonial.authorLocation}
                        </p>
                      </div>

                      {testimonial.flagSrc ? (
                        <div className="relative h-8 w-10 flex-shrink-0 overflow-hidden rounded-sm">
                          <Image
                            src={testimonial.flagSrc}
                            alt={testimonial.flagLabel}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                      ) : (
                      <div
                        role="img"
                        aria-label={testimonial.flagLabel}
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-100"
                      >
                        <span className="px-1 text-center text-[5px] font-medium uppercase leading-tight tracking-wide text-gray-500">
                          Image
                        </span>
                      </div>
                      )}
                    </div>
                  </article>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, pageIndex) => (
          <button
            key={`dot-${pageIndex}`}
            type="button"
            aria-label={`Go to testimonial page ${pageIndex + 1}`}
            onClick={() => setActivePage(pageIndex)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              activePage === pageIndex ? "bg-orange-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatClientsSays;