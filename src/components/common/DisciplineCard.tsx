'use client';

import { useState, type ReactNode } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Activity,
  FlaskConical,
  ScanLine,
  HeartPulse,
  Cpu,
  Accessibility,
  type LucideIcon,
} from 'lucide-react';

const iconMap = {
  Activity,
  FlaskConical,
  ScanLine,
  HeartPulse,
  Cpu,
  Accessibility,
};

export interface Discipline {
  id?: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  expandableTitle: string;
  expandableContent: ReactNode;
}

export interface DisciplineCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  expandableTitle: string;
  expandableContent: ReactNode;
}

export interface DisciplinesSectionProps {
  title: string;
  subtitle?: string;
  disciplines: Discipline[];
}

export const DisciplineCard = ({
  title,
  description,
  icon,
  expandableTitle,
  expandableContent,
}: DisciplineCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const Icon = iconMap[icon] as LucideIcon;

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 text-xs font-bold leading-snug text-[#b81c1c] md:text-sm">
            {title}
          </h3>

          <div className="shrink-0 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-gray-700">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-gray-600">
          {description}
        </p>
      </div>

      {/* Expandable */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="min-w-0 flex-1 text-xs font-semibold text-[#0d3630]">
          {expandableTitle}
        </span>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="shrink-0 p-1 text-gray-400 transition-colors hover:text-[#0d3630]"
          aria-expanded={isExpanded}
          aria-label="Toggle details"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="pt-3 text-xs leading-relaxed text-gray-600">
          {expandableContent}
        </div>
      )}
    </div>
  );
};

const DisciplinesSection = ({
  title,
  subtitle,
  disciplines,
}: DisciplinesSectionProps) => {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-2xl font-bold text-[#0d3630] md:text-3xl">
          {title}
        </h2>

        {subtitle && (
          <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
            {subtitle}
          </p>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((discipline, index) => (
          <DisciplineCard
            key={discipline.id ?? index}
            title={discipline.title}
            description={discipline.description}
            icon={discipline.icon}
            expandableTitle={discipline.expandableTitle}
            expandableContent={discipline.expandableContent}
          />
        ))}
      </div>
    </section>
  );
};

export default DisciplinesSection;