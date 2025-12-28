import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo-cospital.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#mission", label: "Notre mission" },
    { href: "#partners", label: "Partenaires" },
    { href: "#join", label: "Nous rejoindre" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Cosp'ital Logo" 
              className="h-12 md:h-16 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-semibold transition-colors duration-200 text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/cospital/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-soft"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden lg:inline">Suivez-nous</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary font-semibold transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/cospital/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full font-bold hover:bg-primary/90 transition-all mt-2"
            >
              <Instagram className="w-5 h-5" />
              Suivez-nous sur Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
