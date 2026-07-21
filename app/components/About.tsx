export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-[#00b4a0] text-sm font-semibold tracking-wider mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1f3d] mb-4">
            Integrated lifecycle capability inside a PEZA economic zone.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            ECOTECASIA, powered by EDI Philippines, is a fully integrated consumer electronics lifecycle facility operating within the PEZA Economic Zone in Laguna Technopark, Philippines.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              With 25+ years of combined experience, we provide engineering-driven repair, cosmetic restoration, surface engineering, and full lifecycle management for global OEMs, insurers, carriers, and refurbishment programs.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#00b4a0]">
              <p className="text-gray-600 font-semibold mb-1">Laguna Technopark</p>
              <p className="text-gray-700">Biñan, Philippines</p>
              <p className="text-gray-600 text-sm mt-2">
                PEZA Accredited facility for globally oriented repair, restoration, and lifecycle programs.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://placehold.co/800x600/0f1f3d/00b4a0?text=EDI+Facility&font=montserrat"
              alt="EDI electronics production and processing facility"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
