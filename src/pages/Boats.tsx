import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ship, Users, Clock, MapPin, Gauge, FileCheck, Shield, LifeBuoy, Phone, ChevronLeft, ChevronRight, X } from "lucide-react";
import boatImage from "@/assets/boat.jpg";
import nikita55m1 from "@/assets/nikita-55m-1.jpg";
import nikita55m2 from "@/assets/nikita-55m-2.jpg";
import nikita55m3 from "@/assets/nikita-55m-3.jpg";
import nikita55m4 from "@/assets/nikita-55m-4.jpg";
import nikita4701 from "@/assets/nikita-470-1.jpg";
import nikita4702 from "@/assets/nikita-470-2.jpg";
import nikita4703 from "@/assets/nikita-470-3.jpg";
import nikita4704 from "@/assets/nikita-470-4.jpg";
import nikita5001 from "@/assets/nikita-500-1.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingInquiryDialog from "@/components/BookingInquiryDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const boats = [
  {
    id: "nikita-470",
    name: "Nikita 4.70m",
    power: "30 HP",
    images: [nikita4701, nikita4702, nikita4703, nikita4704],
    capacity: 6,
    license: false,
    destinations: ["Around Meganisi"],
    hours: "9:00 - 18:00",
    description: {
      en: "Perfect for first-time boaters! This easy-to-handle boat requires no license and is ideal for exploring the beautiful coastline of Meganisi.",
      el: "Ιδανικό για αρχάριους! Αυτό το εύχρηστο σκάφος δεν απαιτεί δίπλωμα και είναι ιδανικό για την εξερεύνηση της όμορφης ακτογραμμής του Μεγανησίου."
    },
    features: {
      en: ["No license required", "Fuel efficient", "Easy handling", "Shaded canopy"],
      el: ["Χωρίς δίπλωμα", "Οικονομικό", "Εύκολος χειρισμός", "Σκίαστρο"]
    },
  },
  {
    id: "nikita-sv499",
    name: "Nikita SV4.99",
    power: "115 HP",
    image: boatImage,
    capacity: 8,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Meganisi", "Kalamos", "Kastos"],
    hours: "9:00 - 18:00",
    description: {
      en: "The Nikita SV4.99 combines reliability with performance. Perfect for adventurous families looking to explore the nearby islands in comfort and style.",
      el: "Το Nikita SV4.99 συνδυάζει αξιοπιστία με επιδόσεις. Ιδανικό για τολμηρές οικογένειες που θέλουν να εξερευνήσουν τα κοντινά νησιά με άνεση και στυλ."
    },
    features: {
      en: ["Fast & fuel efficient", "Island hopping capable", "Comfortable layout", "Sun protection"],
      el: ["Γρήγορο & οικονομικό", "Ικανό για νησιοπήδημα", "Άνετη διάταξη", "Προστασία από ήλιο"]
    },
  },
  {
    id: "nikita-500",
    name: "Nikita 5.00",
    power: "60 HP",
    images: [nikita5001],
    capacity: 8,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Around Meganisi"],
    hours: "9:00 - 18:00",
    description: {
      en: "A versatile and comfortable boat that offers more power while remaining easy to handle. Great for families wanting to explore every corner of Meganisi.",
      el: "Ένα ευέλικτο και άνετο σκάφος που προσφέρει περισσότερη ισχύ ενώ παραμένει εύκολο στον χειρισμό. Ιδανικό για οικογένειες που θέλουν να εξερευνήσουν κάθε γωνιά του Μεγανησίου."
    },
    features: {
      en: ["Easy to handle", "Comfortable seating", "Powerful engine", "Great stability"],
      el: ["Εύκολος χειρισμός", "Άνετα καθίσματα", "Ισχυρός κινητήρας", "Μεγάλη σταθερότητα"]
    },
  },
  {
    id: "nikita-550",
    name: "Nikita 5.5m",
    power: "115 HP",
    images: [nikita55m1, nikita55m2, nikita55m3, nikita55m4],
    capacity: 9,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Meganisi", "Kalamos", "Kastos"],
    hours: "9:00 - 18:00",
    description: {
      en: "With 115HP of power, this boat opens up the neighboring islands of Kalamos and Kastos for your exploration. Discover hidden beaches and authentic Greek island life.",
      el: "Με 115HP ισχύ, αυτό το σκάφος ανοίγει τα γειτονικά νησιά Κάλαμο και Καστό για εξερεύνηση. Ανακαλύψτε κρυφές παραλίες και αυθεντική ελληνική νησιωτική ζωή."
    },
    features: {
      en: ["Island hopping capable", "Spacious deck", "Powerful 115HP engine", "Premium comfort"],
      el: ["Ικανό για νησιοπήδημα", "Ευρύχωρο κατάστρωμα", "Ισχυρός κινητήρας 115HP", "Premium άνεση"]
    },
  },
  {
    id: "poseidon-550",
    name: "Poseidon 5.5m",
    power: "115 HP",
    image: boatImage,
    capacity: 8,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Meganisi", "Kalamos", "Kastos"],
    hours: "9:00 - 18:00",
    description: {
      en: "The Poseidon 5.5m combines reliability with performance. Perfect for adventurous families looking to explore the nearby islands in comfort and style.",
      el: "Το Poseidon 5.5m συνδυάζει αξιοπιστία με επιδόσεις. Ιδανικό για τολμηρές οικογένειες που θέλουν να εξερευνήσουν τα κοντινά νησιά με άνεση και στυλ."
    },
    features: {
      en: ["Reliable performance", "Island hopping capable", "Comfortable layout", "Sun protection"],
      el: ["Αξιόπιστες επιδόσεις", "Ικανό για νησιοπήδημα", "Άνετη διάταξη", "Προστασία από ήλιο"]
    },
  },
];

