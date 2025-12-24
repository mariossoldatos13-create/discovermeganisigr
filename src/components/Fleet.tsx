import { Ship, Bike, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import boatImage from "@/assets/boat.jpg";
import motorbikeImage from "@/assets/motorbike.jpg";
import cruiseImage from "@/assets/cruise-meganisi.jpg";

const categories = [
  {
    id: "boats",
    icon: Ship,
    title: "Boats",
    subtitle: "Explore by Sea",
    description: "From easy-to-handle 30HP boats requiring no license to powerful 250HP RIBs for island hopping. Explore Meganisi, Kalamos, Kastos, Atokos, and even Ithaca.",
    count: "6 vessels",
    image: boatImage,
    href: "/boats",
  },
  {
    id: "cruises",
    icon: Compass,
    title: "Cruises",
    subtitle: "Island Hopping",
    description: "Discover the magic of the Ionian islands. From the hidden beaches of Meganisi to the mythical shores of Ithaca, choose your perfect destination.",
    count: "4 destinations",
    image: cruiseImage,
    href: "/cruises",
  },
  {
    id: "land-adventures",
    icon: Bike,
    title: "Land Adventures",
    subtitle: "Explore by Land",
    description: "Navigate the charming villages with our scooters and e-bikes, or take the road less traveled with our powerful ATV. Perfect for discovering hidden viewpoints.",
    count: "5 vehicles",
    image: motorbikeImage,
    href: "/land-adventures",
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3">
            Our Fleet
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Whether you prefer the freedom of the open sea or the thrill of the mountain roads, 
            we have the perfect vehicle for your Meganisi adventure.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              to={category.href}
              key={category.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-primary text-card text-sm font-sans font-semibold rounded-full">
                    {category.count}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-card/80 text-sm font-sans">{category.subtitle}</p>
                    <h3 className="text-card font-display text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground font-sans mb-6 leading-relaxed text-sm">
                  {category.description}
                </p>
                <Button variant="contact" className="w-full group-hover:bg-primary group-hover:text-card transition-colors">
                  View {category.title} →
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
