"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  Search,
  CheckCircle2,
} from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/helpers";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<string>("AI and ML Services");

  return (
    <>
      <div className="bg-[#073632] pt-3 px-4 lg:px-8 relative z-50">
        <div className="max-w-7xl mx-auto bg-white rounded-t-xl shadow-xl">
          {/* Top Contact Strip */}
          <div className="hidden lg:block bg-[#073632] text-white text-xs py-2.5 border-b border-[#0b4641] px-6 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-200">
                <a href="mailto:sales@pubrica.com" className="flex items-center gap-1.5 hover:text-white transition-colors font-medium">
                  <Mail className="h-3.5 w-3.5 text-gray-300" /> sales@pubrica.com
                </a>
                <span className="text-gray-500">|</span>
                <a href="tel:+919884350006" className="flex items-center gap-1.5 hover:text-white transition-colors font-medium">
                  <Phone className="h-3.5 w-3.5 text-gray-300" /> +91 9884350006
                </a>
                <span className="text-gray-500">|</span>
                <a href="tel:+19725029262" className="flex items-center gap-1.5 hover:text-white transition-colors font-medium">
                  <Phone className="h-3.5 w-3.5 text-gray-300" /> +1-972-502-9262
                </a>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3.5 text-gray-300">
                  <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                    <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="X">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center bg-white text-gray-900 px-4 py-1.5 rounded font-bold text-xs tracking-wide hover:bg-gray-100 transition-colors cursor-pointer">
                    Get Expert Help &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Navigation Bar */}
          <nav className="w-full bg-white transition-all duration-300 px-6 py-4 rounded-b-xl relative">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="w-[180px] h-[52px] relative flex items-center justify-center">
                  <Image
                    src="/images/pub-logo.webp"
                    alt="Pubrica Logo"
                    width={180}
                    height={52}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                  if (link.dropdown) {
                    const selectedSubItem = link.dropdown.find((item) => item.label === activeSubcategory) || link.dropdown[8]; // Defaulting to AI & ML Services index if available

                    return (
                      <div key={link.label} className="relative group px-2.5 py-2">
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center gap-0.5 text-[15px] font-semibold text-[#073632]/90 hover:text-[#073632] transition-colors",
                            isActive && "text-[#073632] font-bold"
                          )}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
                        </Link>

                        {/* Mega Menu Container matching reference image layout */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[750px] rounded-md bg-white shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[100] flex">
                          
                          {/* Left Column: Vertical Sub-links list */}
                          <div className="w-[340px] py-2 border-r border-gray-200 max-h-[460px] overflow-y-auto">
                            {link.dropdown.map((sublink) => {
                              const isSubSelected = activeSubcategory === sublink.label;
                              return (
                                <div
                                  key={sublink.href}
                                  onMouseEnter={() => setActiveSubcategory(sublink.label)}
                                  className={cn(
                                    "flex items-center justify-between px-5 py-2.5 text-xs font-medium cursor-pointer transition-colors",
                                    isSubSelected 
                                      ? "bg-gray-200/70 text-gray-900 font-semibold" 
                                      : "text-gray-700 hover:bg-gray-100"
                                  )}
                                >
                                  <Link href={sublink.href} className="w-full flex items-center justify-between">
                                    <span>{sublink.label}</span>
                                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                                  </Link>
                                </div>
                              );
                            })}
                          </div>

                          {/* Right Column: Dynamic Content Box */}
                          <div className="flex-1 p-6 bg-white flex flex-col justify-between">
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 mb-4">
                                {selectedSubItem?.label || "AI & ML Solutions"}
                              </h3>

                              {/* Hardcoded or dynamic bullet list matching the AI & ML layout style from image */}
                              <div className="space-y-2.5">
                                {selectedSubItem?.children ? (
                                  selectedSubItem.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium"
                                    >
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" />
                                      <span>{child.label}</span>
                                    </Link>
                                  ))
                                ) : (
                                  <>
                                    <Link href="#" className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" /> Health Economics
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" /> Patient journey & Insights -ML
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" /> Segmentation
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" /> Predictive Analysis
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" /> Algorithm Development
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 text-xs text-[#0066cc] hover:underline font-medium">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0066cc]" /> Interpretation & Visualisation
                                    </Link>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Sample Work Box matching second reference screenshot */}
                            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between bg-white">
                              <div className="border border-gray-200 rounded p-1 bg-white shadow-sm w-[180px]">
                                <div className="bg-[#073632] text-white text-[10px] font-bold px-2 py-1 mb-1 text-center">
                                  Sample Work
                                </div>
                                <div className="h-16 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                                  <div className="w-full h-full bg-gradient-to-r from-purple-900 via-teal-800 to-orange-600 opacity-80 flex items-end p-1">
                                    <div className="w-full bg-black/40 h-3 text-[8px] text-white flex items-center justify-center">Charts & Graphs</div>
                                  </div>
                                </div>
                                <span className="text-[9px] text-gray-500 font-semibold block text-center mt-1">{selectedSubItem?.label || "AI and ML Services"}</span>
                              </div>

                              <Link
                                href="/contact"
                                className="bg-[#073632] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#052623] transition-colors self-end"
                              >
                                Request Sample
                              </Link>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-2.5 py-2 text-[15px] font-semibold text-[#073632]/90 hover:text-[#073632] transition-colors rounded-md",
                        isActive && "text-[#073632] font-bold"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Right Search Action */}
              <div className="hidden lg:flex items-center gap-2">
                <button className="p-2.5 text-gray-700 hover:text-[#073632] hover:bg-gray-50 rounded-md transition-colors border border-gray-100 shadow-sm focus:outline-none" aria-label="Search">
                  <Search className="h-[18px] w-[18px] stroke-[2.5]" />
                </button>
              </div>

              {/* Mobile Menu Trigger */}
              <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
                <Menu className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}