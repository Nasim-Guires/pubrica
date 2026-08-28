import Image from "next/image";
import { heroBulletPoints } from "@/lib/services/editing-and-translation";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-[40px] font-bold leading-tight text-[#083B3A]">
          Precision Editing & Translation Services for Researchers and Academics
        </h1>

        <p className="mt-3 text-[19px] leading-8 text-slate-600 max-w-6xl">
          From scientific manuscripts to multilingual reports. Our experts
          enhance grammar, style, technical accuracy, and subject-specific
          terminology, making your manuscripts journal-ready, globally
          accessible, and impactful.
        </p>
      </div>

      <div className="relative">
        {/* Floating image */}
        <div className="hidden lg:block float-right ml-12 mb-8 w-[420px]">
          <div className="relative">
            <div className="absolute left-0 top-5 h-[270px] w-7 bg-[#083B3A] rounded-l-2xl" />

            <div className="absolute left-7 bottom-0 h-7 w-[270px] bg-[#083B3A] rounded-b-2xl" />

            <div className="relative ml-6">
              <Image
                src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=387&auto=format&fit=crop"
                alt="Editing Service"
                width={220}
                height={70}
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[17px] leading-8 text-slate-700">
          Pubrica provides{" "}
          <a href="/services/editing-and-translation/manuscript-editing" className="text-[#4180A8]">
            manuscript editing
          </a>{" "}
          and academic translation services tailored for healthcare,
          <a href="/subject-matter-experts/life-sciences" className="text-[#4180A8]">
            {" "}
            life sciences
          </a>
          , and multidisciplinary research. From scientific manuscripts,
          theses, and clinical reports to multilingual translations, our
          experts ensure clarity, accuracy, and journal compliance.
        </p>

        {/* Bullet Points */}
        <ul className="mt-8 space-y-5">
          {heroBulletPoints.map((item) => (
            <li key={item.title} className="flex items-start">
              <span className="mr-4 mt-2 text-red-600 text-lg">•</span>

              <p className="text-[17px] leading-8 text-slate-700">
                <strong>{item.title}:</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <p className="mt-8 text-[17px] leading-8 text-slate-700">
          With native English experts educated in Europe and the US, Pubrica
          transforms complex research into clear, engaging narratives.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-8">
         <GetFreeQuoteButton/>

          <Link href="/uploads/editing-and-translation/Editing-and-Translation-Services.pdf" className="rounded-full bg-[#BA0000] px-8 py-3 text-white font-semibold hover:bg-[#980000]">
            View Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}