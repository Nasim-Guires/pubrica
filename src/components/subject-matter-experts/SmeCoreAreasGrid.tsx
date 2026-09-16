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
    <Icon className="w-5 h-5 text-[#b81c1c] shrink-0" />
  );
}

export default function SmeCoreAreasGrid({ items }: { items: SmeCoreAreaItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Poppins',sans-serif]">
      {items.map((item, index) => {
        const { head, rest } = titleParts(item.title, item.highlight);
        const body = item.desc || item.description || null;
        const titleColorClass = item.href ? "text-blue-600" : "text-[#b81c1c]";

        const cardContent = (
          <div className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                  <span className={titleColorClass}>
                    {head}
                    {rest ? " " : ""}
                  </span>
                  {rest}
                </h3>

                <div className="flex-shrink-0 ml-3">
                  {item.iconSrc ? (
                    <Image
                      src={item.iconSrc}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain w-6 h-6 shrink-0"
                    />
                  ) : (
                    <FallbackIcon icon={item.icon} />
                  )}
                </div>
              </div>

              {body && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {body}
                </p>
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
  );
}