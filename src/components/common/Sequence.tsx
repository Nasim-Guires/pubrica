import React from "react";

interface SequenceProps {
  children: React.ReactNode;
}

interface StepProps {
  title: string;
  subtitle?: string; // e.g. "Step 1"
  children: React.ReactNode;
  isDark?: boolean;
  stepNumber?: number; // Automatically passed down
  icon?: string; // Custom icon character/emoji matching layout
}

export const Step: React.FC<StepProps> = ({
  title,
  children,
  isDark = false,
  stepNumber = 1,
  icon = "⚙️",
}) => {
  // Determine if this card is positioned on top or bottom relative to the track line axis
  const isOdd = stepNumber % 2 !== 0;

  return (
    <div className="flex-1 min-w-[150px] flex flex-col items-center relative group">
      {isOdd ? (
        /* ODD STEPS LOGIC: Number Top -> Track -> Content Card Bottom */
        <>
          {/* Number Circle Top */}
          <div className="w-10 h-10 rounded-full bg-[#007da5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm z-10">
            {stepNumber}
          </div>

          {/* Spacer block mimicking the height cross-over of the track timeline */}
          <div className="h-6 w-full relative">
            <div className="absolute top-[10px] left-0 right-0 h-1.5 bg-[#007da5]" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-[#c0392b]/40" />
          </div>

          {/* Info Card Container */}
          <div
            className={`w-full mt-4 p-4 border rounded-sm text-left flex flex-col justify-start min-h-[220px] shadow-sm transition-all ${
              isDark
                ? "bg-[#404040] border-[#404040] text-white"
                : "bg-white border-gray-200 text-gray-700"
            }`}
          >
            <div className="text-2xl mb-2 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              {icon}
            </div>
            <h3
              className={`text-xs font-black tracking-tight mb-2 uppercase leading-snug min-h-[32px] ${
                isDark ? "text-white" : "text-[#0c313a]"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-[11px] leading-relaxed text-left ${isDark ? "text-gray-200" : "text-gray-500"}`}
            >
              {children}
            </p>
          </div>
        </>
      ) : (
        /* EVEN STEPS LOGIC: Content Card Top -> Track -> Number Bottom */
        <>
          {/* Info Card Container */}
          <div
            className={`w-full mb-4 p-4 border rounded-sm text-left flex flex-col justify-start min-h-[220px] shadow-sm transition-all ${
              isDark
                ? "bg-[#404040] border-[#404040] text-white"
                : "bg-white border-gray-200 text-gray-700"
            }`}
          >
            <div className="text-2xl mb-2 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              {icon}
            </div>
            <h3
              className={`text-xs font-black tracking-tight mb-2 uppercase leading-snug min-h-[32px] ${
                isDark ? "text-white" : "text-[#0c313a]"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-[11px] leading-relaxed text-left ${isDark ? "text-gray-200" : "text-gray-500"}`}
            >
              {children}
            </p>
          </div>

          {/* Spacer block mimicking the height cross-over of the track timeline */}
          <div className="h-6 w-full relative flex flex-col justify-end">
            <div className="absolute bottom-[10px] left-0 right-0 h-1.5 bg-[#007da5]" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-[#c0392b]/40" />
          </div>

          {/* Number Circle Bottom */}
          <div className="w-10 h-10 rounded-full bg-[#007da5] text-white flex items-center justify-center font-bold text-sm mt-6 shadow-sm z-10">
            {stepNumber}
          </div>
        </>
      )}
    </div>
  );
};

export const Sequence: React.FC<SequenceProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="w-full overflow-x-auto py-8 select-none scrollbar-thin">
      {/* Horizontal Flex Row Container Pipeline containing all stages together */}
      <div className="flex flex-row min-w-[980px] justify-between items-stretch gap-2 px-2 relative">
        {childrenArray.map((child, index) => {
          if (!React.isValidElement(child)) return child;

          return React.cloneElement(child as React.ReactElement<any>, {
            stepNumber: index + 1,
          });
        })}
      </div>
    </div>
  );
};
