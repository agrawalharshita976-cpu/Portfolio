const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Building simple and beautiful digital experiences for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="/" className="text-sm hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-blue-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>hello@example.com</p>
              <p>+91 98765 43210</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
