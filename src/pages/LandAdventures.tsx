import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bike, Users, MapPin, Zap, Battery } from "lucide-react";
import motorbikeImage from "@/assets/motorbike.jpg";
import atvImage from "@/assets/atv.jpg";
import ebikeMountainImage from "@/assets/ebike-mountain.jpg";
import ebikeCityImage from "@/assets/ebike-city.jpg";
import BookingInquiryDialog from "@/components/BookingInquiryDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const vehicles = [
  {
    id: "symphony-sr-50",
    name: "Symphony SR 50cc",
    type: "Scooter",
    image: motorbikeImage,
    capacity: 1,
    terrain: "Paved roads only",
    description: "The perfect scooter for zipping around the charming villages of Meganisi. Fuel-efficient and easy to handle, ideal for solo explorers.",
    features: ["Easy handling", "Fuel efficient", "Helmet included", "Automatic transmission"],
  },
  {
    id: "symphony-sr-125",
    name: "Symphony SR 125cc",
    type: "Scooter",
    image: motorbikeImage,
    capacity: 2,
    terrain: "Paved roads only",
    description: "More power for two! The 125cc Symphony offers comfortable riding for couples wanting to explore the entire island together.",
    features: ["Suitable for 2 riders", "More power", "Comfortable seat", "Storage compartment"],
  },
  {
    id: "kymco-450",
    name: "Kymco 450cc ATV",
    type: "ATV / Quad",
    image: atvImage,
    capacity: 2,
    terrain: "All terrain capable",
    description: "Take the road less traveled with our powerful Kymco ATV. Explore scenic mountain trails and discover viewpoints most tourists never see.",
    features: ["Off-road capable", "Powerful engine", "Rugged terrain", "Adventure ready"],
  },
  {
    id: "ebike-mountain",
    name: "E-Bike Mountain",
    type: "Electric Bike",
    image: ebikeMountainImage,
    capacity: 1,
    terrain: "All terrain capable",
    description: "Conquer the hills of Meganisi effortlessly with our electric mountain bike. Perfect for adventurous riders who want to explore off the beaten path while enjoying eco-friendly transportation.",
    features: ["80km full power range", "Charger included", "Helmet provided", "All terrain tires"],
    isElectric: true,
  },
  {
    id: "ebike-city",
    name: "E-Bike City",
    type: "Electric Bike",
    image: ebikeCityImage,
    capacity: 1,
    terrain: "Paved roads only",
    description: "Cruise through the picturesque villages and coastal roads with our comfortable city e-bike. The perfect blend of convenience and sustainability for relaxed island exploration.",
    features: ["80km full power range", "Charger included", "Helmet provided", "Comfortable saddle"],
    isElectric: true,
  },
];

const LandAdventures = () => {
  const { t, language } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3 animate-fade-in">
              Land Adventures
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore by Land
            </h1>
            <p className="text-card/80 text-lg max-w-2xl mx-auto font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From nimble scooters for coastal roads to powerful ATVs for off-road adventures and eco-friendly e-bikes. 
              Discover every corner of beautiful Meganisi.
            </p>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle, index) => (
                <article
                  key={vehicle.id}
                  className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {vehicle.isElectric && (
                        <span className="px-2 py-1 bg-green-500 text-card text-xs font-sans font-semibold rounded-full flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Electric
                        </span>
                      )}
                      <span className="px-3 py-1 bg-primary text-card text-sm font-sans font-semibold rounded-full">
                        {vehicle.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                          {vehicle.isElectric ? (
                            <Battery className="w-5 h-5 text-primary" />
                          ) : (
                            <Bike className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <h2 className="text-card font-display text-xl font-bold">{vehicle.name}</h2>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground font-sans mb-5 leading-relaxed text-sm">
                      {vehicle.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-col gap-3 mb-5">
                      <div className="flex items-center gap-2 text-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-sans text-sm">
                          {vehicle.capacity === 1 ? "1 rider" : `Up to ${vehicle.capacity} riders`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-sans text-sm">{vehicle.terrain}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {vehicle.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-sea-light text-primary text-xs font-sans rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button 
                      variant="contact" 
                      className="w-full"
                      onClick={() => setSelectedVehicle(vehicle.name)}
                    >
                      {t("boats.inquire")} {vehicle.name}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <BookingInquiryDialog
        open={!!selectedVehicle}
        onOpenChange={(open) => !open && setSelectedVehicle(null)}
        vehicleName={selectedVehicle || ""}
        vehicleType="land"
      />
    </div>
  );
};

export default LandAdventures;
