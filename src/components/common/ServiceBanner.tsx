import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import GetFreeQuoteButton from "./GetFreeQuoteButton";

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
    showQuoteButton?: boolean;
}

export default function ServiceBanner({
    imageSrc,
    imageAlt = "100% Satisfaction Guarantee",
    heading,
    description,
    bulletPoints,
    showQuoteButton = false,
}: BannerProps) {
    const hasImage = Boolean(imageSrc);

    return (
        <section
            className={`${poppins.className} bg-[#052b1e] text-white py-5 sm:py-6 px-4 sm:px-8 w-full overflow-hidden`}
        >
            <div
                className={`max-w-5xl mx-auto flex items-center ${
                    hasImage
                        ? "flex-col md:flex-row justify-center gap-4 lg:gap-8 text-center md:text-left"
                        : "flex-col justify-center text-center"
                }`}
            >
                {/* Banner Image */}
                {hasImage && (
                    <div className="shrink-0 flex items-center justify-center mx-auto min-w-[150px]">
                        <Image
                            src={imageSrc!}
                            alt={imageAlt}
                            width={180}
                            height={180}
                            className="w-32 h-32 sm:w-40 sm:h-40 object-contain block"
                            priority
                        />
                    </div>
                )}

                {/* Dynamic Text Content */}
                <div
                    className={`space-y-2.5 ${
                        hasImage
                            ? "max-w-3xl flex flex-col items-center md:items-start"
                            : "max-w-3xl flex flex-col items-center"
                    }`}
                >
                    <h2
                        className={`font-extrabold tracking-tight leading-snug ${
                            hasImage
                                ? "text-lg sm:text-xl lg:text-2xl"
                                : "text-xl sm:text-2xl lg:text-3xl"
                        }`}
                    >
                        {heading}
                    </h2>

                    <div
                        className={`text-slate-200 text-sm sm:text-base leading-relaxed ${
                            hasImage ? "" : "max-w-2xl"
                        }`}
                    >
                        {description}
                    </div>

                    {/* Optional Bullet Points */}
                    {bulletPoints && bulletPoints.length > 0 && (
                        <ul
                            className={`space-y-1.5 text-sm sm:text-base ${
                                hasImage
                                    ? "flex flex-col items-center md:items-start w-full"
                                    : "flex flex-col items-start text-left"
                            }`}
                        >
                            {bulletPoints.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 font-semibold text-slate-100"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Optional Quote Button */}
                    {showQuoteButton && (
                        <div className="pt-1">
                            <GetFreeQuoteButton />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}