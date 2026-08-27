import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Initialize Poppins font
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
});

export interface BannerProps {
    imageSrc?: string;
    imageAlt?: string;
    heading: React.ReactNode;
    description: React.ReactNode;
    bulletPoints?: string[];
    ctaLink?: string;
}

export default function ServiceBanner({
    imageSrc = "/images/publication-support/Satisfaction_Guarantee.webp",
    imageAlt = "100% Satisfaction Guarantee",
    heading,
    description,
    bulletPoints,
}: BannerProps) {
    return (
        <section
            className={`${poppins.className} bg-[#052b1e] text-white py-6 sm:py-8 px-6 sm:px-12 lg:px-16 w-full overflow-hidden`}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 text-center md:text-left">
                {/* Banner Image */}
                <div className="shrink-0 flex items-center justify-center mx-auto min-w-[192px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={224}
                        height={224}
                        className="w-44 h-44 sm:w-56 sm:h-56 object-contain block"
                        priority
                    />
                </div>

                {/* Dynamic Text Content */}
                <div className="space-y-4 max-w-3xl flex flex-col items-center md:items-start">
                    {/* Heading (> 16px across all screens) */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
                        {heading}
                    </h2>

                    {/* Description (Strictly 16px / text-base) */}
                    <div className="text-slate-200 text-base leading-relaxed">
                        {description}
                    </div>

                    {/* Optional Bullet Points */}
                    {bulletPoints && bulletPoints.length > 0 && (
                        <ul className="space-y-2 pt-1 text-base flex flex-col items-center md:items-start w-full">
                            {bulletPoints.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-center md:justify-start gap-2.5 font-semibold text-slate-100"
                                >
                                    <span className="h-2 w-2 rounded-full bg-red-500 inline-block shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}