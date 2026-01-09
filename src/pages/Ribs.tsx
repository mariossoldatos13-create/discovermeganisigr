import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ship, Users, Clock, MapPin, Gauge, Anchor, ChevronLeft, ChevronRight, X } from "lucide-react";
import ribBoatImage from "@/assets/rib-boat.jpg";
import gene6701 from "@/assets/gene-670-1.jpg";
import gene6702 from "@/assets/gene-670-2.jpg";
import gene6703 from "@/assets/gene-670-3.jpg";
import tempest7701 from "@/assets/tempest-770-1.jpg";
import tempest7702 from "@/assets/tempest-770-2.jpg";
import tempest7703 from "@/assets/tempest-770-3.jpg";
import tempest7704 from "@/assets/tempest-770-4.jpg";
import tempest7705 from "@/assets/tempest-770-5.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingInquiryDialog from "@/components/BookingInquiryDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ribs = [
  {
    id: "gene-670-rib",
    name: "Gene 6.70m",
    power: "250 HP",
    images: [gene6701, gene6702, gene6703],
    capacity: 9,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Meganisi", "Kalamos", "Kastos", "Atokos", "Ithaca"],
    hours: "9:00 - 18:00",
    description: {
      en: "Our powerful RIB opens up the entire Ionian Sea for your adventure. Visit the legendary Ithaca, the pristine Atokos, and more with speed and comfort.",
      el: "Το ισχυρό μας φουσκωτό ανοίγει ολόκληρο το Ιόνιο Πέλαγος για την περιπέτειά σας. Επισκεφθείτε τη θρυλική Ιθάκη, τον παρθένο Άτοκο και πολλά άλλα με ταχύτητα και άνεση."
    },
    features: {
      en: ["RIB stability", "250HP power", "Long-range capability", "Premium experience"],
      el: ["Σταθερότητα RIB", "Ισχύς 250HP", "Μεγάλη εμβέλεια", "Premium εμπειρία"]
    },
  },
  {
    id: "tempest-770",
    name: "Capelli Tempest 7.70m",
    power: "250 HP",
    images: [tempest7701, tempest7702, tempest7703, tempest7704, tempest7705],
    capacity: 12,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Meganisi", "Kalamos", "Kastos", "Atokos", "Ithaca"],
    hours: "9:00 - 18:00",
    description: {
      en: "The flagship of our fleet. The Capelli Tempest 7.70m offers the ultimate boating experience with exceptional space, power, and range for the most adventurous explorers.",
      el: "Η ναυαρχίδα του στόλου μας. Το Capelli Tempest 7.70m προσφέρει την απόλυτη εμπειρία θαλάσσης με εξαιρετικό χώρο, ισχύ και εμβέλεια για τους πιο τολμηρούς εξερευνητές."
    },
    features: {
      en: ["Flagship vessel", "Maximum comfort", "Extended range", "Premium amenities"],
      el: ["Ναυαρχίδα", "Μέγιστη άνεση", "Εκτεταμένη εμβέλεια", "Premium ανέσεις"]
    },
  },
];

