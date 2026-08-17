import Image from "next/image";
import { isValidElement, type ReactNode } from "react";
import { ChevronDown, ChevronUp, type LucideIcon } from "lucide-react";

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
  return <Icon className="w-5 h-5 text-gray-700 shrink-0" />;
}

export default function SmeCoreAreasGrid({ items }: { items: SmeCoreAreaItem[] }) {
  return (
    <>
      <style>{`
        .card-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .card-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1e2e2b;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const { head, rest } = titleParts(item.title, item.highlight);
          const body = item.desc || item.description || "";
          return (
            <div
              key={index}
              className="bg-white border border-gray-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex justify-between gap-3 h-48 relative"
            >
              <div className="flex-1 flex flex-col min-w-0">
                <h3 className="text-xs font-bold text-gray-900 leading-snug shrink-0 mb-2">
                  <span className="text-[#b81c1c]">{head}{rest ? " " : ""}</span>
                  {rest}
                </h3>
                <div className="flex-1 overflow-y-auto card-scrollbar pr-2 text-[11px] text-gray-500 leading-relaxed max-h-28">
                  <p>{body}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between flex-shrink-0 w-8 border-l border-gray-100 pl-2 pointer-events-none">
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
                <div className="flex flex-col items-center justify-between h-24 my-1">
                  <ChevronUp className="w-3 h-3 text-gray-400" />
                  <div className="w-1 flex-1 my-1 bg-gray-200 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 w-full h-1/2 bg-gray-800 rounded-full" />
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
