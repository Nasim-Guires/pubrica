import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronsRight } from "lucide-react";
import type {
  BannerStyle,
  NewsIndustryPage,
  StudyGuidePage,
  TemplatePage,
  ZoomCard,
  ZoomGridPage,
} from "@/lib/insights/cardPages";

/*
 * Layouts for the Insights "All News" card pages, matching the live
 * pubrica.com pages (measured at desktop width): a teal title banner, then a
 * 1120px content column. Scoped to Insights — not used anywhere else.
 */

const CONTAINER = "mx-auto w-full max-w-[1120px] px-4 xl:px-0";
const PAGE = "bg-[#fcfcfc] font-sans pb-16";
const H1 = "text-center text-[31px] font-semibold leading-[42px] text-white";
const GRADIENT_LIGHT = "linear-gradient(180deg, #326a6a 0%, rgba(171, 201, 201, 0.31) 100%)";
const GRADIENT_DARK = "linear-gradient(180deg, #326a6a 0%, rgba(28, 84, 84, 0.42) 100%)";

/** Title banner: the H1 sits inside a thin outlined box, as on the live pages. */
function TitleBanner({ heading, style }: { heading: string; style: BannerStyle }) {
  if (style === "wide") {
    // Proof Reading / Medical Journey: outlined box spans the full width (10px inset).
    return (
      <section style={{ backgroundImage: GRADIENT_DARK }} className="pt-[27px] pb-[38px] px-[10px]">
        <div className="border border-white py-[38px] px-[5px]">
          <h1 className={H1}>{heading}</h1>
        </div>
      </section>
    );
  }
  const solid = style === "solid";
  return (
    <section
      style={solid ? { backgroundColor: "#326a6a" } : { backgroundImage: GRADIENT_LIGHT }}
      className={solid ? "pt-[52px] pb-[35px]" : "py-[35px]"}
    >
      <div className={CONTAINER}>
        <div className="border border-[#e1e1e1] py-[18px] px-[5px]">
          <h1 className={H1}>{heading}</h1>
        </div>
      </div>
    </section>
  );
}

