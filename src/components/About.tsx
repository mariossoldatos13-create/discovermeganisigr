import { MapPin, Sun, Waves, Mountain, Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

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

const testimonials = [
  {
    name: "Holiday Guest",
    review: "Wanting to circumnavigate the beautiful Greek Island that is Meganisi, we booked a boat with a Skipper through Discover Meganisi. The owner understood perfectly what we needed and organised an appropriately sized boat with a young but experienced Skipper who knew much about the island past and present. A perfect half day at sea in the sunshine!",
    rating: 5,
  },
  {
    name: "Experienced Boater",
    review: "Another superb day with an excellent boat. Over the years we have hired many boats, but today's was the best I've hired. It was a fully equipped RHIB with SatNav, windlass anchor, and SUZUKI 250hp engine. Michalis goes the extra distance to ensure you have all the safety and local tips you need.",
    rating: 5,
  },
  {
    name: "The McGills",
    review: "Skippered trip around Meganisi, Kastos and Kalamos. Visited the best coves and beaches for swimming. Fantastic lunch stop suggestion on Kalamos. Big thanks to Michalis for his flexibility in choosing the best weather day and to Skipper Gerry for his informative guide to the islands. Highly recommended!",
    rating: 5,
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

        {/* Company Story Section */}
        <div className="mt-20 bg-secondary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3">
              Since 2017
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Your Island Adventure Partner
            </h3>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-6">
              Founded in 2017, Discover Meganisi has grown from a small family venture into the island's 
              most trusted rental service. With over 7 years of experience, we've helped thousands of 
              visitors explore the magic of Meganisi and the surrounding Ionian islands.
            </p>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed">
              Our family-run business takes pride in offering well-maintained vessels, expert local knowledge, 
              and personalized service. Whether you're seeking a skippered cruise to hidden coves or an 
              independent adventure on our boats – we share our beloved island with you.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Guests Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-muted-foreground font-sans leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>
                
                {/* Author */}
                <p className="font-display font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Google Reviews Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group"
            >
              <a
                href="https://www.google.com/maps/place/Discover+Meganisi+%7C+boat+rentals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>See All Reviews on Google</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
