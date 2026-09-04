"use client";

import { useState, useEffect } from "react";
import type { FC } from "react";
import Image from "next/image";

/**
 * Path: /industries/medical-device
 * Component: ClientTestimonials ("What Our Client Says About Us")
 *
 * Reusable, typed testimonial carousel.
 *
 * Desktop:
 * - Shows 2 cards
 * - Moves 1 card at a time
 *
 * Mobile:
 * - Shows 1 card
 * - Moves 1 card at a time
 *
 * Auto-slide:
 * - Defaults to 6 seconds
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
  /** Kept for backward compatibility with existing pages */
  itemsPerPage: number;
  /** Enable automatic sliding (defaults to true) */
  autoPlay?: boolean;
  /** Interval in milliseconds for automatic sliding (defaults to 6000ms / 6s) */
  autoPlayInterval?: number;
}

const WhatClientsSays: FC<ClientTestimonialsProps> = ({
  heading,
  testimonials,
  itemsPerPage: _itemsPerPage,
  autoPlay = true,
  autoPlayInterval = 6000,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  /**
   * Track viewport breakpoint.
   * md = 768px
   */
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();

    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  /**
   * Reset slide when switching between mobile and desktop.
   */
  useEffect(() => {
    setCurrentSlide(0);
  }, [isDesktop]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  /**
   * Number of possible slide positions.
   *
   * Desktop:
   * 2 cards visible and moves 1 card at a time.
   *
   * Example with 3 testimonials:
   * Slide 0 => 1 + 2
   * Slide 1 => 2 + 3
   *
   * Then loops back to:
   * Slide 0 => 1 + 2
   *
   * Mobile:
   * 1 card visible.
   *
   * 1 => 2 => 3 => 1
   */
  const maxSlides = isDesktop
    ? Math.max(1, testimonials.length - 1)
    : testimonials.length;

  /**
   * Automatically move one testimonial every 6 seconds.
   */
  useEffect(() => {
    if (!autoPlay || maxSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % maxSlides);
    }, autoPlayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, maxSlides]);

  /**
   * Desktop:
   * Each testimonial occupies 50% of the container.
   *
   * Therefore:
   * Slide 0 = 0%
   * Slide 1 = 50%
   * Slide 2 = 100%
   *
   * Mobile:
   * Each testimonial occupies 100%.
   */
  const translatePercentage = isDesktop
    ? currentSlide * 50
    : currentSlide * 100;

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

      {/* Carousel */}
      <div className="mx-auto mt-10 max-w-6xl overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${translatePercentage}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className="w-full shrink-0 md:w-1/2 px-0 md:px-3"
            >
              <article className="relative flex h-full flex-col rounded-md bg-[#fdf6e3] p-6 sm:p-8">
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
                  {/* Avatar */}
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

                  {/* Author information */}
                  <div className="min-w-0 flex-1">
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

                  {/* Country flag */}
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
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      {maxSlides > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to testimonial slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "bg-orange-400"
                  : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WhatClientsSays;