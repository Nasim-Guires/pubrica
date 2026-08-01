"use client";

import React from "react";
import Image from "next/image";

// --- Define Icons (using placeholders, in production import from your assets) ---
const iconBasic = "/icons/basic-package.svg"; // Placeholder URL
const iconStandard = "/icons/standard-package.svg"; // Placeholder URL
const iconPremium = "/icons/premium-package.svg"; // Placeholder URL

interface PackageItem {
  icon: string;
  title: string;
  subtitle: string;
  idealFor: string;
  includes: string[];
  turnaround?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  borderColor?: string;
  bodyTextColor?: string;
}

interface PackagesProps {
  title: string;
  subtitle: string;
  description: string;
  packages: PackageItem[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CommonPackages({
  title = "Digital Production QA – Our Packages",
  subtitle = "",
  description = "At Publica, our Digital Production QA packages are designed to meet varying production volumes and complexity levels.",
  packages,
  buttonText = "Get a Free Quote",
  onButtonClick,
}: PackagesProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white w-full text-left font-sans">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a57] mb-3">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl md:text-2xl font-semibold text-[#1b1b1b] mb-4">
            {subtitle}
          </h3>
        )}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl">
          {description}
        </p>
      </div>

      {/* Packages Grid: Matches the reference design layout exactly */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="flex flex-col border-[3px] rounded-none shadow-sm overflow-hidden bg-white"
            style={{
              borderColor: pkg.borderColor || "#d1d5db",
            }}
          >
            {/* Package Header Banner (Colored Top Box) - EXTREMELY THIN as per image */}
            <div
              className="p-3 flex items-center gap-3 border-b border-gray-200 h-[65px]"
              style={{
                backgroundColor: pkg.backgroundColor || "#f3f4f6",
              }}
            >
              <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center bg-white rounded-full p-1 shadow-sm border border-gray-100">
                <Image
                  src={pkg.icon}
                  alt={pkg.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h4
                  className="font-bold text-base leading-tight"
                  style={{ color: pkg.headerTextColor || "#0b3a57" }}
                >
                  {pkg.title}
                </h4>
                <p
                  className="text-xs font-medium mt-0.5"
                  style={{ color: pkg.headerTextColor || "#0b3a57" }}
                >
                  {pkg.subtitle}
                </p>
              </div>
            </div>

            {/* Package Body Content */}
            <div
              className="p-6 flex flex-col flex-grow bg-white"
              style={{ color: pkg.bodyTextColor || "#4b5563" }}
            >
              {/* Ideal For */}
              <div className="mb-5">
                <p className="text-sm font-bold mb-1 flex items-center gap-1.5">
                  <span className="text-teal-700">➜</span> Ideal For:
                </p>
                <p className="text-sm pl-6 leading-relaxed">
                  {pkg.idealFor}
                </p>
              </div>

              {/* What's Included */}
              <div className="mb-6 flex-grow">
                <p className="text-sm font-bold mb-2 flex items-center gap-1.5">
                  <span className="text-teal-700">➜</span> What&apos;s Included:
                </p>
                <ul className="pl-6 space-y-2 list-disc marker:text-gray-400">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Turnaround (if provided) */}
              {pkg.turnaround && (
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="text-sm font-semibold flex items-center gap-1.5">
                    <span className="text-teal-700">➜</span> Turnaround:{" "}
                    <span className="font-normal">{pkg.turnaround}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Button Container */}
      {onButtonClick && (
        <div className="text-center mt-12">
          <button
            onClick={onButtonClick}
            className="bg-[#c70000] hover:bg-[#a50000] text-white font-semibold py-3 px-8 rounded-full text-base transition-colors shadow-md cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      )}
    </section>
  );
}