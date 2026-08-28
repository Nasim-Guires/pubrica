import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const serviceLinks = [
    { label: "Research Services", href: "/services/research-services" },
    { label: "Physician Writing", href: "/services/physician-writing-services" },
    { label: "Publication Support", href: "/services/publication-support" },
    { label: "Scientific Communication", href: "/services/scientific-communication" },
    { label: "Editing and Translation", href: "/services/editing-and-translation" },
    { label: "Data Analytics", href: "/services/data-analytics-machine-learning" },
    { label: "Education Content", href: "/services/educational-content-development" },
    { label: "Medical Data Collection", href: "/services/medical-data-collection" },
  ];

  const aboutLinks = [
    { label: "Meet the Team", href: "/about-us/our-editors" },
    { label: "Subject areas", href: "/subject-matter-experts" },
    { label: "Therapeutic Expertise", href: "/therapeutic-expertise" },
    { label: "Strategic Partnership", href: "/strategic-partnerships-memberships" },
    { label: "Contact us", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  const moreLinks: { label: string; href: string | null }[] = [
    { label: "Subjects", href: "/subject-matter-experts" },
    { label: "Industries", href: "/industries" },
    { label: "Global Partner Program", href: "/global-partner-program" },
    { label: "FAQ", href: "/faq" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Academy", href: "/academy" },
    { label: "Our SampleWork", href: "/insights/sample-work" },
    { label: "Blog", href: "/blog" },
  ];

  const quickLinks: { label: string; href: string | null }[] = [
    { label: "About Us", href: "/about-us" },
    { label: "Quality Process", href: "/quality" },
    { label: "Journal", href: "/academy/journal-templates" },
    { label: "Publications", href: "/our-published-papers" },
    { label: "Subject Areas", href: "/subject-matter-experts" },
    { label: "FAQ", href: "/faq" },
    { label: "Partnership Solutions", href: "/strategic-partnerships-memberships" },
    { label: "Ethics", href: "/ethics" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Do not sell any Information", href: "/do-not-sell-any-information" },
    { label: "Quality Standards", href: "/quality/quality-assurance" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Condition", href: "/terms-and-condition" },
  ];

  return (
    <footer className="w-full bg-[#031d18] text-gray-300 font-sans select-none relative pb-8">
      {/* 1. TOP PORTION: Speech-Bubble CTA Banner */}
      <div className="w-full bg-[#0e2723] py-14 px-4 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

          {/* Text Box Container */}
          <div className="bg-white text-[#0e2723] px-8 py-6 rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none max-w-2xl shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-snug">
              Whether you're stuck or just want some tips on where to start, hit up our experts anytime.
            </h3>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <Link
              href="/order-now"
              className="bg-white text-[#0e2723] hover:bg-gray-100 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none transition-colors shadow-md inline-block text-center"
            >
              Get a Free Quote
            </Link>
          </div>

        </div>
      </div>

      <Container className="w-full max-w-7xl flex flex-col">
        {/* 2. MIDDLE PORTION: Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 border-b border-gray-700/40 pb-5">
          {/* Brand & Description Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-4">
              <Image
                src="/images/logos/pubrica-logo.webp"
                alt="Pubrica Knowledge Works"
                width={180}
                height={50}
                priority
                className="object-contain h-auto"
              />
            </div>

            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              CONNECT WITH PUBRICA
            </h4>

            <p className="text-[11px] leading-relaxed text-gray-400 font-normal max-w-sm">
              Pubrica offers high quality evidence-based global research,
              analyses, publication, and scientific communication support
              services to researchers and industries across the globe. Our
              growing team is comprised of researchers and industry
              professionals working together to resolve the most critical issues
              facing scientific publishing.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Services
            </h4>
            <ul className="space-y-2.5 pl-0 list-none">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About us Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              About us
            </h4>
            <ul className="space-y-2.5 pl-0 list-none">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              More
            </h4>
            <ul className="space-y-2.5 pl-0 list-none">
              {moreLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                    >
                      <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors" />
                      <span>{link.label}</span>
                    </Link>
                  ) : (
                    <span className="text-[11px] text-gray-500 flex items-center gap-1.5">
                      <ArrowRight className="h-3 w-3 text-gray-600" />
                      <span>{link.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations & Badges Column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-3">
            {/* ICMJE Badge */}
            <div className="w-[120px] h-auto">
              <Image
                src="/images/LOGO-1.webp"
                alt="ICMJE Member"
                width={120}
                height={35}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* COPE Badge */}
            <div className="w-[120px] h-auto">
              <Image
                src="/images/LOGO-COPE-new-1.webp"
                alt="COPE Compliance"
                width={120}
                height={35}
                className="object-contain w-full h-auto"
              />
            </div>

            <p className="text-[10px] leading-tight text-gray-400 font-normal">
              Committed to the COPE & ICMJE guidelines
            </p>

            {/* Certifications (D&B and ISO) */}
            <div className="flex items-center gap-3 mt-1">
              <Image
                src="/images/dandbthumb-1-2.webp"
                alt="D&B Verified"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/iso-9001-2015-min-2.webp"
                alt="ISO 9001 Certified"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. TRUST SEALS BAR */}
        <div className="w-full py-6 flex flex-wrap items-center justify-center gap-4 border-b border-gray-700/40">
          <Image
            src="/images/image-1.webp"
            alt="Trusted Site Certified"
            width={120}
            height={32}
            className="object-contain h-8 w-auto"
          />
          <Image
            src="/images/godaddy-verified.webp"
            alt="GoDaddy Verified & Secured"
            width={130}
            height={32}
            className="object-contain h-8 w-auto"
          />
          <Image
            src="/images/mcfee.webp"
            alt="McAfee Secure"
            width={120}
            height={32}
            className="object-contain h-8 w-auto"
          />
        </div>

        {/* 4. QUICK LINKS & SOCIAL MEDIA */}
        <div className="w-full pt-6 flex flex-col gap-4 border-b border-gray-700/40 pb-6">
          <h4 className="text-xs font-bold text-white tracking-tight">
            Quick Links
          </h4>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-gray-400">
            {quickLinks.map((link, idx) => (
              <React.Fragment key={idx}>
                {link.href ? (
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <span className="text-gray-500">{link.label}</span>
                )}
                {idx < quickLinks.length - 1 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Social Icons (Inline SVGs) */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white text-[#031d18] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-[#031d18] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-white text-[#031d18] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white text-[#031d18] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-7 h-7 rounded-full bg-white text-[#031d18] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 5. FOOTER COPYRIGHT */}
        <div className="pt-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-400">
            © 2026 – Pubrica is a trading name of Guires, a company registered in
            England, Wales and India.
          </p>
        </div>
      </Container>
    </footer>
  );
}