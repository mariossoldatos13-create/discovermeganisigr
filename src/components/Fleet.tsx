import { Ship, Anchor, Bike, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import boatImage from "@/assets/boat.jpg";
import ribImage from "@/assets/rib-boat.jpg";
import motorbikeImage from "@/assets/motorbike.jpg";
import atvImage from "@/assets/atv.jpg";

const vehicles = [
  {
    id: "boats",
    icon: Ship,
    title: "Traditional Boats",
    subtitle: "Classic Greek Charm",
    description: "Experience the authentic way to explore the Ionian with our traditional Greek boats. Perfect for leisurely cruising to hidden beaches and coves.",
    features: ["4-6 passengers", "Shaded canopy", "Fuel efficient", "Easy to operate"],
    image: boatImage,
  },
  {
    id: "ribs",
    icon: Anchor,
    title: "RIB Boats",
    subtitle: "Speed & Comfort",
    description: "Our modern RIB boats combine speed with stability. Ideal for island hopping and reaching distant beaches in style and comfort.",
    features: ["Up to 8 passengers", "Powerful engines", "Premium comfort", "Day cruiser ready"],
    image: ribImage,
  },
  {
    id: "motorbikes",
    icon: Bike,
    title: "Motorbikes & Scooters",
    subtitle: "Freedom on Two Wheels",
    description: "Navigate the charming villages and coastal roads of Meganisi with our reliable scooters and motorbikes. The perfect way to explore the island.",
    features: ["Easy handling", "Fuel efficient", "Helmet included", "All island access"],
    image: motorbikeImage,
  },
  {
    id: "atvs",
    icon: Car,
    title: "ATVs & Quads",
    subtitle: "Off-Road Adventures",
    description: "Take the road less traveled with our powerful ATVs. Explore scenic mountain trails and discover viewpoints most tourists never see.",
    features: ["4x4 capability", "Rugged terrain", "Exciting rides", "Scenic routes"],
    image: atvImage,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <vehicle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-card/80 text-sm font-sans">{vehicle.subtitle}</p>
                    <h3 className="text-card font-display text-xl font-bold">{vehicle.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                  {vehicle.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-sea-light text-primary text-sm font-sans rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="contact" className="w-full" asChild>
                  <a href="#contact">Inquire About {vehicle.title}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
