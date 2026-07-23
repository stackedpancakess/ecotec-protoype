import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-white min-h-screen flex flex-col relative">
      {/* Top gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#00b4a0] via-[#006b8f] to-[#00b4a0]"></div>
      {/* CTA Section */}
      <div id="cta-section" className="flex-1 flex items-center justify-center border-b border-[#003d7a] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Let&apos;s Build Your Program.
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Direct engagement with our facility, team, and leadership. No
            intermediaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Get in Touch"
              href="#contact-form"
              variant="primary"
            />
            <Button
              text="Learn More"
              href="#capabilities"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold text-base md:text-lg mb-3">ECOTECASIA</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Global Consumer Electronics Lifecycle Platform powered by EDI.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm md:text-base mb-3">Quick Links</h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                <li>
                  <a href="#about" className="link-underline text-gray-300 hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#capabilities"
                    className="link-underline text-gray-300 hover:text-white transition"
                  >
                    Capabilities
                  </a>
                </li>
                <li>
                  <a
                    href="#philippines"
                    className="link-underline text-gray-300 hover:text-white transition"
                  >
                    Why Philippines
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm md:text-base mb-3">Contact</h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                <li>
                  <a
                    href="mailto:contact@ecotecasia.com"
                    className="link-underline text-gray-300 hover:text-white transition"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+63-123-4567"
                    className="link-underline text-gray-300 hover:text-white transition"
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <a href="#locations" className="link-underline text-gray-300 hover:text-white transition">
                    Locations
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-sm md:text-base mb-3">Follow</h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-underline text-gray-300 hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-underline text-gray-300 hover:text-white transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-underline text-gray-300 hover:text-white transition">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#003d7a] pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
            <p>&copy; 2024 ECOTECASIA. All rights reserved.</p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <a href="#" className="link-underline text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="link-underline text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
