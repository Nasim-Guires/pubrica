"use client";

import { useState } from "react";
import Image from "next/image";

interface WhoWeServeCard {
    title: string;
    bullets: string[];
    imageUrl: string;
}

interface CommonWhoWeServeProps {
    title: string;
    description: string;
    data: WhoWeServeCard[];
}

export default function CommonWhoWeServe({
    title,
    description,
    data,
}: CommonWhoWeServeProps) {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveId((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-7 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
                        {title}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((card, index) => {
                        const isActive = activeId === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                onMouseEnter={() => setActiveId(index)}
                                onMouseLeave={() => setActiveId(null)}
                                className="group relative h-64 sm:h-72 rounded-sm overflow-hidden bg-black cursor-pointer shadow-md transition-all duration-300"
                            >
                                {/* Image */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-0 ${isActive ? "opacity-0" : "opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={card.imageUrl}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                {/* Default */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0 flex items-end ${isActive ? "opacity-0" : "opacity-100"
                                        }`}
                                >
                                    <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Hover */}
                                <div
                                    className={`absolute inset-0 bg-black p-5 sm:p-6 text-white transition-opacity duration-300 group-hover:opacity-100 z-20 flex flex-col ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <h3 className="font-bold text-sm sm:text-base border-b border-gray-700 pb-2">
                                        {card.title}
                                    </h3>

                                    <ul className="mt-3 space-y-2 text-xs text-gray-300 leading-relaxed">
                                        {card.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span>•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}