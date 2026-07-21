interface SectionProps {
  label?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`w-full py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          {label && (
            <p className="text-[#00b4a0] text-sm font-semibold tracking-wider mb-2">
              {label}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1f3d] mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
