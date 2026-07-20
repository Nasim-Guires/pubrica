interface TranslationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function TranslationCard({
  title,
  description,
  icon,
}: TranslationCardProps) {
  return (
    <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-teal-800 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}