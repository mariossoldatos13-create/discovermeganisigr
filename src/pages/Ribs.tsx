import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ship, Users, Clock, MapPin, Gauge, Anchor } from "lucide-react";
import ribBoatImage from "@/assets/rib-boat.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ribs = [
  {
    id: "gene-670-rib",
    name: "Gene 670 RIB",
    power: "250 HP",
    image: ribBoatImage,
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
    name: "Victor Tempest 7.7m",
    power: "250 HP",
    image: ribBoatImage,
    capacity: 9,
    license: true,
    licenseType: { en: "Speed boat license", el: "Δίπλωμα ταχύπλοου" },
    destinations: ["Meganisi", "Kalamos", "Kastos", "Atokos", "Ithaca"],
    hours: "9:00 - 18:00",
    description: {
      en: "The flagship of our fleet. The Victor Tempest 7.7m offers the ultimate boating experience with exceptional space, power, and range for the most adventurous explorers.",
      el: "Η ναυαρχίδα του στόλου μας. Το Victor Tempest 7.7m προσφέρει την απόλυτη εμπειρία θαλάσσης με εξαιρετικό χώρο, ισχύ και εμβέλεια για τους πιο τολμηρούς εξερευνητές."
    },
    features: {
      en: ["Flagship vessel", "Maximum comfort", "Extended range", "Premium amenities"],
      el: ["Ναυαρχίδα", "Μέγιστη άνεση", "Εκτεταμένη εμβέλεια", "Premium ανέσεις"]
    },
  },
];

const Ribs = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
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
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={rib.image}
                      alt={rib.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-card text-sm font-sans font-semibold rounded-full">
                        {rib.power}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                          <Ship className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-card font-display text-2xl font-bold">{rib.name}</h2>
                        </div>
                      </div>
                    </div>
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
                      <div className="flex items-center gap-2 text-foreground col-span-2">
                        <Gauge className="w-5 h-5 text-accent" />
                        <span className="font-sans text-sm text-accent">{rib.licenseType[language]} {t("boats.required")}</span>
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

                    <Button variant="contact" className="w-full" asChild>
                      <a href="/#contact">{t("boats.inquire")} {rib.name}</a>
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

export default Ribs;
