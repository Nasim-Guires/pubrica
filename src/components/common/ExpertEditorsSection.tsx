import Image from "next/image";
import { Award, FileText } from "lucide-react";

export type ExpertEditorItem = {
    avatar: string;
    name: string;
    flag: string;
    degree: string;
    experience: string;
    manuscripts: string;
};

interface ExpertEditorsSectionProps {
    title: string;
    description: string;
    editors: ExpertEditorItem[];
}

export default function ExpertEditorsSection({
    title,
    description,
    editors,
}: ExpertEditorsSectionProps) {
    return (
        <div className="space-y-4 text-center">
            {/* Section Header */}
            <div className="space-y-1.5">
                <h2 className="text-xl md:text-2xl font-bold text-[#1e2e2b]">
                    {title}
                </h2>

                <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                    {description}
                </p>
            </div>

            {/* Expert Editors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {editors.map((editor, idx) => (
                    <div
                        key={idx}
                        className="bg-[#f2f9f6] rounded-xl p-5 border-l-4 border-l-[#12433e] border-y border-r border-[#e2efe9] shadow-sm flex flex-col justify-between text-left"
                    >
                        {/* Editor Profile */}
                        <div className="flex items-center gap-3.5 mb-4">
                            {/* Avatar + Flag */}
                            <div className="relative shrink-0">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d2e7e3] bg-white shadow-sm">
                                    <Image
                                        src={editor.avatar}
                                        alt={editor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Flag */}
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm">
                                    <Image
                                        src={editor.flag}
                                        alt="Country flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-sm text-gray-900 truncate">
                                    {editor.name}
                                </h3>

                                <p className="text-xs text-gray-600 truncate mt-0.5">
                                    {editor.degree}
                                </p>
                            </div>
                        </div>

                        {/* Editor Statistics */}
                        <div className="bg-white/70 rounded-lg p-2.5 flex items-center justify-between text-xs text-gray-700 border border-[#e5f2ec]">
                            <div className="flex items-center gap-1.5">
                                <Award className="w-4 h-4 text-[#12433e]" />
                                <span>{editor.experience}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <FileText className="w-4 h-4 text-[#12433e]" />
                                <span>{editor.manuscripts}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}