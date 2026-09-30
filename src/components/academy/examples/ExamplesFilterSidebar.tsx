"use client";

import React, { useState } from "react";

type LinkItem = { label: string; href: string };

/**
 * "FILTER BY: SERVICES" sidebar on /academy/examples/, same behaviour as the
 * live page: the entry for the current page starts ticked (and its link blue);
 * ticking another entry makes it the only one ticked in its group and opens it
 * in a new tab.
 */
function FilterGroup({ title, items, currentPath }: { title: string; items: LinkItem[]; currentPath: string }) {
  const [checked, setChecked] = useState<string | null>(
    items.find((item) => item.href === currentPath)?.href ?? null
  );

  return (
    <div className="mx-auto my-[20px] w-[300px] max-w-[90%] rounded-[10px] border-2 border-[#dddddd] bg-[#f9f9f9] p-[20px]">
      <p className="mb-[10px] pl-[10px] text-[20px] font-bold leading-[28px] text-[#626262]">{title}</p>
      <div className="flex flex-col">
        {items.map((item) => (
          <label key={item.href} className="my-[8px] flex items-center text-[18px] font-medium leading-[28px]">
            <input
              type="checkbox"
              className="mr-[10px]"
              checked={checked === item.href}
              onChange={() => {
                setChecked(item.href);
                window.open(item.href, "_blank");
              }}
            />
            <a
              href={item.href}
              target="_blank"
              className={checked === item.href ? "text-[#007bff]" : "text-[#333333]"}
            >
              {item.label}
            </a>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function ExamplesFilterSidebar({
  studyGuide,
  resources,
  currentPath,
}: {
  studyGuide: LinkItem[];
  resources: LinkItem[];
  currentPath: string;
}) {
  return (
    <div>
      <p className="mt-[20px] ml-[10px] text-center text-[18px] font-bold leading-[28px] text-[#626262]">
        FILTER BY: SERVICES
      </p>
      <div className="sticky top-[20px] z-10 mb-[40px]">
        <FilterGroup title="Study Guide" items={studyGuide} currentPath={currentPath} />
        <FilterGroup title="Resources" items={resources} currentPath={currentPath} />
      </div>
    </div>
  );
}
