"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// extracted demo data from images
const tablesFiguresData = [
    // Slide / Page 1
    {
        id: 1,
        date: "November 2, 2018",
        title: "Visually Brief your Audience with Graphical Abstracts",
        slug: "visually-brief-your-audience-with-graphical-abstracts",
        image: "/images/tables-figures/graphical-abstracts.jpg",
        page: 1,
    },
    {
        id: 2,
        date: "November 2, 2018",
        title: "Artworks that work for your Manuscripts",
        slug: "artworks-that-work-for-your-manuscripts",
        image: "/images/tables-figures/artworks-for-manuscripts.jpg",
        page: 1,
    },
    {
        id: 3,
        date: "November 2, 2018",
        title: "Presentation Matters; Effective Table Formatting Tips",
        slug: "presentation-matters-effective-table-formatting-tips",
        image: "/images/tables-figures/table-formatting-tips.jpg",
        page: 1,
    },
    {
        id: 4,
        date: "November 2, 2018",
        title: "Data Visualization Made Easy",
        slug: "data-visualization-made-easy",
        image: "/images/tables-figures/data-visualization-made-easy.jpg",
        page: 1,
    },
    // Slide / Page 2
    {
        id: 5,
        date: "November 2, 2018",
        title: "Make an Impact with your Scientific Illustrations",
        slug: "make-an-impact-with-your-scientific-illustrations",
        image: "/images/tables-figures/scientific-illustrations.jpg",
        page: 2,
    },
];

const Page = () => {
    const [activePage, setActivePage] = useState(1);
    const totalPages = 2;

    const handlePrev = () => {
        setActivePage((prev) => (prev > 1 ? prev - 1 : totalPages));
    };

    const handleNext = () => {
        setActivePage((prev) => (prev < totalPages ? prev + 1 : 1));
    };

    // Get current active items
    const visibleCards = tablesFiguresData.filter(
        (item) => item.page === activePage
    );

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Header & Arrow Controls */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
                    Tables, Figures
                </h2>

                <div className="flex gap-2">
                    <button
                        onClick={handlePrev}
                        className="p-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded text-gray-700"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded text-gray-700"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[360px]">
                {visibleCards.map((card) => (
                    <div
                        key={card.id}
                        className="flex flex-col justify-between bg-white overflow-hidden"
                    >
                        <div>
                            {/* Image & Date Badge Container */}
                            <div className="relative w-full h-44 bg-gray-100 mb-3 overflow-hidden rounded">
                                <span className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur-sm text-[10px] text-gray-600 px-2 py-0.5 rounded shadow-sm">
                                    {card.date}
                                </span>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-3">
                                {card.title}
                            </h3>
                        </div>

                        {/* Read More Link Button */}
                        <div className="pt-2 border-t border-gray-100 mt-auto">
                            <Link
                                href={`/tablesfigures/${card.slug}/`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded transition-colors"
                            >
                                <span className="text-gray-500">::</span> Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
                <button
                    onClick={() => setActivePage(1)}
                    aria-label="Page 1"
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${activePage === 1 ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                />
                <button
                    onClick={() => setActivePage(2)}
                    aria-label="Page 2"
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${activePage === 2 ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                />
            </div>
        </section>
    );
};

export default Page;