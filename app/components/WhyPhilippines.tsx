import Card from "./Card";
import Section from "./Section";

export default function WhyPhilippines() {
  const reasons = [
    {
      title: "Location",
      description:
        "Laguna Technopark, Biñan — roughly 1 hour from Manila airport, supporting 3–5 day global transit windows.",
    },
    {
      title: "Workforce",
      description:
        "15+ years EDI-trained technical leadership with English-proficient, ESD and cleanroom certified production teams.",
    },
    {
      title: "PEZA Framework",
      description:
        "Government-backed import/export structure, same-day customs clearance, SEC + BIR registered operations.",
    },
  ];

  return (
    <section id="philippines" className="w-full min-h-screen flex items-center bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-6 md:mb-8">
          <p className="text-[#00b4a0] text-xs md:text-sm font-semibold tracking-wider mb-1">
            Why Philippines
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f1f3d] mb-2">
            Strategic Base. Technical Depth.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((reason, index) => (
            <div key={index} className="card-hover-lift">
              <Card
                title={reason.title}
                description={reason.description}
                className="bg-white"
              />
            </div>
          ))}
        </div>

        {/* Five Reasons Section */}
        <div className="mt-8 md:mt-10">
          <h3 className="text-lg md:text-xl font-bold text-[#0f1f3d] mb-6 md:mb-8 text-center">
            Five Reasons Global Programs Choose EDI
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { number: "01", title: "Location", desc: "Strategic PEZA economic zone. 1 hour from Manila airport." },
              { number: "02", title: "Capability", desc: "End-to-end engineering: repair, surface, cosmetic, test." },
              { number: "03", title: "Capacity", desc: "3,000+ devices/day. Built for high-volume global programs." },
              { number: "04", title: "Accountability", desc: "Direct facility engagement. Full audit trail per unit." },
              { number: "05", title: "People & Talent", desc: "15+ years EDI-trained technical teams. English-proficient." },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 md:p-5 shadow-lg border-t-2 border-[#00b4a0] card-hover-lift">
                <div className="text-2xl md:text-3xl font-bold text-[#00b4a0] mb-2">
                  {item.number}
                </div>
                <h4 className="font-semibold text-[#0f1f3d] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
