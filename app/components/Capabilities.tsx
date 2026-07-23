"use client";

import { useState, useRef, useEffect } from "react";
import Card from "./Card";

export default function Capabilities() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const capabilities = [
    {
      number: "01",
      title: "Intake & Grading",
      description:
        "Device intake, sorting, and cosmetic grading at 3,000+ units/day. Grade-based routing optimizes recovery value from the first touch.",
      bgImage: "url(/images/iNg.jpg)",
    },
    {
      number: "02",
      title: "Refurbishment",
      description:
        "Full functional repair and cosmetic restoration. Front/back glass, board repair, and NPI engineering lab capability.",
      bgImage: "url(/images/refurbishing.png)",
    },
    {
      number: "03",
      title: "Surface Engineering",
      description:
        "Industrial anodizing and PVD coating. Up to 40,000 enclosures/month. Restores aluminum, magnesium, and titanium to factory finish.",
      bgImage: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    },
    {
      number: "04",
      title: "Cosmetic Restoration",
      description:
        "Like-new condition without full disassembly. Side reconditioning, buffing, polishing, and glass restoration — preserving original components.",
      bgImage: "linear-gradient(135deg, #0f1f3d 0%, #2c7a6e 100%)",
    },
    {
      number: "05",
      title: "Testing & Compliance",
      description:
        "Air leak, XRF material, waterproof, battery analysis, and X-ray inspection. Full audit trail per unit.",
      bgImage: "linear-gradient(135deg, #0d1117 0%, #1a2332 50%, #0f3460 100%)",
    },
  ];

  const totalSlides = capabilities.length;
  const maxSlideIndex = Math.max(0, totalSlides - slidesPerView);
  const totalDots = maxSlideIndex + 1;

  const goToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const card = container.children[0] as HTMLElement | undefined;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="capabilities" className="w-full min-h-screen flex items-center bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-6 md:mb-8">
          <p className="text-[#00b4a0] text-xs md:text-sm font-semibold tracking-wider mb-1">
            Capabilities
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f1f3d] mb-2">
            End-to-End. Under One Roof.
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
            A single facility flow that moves devices from intake and diagnostics through engineering repair, surface finishing, cosmetic restoration, testing, and accountable outbound readiness.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={() => {
              const container = scrollContainerRef.current;
              if (!container) return;
              const card = container.children[0] as HTMLElement | undefined;
              if (!card) return;
              const cardWidth = card.offsetWidth;
              const gap = window.innerWidth >= 768 ? 24 : 16;
              const slideWidth = cardWidth + gap;
              const newSlide = Math.min(
                maxSlideIndex,
                Math.round(container.scrollLeft / slideWidth)
              );
              setCurrentSlide(newSlide);
            }}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:gap-4 gap-3 pb-2 -mb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
              >
                <Card
                  number={capability.number}
                  title={capability.title}
                  description={capability.description}
                  bgImage={capability.bgImage}
                  className="border-t-4 border-t-[#00b4a0] h-full"
                />
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          {totalDots > 1 && (
            <div className="flex justify-center mt-1">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Scroll to browse all capabilities
              </span>
            </div>
          )}

          {/* Dot Indicators */}
          {totalDots > 1 && (
            <div className="flex items-center justify-center gap-2 mt-3">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[#00b4a0] w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 p-4 md:p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#00b4a0] card-hover-lift">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#00b4a0] rounded-lg flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#0f1f3d] mb-2">
                More recovery value than standard refurbishment.
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ECOTECASIA combines board-level diagnostics, component-level repair, camera and LCM repair, cosmetic restoration, anodizing/PVD surface engineering, testing, and continuous NPI process innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
