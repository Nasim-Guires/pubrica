import Image from "next/image";
import { isValidElement, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export type SmeCoreAreaItem = {
  title: string;
  highlight?: string;
  desc?: string;
  description?: string;
  icon: LucideIcon | ReactNode;
  iconSrc?: string;
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
    return { head: title, rest: "" };
  }
  const cut = Math.max(2, Math.ceil(words.length / 2));
  return {
    head: words.slice(0, cut).join(" "),
    rest: words.slice(cut).join(" "),
  };
}

function FallbackIcon({ icon }: { icon: LucideIcon | ReactNode }) {
  if (isValidElement(icon)) return icon;
  const Icon = icon as LucideIcon;
  return <Icon className="w-5 h-5 text-[#b81c1c] shrink-0" />;
}

export default function SmeCoreAreasGrid({ items }: { items: SmeCoreAreaItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => {
        const { head, rest } = titleParts(item.title, item.highlight);
        const body = item.desc || item.description || "";
        return (
          <div
            key={index}
            className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  <span className="text-[#b81c1c]">{head}{rest ? " " : ""}</span>
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
              <p className="text-xs text-gray-600 leading-relaxed">
                {body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}