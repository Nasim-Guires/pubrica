import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/common/HeroBanner";
import { PlusCircle } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: 'Advanced Clinical Therapeutics Research Topics',
  description: 'Explore advanced clinical therapeutics research with focus on therapeutic areas, drug development, clinical trials, and patient care innovations.',
  keywords: [],
  slug: '/therapeutic-expertise/',
})

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  href?: string;
  subItems?: NavSubItem[];
}

const sidebarLinks: NavLinkItem[] = [
  {
    id: "experts",
    label: "MEET THE EXPERTS",
    subItems: [
      { id: "our-editors", label: "OUR EDITORS", href: "/about-us/our-editors" },
      { id: "editor-profile", label: "EDITOR PROFILE", href: "/scientific-editor-profile" },
      { id: "editor-speak", label: "EDITOR SPEAK", href: "/editor-speak" },
    ],
  },
  {
    id: "subject",
    label: "SUBJECT AREA",
    subItems: [
      { id: "medicine", label: "MEDICINE", href: "/about-us/medicine" },
      { id: "life-science", label: "LIFE SCIENCE", href: "/about-us/life-sciences" },
      { id: "physical-sciences", label: "PHYSICAL SCIENCES AND ENGINEERING", href: "/about-us/physical-sciences-engineering" },
    ],
  },
  {
    id: "therapeutic",
    label: "THERAPEUTIC EXPERTISE",
    href: "/therapeutic-expertise",
  },
  {
    id: "membership",
    label: "GLOBAL PARTNERS AND MEMBERSHIP",
    href: "/strategic-partnerships-memberships",
  },
  {
    id: "contact",
    label: "CONTACT US",
    href: "/contact",
  },
  {
    id: "careers",
    label: "CAREERS",
    href: "/careers",
  },
];

export default function TherapeuticExpertisePage() {
  const focusAreas = [
    "Cardiovascular",
    "Psychiatry",
    "Pediatric",
    "Rheumatology",
    "Gastroenterology",
    "Nutritional & metabolic diseases",
    "Gynecology and obstetrics",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Banner */}
      <HeroBanner
        title="Therapeutic Expertise"
        description="Niche areas"
        headingAs="h1"
      />

      {/* Main Layout */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Sidebar */}
          <aside className="lg:col-span-3 w-full">
            <div className="flex items-center gap-2 mb-6">
              <span aria-hidden className="text-amber-500 text-lg">★</span>
              <h2 className="text-xl font-bold text-[#1b2b28]">
                About Us
              </h2>
            </div>

            <nav className="border-t border-gray-200 pt-6 space-y-4">
              {sidebarLinks.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;

                if (hasSubItems) {
                  return (
                    <details key={item.id} className="group space-y-2">
                      <summary className="w-full flex items-center gap-3 text-xs font-bold text-[#1b2b28] cursor-pointer list-none hover:opacity-80 transition-opacity">
                        <span className="w-6 h-6 bg-[#80878a] group-open:bg-[#e2a800] text-white flex items-center justify-center text-sm font-bold shrink-0">
                          <span className="group-open:hidden">+</span>
                          <span className="hidden group-open:inline">−</span>
                        </span>
                        <span className="tracking-wider uppercase">{item.label}</span>
                      </summary>

                      <div className="pl-9 space-y-2 pt-1">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.href}
                            className="flex items-center gap-2 text-xs font-bold text-[#0088cc] hover:underline"
                          >
                            <span>•</span>
                            <span className="uppercase">{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </details>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href || "#"}
                    className="flex items-center gap-3 text-xs font-bold text-[#1b2b28] hover:opacity-80 transition-opacity"
                  >
                    <span className="w-6 h-6 bg-[#80878a] text-white flex items-center justify-center text-sm font-bold shrink-0">
                      +
                    </span>
                    <span className="tracking-wider uppercase">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9 w-full space-y-10">

            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1b2b28]">
                Clinical research in therapeutics
              </h2>

              <h3 className="text-sm font-bold text-gray-800">
                Outsource or salvage a faltering trial
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                We offer comprehensive therapeutic expertise across a wide variety of indications. Pubrica <Link href="/services/editing-and-translation/scientific-editing/" className="text-blue-600">Scientific Writing</Link> & Publication adapts clinical trial services for specific requirements; we provide complete program development and delivery services for any phase of the trial that you either want to outsource or salvage a faltering trial. Let our experts have their say through new concepts and innovative methods. Our team comprises clinical research associates, project managers, medical supervisors, data management experts, biostatisticians, and medical writers—available at every phase—including trial planning, design, protocol development, safety narratives, in-house data summaries, safety surveillance plan, Case Report Form (CRF), site selection, data analysis, and regulatory submissions. Hence, design cost-effective clinical research trials that deliver data you need to support your novel therapies.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Therapeutic area expertise is particularly important as pharmaceutical and nutraceutical companies develop new classes of compounds that target complex and difficult diseases. Our experts have a say in therapeutic clinical trials; Pubrica Scientific Writing & Publishing has completed holistic projects in the area of CRO therapeutics for pharmaceutical, and biotechnology firms. Our work in therapeutics spans across multiple specializations.
              </p>
            </section>

            {/* Infographic Placeholder */}
            <section className="flex justify-center">
              <div className="w-full max-w-2xl h-96 relative bg-gray-100 border-2 border-gray-400 rounded-lg overflow-hidden">
                <Image
                  src="/images/academy/cns-shart-01-1021x1024.jpg"
                  alt="Niche Therapeutic Services Diagram"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 672px"
                />
              </div>
            </section>

            {/* Service Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Scientific & Medical Communication",
                "Upgradation of Services",
                "Research Services"
              ].map((item) => (
                <div
                  key={item}
                  className="
                    bg-[#1b2b28]
                    text-white
                    rounded
                    py-3
                    px-4
                    text-center
                    text-sm
                    font-semibold
                  "
                >
                  {item}
                </div>
              ))}
            </section>

            {/* Focus Areas */}
            <section className="border-t border-gray-200 pt-6 space-y-4">
              <h3 className="font-bold text-[#1b2b28]">
                Top areas of therapeutic focus include but not limited to:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <PlusCircle className="w-4 h-4 text-[#1b2b28]" />
                    {area}
                  </li>
                ))}
              </ul>
            </section>

            {/* Research Wheel Placeholder */}
            <section className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#1b2b28] mb-4">
                Top Areas of Research
              </h3>

              <div className="h-80 relative bg-gray-100 border-2 border-gray-400 rounded-lg overflow-hidden">
                <Image
                  src="/images/academy/circle-1-1024x441.png"
                  alt="Research Wheel Chart"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}