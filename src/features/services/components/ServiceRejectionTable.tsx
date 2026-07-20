import React from "react";
import { Service } from "@/lib/data-service";

interface ServiceRejectionTableProps {
  service: Service;
}

export default function ServiceRejectionTable({
  service,
}: ServiceRejectionTableProps) {
  if (!service.rejectionTable || service.rejectionTable.length === 0)
    return null;

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      {/* Heading Group */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#083a50] mb-4">
          Reasons for Manuscript Rejection
        </h2>
        <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
          Usually, the most prominent, well-drafted, and outstanding articles
          would be the ones that clear the rigorous{" "}
          <span className="text-[#3b82f6] hover:underline cursor-pointer">
            review
          </span>{" "}
          process, but there are several that get rejected for simple reasons
          like formatting, referencing, language, and editing errors.
        </p>
      </div>

      {/* Styled Grid / Table Container */}
      <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left bg-white">
            <thead>
              <tr className="bg-[#0b2b30] text-white text-[12px] font-bold tracking-wider uppercase">
                <th className="py-4 px-6 border-r border-[#143e45] w-[30%]">
                  Reasons for Rejection
                </th>
                <th className="py-4 px-6 border-r border-[#143e45] w-[50%]">
                  Solution
                </th>
                <th className="py-4 px-6 w-[20%]">Pubrica Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {service.rejectionTable.map((row, index) => {
                const isEven = index % 2 === 0;
                return (
                  <tr
                    key={index}
                    className={`${
                      isEven ? "bg-white" : "bg-[#e6f2f7]"
                    } transition-colors hover:bg-slate-50/80`}
                  >
                    {/* Reason Column */}
                    <td className="py-4 px-6 text-[13.5px] text-slate-800 leading-relaxed font-medium border-r border-slate-200">
                      {row.reasonBoldPrefix && (
                        <span className="font-bold text-slate-900">
                          {row.reasonBoldPrefix}
                        </span>
                      )}
                      {row.reason}
                    </td>

                    {/* Solution Column */}
                    <td className="py-4 px-6 text-[13px] text-slate-600 leading-relaxed border-r border-slate-200">
                      {row.solution}
                    </td>

                    {/* Pubrica Link Column */}
                    <td className="py-4 px-6 text-[13px] font-semibold text-[#4f8fa9] hover:underline cursor-pointer">
                      {row.pubricaSolution}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile / Card View to prevent horizontal scrolling breaking UI */}
        <div className="block md:hidden divide-y divide-slate-200">
  {service.rejectionTable.map((row, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={index}
        className={`p-5 flex flex-col gap-3 ${
          isEven ? "bg-white" : "bg-[#e6f2f7]"
        }`}
      >
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b2b30] block mb-1">
            Reason for Rejection
          </span>

          <p className="text-[13.5px] text-slate-850 font-medium leading-relaxed">
            {row.reasonBoldPrefix && (
              <span className="font-bold text-slate-900">
                {row.reasonBoldPrefix}
              </span>
            )}
            {row.reason}
          </p>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Solution
          </span>

          <p className="text-[13px] text-slate-600 leading-relaxed">
            {row.solution}
          </p>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Pubrica Solution
          </span>

          <span className="text-[13px] font-bold text-[#3b82f6] hover:underline cursor-pointer">
            {row.pubricaSolution}
          </span>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
}
