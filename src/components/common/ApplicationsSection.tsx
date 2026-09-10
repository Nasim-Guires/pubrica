import Image from "next/image";
import { type LucideIcon } from "lucide-react";

export type ApplicationItem = {
    title: string;
    desc: string;
    icon: LucideIcon;
    iconSrc?: string;
};

interface ApplicationsSectionProps {
    title: string;
    description: string;
    applications: ApplicationItem[];
    imageSrc: string;
    imageAlt?: string;
}

export default function ApplicationsSection({
    title,
    description,
    applications,
    imageSrc,
    imageAlt = "Application workspace",
}: ApplicationsSectionProps) {
    return (
        <div className="space-y-4 font-['Poppins',sans-serif]">
            {/* Section Header */}
            <div className="space-y-1.5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
                    {title}
                </h2>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Applications + Image */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Applications Items */}
                <div className="md:col-span-7 space-y-3">
                    {applications.map((app, idx) => {
                        const AppIcon = app.icon;

                        return (
                            <div
                                key={idx}
                                className="flex items-start gap-2.5"
                            >
                                <div className="p-1.5 bg-gray-100 text-gray-700 shrink-0 rounded mt-0.5">
                                    {app.iconSrc ? (
                                        <Image
                                            src={app.iconSrc}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="object-contain w-4 h-4 shrink-0"
                                        />
                                    ) : (
                                        <AppIcon className="w-4 h-4" />
                                    )}
                                </div>

                                <p className="text-sm md:text-base text-gray-700 leading-snug">
                                    <span className="font-semibold text-gray-900">
                                        {app.title}
                                    </span>{" "}
                                    – {app.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Workspace Image */}
                <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[280px] h-[395px] overflow-hidden rounded-lg">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 280px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}