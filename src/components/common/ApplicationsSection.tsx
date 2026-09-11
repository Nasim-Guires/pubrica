import Image from "next/image";
import { type LucideIcon } from "lucide-react";

export type ApplicationItem = {
    title: string;
    desc: string;
    icon?: LucideIcon;
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
        <div className="w-full font-['Poppins',sans-serif]">
            {/* Header */}
            <div className="mb-6 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e2e2b]">
                    {title}
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                    {description}
                </p>
            </div>

            {/* Equal-Height Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Text Content distributed evenly */}
                <div className="lg:col-span-7 flex flex-col justify-between py-1 space-y-4 lg:space-y-0">
                    {applications.map((app, idx) => {
                        const AppIcon = app.icon;

                        return (
                            <div
                                key={idx}
                                className="flex items-start gap-4"
                            >
                                {/* Icon Container (Lucide or Image URL) */}
                                <div className="shrink-0 w-7 h-7 flex items-center justify-center text-gray-800">
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
                                <p className="text-sm md:text-base text-gray-800 leading-normal">
                                    <span className="font-semibold text-gray-900">
                                        {app.title}:
                                    </span>{" "}
                                    {app.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Full-Height Image Wrapper */}
                <div className="lg:col-span-5 min-h-[350px] lg:min-h-[420px]">
                    <div className="relative w-full h-full min-h-full overflow-hidden rounded-md">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}