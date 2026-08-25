import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ----------------------------------------------------------------------------
// SEO METADATA
// ----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Strategic Partnerships & Memberships | Pubrica",
  description:
    "Pubrica has alliances with several institutions and is a member of many elite organizations including ALPSP, STM, SSP, CASE, and KCSE. Learn more about our strategic partnerships and memberships in scholarly publishing.",
  keywords: [
    "Pubrica partnerships",
    "Pubrica memberships",
    "ALPSP",
    "STM",
    "Society for Scholarly Publishing",
    "SSP",
    "Council of Asian Science Editors",
    "CASE",
    "Korean Council of Science Editors",
    "KCSE",
    "scholarly publishing partnerships",
  ],
  alternates: {
    canonical: "https://pubrica.com/strategic-partnerships-memberships/",
  },
  openGraph: {
    title: "Strategic Partnerships & Memberships | Pubrica",
    description:
      "Pubrica has alliances with several institutions and is a member of many elite organizations including ALPSP, STM, SSP, CASE, and KCSE.",
    url: "https://pubrica.com/strategic-partnerships-memberships/",
    siteName: "Pubrica",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Partnerships & Memberships | Pubrica",
    description:
      "Pubrica has alliances with several institutions and is a member of many elite organizations including ALPSP, STM, SSP, CASE, and KCSE.",
  },
};

// ----------------------------------------------------------------------------
// STATIC DATA
// ----------------------------------------------------------------------------
type Partner = {
  name: string;
  description: string;
  source: string;
  sourceHref: string;
  logoSrc?: string; // Optional image source
  logoAlt?: string; // Optional alt text
};

const partners: Partner[] = [
  {
    name: "Association of Learned and Professional Society Publishers (ALPSP)",
    description:
      "ALPSP is an international membership trade body that supports and represents not-for-profit organizations and institutions that publish scholarly and professional content. Their mission is to connect, inform, develop, and represent the international scholarly and professional publishing community.",
    source: "www.alpsp.org",
    sourceHref: "https://www.alpsp.org",
    logoSrc: "/images/academy/alpsp-logo.png",
    logoAlt: "ALPSP Logo",
  },
  {
    name: "STM",
    description:
      "STM is the leading global trade association for academic and professional publishers. STM aims to assist publishers and their authors in their activities in disseminating the results of research in the fields of science, technology, and medicine, assist national and international organizations/communications industries in the electronic environment for improving the dissemination, storage, and retrieval of scientific, technical, and medical information; and carry out the foregoing work in conjunction with the International Publishers Association (IPA) and other governmental and professional bodies. STM participates in the development of information identification protocols and electronic copyright management systems.",
    source: "www.stm-assoc.org",
    sourceHref: "https://www.stm-assoc.org",
    logoSrc: "/images/academy/stm-logo.webp",
    logoAlt: "STM Logo",
  },
  {
    name: "Society for Scholarly Publishing (SSP)",
    description:
      "The Society for Scholarly Publishing (SSP), founded in 1978, is a non-profit organization formed to promote and advance communication among all sectors of the scholarly publication community through networking, information dissemination, and facilitation of new developments in the field.",
    source: "www.sspnet.org",
    sourceHref: "https://www.sspnet.org",
    // Omitted logoSrc & logoAlt so no image box renders
  },
  {
    name: "Council of Asian Science Editors (CASE)",
    description:
      "CASE is a non-governmental and non-profit organization that aims to improve the quality of science research journals published in Asia by consulting regulations on the editing and sharing of information about editing and publishing such journals, thereby contributing to the development of science and human well-being.",
    source: "www.asianeditor.org",
    sourceHref: "https://www.asianeditor.org",
    logoSrc: "/images/academy/case-logo.webp",
    logoAlt: "CASE Logo",
  },
  {
    name: "Korean Council of Science Editors (KCSE)",
    description:
      "KCSE was founded with a vision to improve the quality and international status of the scientific journals published in Korea. KCSE has provided various professional development programs to editors, authors, reviewers, and manuscript editors, which include the organization of many workshops and training programs for editors as well as workshops devoted to publication and research ethics.",
    source: "www.kcse.org",
    sourceHref: "https://www.kcse.org",
    logoSrc: "/images/academy/kcse-logo.webp",
    logoAlt: "KCSE Logo",
  },
];

