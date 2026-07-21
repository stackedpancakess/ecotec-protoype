import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-white">
      {/* CTA Section */}
      <div id="cta-section" className="border-b border-[#003d7a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build Your Program.
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
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
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">ECOTECASIA</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Global Consumer Electronics Lifecycle Platform powered by EDI.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#about" className="hover:text-[#00b4a0] transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#capabilities"
                    className="hover:text-[#00b4a0] transition"
                  >
                    Capabilities
                  </a>
                </li>
                <li>
                  <a
                    href="#philippines"
                    className="hover:text-[#00b4a0] transition"
                  >
                    Why Philippines
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="mailto:contact@ecotecasia.com"
                    className="hover:text-[#00b4a0] transition"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+63-123-4567"
                    className="hover:text-[#00b4a0] transition"
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <a href="#locations" className="hover:text-[#00b4a0] transition">
                    Locations
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4a0] transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4a0] transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4a0] transition">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#003d7a] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 ECOTECASIA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
