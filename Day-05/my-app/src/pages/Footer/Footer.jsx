

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyLogo</h2>
          <p className="mt-4 text-gray-400">
            Crafting modern web solutions with React and Tailwind CSS.
            Delivering responsive, user-friendly websites.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: 123 Street, City, Pakistan</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
      </div>
    </footer>
  );
}
