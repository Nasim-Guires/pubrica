"use client";

import React, { useState } from "react";

/**
 * "FILTER BY" journal list on /academy/journal-templates/. Same behaviour as
 * the live page: ticking a journal unticks the others and opens that journal's
 * template page in a new tab.
 */
export default function JournalFilterList({ journals }: { journals: { label: string; href: string }[] }) {
  const [checked, setChecked] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {journals.map((journal) => (
        <label
          key={journal.href}
          className="flex cursor-pointer items-center gap-[6px] text-[15px] font-medium leading-[28px] text-[#626262]"
        >
          <input
            type="checkbox"
            className="h-[13px] w-[13px] shrink-0"
            checked={checked === journal.href}
            onChange={(e) => {
              if (!e.target.checked) {
                setChecked(null);
                return;
              }
              setChecked(journal.href);
              window.open(journal.href, "_blank");
            }}
          />
          {journal.label}
        </label>
      ))}
    </div>
  );
}
