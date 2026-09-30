import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { MoveRight } from "lucide-react";
import { CTA, META_DESCRIPTION, SECTIONS, SERVICE_ROWS, TITLE } from "./content";

// Dedicated page for this one Call for Papers URL, matching the live
// pubrica.com page. It takes precedence over call-for-papers/[slug] for this
// URL only; the shared [slug] template and the other detail pages are unchanged.

export const metadata: Metadata = {
  title: { absolute: `${TITLE} - Pubrica` },
  description: META_DESCRIPTION,
};

export default function VaccineDevelopmentCallForPaperPage() {
  return (
    <div className="bg-[#f7f7f7] font-sans">
      {/* Banner */}
      <section
        style={{ backgroundImage: "linear-gradient(180deg, rgba(17, 56, 57, 0.46) 0%, #113839 100%)" }}
        className="px-4 pt-[60px] pb-[25px]"
      >
        <div className="mx-auto max-w-[1120px] border border-white px-4 py-[31px] md:px-[98px]">
          <h1 className="text-center text-[31px] font-semibold leading-[42px] text-white">{TITLE}</h1>
        </div>
      </section>

      {/* Article */}
      <section className="px-4 pt-[10px] pb-[30px] xl:px-0">
        <div className="mx-auto max-w-[1120px] xl:px-[10px]">
          {SECTIONS.map((section, i) => (
            <div key={section.label}>
              <p className={`text-[20px] font-semibold leading-[40px] text-[#113839] ${i > 0 ? "mt-[10px]" : ""}`}>
                {section.label}
              </p>
              <p className="text-[16px] leading-[25px] text-[#282f3b]">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mx-auto mt-[30px] max-w-[1120px] rounded-[20px] bg-white p-[20px] shadow-[0_0_5px_0_rgba(0,0,0,0.5)]">
          <h2 className="mb-[15px] text-center text-[25px] font-medium leading-[50px] text-[#161922]">{CTA.heading}</h2>
          <p className="text-center text-[16px] leading-[26px] text-[#282f3b]">{CTA.text}</p>
          <div className="mt-[20px] flex justify-center">
            <a
              href={CTA.href}
              target="_blank"
              className="inline-flex items-center gap-[5px] rounded-[3px] bg-[#113839] px-[15px] py-[12px] text-[15px] font-medium leading-[15px] text-white"
            >
              {CTA.buttonText}
              <MoveRight className="h-[15px] w-[15px]" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 pt-[10px] pb-[30px] xl:px-0">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-[40px]">
          {SERVICE_ROWS.map((row, r) => (
            <div key={r} className="flex flex-col items-center gap-[20px] md:flex-row md:justify-center">
              {row.map((service) => (
                <div
                  key={service.href}
                  className="flex w-full flex-col items-center rounded-[5px] bg-white px-[20px] py-[15px] text-center shadow-[0_0_5px_0_rgba(0,0,0,0.05)] md:w-[360px] md:min-h-[284px]"
                >
                  <Image src={service.icon} alt="" width={64} height={64} className="h-[64px] w-[64px]" />
                  <h3 className="mt-[9px] text-[18px] font-semibold leading-[40px] text-black">{service.title}</h3>
                  <p className="text-[14px] leading-[23px] text-[#7a7a7a]">{service.text}</p>
                  <a
                    href={service.href}
                    target="_blank"
                    className="mt-[10px] rounded-[4px] bg-white px-[13px] pt-[13px] pb-[12px] text-[14px] font-medium leading-[14px] text-black"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
