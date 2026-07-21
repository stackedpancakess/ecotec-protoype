export default function Gallery() {
  const images = [
    {
      src: "https://placehold.co/800x600/0f1f3d/00b4a0?text=Production+Line&font=montserrat",
      alt: "EDI production floor — device processing line",
    },
    {
      src: "https://placehold.co/800x600/003d7a/00b4a0?text=Quality+Inspection&font=montserrat",
      alt: "EDI facility — quality inspection area",
    },
    {
      src: "https://placehold.co/800x600/006b8f/ffffff?text=Assembly+Stations&font=montserrat",
      alt: "EDI facility — workflow and assembly stations",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-[#00b4a0] text-sm font-semibold tracking-wider mb-2">
            Inside EDI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1f3d] mb-4">
            The Facility at Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
