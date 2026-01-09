import { MapPin, Sun, Waves, Mountain, Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import crystalClearWaters from "@/assets/crystal-clear-waters.jpg";
import scenicLandscapes from "@/assets/scenic-landscapes.jpg";
import peaceTranquility from "@/assets/peace-tranquility.jpg";

const features = [
  {
    icon: Waves,
    title: "Crystal Clear Waters",
    description: "The Ionian Sea around Meganisi boasts some of the clearest, most pristine waters in the Mediterranean.",
    image: crystalClearWaters,
  },
  {
    icon: Sun,
    title: "Peace & Tranquility",
    description: "Escape the crowds and discover a serene paradise where time slows down. Meganisi remains unspoiled by mass tourism.",
    image: peaceTranquility,
  },
  {
    icon: Mountain,
    title: "Scenic Landscapes",
    description: "Discover hidden coves, olive groves, and dramatic cliffs that define the island's natural beauty.",
    image: scenicLandscapes,
  },
  {
    icon: MapPin,
    title: "Warm Hospitality",
    description: "Experience genuine Greek warmth in charming villages where locals welcome you like family.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
  },
];

const testimonials = [
  {
    name: "Andy Cope",
    review: "Wanting to circumnavigate the beautiful Greek Island that is Meganisi, we booked a boat with a Skipper through Discover Meganisi. The owner understood perfectly what we needed and organised an appropriately sized boat with a young but experienced Skipper who knew much about the island past and present. A perfect half day at sea in the sunshine!",
    rating: 5,
  },
  {
    name: "Grant Edersby",
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

        {/* Features Carousel */}
        <div className="relative -mx-4 md:-mx-8 lg:-mx-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={feature.title} className="basis-full">
                  <div className="group relative h-[70vh] min-h-[500px] overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-16">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center mb-6">
                        <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                      <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-card mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-card/90 font-sans text-lg md:text-xl max-w-2xl leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8 w-12 h-12 bg-card/90 backdrop-blur-sm border-0 hover:bg-card" />
            <CarouselNext className="right-4 md:right-8 w-12 h-12 bg-card/90 backdrop-blur-sm border-0 hover:bg-card" />
          </Carousel>
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
              Founded in 2017 by Michalis, a born-and-raised Meganisi local, Discover Meganisi has grown 
              from a small family venture into the island's most trusted rental service. With a lifetime 
              spent on these waters as a fisherman and years of experience as a sailor, Michalis knows 
              every hidden cove, secret beach, and the best spots the Ionian has to offer.
            </p>
            <p className="text-muted-foreground text-lg font-sans leading-relaxed">
              His passion for the sea and deep love for his homeland drive everything we do. Whether you're 
              seeking a skippered cruise to discover places only locals know, or an independent adventure 
              on our well-maintained vessels – Michalis and his team share their beloved island with you, 
              offering expert guidance, personalized service, and genuine Greek hospitality.
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
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
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
