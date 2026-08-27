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
    // Group testimonials into pairs for desktop view, or use individual items.
    // To make mobile (1 item) and desktop (2 items) work cleanly with a sliding track, 
    // we create slides where each slide can hold either 1 item (mobile) or 2 items (desktop).
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Create chunks of 2 items for desktop, but we can also map per item if we want 1 item per slide globally.
    // Let's make each slide contain 1 item for mobile, or group them efficiently. 
    // Actually, the cleanest way to support 1-per-screen on mobile and 2-per-screen on desktop 
    // is to have each slide represent a group of 2, but on mobile use CSS grid/flex wrapping or separate arrays.
    // Alternative: Let's create single-item slides or pair slides based on screen size, 
    // or use Tailwind's responsive grid inside each slide track element.
    
    // Let's group items into pairs for desktop slides: [[item1, item2], [item3, item4], ...]
    const desktopSlides = data.reduce<TestimonialItem[][]>((acc, curr, index) => {
        if (index % 2 === 0) {
            acc.push(data.slice(index, index + 2));
        }
        return acc;
    }, []);

    // If you want 1 per slide on mobile AND 2 per slide on desktop using the same slider track, 
    // an even simpler approach is to treat EVERY item as its own slide on mobile, 
    // or use Tailwind to handle the layout. Let's map over individual items as slides, 
    // but show them cleanly.
    
    // Let's use individual items as slides so mobile shows 1 at a time perfectly:
    useEffect(() => {
        if (data.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % data.length);
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [data.length, autoSlideInterval]);

    if (!data || data.length === 0) return null;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 overflow-hidden">
            {/* Sliding Track Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {data.map((test, index) => (
                    <div
                        key={index}
                        className="w-full shrink-0 px-2 box-border flex justify-center"
                    >
                        <div className="bg-[#185348] text-white rounded-lg shadow-xl relative overflow-hidden flex flex-col sm:flex-row justify-between w-full max-w-xl min-h-[190px]">
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

            {/* Pagination Square Indicators */}
            {data.length > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 transition-all duration-300 ${
                                currentSlide === index
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