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
    <section id="locations" className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-[#00b4a0] text-sm font-semibold tracking-wider mb-2">
            Global Presence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1f3d] mb-4">
            Where We Operate
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            From our Singapore commercial headquarters to our Philippine operations facility and Miami inbound hub — ECOTECASIA supports global programs end to end.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#0f1f3d] to-[#003d7a] rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00b4a0] rounded-lg mb-4" role="img" aria-label={`${location.title} — ${location.subtitle}`}>
                <span className="text-lg font-bold text-[#0f1f3d]">
                  {location.label}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{location.title}</h3>
              <p className="text-[#00b4a0] text-sm font-semibold mb-4">
                {location.subtitle}
              </p>
              <p className="text-gray-200 leading-relaxed">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">Our Network</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div>
              <p className="font-semibold text-[#0f1f3d]">Singapore</p>
              <p className="text-sm text-gray-600">HQ</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div>
              <p className="font-semibold text-[#0f1f3d]">Biñan, Philippines</p>
              <p className="text-sm text-gray-600">Operations</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div>
              <p className="font-semibold text-[#0f1f3d]">Miami, USA</p>
              <p className="text-sm text-gray-600">Sorting & Receiving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
