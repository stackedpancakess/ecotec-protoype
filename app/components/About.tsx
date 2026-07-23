export default function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-6 md:mb-8">
          <p className="text-[#00b4a0] text-xs md:text-sm font-semibold tracking-wider mb-1">
            Who We Are
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f1f3d] mb-2">
            Integrated lifecycle capability inside a PEZA economic zone.
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
            ECOTECASIA, powered by EDI Philippines, is a fully integrated consumer electronics lifecycle facility operating within the PEZA Economic Zone in Laguna Technopark, Philippines.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              With 25+ years of combined experience, we provide engineering-driven repair, cosmetic restoration, surface engineering, and full lifecycle management for global OEMs, insurers, carriers, and refurbishment programs.
            </p>
            <div className="bg-gray-100 p-4 md:p-5 rounded-lg border-l-4 border-[#00b4a0] card-hover-lift">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#00b4a0] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm md:text-base mb-1">Laguna Technopark</p>
                  <p className="text-gray-700 text-sm md:text-base">Biñan, Philippines</p>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">
                    PEZA Accredited facility for globally oriented repair, restoration, and lifecycle programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85"
              alt="EDI electronics production and processing facility"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
