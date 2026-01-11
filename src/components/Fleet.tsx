import { Ship, Bike, Compass, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import boatImage from "@/assets/boats-fleet.jpg";
import ribBoatImage from "@/assets/ribs-fleet.jpg";
import motorbikeImage from "@/assets/land-adventures-fleet.jpg";
import cruiseImage from "@/assets/cruise-meganisi.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Fleet = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: "boats",
      icon: Ship,
      title: t("fleet.boats"),
      subtitle: t("fleet.boats.subtitle"),
      description: t("fleet.boats.description"),
      count: "4 " + t("common.vessels"),
      image: boatImage,
      href: "/boats",
    },
    {
      id: "ribs",
      icon: Anchor,
      title: t("fleet.ribs"),
      subtitle: t("fleet.ribs.subtitle"),
      description: t("fleet.ribs.description"),
      count: "2 " + t("common.vessels"),
      image: ribBoatImage,
      href: "/ribs",
    },
    {
      id: "cruises",
      icon: Compass,
      title: t("fleet.cruises"),
      subtitle: t("fleet.cruises.subtitle"),
      description: t("fleet.cruises.description"),
      count: "4 " + t("common.destinations"),
      image: cruiseImage,
      href: "/cruises",
    },
    {
      id: "land-adventures",
      icon: Bike,
      title: t("fleet.landAdventures"),
      subtitle: t("fleet.landAdventures.subtitle"),
      description: t("fleet.landAdventures.description"),
      count: "5 " + t("common.vehicles"),
      image: motorbikeImage,
      href: "/land-adventures",
    },
  ];

  return (
    <section id="fleet" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3">
            {t("fleet.subtitle")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("fleet.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            {t("fleet.description")}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              to={category.href}
              key={category.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-card text-xs font-sans font-semibold rounded-full">
                    {category.count}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-card/80 text-xs font-sans">{category.subtitle}</p>
                    <h3 className="text-card font-display text-lg font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-muted-foreground font-sans mb-4 leading-relaxed text-xs">
                  {category.description}
                </p>
                <Button variant="contact" className="w-full text-sm group-hover:bg-primary group-hover:text-card transition-colors">
                  {t("common.view")} {category.title} →
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
