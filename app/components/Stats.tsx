interface StatItem {
  number: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="w-full bg-[#0f1f3d] flex items-center py-12 md:py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00b4a0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#006b8f] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Decorative top accent */}
              <div className="w-8 h-0.5 bg-[#00b4a0]/40 rounded-full mb-3"></div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00b4a0] mb-1">
                {stat.number}
              </div>
              <p className="text-white text-xs md:text-sm leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
