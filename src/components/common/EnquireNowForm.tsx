import React from "react";

export interface EnquireFormData {
    name: string;
    phone: string;
    email: string;
    services: string;
    country: string;
}

interface EnquireNowFormProps {
    onSubmit?: (data: EnquireFormData) => void;
}

export const EnquireNowForm: React.FC<EnquireNowFormProps> = () => {
    return (
        <div className="w-full rounded-lg border border-gray-200 shadow-md overflow-hidden">
            <iframe
                aria-label="Enquiry Form - Demo"
                title="Enquiry Form"
                style={{ height: "900px", width: "100%", border: "none" }}
                src="https://forms.zohopublic.com/guiressolutions1/form/EnquiryFormDEmo/formperma/sxl0PUWrTwnhRz86AlGjU56-537hZBZPknxGbS7oHnw"
            />
        </div>
    );
};