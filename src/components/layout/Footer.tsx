import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import GetFreeQuoteButton from "../common/GetFreeQuoteButton";

export default function Footer() {
  const serviceLinks = [
    { label: "Research Services", href: "#research" },
    { label: "Physician Writing", href: "#physician" },
    { label: "Publication Support", href: "#support" },
    { label: "Scientific Communication", href: "#scientific" },
    { label: "Editing and Translation", href: "#editing" },
    { label: "Data Analytics", href: "#analytics" },
    { label: "Education Content", href: "#education" },
    { label: "Medical Data Collection", href: "#medical" },
  ];

  const aboutLinks = [
    { label: "Meet the Team", href: "#team" },
    { label: "Subject areas", href: "#subjects" },
    { label: "Therapeutic Expertise", href: "#therapeutic" },
    { label: "Strategic Partnership", href: "#strategic" },
    { label: "Contact us", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  const moreLinks = [
    { label: "Subjects", href: "#more-subjects" },
    { label: "Industries", href: "#industries" },
    { label: "Global Partner Program", href: "#partner" },
    { label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Academy", href: "#academy" },
    { label: "Our SampleWork", href: "#samplework" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <footer className="w-full bg-[#0a2923] text-gray-300 font-sans select-none relative pt-10 pb-6">
      <Container className="w-full max-w-7xl flex flex-col">
        {/* 1. TOP PORTION: Floating Speech-Bubble Call to Action */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-16 mt-4">
          {/* Asymmetric Rounded Banner Box */}
          <div className="bg-white text-gray-900 px-8 py-6 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-sm rounded-br-sm max-w-2xl flex-grow shadow-md">
            <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-snug">
              Whether you're stuck or just want some tips on where to start, hit
              up our experts anytime.
            </h3>
          </div>

          {/* Action Button */}
         {/* <GetFreeQuoteButton/> */}
        </div>

        {/* 2. MIDDLE PORTION: Main Footer Directory Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 border-b border-gray-700/40 pb-12">
          {/* Brand & Description Column (4/12 width) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Main Brand Logo Graphic */}
            <div className="bg-white/10 p-2 rounded-sm mb-6 max-w-[200px] border border-white/5 relative w-full aspect-[4/1]">
              <Image
                src="/images/WhoWeWorkFor/image-1.webp"
                alt="Pubrica Knowledge Works"
                fill
                priority
                sizes="(max-width: 768px) 200px, 200px"
                className="object-contain"
              />
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Connect With Pubrica
            </h4>

            <p className="text-[12px] leading-relaxed text-gray-400 font-normal max-w-sm">
              Pubrica offers high quality evidence-based global research,
              analyses, publication, and scientific communication support
              services to researchers and industries across the globe. Our
              growing team is comprised of researchers and industry
              professionals working together to resolve the most critical issues
              facing scientific publishing.
            </p>
          </div>

          {/* Services Dynamic Navigation Column (2/12 width) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-5 font-display tracking-tight">
              Services
            </h4>
            <ul className="space-y-3.5 pl-0 list-none">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[12px] text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 stroke-[3] text-gray-500 group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About us Navigation Column (2/12 width) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-5 font-display tracking-tight">
              About us
            </h4>
            <ul className="space-y-3.5 pl-0 list-none">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[12px] text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 stroke-[3] text-gray-500 group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Navigation Column (2/12 width) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-sm font-bold text-white mb-5 font-display tracking-tight">
              More
            </h4>
            <ul className="space-y-3.5 pl-0 list-none">
              {moreLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[12px] text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 stroke-[3] text-gray-500 group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Accreditations Column (2/12 width) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-5">
            {/* ICMJE Badge */}
            <div className="bg-white/95 p-1.5 rounded-sm max-w-[140px] w-full relative aspect-[3/1]">
              <Image
                src="/images/compliance/icmje.png"
                alt="ICMJE Member"
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>

            {/* COPE Badge */}
            <div className="bg-white/10 p-2 border border-white/5 rounded-sm max-w-[140px] w-full relative aspect-[3/1]">
              <Image
                src="/images/compliance/cope.png"
                alt="COPE Compliance"
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>

            <p className="text-[10px] leading-relaxed text-gray-400 font-normal">
              Committed to the COPE & ICMJE guidelines
            </p>

            {/* Certifications Row (ISO & D&B) */}
            <div className="flex items-center gap-2 mt-2">
              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center p-1 border border-white/5 relative">
                <Image
                  src="/images/compliance/dnb.png"
                  alt="D&B Verified"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center p-1 border border-white/5 relative">
                <Image
                  src="/images/compliance/iso.png"
                  alt="ISO 9001 Certified"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM PORTION: Trust Seals & Badges Wrap Bar */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Trusted Site Badge */}
          <div className="bg-white/95 px-3 py-1 rounded-sm max-w-[120px] w-full relative aspect-[2.5/1]">
            <Image
              src="/images/trust/trustedsite.png"
              alt="Trusted Site Certified"
              fill
              sizes="120px"
              className="object-contain"
            />
          </div>

          {/* GoDaddy Verified & Secured */}
          <div className="bg-white/10 border border-white/5 px-3 py-1 rounded-sm max-w-[140px] w-full relative aspect-[2.5/1]">
            <Image
              src="/images/trust/godaddy.png"
              alt="GoDaddy Verified & Secured"
              fill
              sizes="140px"
              className="object-contain"
            />
          </div>

          {/* McAfee Secure */}
          <div className="bg-white/95 px-3 py-1 rounded-sm max-w-[120px] w-full relative aspect-[2.5/1]">
            <Image
              src="/images/trust/mcafee.png"
              alt="McAfee Secure"
              fill
              sizes="120px"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
