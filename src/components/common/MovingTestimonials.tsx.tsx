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
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    // Track viewport breakpoint (md = 768px)
    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    // Reset slide index if view mode changes to prevent out-of-bounds state
    useEffect(() => {
        setCurrentSlide(0);
    }, [isDesktop]);

    // Total possible slide steps
    // Desktop: 2 visible, shifts 1 by 1 -> data.length - 1 steps
    // Mobile: 1 visible, shifts 1 by 1 -> data.length steps
    const maxSlides = isDesktop ? Math.max(1, data.length - 1) : data.length;

    // Auto-slide effect every 5 seconds
    useEffect(() => {
        if (maxSlides <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % maxSlides);
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [maxSlides, autoSlideInterval]);

    if (!data || data.length === 0) return null;

    // Calculate percentage offset: 50% shift per step on Desktop, 100% on Mobile
    const translatePercentage = isDesktop
        ? currentSlide * 50
        : currentSlide * 100;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 overflow-hidden">
            {/* Sliding Track Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out w-full"
                style={{ transform: `translateX(-${translatePercentage}%)` }}
            >
                {data.map((test, index) => (
                    <div
                        key={test.id || index}
                        className="w-full md:w-1/2 shrink-0 px-3 box-border flex justify-center"
                    >
                        <div className="bg-[#185348] text-white rounded-lg shadow-xl relative overflow-hidden flex flex-col sm:flex-row justify-between w-full min-h-[190px]">
                            {/* Content Container */}
                            <div className="flex-1 p-6 flex flex-col justify-between z-10 order-2 sm:order-1">
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
                            <div className="w-full sm:w-[160px] shrink-0 relative flex items-center justify-center p-4 sm:p-2 order-1 sm:order-2 bg-[#14443b] sm:bg-transparent">
                                <Image
                                    src={test.image}
                                    alt={test.author}
                                    width={140}
                                    height={140}
                                    className="object-contain max-h-[130px] sm:max-h-[150px] drop-shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Indicators */}
            {maxSlides > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    {Array.from({ length: maxSlides }).map((_, index) => (
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