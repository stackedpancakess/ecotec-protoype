export default function SurfaceEngineering() {
  return (
    <section
      id="surface"
      className="w-full min-h-screen flex items-center bg-linear-to-r from-[#0f1f3d] via-[#003d7a] to-[#006b8f] text-white relative overflow-hidden py-8 md:py-12"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4a0] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#00b4a0] text-xs md:text-sm font-semibold tracking-wider mb-2">
              SURFACE ENGINEERING SPOTLIGHT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Like-New. Without Disassembly.
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
              Our industrial anodizing line and cosmetic restoration capability bring enclosures back to factory-grade finish without teardown — preserving component integrity and maximizing recovery value.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#00b4a0] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Up to 40,000 Enclosures/Month</p>
                  <p className="text-gray-300 text-xs md:text-sm">Industrial-scale surface processing capability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#00b4a0] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Anodizing + PVD</p>
                  <p className="text-gray-300 text-xs md:text-sm">Advanced coating technologies for durability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#00b4a0] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Zero Disassembly Required</p>
                  <p className="text-gray-300 text-xs md:text-sm">Preserve original components and integrity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-[#003d7a] to-[#001a33]">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85"
              alt="Industrial surface anodizing and coating process equipment"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
