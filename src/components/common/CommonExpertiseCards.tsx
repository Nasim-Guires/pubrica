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
    // Fixed Header: Title wraps naturally without overflowing screen width
    const renderHeader = () => (
        <div className="space-y-3">
            {/* Title (Line removed, reduced size & font weight) */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] text-left">
                {title}
            </h2>

            {/* Subheading / Description */}
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-left max-w-5xl">
                {description}
            </p>
        </div>
    );

    // Reusable card renderer
    function renderCard(card: ExpertiseCardItem, idx: number) {
        const CardIcon = card.icon;

        return (
            <Link
                key={idx}
                href={card.href}
                className="group relative bg-slate-100 border border-gray-300 border-b-4 border-b-[#12433e] rounded-none overflow-hidden min-h-[18rem] pb-12 cursor-pointer block transition-all duration-300 hover:bg-white hover:border-[#12433e] hover:shadow-lg"
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

                {/* Floating Center Circle Icon (Original hover animation kept intact) */}
                <div className="absolute top-[5.5rem] md:top-[9.5rem] left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 ease-in-out md:group-hover:top-14 md:group-hover:scale-110 md:group-hover:border-[#12433e]">
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

                {/* Content Panel (Hover effects retained; line clamps removed so multi-line titles render fully) */}
                <div className="absolute inset-x-0 bottom-0 top-28 md:top-40 z-10 bg-white md:bg-slate-100 md:group-hover:bg-white pt-7 md:pt-8 md:group-hover:pt-14 pb-4 px-4 flex flex-col items-center justify-start text-center transition-all duration-300 ease-in-out md:group-hover:top-14">
                    <h3 className="text-sm md:text-base font-bold text-[#12433e] md:text-gray-900 md:group-hover:text-[#12433e] transition-colors duration-300 w-full break-words">
                        {card.title}
                    </h3>

                    <p className="text-xs text-gray-600 mt-1 md:mt-2 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 max-w-[95%]">
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
            <section className="space-y-8 font-['Poppins',sans-serif] max-w-6xl mx-auto px-4">
                {renderHeader()}

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
            <section className="space-y-8 font-['Poppins',sans-serif] max-w-6xl mx-auto px-4">
                {renderHeader()}

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
        <section className="space-y-8 font-['Poppins',sans-serif] max-w-6xl mx-auto px-4">
            {renderHeader()}

            <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center ${getGridColumns()}`}
            >
                {cards.map((card, idx) => renderCard(card, idx))}
            </div>
        </section>
    );
}