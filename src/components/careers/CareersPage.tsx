
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { PayloadPost } from "@/lib/payload/types";

export default function CareersPage({ jobs }: { jobs: PayloadPost[] }) {
  const stats = [
    { value: "15", label: "Years in scientific research" },
    { value: "200", label: "Experts in various specializations" },
    { value: "100", label: "Academic writing projects completed" },
    { value: "110", label: "Research projects done" },
  ];

  return (
    <main className="w-full bg-white font-sans text-slate-800 min-h-screen">
      {/* 1. Dark Hero Banner Section */}
      <section className="w-full bg-[#1b2b28] text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-[#2d4842] p-8 sm:p-10 rounded-sm bg-[#162422]/60 shadow-inner">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Careers in publishing
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 font-medium">
            Jobs in editing
          </p>
        </div>
      </section>

      {/* 2. Intro Section: Academic and scientific writing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28]">
          Academic and scientific writing
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Scale up your career with Pubrica—a place to learn, grow, and change; an opportunity to work in high-impact journals. The only thing that is constant is the learning curve. It just keeps going up.
        </p>

        {/* Content & Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left pt-8">
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Scientific and academic writing is part of the Pubrica’s DNA. We serve 15 out of top 20 universities in medical, engineering, and humanities. We change destinies of people from different walks of life.
            </p>
            <p>
              We are a leading scientific and academic writing services provider with offices in various locations—US, Europe, and Asia. Highly qualified pool of experts from various disciplines.
            </p>
            <p>
              The industry is ever-changing and so is Pubrica. Don’t worry if you’re a fresher from college because even our veterans consider themselves as students. Learning curve is an everyday matter because of our quest for knowledge.
            </p>
          </div>

          <div className="relative w-full h-[280px] sm:h-[320px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Scientific writer working at desk in front of a modern monitor"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Word Cloud & Text Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left pt-10 border-t border-slate-100">
          <div className="flex justify-center items-center bg-slate-50 p-6 rounded-lg border border-slate-100">
            {/* Word Cloud Visual Placeholder / Illustration */}
            <div className="text-center font-bold space-y-2 text-[#1b2b28]">
              <div className="text-3xl sm:text-4xl text-teal-800">Careers</div>
              <div className="flex justify-center gap-3 text-xs sm:text-sm text-slate-500">
                <span>Publishing</span>
                <span className="text-blue-600 font-bold">CRO</span>
                <span>Journals</span>
                <span>Academics</span>
              </div>
              <div className="flex justify-center gap-2 text-xs text-teal-700">
                <span>Scientific Research</span>
                <span className="font-semibold text-slate-800">Peer-Reviews</span>
              </div>
              <div className="text-xs text-indigo-700 font-medium">
                Regulatory Writing • Biostatistics
              </div>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Our clients keep calling us again and again for new projects. The reason: our unique approach to academic and scientific research and the way we treat our people.
            </p>
            <p>
              Our work ethics are so tangible that you get a feel of it right from day one. Our environment, is based on people who believing in achieving goals as a team. Expand your horizons and skills at Pubrica. A melting pot of ideas at work.
            </p>
            <p>
              Whether you're a student, professor, physician, engineer, or a corporate professional, we have a place for you.
            </p>
            <p>
              We grow together at Pubrica. Jump on the bandwagon and see the difference in our work environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <section className="w-full bg-[#f8faf9] border-y border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2b28]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium max-w-[180px] mx-auto leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/about-us/our-editors"
              className="inline-block bg-[#1b2b28] hover:bg-[#121f1d] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded transition-colors shadow-sm"
            >
              Meet our experts →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Latest Job Postings Callout Banner */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1b2b28]">
          Latest Job Postings
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Are you looking for a roller-coaster of a ride in your career? The Pubrica is your best bet. The thing here is that the roller coaster only goes up—that’s your career growth. Invest your expertise, talents and business acumen with us and reap rich dividends.
        </p>
        <div>
          <a
            href="#openings"
            className="inline-block bg-[#1b2b28] hover:bg-[#121f1d] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded transition-colors"
          >
            JOB POSTINGS
          </a>
        </div>
      </section>

      {/* 5. Scale Up & Professionalism Feature Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        {/* Scale up block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1b2b28]">
              Scale up your career with Pubrica
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-teal-800">
              Do you want to join an elite team?
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Expand your horizons and skills at Pubrica. A melting-pot of ideas at work. Our work ethics are so tangible that you get a feel of it right from day one. Our environment is based on people who believe in achieving goals as a team.
            </p>
            <div>
              <Link
                href="/about-us"
                className="inline-block bg-[#1b2b28] hover:bg-[#121f1d] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[260px] sm:h-[300px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Professional female executive talking on phone working on computer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Epitomizes professionalism block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-[260px] sm:h-[300px] rounded-md overflow-hidden shadow-sm order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              alt="Diverse team of business professionals having a meeting around table"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-left order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1b2b28]">
              Pubrica epitomizes professionalism
            </h3>
            <blockquote className="italic border-l-2 border-emerald-600 pl-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              "Personally, I chose Pubrica for their vast research base, various academic experts and great research base. I'm glad to be part of such an erudite team."
            </blockquote>
            <p className="text-xs font-semibold text-slate-700">
              — Johnson Charles, <span className="font-normal text-slate-500">Student</span>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Current Openings List Section */}
      <section id="openings" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <header className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1b2b28]">
            Current Openings
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Send us your resume and be part of our team now. Most of our employees are PhDs and have joined us to help clients in every stage of the academic and scientific research phases. Be part of this exciting team.
          </p>
        </header>

        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-[#1b2b28]">
            Currently, positions are open for the following:
          </h4>

          <ul className="grid sm:grid-cols-2 gap-2">
            {jobs.slice(0, 12).map((job) => (
              <li key={job.id}>
                <Link
                  href={`/careers/${job.urlPath}`}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 hover:text-[#1b2b28] hover:underline"
                >
                  <span className="w-4 h-4 rounded-full bg-[#1b2b28] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    ➔
                  </span>
                  <span>{job.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link
              href="/careers/job-posting"
              className="inline-block bg-[#1b2b28] hover:bg-[#121f1d] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded transition-colors"
            >
              View all openings &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}