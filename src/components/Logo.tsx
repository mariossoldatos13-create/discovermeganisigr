import { Compass } from "lucide-react";

interface LogoProps {
  isScrolled?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ isScrolled = false, variant, className = "" }: LogoProps) => {
  const textColor = variant === "dark" 
    ? "text-card" 
    : variant === "light" 
      ? "text-foreground" 
      : isScrolled 
        ? "text-foreground" 
        : "text-card";

  const compassColor = variant === "dark"
    ? "text-accent"
    : variant === "light"
      ? "text-primary"
      : isScrolled
        ? "text-primary"
        : "text-card";

  return (
    <a href="/" className={`flex items-center gap-1 group ${className}`}>
      <span className={`font-display text-xl font-bold transition-colors duration-300 ${textColor}`}>
        Disc
      </span>
      <span className="relative inline-flex items-center justify-center w-7 h-7">
        {/* The O letter represented by a circle with compass inside */}
        <span className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
          variant === "dark" 
            ? "border-card" 
            : variant === "light"
              ? "border-foreground"
              : isScrolled 
                ? "border-foreground" 
                : "border-card"
        }`} />
        <Compass 
          className={`w-4 h-4 transition-colors duration-300 group-hover:rotate-45 transition-transform ${compassColor}`}
        />
      </span>
      <span className={`font-display text-xl font-bold transition-colors duration-300 ${textColor}`}>
        ver Meganisi
      </span>
    </a>
  );
};

export default Logo;
