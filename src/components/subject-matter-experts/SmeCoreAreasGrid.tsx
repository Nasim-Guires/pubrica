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
  href?: string;
};

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
  icon?: LucideIcon | ReactNode;
}) {
  if (!icon) return null;
  if (isValidElement(icon)) return icon;

  const Icon = icon as LucideIcon;

  return (
    <Icon className="w-8 h-8 text-[#1e2e2b] shrink-0" />
  );
}

export default function SmeCoreAreasGrid({ items }: { items: SmeCoreAreaItem[] }) {
  return (
    <>
      {/* Custom scrollbar styling with clean arrows on a single track */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Poppins',sans-serif]">
        {items.map((item, index) => {
          const { head, rest } = titleParts(item.title, item.highlight);
          const body = item.desc || item.description || null;
          const titleColorClass = item.href ? "text-blue-600" : "text-[#b81c1c]";

          const cardContent = (
            /* Height reduced from 210px to 160px to ensure content overflows and triggers scrollbar on all cards */
            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all h-[160px] overflow-hidden">
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

                {body && (
                  <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {body}
                  </div>
                )}
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
    </>
  );
}