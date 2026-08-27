"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface TestimonialItem {
    id: number | string;
    quote: string;
    author: string;
    role: string;
    journalName?: string;
    journalSub?: string;
    image: string;
}

interface MovingTestimonialsProps {
    data: TestimonialItem[];
    autoSlideInterval?: number; // In milliseconds (defaults to 5000)
}

export const MovingTestimonials: React.FC<MovingTestimonialsProps> = ({
    data,
    autoSlideInterval = 5000,
}) => {
    // Group testimonials into overlapping pairs (1-2, 2-3, 3-4, etc.)
    const testimonialSlides = data.reduce<TestimonialItem[][]>(
        (acc, curr, index) => {
            if (index < data.length - 1) {
                acc.push([curr, data[index + 1]]);
            }
            return acc;
        },
        []
    );

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Auto-slide effect
    useEffect(() => {
        if (testimonialSlides.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length);
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [testimonialSlides.length, autoSlideInterval]);

    if (!data || data.length === 0) return null;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 overflow-hidden">
            {/* Sliding Track Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {testimonialSlides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-1"
                    >
                        {slide.map((test, index) => (
                            <div
                                key={`${slideIndex}-${test.id}-${index}`}
                                className="bg-[#185348] text-white rounded-lg shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[170px]"
                            >
                                <div className="flex h-full">
                                    {/* Content Container */}
                                    <div className="flex-1 p-6 flex flex-col justify-between z-10">
                                        <p className="text-slate-100 text-[14px] leading-relaxed font-normal">
                                            &quot;{test.quote}&quot;
                                        </p>

                                        <div className="mt-4">
                                            <h4 className="font-bold tracking-wider text-white text-[13px] uppercase">
                                                {test.author}
                                            </h4>
                                            <p className="text-[12px] text-slate-300 italic mt-0.5">
                                                {test.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Container */}
                                    <div className="w-[140px] sm:w-[160px] shrink-0 relative flex items-center justify-center p-2">
                                        <Image
                                            src={test.image}
                                            alt={test.author}
                                            width={160}
                                            height={190}
                                            className="object-contain max-h-[150px] drop-shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Pagination Square Indicators */}
            {testimonialSlides.length > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    {testimonialSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 transition-all duration-300 ${currentSlide === index
                                    ? "bg-[#185348] border-2 border-[#185348]"
                                    : "bg-white border-2 border-slate-400"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};