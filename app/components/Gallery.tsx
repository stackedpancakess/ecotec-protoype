export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80",
      alt: "EDI production floor — device processing line",
      caption: "Production & Processing Line",
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
      alt: "EDI facility — quality inspection area",
      caption: "Quality Inspection Area",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      alt: "EDI facility — workflow and assembly stations",
      caption: "Workflow & Assembly Stations",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-6 md:mb-8">
          <p className="text-[#00b4a0] text-xs md:text-sm font-semibold tracking-wider mb-1">
            Inside EDI
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f1f3d] mb-2">
            The Facility at Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/80 via-[#0f1f3d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-[#00b4a0]"></div>
                    <span className="text-white text-sm font-semibold">{image.caption}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
