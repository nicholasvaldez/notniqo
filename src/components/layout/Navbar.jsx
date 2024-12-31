export const Navbar = () => (
  <nav className="fixed w-full z-20 bg-white/5 backdrop-blur-lg">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <span className="text-2xl font-bold tracking-wider">notniqo</span>
      <div className="space-x-6">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300">
          About
        </a>
        <a href="/contact" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </div>
  </nav>
);