const Boats = () => {
  const { language, t } = useLanguage();
  const [selectedBoat, setSelectedBoat] = useState<string | null>(null);
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  const [lightboxBoat, setLightboxBoat] = useState<{ id: string; images: string[]; name: string } | null>(null);

  const getImageIndex = (boatId: string) => imageIndexes[boatId] || 0;
  
  const nextImage = (boatId: string, totalImages: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageIndexes(prev => ({
      ...prev,
      [boatId]: (getImageIndex(boatId) + 1) % totalImages
    }));
  };
  
  const prevImage = (boatId: string, totalImages: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageIndexes(prev => ({
      ...prev,
      [boatId]: (getImageIndex(boatId) - 1 + totalImages) % totalImages
    }));
  };

  const openLightbox = (boat: { id: string; images?: string[]; image?: string; name: string }) => {
    if (boat.images && boat.images.length > 0) {
      setLightboxBoat({ id: boat.id, images: boat.images, name: boat.name });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3 animate-fade-in">
              {t("boats.subtitle")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t("boats.title")}
            </h1>
            <p className="text-card/80 text-lg max-w-2xl mx-auto font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("boats.description")}
            </p>
          </div>
        </section>

        {/* Skipper Service Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Ship className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("boats.skipperTitle")}
              </h2>
              <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-4">
                {t("boats.skipperDesc")}
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                <span className="text-foreground font-medium">{t("boats.skipperNote")}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t("boats.safetyTitle")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-left bg-secondary/50 rounded-xl p-4">
                  <LifeBuoy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {t("boats.safetyEquipment")}
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left bg-secondary/50 rounded-xl p-4">
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {t("boats.safetyBriefing")}
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left bg-secondary/50 rounded-xl p-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {t("boats.safetySupport")}
                  </p>
                </div>
              </div>
            </div>
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
                    {boat.images ? (
                      <>
                        <div 
                          className="w-full h-full cursor-pointer"
                          onClick={() => openLightbox(boat)}
                        >
                          <img
                            src={boat.images[getImageIndex(boat.id)]}
                            alt={`${boat.name} - ${getImageIndex(boat.id) + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        {boat.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => prevImage(boat.id, boat.images!.length, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={(e) => nextImage(boat.id, boat.images!.length, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {boat.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => { e.stopPropagation(); setImageIndexes(prev => ({ ...prev, [boat.id]: idx })); }}
                                  className={`w-2 h-2 rounded-full transition-colors ${idx === getImageIndex(boat.id) ? 'bg-card' : 'bg-card/50'}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <img
                        src={boat.image}
                        alt={boat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 flex gap-2 pointer-events-none">
                      <span className="px-3 py-1 bg-primary text-card text-sm font-sans font-semibold rounded-full">
                        {boat.power}
                      </span>
                      {!boat.license && (
                        <span className="px-3 py-1 bg-accent text-card text-sm font-sans font-semibold rounded-full flex items-center gap-1">
                          <FileCheck className="w-3 h-3" />
                          {t("boats.noLicense")}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 pointer-events-none">
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
                      {boat.description[language]}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{t("boats.upTo")} {boat.capacity} {t("boats.passengers")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{boat.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground col-span-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{boat.destinations.join(", ")}</span>
                      </div>
                      {boat.license && boat.licenseType && (
                        <div className="flex items-center gap-2 text-foreground col-span-2">
                          <Gauge className="w-5 h-5 text-accent" />
                          <span className="font-sans text-sm text-accent">{boat.licenseType[language]} {t("boats.required")}</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {boat.features[language].map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-sea-light text-primary text-sm font-sans rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button 
                      variant="contact" 
                      className="w-full"
                      onClick={() => setSelectedBoat(boat.name)}
                    >
                      {t("boats.inquire")} {boat.name}
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
        open={!!selectedBoat}
        onOpenChange={(open) => !open && setSelectedBoat(null)}
        vehicleName={selectedBoat || ""}
        vehicleType="boat"
      />

      {/* Lightbox Gallery */}
      <Dialog open={!!lightboxBoat} onOpenChange={(open) => !open && setLightboxBoat(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          {lightboxBoat && (
            <div className="relative w-full h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setLightboxBoat(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center text-card hover:bg-card/40 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={lightboxBoat.images[getImageIndex(lightboxBoat.id)]}
                alt={`${lightboxBoat.name} - ${getImageIndex(lightboxBoat.id) + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              
              {lightboxBoat.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => prevImage(lightboxBoat.id, lightboxBoat.images.length, e)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center text-card hover:bg-card/40 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => nextImage(lightboxBoat.id, lightboxBoat.images.length, e)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center text-card hover:bg-card/40 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {lightboxBoat.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImageIndexes(prev => ({ ...prev, [lightboxBoat.id]: idx }))}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === getImageIndex(lightboxBoat.id) ? 'bg-card' : 'bg-card/50'}`}
                      />
                    ))}
                  </div>
                  
                  <div className="absolute bottom-6 right-6 text-card/80 font-sans text-sm">
                    {getImageIndex(lightboxBoat.id) + 1} / {lightboxBoat.images.length}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Boats;
