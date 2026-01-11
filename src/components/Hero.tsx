import { Button } from "@/components/ui/button";
import { ChevronDown, Ship, Anchor, Bike, Zap } from "lucide-react";
import heroImage from "@/assets/hero-meganisi.jpg";
import { Link } from "react-router-dom";

const exploreCategories = [
  {
    label: "Boats",
    href: "/boats",
    icon: Ship,
  },
  {
    label: "RIBs",
    href: "/ribs",
    icon: Anchor,
  },
  {
    label: "E-Bikes",
    href: "/land-adventures#ebikes",
    icon: Bike,
  },
  {
    label: "Scooters",
    href: "/land-adventures#scooters",
    icon: Zap,
  },
  {
    label: "ATVs",
    href: "/land-adventures#atvs",
    icon: Zap,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-card/90 font-sans font-medium tracking-widest uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Welcome to the Ionian Paradise
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Discover Meganisi
            <span className="block text-accent">Your Way</span>
          </h1>
          <p className="text-card/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Explore the hidden gem of the Seven Islands with our premium boats, 
            scooters, and ATVs. Your adventure in the crystal-clear Ionian waters awaits.
          </p>
          
          {/* Explore Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
            {exploreCategories.map((category) => (
              <Link
                key={category.label}
                to={category.href}
                className="group flex flex-col items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-xl p-4 hover:bg-card/20 hover:border-accent/50 transition-all duration-300"
              >
                <category.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-card font-medium text-sm">{category.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-card/80 hover:text-card animate-float cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
