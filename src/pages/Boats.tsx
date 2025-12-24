import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ship, Users, Clock, MapPin, Gauge, FileCheck } from "lucide-react";
import boatImage from "@/assets/boat.jpg";

const boats = [
  {
    id: "nikita-470",
    name: "Nikita 470",
    power: "30 HP",
    image: boatImage,
    capacity: 6,
    license: false,
    destinations: ["Around Meganisi"],
    hours: "9:00 - 18:00",
    description: "Perfect for first-time boaters! This easy-to-handle boat requires no license and is ideal for exploring the beautiful coastline of Meganisi.",
    features: ["No license required", "Fuel efficient", "Easy handling", "Shaded canopy"],
  },
  {
    id: "nikita-500",
    name: "Nikita 5.00",
    power: "60 HP",
    image: boatImage,
    capacity: 8,
    license: true,
    licenseType: "Speed boat license",
    destinations: ["Around Meganisi"],
    hours: "9:00 - 18:00",
    description: "A versatile and comfortable boat that offers more power while remaining easy to handle. Great for families wanting to explore every corner of Meganisi.",
    features: ["Easy to handle", "Comfortable seating", "Powerful engine", "Great stability"],
  },
  {
    id: "nikita-550",
    name: "Nikita 5.5m",
    power: "115 HP",
    image: boatImage,
    capacity: 9,
    license: true,
    licenseType: "Speed boat license",
    destinations: ["Meganisi", "Kalamos", "Kastos"],
    hours: "9:00 - 18:00",
    description: "With 115HP of power, this boat opens up the neighboring islands of Kalamos and Kastos for your exploration. Discover hidden beaches and authentic Greek island life.",
    features: ["Island hopping capable", "Spacious deck", "Powerful 115HP engine", "Premium comfort"],
  },
  {
    id: "poseidon-550",
    name: "Poseidon 5.5m",
    power: "115 HP",
    image: boatImage,
    capacity: 8,
    license: true,
    licenseType: "Speed boat license",
    destinations: ["Meganisi", "Kalamos", "Kastos"],
    hours: "9:00 - 18:00",
    description: "The Poseidon 5.5m combines reliability with performance. Perfect for adventurous families looking to explore the nearby islands in comfort and style.",
    features: ["Reliable performance", "Island hopping capable", "Comfortable layout", "Sun protection"],
  },
  {
    id: "gene-670-rib",
    name: "Gene 670 RIB",
    power: "250 HP",
    image: boatImage,
    capacity: 9,
    license: true,
    licenseType: "Speed boat license",
    destinations: ["Meganisi", "Kalamos", "Kastos", "Atokos", "Ithaca"],
    hours: "9:00 - 18:00",
    description: "Our powerful RIB opens up the entire Ionian Sea for your adventure. Visit the legendary Ithaca, the pristine Atokos, and more with speed and comfort.",
    features: ["RIB stability", "250HP power", "Long-range capability", "Premium experience"],
  },
  {
    id: "tempest-770",
    name: "Victor Tempest 7.7m",
    power: "250 HP",
    image: boatImage,
    capacity: 9,
    license: true,
    licenseType: "Speed boat license",
    destinations: ["Meganisi", "Kalamos", "Kastos", "Atokos", "Ithaca"],
    hours: "9:00 - 18:00",
    description: "The flagship of our fleet. The Victor Tempest 7.7m offers the ultimate boating experience with exceptional space, power, and range for the most adventurous explorers.",
    features: ["Flagship vessel", "Maximum comfort", "Extended range", "Premium amenities"],
  },
];

const Boats = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3 animate-fade-in">
              Our Boat Fleet
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore by Sea
            </h1>
            <p className="text-card/80 text-lg max-w-2xl mx-auto font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From easy-to-handle boats for beginners to powerful vessels for island hopping adventures. 
              All boats available from 9:00 AM to 6:00 PM.
            </p>
          </div>
        </section>

        {/* Boats Grid */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {boats.map((boat, index) => (
                <article
                  key={boat.id}
                  className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={boat.image}
                      alt={boat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-card text-sm font-sans font-semibold rounded-full">
                        {boat.power}
                      </span>
                      {!boat.license && (
                        <span className="px-3 py-1 bg-accent text-card text-sm font-sans font-semibold rounded-full flex items-center gap-1">
                          <FileCheck className="w-3 h-3" />
                          No License
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                          <Ship className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-card font-display text-2xl font-bold">{boat.name}</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                      {boat.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">Up to {boat.capacity} passengers</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{boat.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground col-span-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{boat.destinations.join(", ")}</span>
                      </div>
                      {boat.license && (
                        <div className="flex items-center gap-2 text-foreground col-span-2">
                          <Gauge className="w-5 h-5 text-accent" />
                          <span className="font-sans text-sm text-accent">{boat.licenseType} required</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {boat.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-sea-light text-primary text-sm font-sans rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button variant="contact" className="w-full" asChild>
                      <a href="/#contact">Inquire About {boat.name}</a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Boats;
