import Image from "next/image";
import Link from "next/link";
import { isValidElement, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export type SmeCoreAreaItem = {
    title: string;
    highlight?: string;
    desc?: string | ReactNode;
    description?: string | ReactNode;
    icon?: LucideIcon | ReactNode;
    iconSrc?: string;
    href?: string; // Optional hyperlink for the card
};

interface SmeCoreAreasGridProps {
    title: string;
    description: string | ReactNode;
    items: SmeCoreAreaItem[];
}

function titleParts(title: string, highlight?: string) {
    if (highlight && title.includes(highlight)) {
        return {
            head: highlight,
            rest: title.replace(highlight, "").trim(),
        };
    }

    const words = title.trim().split(/\s+/);

    if (words.length <= 3) {
        return {
            head: title,
            rest: "",
        };
    }

    const cut = Math.max(2, Math.ceil(words.length / 2));

    return {
        head: words.slice(0, cut).join(" "),
        rest: words.slice(cut).join(" "),
    };
}

function FallbackIcon({
    icon,
}: {
    icon: LucideIcon | ReactNode;
}) {
    if (isValidElement(icon)) return icon;

    const Icon = icon as LucideIcon;

    return (
        <Icon className="w-8 h-8 text-[#1e2e2b] shrink-0" />
    );
}

export default function CoreAreasSection({
    title,
    description,
    items,
}: SmeCoreAreasGridProps) {
    return (
        <section className="space-y-6 font-['Poppins',sans-serif]">
            {/* Custom scrollbar - native single track with arrow buttons */}
            <style font-display="swap">{`
                .card-scroll-area::-webkit-scrollbar {
                    width: 14px;
                }
                .card-scroll-area::-webkit-scrollbar-button:single-button:vertical:decrement {
                    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23112a2e"><path d="M12 8l-6 6h12z"/></svg>') no-repeat center center;
                    background-size: 10px;
                    height: 12px;
                    display: block;
                }
                .card-scroll-area::-webkit-scrollbar-button:single-button:vertical:increment {
                    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23112a2e"><path d="M12 16l6-6H6z"/></svg>') no-repeat center center;
                    background-size: 10px;
                    height: 12px;
                    display: block;
                }
                .card-scroll-area::-webkit-scrollbar-track {
                    background: transparent;
                }
                .card-scroll-area::-webkit-scrollbar-thumb {
                    background-color: #112a2e;
                    border-radius: 10px;
                    border: 4px solid white;
                }
                .card-scroll-area {
                    scrollbar-width: thin;
                    scrollbar-color: #112a2e transparent;
                }
            `}</style>

            {/* Section Header (Centered layout) */}
            <div className="space-y-4">
                {/* Main Heading & Line (Centered) */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                        {title}
                    </h2>
                    <div className="w-12 h-1 bg-[#12433e] mt-2 rounded-full" />
                </div>

                {/* Subheading / Description (Centered) */}
                <div className="text-sm md:text-base text-gray-600 max-w-4xl text-center mx-auto">
                    {description}
                </div>
            </div>

            {/* Core Areas Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => {
                    const { head, rest } = titleParts(
                        item.title,
                        item.highlight
                    );

                    const body = item.desc || item.description || null;
                    const titleColorClass = item.href ? "text-blue-600" : "text-[#b81c1c]";

                    const cardContent = (
                        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all h-[160px] overflow-hidden">
                            {/* Scrollable Container */}
                            <div className="card-scroll-area overflow-y-auto h-full pr-2 space-y-2">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                                        <span className={`block ${titleColorClass}`}>
                                            {head}
                                        </span>
                                        {rest && (
                                            <span className="block text-gray-900 font-bold mt-0.5">
                                                {rest}
                                            </span>
                                        )}
                                    </h3>

                                    <div className="flex-shrink-0 ml-2">
                                        {item.iconSrc ? (
                                            <Image
                                                src={item.iconSrc}
                                                alt=""
                                                width={32}
                                                height={32}
                                                className="object-contain w-8 h-8 shrink-0"
                                            />
                                        ) : (
                                            <FallbackIcon icon={item.icon} />
                                        )}
                                    </div>
                                </div>

                                <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {body}
                                </div>
                            </div>
                        </div>
                    );

                    return (
                        <div key={index} className="flex flex-col">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="block h-full text-blue-600 no-underline"
                                >
                                    {cardContent}
                                </Link>
                            ) : (
                                cardContent
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}