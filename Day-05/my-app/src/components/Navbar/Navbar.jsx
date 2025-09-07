export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">MyLogo</div>

        {/* Nav Links */}
        <ul className="flex space-x-8 font-medium text-gray-600">
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
      </nav>
    </header>
  );
}
