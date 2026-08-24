import Image from "next/image";
import Link from "next/link";

interface IndustryItem {
  title: string;
  href: string;
  iconPath: string;
}

const industries: IndustryItem[] = [
  {
    title: "Pharmaceuticals",
    href: "/Industries/pharmaceutical/",
    iconPath: "/images/research-services/product-development/icon-1.png",
  },
  {
    title: "Biotechnology",
    href: "/Industries/biotechnology/",
    iconPath: "/images/research-services/product-development/icon-2.png",
  },
  {
    title: "Nutraceuticals & Dietary Supplements",
    href: "/Industries/",
    iconPath: "/images/research-services/product-development/icon-3.png",
  },
  {
    title: "Herbal/AYUSH products",
    href: "/Industries/",
    iconPath: "/images/research-services/product-development/icon-4.png",
  },
  {
    title: "Functional Foods & Beverages",
    href: "/Industries/",
    iconPath: "/images/research-services/product-development/icon-5.png",
  },
  {
    title: "Medical Devices",
    href: "/Industries/medical-device/",
    iconPath: "/images/research-services/product-development/icon-6.png",
  },
  {
    title: "Cosmetics & Cosmeceuticals",
    href: "/Industries/cosmetics/",
    iconPath: "/images/research-services/product-development/icon-7.png",
  },
  {
    title: "Pet Health & Pet Food",
    href: "/Industries/",
    iconPath: "/images/research-services/product-development/icon-8.png",
  },
  {
    title: "Life Sciences & Healthcare Research",
    href: "/Industries/",
    iconPath: "/images/research-services/product-development/icon-9.png",
  },
];

export default function IndustryVerticals() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3639] mb-10">
          The Industry Vertical We Serve
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[180px]"
            >
              <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
                <Image
                  src={item.iconPath}
                  alt={`${item.title} Icon`}
                  width={56}
                  height={56}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 text-center leading-snug">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/order-now"
            className="inline-block bg-[#b30000] hover:bg-[#8d0000] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-sm md:text-base shadow-md"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}