const Ribs = () => {
  const { language, t } = useLanguage();
  const [selectedRib, setSelectedRib] = useState<string | null>(null);
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  const [lightboxRib, setLightboxRib] = useState<{ id: string; images: string[]; name: string } | null>(null);

  const getImageIndex = (ribId: string) => imageIndexes[ribId] || 0;
  
  const nextImage = (ribId: string, totalImages: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageIndexes(prev => ({
      ...prev,
      [ribId]: (getImageIndex(ribId) + 1) % totalImages
    }));
  };
  
  const prevImage = (ribId: string, totalImages: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageIndexes(prev => ({
      ...prev,
      [ribId]: (getImageIndex(ribId) - 1 + totalImages) % totalImages
    }));
  };

  const openLightbox = (rib: { id: string; images?: string[]; image?: string; name: string }) => {
    if (rib.images && rib.images.length > 0) {
      setLightboxRib({ id: rib.id, images: rib.images, name: rib.name });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${gene6703})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3 animate-fade-in">
              {t("ribs.subtitle")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t("ribs.title")}
            </h1>
            <p className="text-card/80 text-lg max-w-2xl mx-auto font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("ribs.description")}
            </p>
          </div>
        </section>

        {/* RIB Features Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Anchor className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {language === "en" ? "Why Choose a RIB?" : "Γιατί να Επιλέξετε Φουσκωτό;"}
              </h2>
              <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-4">
                {language === "en" 
                  ? "RIB (Rigid Inflatable Boat) combines the stability of a solid hull with the buoyancy of inflatable tubes. This makes them incredibly safe, stable, and fast – perfect for reaching distant islands like Ithaca and Atokos in comfort."
                  : "Τα RIB (Άκαμπτα Φουσκωτά Σκάφη) συνδυάζουν τη σταθερότητα της στερεάς γάστρας με την πλευστότητα των φουσκωτών σωλήνων. Αυτό τα καθιστά απίστευτα ασφαλή, σταθερά και γρήγορα – ιδανικά για να φτάσετε σε μακρινά νησιά όπως η Ιθάκη και ο Άτοκος με άνεση."
                }
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {language === "en"
                  ? "With 250HP engines, these vessels can cover large distances quickly while maintaining excellent fuel efficiency."
                  : "Με κινητήρες 250HP, αυτά τα σκάφη μπορούν να καλύψουν μεγάλες αποστάσεις γρήγορα διατηρώντας εξαιρετική οικονομία καυσίμου."
                }
                <span className="text-foreground font-medium"> {t("boats.skipperNote")}</span>
              </p>
            </div>
          </div>
        </section>

        {/* RIBs Grid */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ribs.map((rib, index) => (
                <article
                  key={rib.id}
                  className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Header above image */}
                  <div className="p-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Ship className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-foreground font-display text-2xl font-bold">{rib.name}</h2>
                        <span className="text-primary font-sans font-semibold text-sm">{rib.power}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="w-full h-full cursor-pointer relative z-10"
                      onClick={() => openLightbox(rib)}
                    >
                      <img
                        src={rib.images[getImageIndex(rib.id)]}
                        alt={`${rib.name} - ${getImageIndex(rib.id) + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {rib.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); prevImage(rib.id, rib.images.length, e); }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors z-20"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextImage(rib.id, rib.images.length, e); }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors z-20"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                          {rib.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => { e.stopPropagation(); setImageIndexes(prev => ({ ...prev, [rib.id]: idx })); }}
                              className={`w-2 h-2 rounded-full transition-colors ${idx === getImageIndex(rib.id) ? 'bg-card' : 'bg-card/50'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                      {rib.description[language]}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{t("boats.upTo")} {rib.capacity} {t("boats.passengers")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{rib.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground col-span-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-sans text-sm">{rib.destinations.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2 bg-amber-100 text-amber-800 px-3 py-2 rounded-lg">
                        <Gauge className="w-5 h-5" />
                        <span className="font-sans text-sm font-medium">{rib.licenseType[language]} {t("boats.required")}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {rib.features[language].map((feature) => (
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
                      onClick={() => setSelectedRib(rib.name)}
                    >
                      {t("boats.inquire")} {rib.name}
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
        open={!!selectedRib}
        onOpenChange={(open) => !open && setSelectedRib(null)}
        vehicleName={selectedRib || ""}
        vehicleType="rib"
      />

      {/* Lightbox Gallery */}
      <Dialog open={!!lightboxRib} onOpenChange={(open) => !open && setLightboxRib(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          {lightboxRib && (
            <div className="relative w-full h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setLightboxRib(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center text-card hover:bg-card/40 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={lightboxRib.images[getImageIndex(lightboxRib.id)]}
                alt={`${lightboxRib.name} - ${getImageIndex(lightboxRib.id) + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              
              {lightboxRib.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => prevImage(lightboxRib.id, lightboxRib.images.length, e)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center text-card hover:bg-card/40 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => nextImage(lightboxRib.id, lightboxRib.images.length, e)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center text-card hover:bg-card/40 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {lightboxRib.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImageIndexes(prev => ({ ...prev, [lightboxRib.id]: idx }))}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === getImageIndex(lightboxRib.id) ? 'bg-card' : 'bg-card/50'}`}
                      />
                    ))}
                  </div>
                  
                  <div className="absolute bottom-6 right-6 text-card/80 font-sans text-sm">
                    {getImageIndex(lightboxRib.id) + 1} / {lightboxRib.images.length}
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

export default Ribs;
