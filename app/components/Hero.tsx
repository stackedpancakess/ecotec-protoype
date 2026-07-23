import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero-section relative w-full min-h-screen flex items-start pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85')",
        }}
      />
      {/* Vignette overlay from top-left to right */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f3d]/95 via-[#0f1f3d]/80 to-transparent" />
      {/* Additional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="max-w-7xl mx-auto px-6 py-18 w-full relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <div className="w-1 h-6 bg-[#00b4a0]"></div>
            <span className="text-[#00b4a0] text-sm font-semibold tracking-wider">
              LIFECYCLE MANAGED
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-delay-1">
            Global Consumer Electronics Lifecycle Platform
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed animate-fade-in-delay-2">
            Engineering-driven refurbishment, surface restoration, and lifecycle management — at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Button
              text="Explore Capabilities"
              href="#capabilities"
              variant="primary"
            />
            <Button
              text="Contact Us"
              href="#contact-form"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
