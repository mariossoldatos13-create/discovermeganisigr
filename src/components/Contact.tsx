import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    action: "tel:+306972381929",
    buttonText: "+30 697 238 1929",
    variant: "contact" as const,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses, anytime",
    action: "https://wa.me/306972381929?text=Hello! I'm interested in renting from Meganisi Rentals.",
    buttonText: "Chat on WhatsApp",
    variant: "whatsapp" as const,
  },
  {
    icon: MessageCircle,
    title: "Viber",
    description: "Message us on Viber",
    action: "viber://chat?number=+306972381929",
    buttonText: "Message on Viber",
    variant: "viber" as const,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries",
    action: "mailto:discovermeganisi@gmail.com",
    buttonText: "discovermeganisi@gmail.com",
    variant: "contact" as const,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-sans font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Explore?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Contact us to check availability, ask questions, or book your perfect adventure vehicle. 
            We're here to help you make the most of your Meganisi experience.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-sea-light flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-muted-foreground text-sm font-sans mb-4">
                {method.description}
              </p>
              <Button variant={method.variant} size="sm" className="w-full" asChild>
                <a href={method.action} target="_blank" rel="noopener noreferrer">
                  {method.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Visit Our Location
          </h3>
          <p className="text-muted-foreground font-sans mb-2">
            <strong>Address:</strong> Port of Vathi, Meganisi, Lefkada 310 83, Greece
          </p>
          <p className="text-muted-foreground font-sans mb-2">
            <strong>Operating Hours:</strong> Daily 8:00 AM - 8:00 PM (April - October)
          </p>
          <p className="text-muted-foreground font-sans">
            <strong>Off-Season:</strong> Available by appointment
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
