export default function SurfaceEngineering() {
  return (
    <section
      id="surface"
      className="w-full py-16 md:py-20 lg:py-24 bg-linear-to-r from-[#0f1f3d] via-[#003d7a] to-[#006b8f] text-white relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4a0] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#00b4a0] text-sm font-semibold tracking-wider mb-4">
              SURFACE ENGINEERING SPOTLIGHT
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Like-New. Without Disassembly.
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Our industrial anodizing line and cosmetic restoration capability bring enclosures back to factory-grade finish without teardown — preserving component integrity and maximizing recovery value.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#00b4a0] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Up to 40,000 Enclosures/Month</p>
                  <p className="text-gray-300 text-sm">Industrial-scale surface processing capability</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#00b4a0] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Anodizing + PVD</p>
                  <p className="text-gray-300 text-sm">Advanced coating technologies for durability</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#00b4a0] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Zero Disassembly Required</p>
                  <p className="text-gray-300 text-sm">Preserve original components and integrity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-[#003d7a] to-[#001a33]">
            <img
              src="https://placehold.co/800x600/003d7a/00b4a0?text=Surface+Engineering&font=montserrat"
              alt="Metallic surface anodizing and coating process"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
