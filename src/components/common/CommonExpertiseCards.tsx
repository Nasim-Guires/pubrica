import Image from "next/image";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

export type ExpertiseCardItem = {
    title: string;
    desc: string;
    href: string;
    imageUrl: string;
    icon?: LucideIcon;
    iconSrc?: string;
};

type CommonExpertiseCardsProps = {
    title: string;
    description: string;
    cards: ExpertiseCardItem[];
};

export default function CommonExpertiseCards({
    title,
    description,
    cards,
}: CommonExpertiseCardsProps) {
    // Keep the grid centered and automatically choose the
    // appropriate number of cards per row based on total cards.
    const getGridColumns = () => {
        switch (cards.length) {
            case 1:
                return "lg:grid-cols-1 lg:max-w-xs";
            case 2:
                return "lg:grid-cols-2 lg:max-w-2xl";
            case 3:
                return "lg:grid-cols-3 lg:max-w-4xl";
            case 4:
                return "lg:grid-cols-4 lg:max-w-6xl";
            case 5:
                return "lg:grid-cols-3 lg:max-w-4xl";
            case 6:
                return "lg:grid-cols-3 lg:max-w-4xl";
            case 7:
                return "lg:grid-cols-4 lg:max-w-6xl";
            case 8:
                return "lg:grid-cols-4 lg:max-w-6xl";
            default:
                return "lg:grid-cols-4 lg:max-w-6xl";
        }
    };

    return (
        <section className="space-y-8 font-['Poppins',sans-serif]">
            <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                    {title}
                </h2>

                <p className="text-sm md:text-base text-gray-600">
                    {description}
                </p>
            </div>

            <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto ${getGridColumns()}`}
            >
                {cards.map((card, idx) => {
                    const CardIcon = card.icon;

                    return (
                        <Link
                            key={idx}
                            href={card.href}
                            className="group relative bg-white border border-gray-300 rounded-none overflow-hidden shadow-sm h-64 cursor-pointer block"
                        >
                            {/* Background Image */}
                            <div className="relative h-40 w-full bg-gray-100">
                                <Image
                                    src={card.imageUrl}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Center Circle Icon */}
                            <div className="absolute top-[8.5rem] left-1/2 -translate-x-1/2 z-20 bg-white p-2.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 ease-in-out group-hover:top-20 group-hover:scale-105">
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

                            {/* Sliding White Panel */}
                            <div className="absolute inset-x-0 bottom-0 top-36 z-10 bg-white pt-7 pb-3 px-3 flex flex-col items-center justify-start text-center transition-all duration-300 ease-in-out group-hover:top-20 group-hover:pt-12 group-hover:justify-start">
                                <h3 className="text-sm md:text-base font-bold text-gray-900 transition-all duration-300">
                                    {card.title}
                                </h3>

                                <p className="text-xs text-gray-500 mt-2 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%]">
                                    {card.desc}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}