const sidebarLinks: { label: string; href: string }[] = [
  { label: "Meet the Experts", href: "/subject-matter-experts" },
  { label: "Subject Area", href: "/subject-matter-experts" },
  { label: "Therapeutic Expertise", href: "/therapeutic-expertise/" },
  { label: "Global Partners and Membership", href: "/strategic-partnerships-memberships/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Careers", href: "/careers/" },
];

// ----------------------------------------------------------------------------
// JSON-LD STRUCTURED DATA
// ----------------------------------------------------------------------------
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pubrica",
    url: "https://pubrica.com",
    memberOf: partners.map((p) => ({
      "@type": "Organization",
      name: p.name,
      url: p.sourceHref,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ----------------------------------------------------------------------------
// PAGE
// ----------------------------------------------------------------------------
export default function StrategicPartnershipsMembershipsPage() {
  return (
    <>
      <StructuredData />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative flex items-center justify-center bg-gradient-to-b from-[#0e1a17] to-[#132420] py-20 px-4 text-center">
          <div className="w-full max-w-xl border border-white/25 px-8 py-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white">
              Strategic Alliances
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/80">
              Partners &amp; members
            </p>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row">
          {/* Sidebar */}
          <aside className="md:w-72 shrink-0">
            <div className="mb-4 flex items-center gap-2">
              <span aria-hidden className="text-amber-500">
                ★
              </span>
              <h2 className="text-lg font-bold tracking-wide text-slate-800">
                About Us
              </h2>
            </div>
            <hr className="mb-4 border-slate-200" />
            <nav aria-label="About Us navigation">
              <ul className="space-y-2">
                {sidebarLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between bg-slate-100 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:bg-slate-200"
                    >
                      {link.label}
                      <span aria-hidden className="text-slate-400">
                        +
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900">
              Strategic partnerships &amp; memberships
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Pubrica has alliance with several institutions and is also a
              member of many elite institutions. A list of our partners and
              members is mentioned below. Corporates, publishers, journals,
              and universities keen on membership or a strategic partnership
              may email us at{" "}
              <a
                href="mailto:partnership@pubrica.com"
                className="text-sky-700 underline hover:text-sky-800"
              >
                partnership@pubrica.com
              </a>{" "}
              (strategic partnership). See the descriptions below for more
              information on our partnership.
            </p>

            <div className="mt-8 space-y-6">
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="flex flex-col gap-4 bg-slate-100 p-6 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {partner.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {partner.description}
                    </p>
                    <p className="mt-3 text-sm">
                      <span className="font-bold text-slate-900">
                        Source:{" "}
                      </span>
                      <a
                        href={partner.sourceHref}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-sky-700 underline hover:text-sky-800"
                      >
                        {partner.source}
                      </a>
                    </p>
                  </div>

                  {/* Render logo container only if logoSrc is defined */}
                  {partner.logoSrc && (
                    <div className="relative flex h-20 w-40 shrink-0 items-center justify-center bg-white p-2 border border-slate-200 rounded">
                      <Image
                        src={partner.logoSrc}
                        alt={partner.logoAlt || partner.name}
                        width={160}
                        height={80}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* CTA */}
            <section className="mt-10 bg-slate-100 px-6 py-12 text-center">
              <h2 className="text-2xl font-bold text-emerald-800">
                With Pubrica, your paper is in safe hands
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-700">
                Simply fill out the quotation form and we will get back to
                you within 1 hour with an accurate price and delivery time.
              </p>
              <Link
                href="/order-now"
                className="mt-6 inline-flex items-center gap-2 bg-emerald-800 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-emerald-900"
              >
                Get a Quote
                <span aria-hidden>→</span>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}