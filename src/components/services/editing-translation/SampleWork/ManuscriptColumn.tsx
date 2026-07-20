interface ManuscriptColumnProps {
  title: string;
  titleColor?: string;
  paragraphs: string[];
  bordered?: boolean;
}

export default function ManuscriptColumn({
  title,
  titleColor = "text-slate-800",
  paragraphs,
  bordered = false,
}: ManuscriptColumnProps) {
  return (
    <div
      className={`${
        bordered
          ? "border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8"
          : ""
      }`}
    >
      <h4 className={`text-base md:text-lg font-bold mb-3 ${titleColor}`}>
        {title}
      </h4>

      <div className="space-y-3 text-[11px] md:text-xs text-slate-700 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}