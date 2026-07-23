export default function GlobalPresence() {
  const locations = [
    {
      icon: "🏢",
      label: "HQ",
      title: "Singapore",
      description:
        "ECOTECASIA.COM PTE. LTD. — commercial, client relationship, and business development hub for the ECOTEC group.",
      subtitle: "Global Headquarters",
    },
    {
      icon: "🏭",
      label: "OPS",
      title: "Philippines",
      description:
        "EDI (ECOTEC DEVICES INC.) — the sole operating facility. Laguna Technopark, Biñan. PEZA-accredited. 15+ years in-country.",
      subtitle: "Operations Facility",
    },
    {
      icon: "🚚",
      label: "US",
      title: "Miami, USA",
      description:
        "North American inbound sorting and receiving hub — supporting US-origin device programs and streamlined westbound logistics.",
      subtitle: "Sorting & Receiving",
    },
  ];

  return (
    <section id="locations" className="w-full min-h-screen flex items-center bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-6 md:mb-8">
          <p className="text-[#00b4a0] text-xs md:text-sm font-semibold tracking-wider mb-1">
            Global Presence
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f1f3d] mb-2">
            Where We Operate
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
            From our Singapore commercial headquarters to our Philippine operations facility and Miami inbound hub — ECOTECASIA supports global programs end to end.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#0f1f3d] to-[#003d7a] rounded-lg p-6 md:p-7 text-white shadow-lg card-hover-lift"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#00b4a0] rounded-lg mb-3" role="img" aria-label={`${location.title} — ${location.subtitle}`}>
                <span className="text-sm font-bold text-[#0f1f3d]">
                  {location.label}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">{location.title}</h3>
              <p className="text-[#00b4a0] text-xs md:text-sm font-semibold mb-3">
                {location.subtitle}
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base tracking-wide font-light">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 rounded-lg p-5 md:p-6 text-center border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-[#00b4a0]"></div>
            <p className="text-gray-600 text-sm md:text-base font-semibold">Our Network</p>
            <div className="w-6 h-0.5 bg-[#00b4a0]"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#0f1f3d] rounded-full flex items-center justify-center mb-2">
                <span className="text-[#00b4a0] text-xs font-bold">SG</span>
              </div>
              <p className="font-semibold text-[#0f1f3d] text-sm md:text-base">Singapore</p>
              <p className="text-xs md:text-sm text-gray-500">HQ</p>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="text-xs mt-1">3-5 day transit</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#00b4a0] rounded-full flex items-center justify-center mb-2">
                <span className="text-[#0f1f3d] text-xs font-bold">PH</span>
              </div>
              <p className="font-semibold text-[#0f1f3d] text-sm md:text-base">Biñan, Philippines</p>
              <p className="text-xs md:text-sm text-gray-500">Operations</p>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="text-xs mt-1">Westbound logistics</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#003d7a] rounded-full flex items-center justify-center mb-2">
                <span className="text-[#00b4a0] text-xs font-bold">US</span>
              </div>
              <p className="font-semibold text-[#0f1f3d] text-sm md:text-base">Miami, USA</p>
              <p className="text-xs md:text-sm text-gray-500">Sorting & Receiving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
