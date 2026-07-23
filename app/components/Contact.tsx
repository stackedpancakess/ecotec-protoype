"use client";

import { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const shouldShow = window.location.hash === "#contact-form";
      setIsVisible(shouldShow);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Smooth scroll into view when section becomes visible
  useEffect(() => {
    if (isVisible && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [isVisible]);

  return (
    <section
      id="contact-form"
      ref={sectionRef}
      className={`bg-[#0f1f3d] min-h-screen flex items-center py-8 md:py-12 transition-all duration-500 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              window.location.hash = "";
              setIsVisible(false);
            }}
            className="text-gray-400 hover:text-white transition text-2xl leading-none"
            aria-label="Close contact form"
          >
            &times;
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-[#00b4a0]"></div>
            <span className="text-[#00b4a0] font-semibold text-sm md:text-base">
              GET IN TOUCH
            </span>
            <div className="h-1 w-12 bg-[#00b4a0]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Needs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our services? Want to explore partnership opportunities? 
            Send us a message and we&apos;ll respond within 24 business hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-[#1a2f4d] p-4 md:p-5 rounded-lg border border-[#003d7a] card-hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#00b4a0] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0f1f3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">Email</h3>
              </div>
              <a
                href="mailto:contact@ecotecasia.com"
                className="text-[#00b4a0] hover:text-white transition break-all text-sm ml-11"
              >
                contact@ecotecasia.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#1a2f4d] p-4 md:p-5 rounded-lg border border-[#003d7a] card-hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#00b4a0] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0f1f3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">Phone</h3>
              </div>
              <a
                href="tel:+63-2-1234-5678"
                className="text-[#00b4a0] hover:text-white transition text-sm ml-11"
              >
                +63 (2) 1234-5678
              </a>
            </div>

            {/* Locations */}
            <div className="bg-[#1a2f4d] p-4 md:p-5 rounded-lg border border-[#003d7a] card-hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#00b4a0] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0f1f3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">Locations</h3>
              </div>
              <div className="space-y-3 text-gray-300 ml-11">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00b4a0] rounded-full"></div>
                  <div>
                    <p className="font-medium text-white text-sm">Singapore</p>
                    <p className="text-xs">Regional Headquarters</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00b4a0] rounded-full"></div>
                  <div>
                    <p className="font-medium text-white text-sm">Philippines</p>
                    <p className="text-xs">Main Operations & Facility</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00b4a0] rounded-full"></div>
                  <div>
                    <p className="font-medium text-white text-sm">Miami, USA</p>
                    <p className="text-xs">Sorting & Receiving Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-[#1a2f4d] p-4 md:p-5 rounded-lg border border-[#003d7a] card-hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#00b4a0] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0f1f3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">Hours</h3>
              </div>
              <div className="space-y-2 text-gray-300 text-sm ml-11">
                <p>Monday - Friday: <span className="text-white">8:00 AM - 6:00 PM</span></p>
                <p>Saturday: <span className="text-white">9:00 AM - 2:00 PM</span></p>
                <p>Sunday: <span className="text-[#00b4a0]">Closed</span></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a2f4d] p-8 md:p-10 rounded-lg border border-[#003d7a]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
