import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4`}
    >
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'glass-nav px-6 py-3' : 'px-2 py-2'
        }`}
      >
        <div className="text-2xl font-heading font-bold text-gradient cursor-pointer">
          <Link to="home" smooth={true} duration={500}>Portfolio.</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-600 font-medium"
              className="text-slate-600 hover:text-blue-600 cursor-pointer text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-md"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-card p-4 rounded-2xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-600 bg-blue-50"
              className="text-slate-700 px-4 py-2 rounded-xl font-medium cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
