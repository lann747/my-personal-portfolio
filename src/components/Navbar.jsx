import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // === Scroll Effect ===
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // === Smooth Scroll ===
  const handleScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // === Icon Components ===
  const Icon = ({ open }) => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? "bg-sky-50/90 shadow-lg border-b border-sky-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* === Logo === */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center space-x-2 text-xl font-bold tracking-tight"
          >
            {/* <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">L</span>
            </div> */}
            <span
              className={`transition-colors ${
                isScrolled ? "text-sky-700" : "text-white"
              }`}
            >
              Lantera<span className="text-sky-500">M</span>
            </span>
          </a>

          {/* === Desktop Menu === */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.link}
                  onClick={(e) => handleScroll(e, item.link)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-slate-700 hover:text-sky-600"
                      : "text-white hover:text-sky-200"
                  }`}
                >
                  {item.name}
                </a>
                <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </li>
            ))}
          </ul>

          {/* === Mobile Menu Button === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-700 hover:bg-sky-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Icon open={isOpen} />
          </button>
        </div>
      </div>

      {/* === Mobile Menu === */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-sky-100 shadow-lg">
          <ul className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={(e) => handleScroll(e, item.link)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border-l-2 border-transparent hover:border-sky-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
