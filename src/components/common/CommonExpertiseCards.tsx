import Image from "next/image";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type ExpertiseCardItem = {
    title: string;
    desc: ReactNode;
    href: string;
    imageUrl: string;
    icon?: LucideIcon;
    iconSrc?: string;
};

type CommonExpertiseCardsProps = {
    title: string;
    description: ReactNode;
    cards: ExpertiseCardItem[];
};

export default function CommonExpertiseCards({
    title,
    description,
    cards,
}: CommonExpertiseCardsProps) {
    // Reusable card renderer with sharp corners and dark green bottom accent
    function renderCard(card: ExpertiseCardItem, idx: number) {
        const CardIcon = card.icon;

        return (
            <Link
                key={idx}
                href={card.href}
                className="group relative bg-slate-100 border border-gray-300 border-b-4 border-b-[#12433e] rounded-none overflow-hidden h-72 cursor-pointer block transition-all duration-300 hover:bg-white hover:border-[#12433e] hover:shadow-lg"
            >
                {/* Background Image Container */}
                <div className="relative h-44 w-full bg-gray-200 overflow-hidden rounded-none">
                    <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Floating Center Circle Icon */}
                <div className="absolute top-[9.5rem] left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 ease-in-out group-hover:top-14 group-hover:scale-110 group-hover:border-[#12433e]">
                    {card.iconSrc ? (
                        <Image
                            src={card.iconSrc}
                            alt=""
                            width={24}
                            height={24}
                            className="object-contain w-6 h-6 shrink-0"
                        />
                    ) : CardIcon ? (
                        <CardIcon className="w-5 h-5 text-[#12433e]" />
                    ) : null}
                </div>

                {/* Sliding Content Panel */}
                <div className="absolute inset-x-0 bottom-0 top-40 z-10 bg-slate-100 group-hover:bg-white pt-8 pb-4 px-4 flex flex-col items-center justify-start text-center transition-all duration-300 ease-in-out group-hover:top-14 group-hover:pt-14">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#12433e] line-clamp-2">
                        {card.title}
                    </h3>

                    <p className="text-xs text-gray-600 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[95%] line-clamp-4">
                        {card.desc}
                    </p>
                </div>
            </Link>
        );
    }

    // Custom Pyramid Layout for 5 Cards (Row 1: 3, Row 2: 2)
    if (cards.length === 5) {
        const row1 = cards.slice(0, 3);
        const row2 = cards.slice(3, 5);

        return (
            <section className="space-y-8 font-['Poppins',sans-serif] max-w-6xl mx-auto">
                <div className="text-left space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-4xl">
                        {description}
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Row 1: 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {row1.map((card, idx) => renderCard(card, idx))}
                    </div>

                    {/* Row 2: 2 Cards (Centered) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:max-w-2xl mx-auto justify-center">
                        {row2.map((card, idx) => renderCard(card, idx + 3))}
                    </div>
                </div>
            </section>
        );
    }

    // Custom Pyramid Layout for 9 Cards (Row 1: 4, Row 2: 3, Row 3: 2)
    if (cards.length === 9) {
        const row1 = cards.slice(0, 4);
        const row2 = cards.slice(4, 7);
        const row3 = cards.slice(7, 9);

        return (
            <section className="space-y-8 font-['Poppins',sans-serif] max-w-6xl mx-auto">
                <div className="text-left space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-4xl">
                        {description}
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Row 1: 4 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                        {row1.map((card, idx) => renderCard(card, idx))}
                    </div>

                    {/* Row 2: 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-4xl mx-auto justify-center">
                        {row2.map((card, idx) => renderCard(card, idx + 4))}
                    </div>

                    {/* Row 3: 2 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:max-w-2xl mx-auto justify-center">
                        {row3.map((card, idx) => renderCard(card, idx + 7))}
                    </div>
                </div>
            </section>
        );
    }

    // Dynamic grid classes for standard card counts
    const getGridColumns = () => {
        switch (cards.length) {
            case 1:
                return "lg:grid-cols-1 lg:max-w-xs";
            case 2:
                return "lg:grid-cols-2 lg:max-w-2xl";
            case 3:
                return "lg:grid-cols-3";
            case 4:
                return "lg:grid-cols-4";
            case 6:
                return "lg:grid-cols-3";
            case 7:
            case 8:
            default:
                return "lg:grid-cols-4";
        }
    };

    return (
        <section className="space-y-8 font-['Poppins',sans-serif] max-w-6xl mx-auto">
            <div className="text-left space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                    {title}
                </h2>

                <p className="text-sm md:text-base text-gray-600 max-w-4xl">
                    {description}
                </p>
            </div>

            <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center ${getGridColumns()}`}
            >
                {cards.map((card, idx) => renderCard(card, idx))}
            </div>
        </section>
    );
}