function ZoomCardItem({ card, centeredExcerpt }: { card: ZoomCard; centeredExcerpt?: boolean }) {
  const image = card.image && (
    <div className="relative h-[130px] w-full overflow-hidden">
      <Image
        src={card.image}
        alt={card.alt}
        fill
        sizes="(max-width: 768px) 100vw, 280px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
  return (
    <div className="group self-start bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.5)]">
      {card.imageHref ? (
        <a href={card.imageHref} target="_blank" rel="noopener">
          {image}
        </a>
      ) : (
        image
      )}
      <div className="p-5">
        {card.href ? (
          <Link href={card.href} className="block">
            <div className="text-[17px] font-semibold leading-[28px] text-[#113839]">{card.title}</div>
          </Link>
        ) : (
          <div className="text-[17px] font-semibold leading-[28px] text-[#113839]">{card.title}</div>
        )}
        <p
          className={`mt-[10px] text-[13px] leading-[19.5px] text-black/[0.68] ${centeredExcerpt ? "text-center" : "text-left"}`}
        >
          {card.excerpt}
        </p>
        <div className="mt-[30px] flex justify-end">
          {card.arrowHref ? (
            <a href={card.arrowHref} target="_blank" rel="noopener" className="text-[30px] leading-[19.5px] text-[#0089f7]">
              ⮕
            </a>
          ) : (
            <span className="text-[30px] leading-[19.5px] text-[#0089f7]">⮕</span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Research Services, Proof Reading, Experimental Methodology, Medical Journey. */
export function ZoomGridCardPage({ page }: { page: ZoomGridPage }) {
  const cols = page.columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <div className={PAGE}>
      <TitleBanner heading={page.heading} style={page.banner} />
      <section className={`${CONTAINER} pt-[40px]`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-x-[30px] gap-y-[60px] xl:px-[10px]`}>
          {page.cards.map((card, i) => (
            <ZoomCardItem key={`${card.title}-${i}`} card={card} centeredExcerpt={page.centeredExcerpt} />
          ))}
        </div>
      </section>
    </div>
  );
}

/** Study Guide: banner with intro, then a list of linked guides. */
export function StudyGuideCardPage({ page }: { page: StudyGuidePage }) {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#4c8375] pt-[28px] pb-[21px] px-4">
        <div className="mx-auto max-w-[1120px] border border-white px-8 py-10 sm:px-12 text-center text-white">
          <h1 className="text-[31px] font-semibold leading-[42px] mb-6">{page.heading}</h1>
          <p className="text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">{page.intro}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{page.subtitle}</p>
      </section>

      <section className="max-w-[1120px] mx-auto px-4 xl:px-0 pb-20">
        <ul className="flex flex-col gap-[10px]">
          {page.items.map((item, i) => (
            <li key={`${item.href}-${i}`}>
              <Link
                href={item.href}
                className="block bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-5 py-5 shadow-sm hover:shadow-md transition-all duration-200 text-[#0089f7] hover:text-blue-700 text-base"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

/** Template: dark banner, cards with a preview image and a "View Template" PDF button. */
export function TemplateCardPage({ page }: { page: TemplatePage }) {
  return (
    <div className={PAGE}>
      <section
        style={{ backgroundImage: "linear-gradient(180deg, rgba(17, 56, 57, 0.46) 0%, #113839 100%)" }}
        className="pt-[82px] pb-[45px]"
      >
        <div className={CONTAINER}>
          <div className="border border-white py-[38px] px-[5px]">
            <h1 className="text-center text-[45px] font-semibold leading-[42px] text-white">{page.heading}</h1>
          </div>
        </div>
      </section>

      <section className={`${CONTAINER} pt-[30px]`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[20px] gap-y-[35px]">
          {page.cards.map((card) => (
            <div
              key={card.pdf}
              className="self-start flex flex-col items-center bg-[#fbfcfc] p-[10px] pb-[19px] shadow-[0_0_10px_0_rgba(0,0,0,0.5)]"
            >
              {card.image && (
                <div className="relative h-[264px] w-full">
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 768px) 100vw, 240px" className="object-fill" />
                </div>
              )}
              <h6 className="mt-[48px] text-center text-[15px] font-bold leading-[26px] text-[#161922]">{card.title}</h6>
              <a
                href={card.pdf}
                className="mt-[48px] rounded-[15px] bg-[#113839] px-6 py-3 text-[15px] font-medium leading-[15px] text-white shadow-[0_0_10px_0_rgba(0,0,0,0.5)]"
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/** News & Industry: rounded banner, categories sidebar, 3-column post grid. */
export function NewsIndustryCardPage({ page }: { page: NewsIndustryPage }) {
  return (
    <div className={PAGE}>
      <div className={`${CONTAINER} pt-4`}>
        <section
          style={{ backgroundImage: GRADIENT_DARK }}
          className="rounded-[5px] py-[41px] px-[5px]"
        >
          <h1 className={H1}>{page.heading}</h1>
        </section>

        <div className="mt-[34px] flex flex-col md:flex-row gap-[30px] md:gap-[5px]">
          <aside className="md:w-[225px] md:shrink-0">
            <h2 className="text-[20px] font-semibold leading-[20px] text-[#303030]">{page.sidebarHeading}</h2>
            <ul className="mt-[20px] flex flex-col gap-[4px]">
              {page.categories.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="flex items-center gap-[6px] py-[4px] text-[16px] font-medium text-[#54595f]">
                    <ChevronsRight className="h-[14px] w-[14px] shrink-0" aria-hidden />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[30px] md:pl-[25px]">
            {page.posts.map((post) => (
              <article key={post.href} className="self-start bg-white shadow-[0_0_2px_0_rgba(0,0,0,0.3)]">
                <Link href={post.href} className="relative block h-[150px] w-full overflow-hidden">
                  {post.image && (
                    <Image src={post.image} alt={post.alt} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover" />
                  )}
                </Link>
                <div className="px-[15px] pt-[15px] pb-[20px]">
                  <h4 className="text-[19px] font-semibold leading-[24.7px] text-[#161922]">
                    <Link href={post.href}>{post.title}</Link>
                  </h4>
                  <div className="mt-[20px] flex items-center gap-[8px] text-[15px] font-light leading-[15px] text-[#646464]">
                    <Calendar className="h-[13px] w-[13px]" aria-hidden />
                    <a href={post.dateHref}>{post.date}</a>
                  </div>
                  <p className="mt-[13px] text-[15px] leading-[28px] text-[#626262]">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
