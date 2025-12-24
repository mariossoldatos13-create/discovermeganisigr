import { MapPin, Sun, Waves, Mountain } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Crystal Clear Waters",
    description: "The Ionian Sea around Meganisi boasts some of the clearest, most pristine waters in the Mediterranean.",
  },
  {
    icon: Sun,
    title: "Perfect Weather",
    description: "Enjoy over 300 days of sunshine with mild Mediterranean climate perfect for outdoor exploration.",
  },
  {
    icon: Mountain,
    title: "Scenic Landscapes",
    description: "Discover hidden coves, olive groves, and dramatic cliffs that define the island's natural beauty.",
  },
  {
    icon: MapPin,
    title: "Authentic Greece",
    description: "Experience traditional Greek hospitality in charming villages untouched by mass tourism.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3">
            Discover Paradise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to Meganisi
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans">
            Nestled in the heart of the Ionian Sea, Meganisi is a hidden jewel among the Seven Islands of Greece. 
            With its unspoiled beauty, secret beaches, and warm hospitality, it's the perfect destination 
            for those seeking authentic Greek island experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-sea-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-20 bg-secondary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Your Island Adventure Partner
            </h3>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-6">
              For over a decade, we've been helping visitors explore the magic of Meganisi. 
              From cruising to hidden beaches accessible only by boat, to riding through scenic 
              mountain trails on our ATVs – we provide everything you need for an unforgettable 
              Greek island experience.
            </p>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed">
              Our family-run business takes pride in offering well-maintained vehicles, 
              local knowledge, and personalized service. We don't just rent – we share 
              our beloved island with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
