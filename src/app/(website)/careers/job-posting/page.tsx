'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Phone, Mail, ArrowRight } from 'lucide-react';

interface JobItem {
  label: string;
  href: string;
}

export default function JobPositionsPage() {
  const [activeTab, setActiveTab] = useState<'fulltime' | 'freelance' | 'internship'>('fulltime');

  const fullTimeJobs: JobItem[] = [
    { label: 'Business/sales development manager', href: '/careers/business-sales-development-manager' },
    { label: 'Digital marketing executives', href: '/careers/digital-marketing-executives' },
    { label: 'SEO Executive', href: '/careers/seo-executive' },
    { label: 'SMM Executive', href: '/careers/smm-executive' },
    { label: 'Junior Accountant', href: '/careers/junior-accountant' },
    { label: 'Web Developer', href: '/careers/web-developer' },
    { label: 'UI/UX designer', href: '/careers/ui-ux-designer' },
  ];

  const freelanceOpenings: JobItem[] = [
    { label: 'Freelance Specialist Medical and Customized writer in Agriculture', href: '/careers/freelance-agriculture-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Analytical Chemistry', href: '/careers/freelance-analytical-chemistry-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Applied Chemistry', href: '/careers/freelance-applied-chemistry-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Applied Mathematics', href: '/careers/freelance-applied-mathematics-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Archaeology', href: '/careers/freelance-archaeology-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Architecture', href: '/careers/freelance-architecture-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Atomic and Molecular Physics', href: '/careers/freelance-atomic-physics-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Biochemistry', href: '/careers/freelance-biochemistry-writer' },
    { label: 'Freelance Specialist Medical and Customized writer in Bioinformatics', href: '/careers/freelance-bioinformatics-writer' },
  ];

  const internshipJobs: JobItem[] = [
    { label: 'Digital marketing executives', href: '/careers/intern-digital-marketing' },
    { label: 'Copy/Content writer', href: '/careers/intern-copy-content-writer' },
    { label: 'Analytics executive', href: '/careers/intern-analytics-executive' },
    { label: 'Business Development', href: '/careers/intern-business-development' },
    { label: 'Client Service Intern', href: '/careers/intern-client-service' },
  ];

  const getCurrentJobs = () => {
    if (activeTab === 'fulltime') return fullTimeJobs;
    if (activeTab === 'freelance') return freelanceOpenings;
    return internshipJobs;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Top Announcement & Header Bar */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs py-2 px-4 text-center font-medium">
          Flat 25% Off on expert services, plus additional savings for a limited time.
        </div>

        {/* Top Info Bar */}
        <div className="bg-slate-900 text-white text-xs py-2 px-6 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:sales@pubrica.com" className="flex items-center space-x-1 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>sales@pubrica.com</span>
            </a>
            <a href="tel:+919884350006" className="flex items-center space-x-1 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9884350006</span>
            </a>
            <a href="tel:+19725029262" className="flex items-center space-x-1 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>+1-972-502-9262</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <div className="flex items-center space-x-3 text-gray-300">
              {/* Facebook SVG */}
              <svg className="w-4 h-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
              {/* YouTube SVG */}
              <svg className="w-4 h-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {/* LinkedIn SVG */}
              <svg className="w-4 h-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              {/* Instagram SVG */}
              <svg className="w-4 h-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {/* Twitter/X SVG */}
              <svg className="w-4 h-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <Link
              href="/get-expert-help"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 font-semibold px-4 py-1.5 rounded shadow hover:bg-gray-100 transition"
            >
              Get Expert Help →
            </Link>
          </div>
        </div>

        {/* Main Navbar */}
        <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-2 bg-slate-900 text-white px-3 py-2 rounded font-bold tracking-wider">
              <span>PUBRICA</span>
              <span className="text-[10px] block font-normal text-gray-300">Knowledge Works</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
              <Link href="/services" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 flex items-center gap-1">
                Services <ChevronDown className="w-3 h-3" />
              </Link>
              <Link href="/industries" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                Industries
              </Link>
              <Link href="/subjects" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                Subjects
              </Link>
              <Link href="/about" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 flex items-center gap-1">
                About Us <ChevronDown className="w-3 h-3" />
              </Link>
              <Link href="/academy" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                Academy
              </Link>
              <Link href="/insights" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                Insights
              </Link>
              <Link href="/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                Contact Us
              </Link>
            </nav>
            <div>
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </div>
        </header>

        {/* Hero Title Section */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="max-w-4xl mx-auto border-2 border-slate-700 py-8 px-6 bg-slate-800/50 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Job positions at Pubrica</h1>
          </div>
        </section>

        {/* Job Listings Section */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white shadow-sm">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setActiveTab('fulltime')}
                className={`text-xs md:text-sm font-bold px-4 py-2 rounded transition shadow-sm ${
                  activeTab === 'fulltime'
                    ? 'bg-slate-900 text-white'
                    : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
                }`}
              >
                FULL TIME JOBS &gt;&gt;
              </button>
              <button
                onClick={() => setActiveTab('freelance')}
                className={`text-xs md:text-sm font-bold px-4 py-2 rounded transition shadow-sm ${
                  activeTab === 'freelance'
                    ? 'bg-slate-900 text-white'
                    : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
                }`}
              >
                FREELANCE OPENINGS &gt;&gt;
              </button>
              <button
                onClick={() => setActiveTab('internship')}
                className={`text-xs md:text-sm font-bold px-4 py-2 rounded transition shadow-sm ${
                  activeTab === 'internship'
                    ? 'bg-slate-900 text-white'
                    : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
                }`}
              >
                INTERNSHIP &gt;&gt;
              </button>
            </div>

            {/* Job List Items */}
            <div className="space-y-4">
              {getCurrentJobs().map((job, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded p-4 flex items-center justify-between hover:border-slate-400 transition bg-white shadow-xs"
                >
                  <Link
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-900 hover:text-teal-600 font-medium text-sm md:text-base w-full"
                  >
                    <span className="bg-slate-900 text-white p-1 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="hover:underline">{job.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-900 text-white py-12 px-6 mt-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl gap-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Whether you’re stuck or just want some tips on where to start, hit up our experts anytime.
          </h2>
          <Link
            href="/get-free-quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}