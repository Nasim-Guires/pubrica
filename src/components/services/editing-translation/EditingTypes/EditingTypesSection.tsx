"use client";

import { useState } from "react";
import { editingTypesList } from "@/lib/services/editing-and-translation";
import EditingTypeCard from "./EditingTypeCard";

export default function EditingTypesSection() {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    proofreading: true,
    manuscript: true,
  });

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-12 bg-white px-6 max-w-7xl mx-auto font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">
            Types of Editing Services We Provide
          </h2>

          <p className="text-[14px] text-slate-600 max-w-5xl leading-relaxed">
            Each type of editing serves a unique purpose and is suited to
            different stages of the writing and publication process. By
            selecting the appropriate kind of editing, authors can significantly
            enhance the quality of their manuscripts and increase their chances
            of achieving their publication, research visibility, and
            communication objectives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
          {editingTypesList.map((type) => (
            <EditingTypeCard
              key={type.id}
              type={type}
              isOpen={!!openCards[type.id]}
              toggleCard={toggleCard}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .truncate-two-lines {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
