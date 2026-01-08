import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? "#home" : "/", label: t("nav.home"), isAnchor: isHomePage },
    { href: isHomePage ? "#about" : "/#about", label: t("nav.about"), isAnchor: isHomePage },
    { href: "/boats", label: t("nav.boats"), isAnchor: false },
    { href: "/ribs", label: t("nav.ribs"), isAnchor: false },
    { href: "/cruises", label: t("nav.cruises"), isAnchor: false },
    { href: "/land-adventures", label: t("nav.landAdventures"), isAnchor: false },
    { href: isHomePage ? "#contact" : "/#contact", label: t("nav.contact"), isAnchor: isHomePage },
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
        <Logo isScrolled={isScrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans font-medium transition-colors duration-300 hover:text-accent text-sm ${
                  isScrolled ? "text-foreground" : "text-card"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans font-medium transition-colors duration-300 hover:text-accent text-sm ${
                  isScrolled ? "text-foreground" : "text-card"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className={`font-sans font-medium transition-colors duration-300 hover:text-accent text-sm flex items-center gap-1 ${
                  isScrolled ? "text-foreground" : "text-card"
                }`}
              >
                {language === "en" ? "EN" : "ΕΛ"}
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem 
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-primary/10" : ""}
              >
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("el")}
                className={language === "el" ? "bg-primary/10" : ""}
              >
                🇬🇷 Ελληνικά
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant={isScrolled ? "hero" : "hero-outline"} size="lg" asChild>
            <a href={isHomePage ? "#contact" : "/#contact"}>{t("nav.bookNow")}</a>
          </Button>
        </nav>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className={`font-sans font-medium text-sm flex items-center gap-1 ${
                  isScrolled ? "text-foreground" : "text-card"
                }`}
              >
                {language === "en" ? "EN" : "ΕΛ"}
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem 
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-primary/10" : ""}
              >
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("el")}
                className={language === "el" ? "bg-primary/10" : ""}
              >
                🇬🇷 Ελληνικά
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-card"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-card"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans font-medium text-foreground hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans font-medium text-foreground hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button variant="hero" size="lg" asChild>
              <a href={isHomePage ? "#contact" : "/#contact"}>{t("nav.bookNow")}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
