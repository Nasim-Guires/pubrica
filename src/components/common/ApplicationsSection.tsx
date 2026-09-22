import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type ApplicationItem = {
    title?: string;
    desc: ReactNode;
    icon?: LucideIcon;
    iconSrc?: string;
};

interface ApplicationsSectionProps {
    title: string;
    description: string | ReactNode;
    subTitle?: string | ReactNode;
    applications: ApplicationItem[];
    imageSrc: string;
    imageAlt?: string;
}

export default function ApplicationsSection({
    title,
    description,
    subTitle,
    applications,
    imageSrc,
    imageAlt = "Application workspace",
}: ApplicationsSectionProps) {
    return (
        <div className="w-full font-['Poppins',sans-serif]">
            {/* Header */}
            <div className="mb-8 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e2e2b]">
                    {title}
                </h2>
                <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {description}
                </div>
            </div>

            {/* Grid Container - 8/4 split expands text width for more words per line while keeping gap same */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Left Column: Expanded text area allowing more words per line */}
                <div className="lg:col-span-8 flex flex-col justify-start space-y-5 lg:space-y-6">
                    {/* Render optional Subtitle if passed */}
                    {subTitle && (
                        <h3 className="text-base md:text-lg font-bold text-black mb-1">
                            {subTitle}
                        </h3>
                    )}

                    {applications.map((app, idx) => {
                        const AppIcon = app.icon;

                        return (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-1"
                            >
                                {/* Icon Container (Lucide or Image URL) */}
                                <div className="shrink-0 w-7 h-7 mt-0.5 flex items-center justify-center text-gray-800">
                                    {app.iconSrc ? (
                                        <Image
                                            src={app.iconSrc}
                                            alt=""
                                            width={28}
                                            height={28}
                                            className="object-contain w-full h-full"
                                        />
                                    ) : (
                                        AppIcon && <AppIcon className="w-6 h-6 stroke-[1.5]" />
                                    )}
                                </div>

                                {/* Item Text */}
                                <div className="text-sm md:text-base text-gray-800 leading-relaxed flex-1">
                                    {app.title ? (
                                        <>
                                            <span className="font-semibold text-gray-900">
                                                {app.title}:
                                            </span>{" "}
                                            {app.desc}
                                        </>
                                    ) : (
                                        app.desc
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Reduced width image wrapper */}
                <div className="lg:col-span-4 min-h-[350px] lg:min-h-[480px] flex items-center justify-center">
                    <div className="relative w-full h-full min-h-[350px] lg:min-h-[480px] overflow-hidden rounded-lg flex items-center justify-center">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}