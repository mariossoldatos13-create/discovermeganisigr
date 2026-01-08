import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Anchor, Clock, Camera, MapPin, Play, Image } from "lucide-react";
import cruiseMeganisi from "@/assets/cruise-meganisi.jpg";
import cruiseKalamosKastos from "@/assets/cruise-kalamos-kastos.jpg";
import cruiseWestLefkas from "@/assets/cruise-west-lefkas.jpg";
import cruiseIthaca from "@/assets/cruise-ithaca.jpg";
import cruisesHero from "@/assets/cruises-hero.jpg";

const cruises = [
  {
    id: "meganisi",
    name: "Meganisi Island",
    image: cruiseMeganisi,
    duration: "Full day (9:00 - 18:00)",
    highlights: ["Hidden beaches", "Sea caves", "Traditional villages", "Crystal waters"],
    description: "Discover the hidden gem of the Ionian Sea. Meganisi, with its three charming villages of Vathi, Spartochori, and Katomeri, offers an authentic Greek island experience. Explore secluded beaches accessible only by boat, swim in crystal-clear turquoise waters, and discover mysterious sea caves carved by centuries of waves. Stop at local tavernas for fresh seafood and experience the warm hospitality of the islanders.",
    boatsAvailable: ["Nikita 470", "Nikita 5.00", "Nikita 5.5m", "Poseidon 5.5m"],
  },
  {
    id: "kalamos-kastos",
    name: "Kalamos & Kastos",
    image: cruiseKalamosKastos,
    duration: "Full day (9:00 - 18:00)",
    highlights: ["Unspoiled nature", "Pine forests", "Quiet harbors", "Swimming spots"],
    description: "Venture to the untouched paradise of Kalamos and Kastos, two of the most pristine islands in the Ionian. Kalamos is covered in dense pine forests that meet crystal-clear waters, while tiny Kastos offers a peaceful escape with its charming harbor and welcoming tavernas. These islands remain largely undiscovered by mass tourism, making them perfect for those seeking tranquility and natural beauty.",
    boatsAvailable: ["Nikita 5.5m", "Poseidon 5.5m", "Gene 670 RIB", "Victor Tempest"],
  },
  {
    id: "west-lefkas",
    name: "West Lefkada Coast",
    image: cruiseWestLefkas,
    duration: "Full day (9:00 - 18:00)",
    highlights: ["Porto Katsiki", "Egremni Beach", "Dramatic cliffs", "Sunset views"],
    description: "Experience the dramatic western coast of Lefkada, home to some of Greece's most famous beaches. Marvel at the towering white cliffs of Porto Katsiki, consistently ranked among the best beaches in Europe. Visit the stunning Egremni beach and discover hidden coves only accessible by sea. The turquoise waters against the white limestone cliffs create a landscape that seems almost unreal.",
    boatsAvailable: ["Gene 670 RIB", "Victor Tempest"],
  },
  {
    id: "ithaca",
    name: "Ithaca - Home of Odysseus",
    image: cruiseIthaca,
    duration: "Full day (9:00 - 18:00)",
    highlights: ["Mythical history", "Vathy harbor", "Traditional culture", "Scenic bays"],
    description: "Follow in the footsteps of Odysseus to the legendary island of Ithaca. This mythical destination captivates visitors with its natural beauty and rich history. Explore the picturesque capital of Vathy, nestled in one of the world's largest natural harbors. Visit traditional villages, swim in secluded bays, and feel the magic of the island that inspired Homer's epic tale. A journey to Ithaca is truly a journey through time.",
    boatsAvailable: ["Gene 670 RIB", "Victor Tempest"],
  },
];

const Cruises = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cruisesHero})` }}
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3 animate-fade-in">
              Cruise Destinations
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore the Ionian
            </h1>
            <p className="text-card/80 text-lg max-w-2xl mx-auto font-sans animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From the hidden coves of Meganisi to the mythical shores of Ithaca. 
              Choose your destination and create memories that last a lifetime.
            </p>
          </div>
        </section>

        {/* Cruises Grid */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-16">
              {cruises.map((cruise, index) => (
                <article
                  key={cruise.id}
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in opacity-0 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                  style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-3xl shadow-card ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}>
                    <img
                      src={cruise.image}
                      alt={cruise.name}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-card">
                        <Clock className="w-5 h-5" />
                        <span className="font-sans text-sm">{cruise.duration}</span>
                      </div>
                      {/* Placeholder for future media gallery */}
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center hover:bg-card/40 transition-colors" title="Photos coming soon">
                          <Image className="w-5 h-5 text-card" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center hover:bg-card/40 transition-colors" title="Videos coming soon">
                          <Play className="w-5 h-5 text-card" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`bg-card rounded-3xl p-8 shadow-card ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Anchor className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-accent font-sans text-sm font-semibold uppercase tracking-wide">Cruise Destination</p>
                        <h2 className="font-display text-2xl font-bold text-foreground">{cruise.name}</h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                      {cruise.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="font-sans font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Highlights
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cruise.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-sea-light text-primary text-sm font-sans rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Available Boats */}
                    <div className="mb-6">
                      <h3 className="font-sans font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Anchor className="w-4 h-4 text-primary" />
                        Available Boats
                      </h3>
                      <p className="text-muted-foreground text-sm font-sans">
                        {cruise.boatsAvailable.join(" • ")}
                      </p>
                    </div>

                    <Button variant="contact" className="w-full" asChild>
                      <a href="/#contact">Inquire About This Cruise</a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Section Placeholder */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Photos & Videos</h2>
            </div>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto mb-6">
              We're adding photos and videos from our cruises. Check back soon to see what awaits you!
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              Have you cruised with us? Share your photos on social media and tag us!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cruises;
