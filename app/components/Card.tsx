interface CardProps {
  title: string;
  description: string;
  icon?: string;
  number?: string;
  bgImage?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  number,
  bgImage,
  className = "",
}: CardProps) {
  return (
    <div
      className={`relative rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden ${className}`}
    >
      {/* Background */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: bgImage }}
        />
      )}
      {/* Dark overlay for text readability */}
      {bgImage && (
        <div className="absolute inset-0 bg-black/60" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {number && (
          <div className="text-5xl font-bold text-[#00b4a0] mb-4">{number}</div>
        )}
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className={`text-xl font-semibold mb-3 ${bgImage ? 'text-white' : 'text-[#0f1f3d]'}`}>{title}</h3>
        <p className={`leading-relaxed ${bgImage ? 'text-gray-200' : 'text-gray-700'}`}>{description}</p>
      </div>
    </div>
  );
}
