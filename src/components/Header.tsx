import { useState, useEffect } from "react";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#fleet", label: "Our Fleet" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Anchor
            className={`w-8 h-8 transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-card"
            } group-hover:text-accent`}
          />
          <span
            className={`font-display text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-card"
            }`}
          >
            Meganisi Rentals
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans font-medium transition-colors duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant={isScrolled ? "hero" : "hero-outline"} size="lg" asChild>
            <a href="#contact">Book Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-card"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-card"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans font-medium text-foreground hover:text-accent py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Book Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
