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
      className={`bg-[#0f1f3d] py-16 md:py-24 transition-all duration-500 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
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
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Email</h3>
              <a
                href="mailto:contact@ecotecasia.com"
                className="text-[#00b4a0] hover:text-white transition break-all"
              >
                contact@ecotecasia.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Phone</h3>
              <a
                href="tel:+63-2-1234-5678"
                className="text-[#00b4a0] hover:text-white transition"
              >
                +63 (2) 1234-5678
              </a>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Locations</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium text-white">Singapore</p>
                  <p className="text-sm">Regional Headquarters</p>
                </div>
                <div>
                  <p className="font-medium text-white">Philippines</p>
                  <p className="text-sm">Main Operations & Facility</p>
                </div>
                <div>
                  <p className="font-medium text-white">Miami, USA</p>
                  <p className="text-sm">Sorting & Receiving Center</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Hours</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
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
