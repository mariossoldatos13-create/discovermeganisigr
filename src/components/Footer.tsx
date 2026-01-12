import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card/90 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="font-sans text-card/70 leading-relaxed mb-6 max-w-md">
              Your trusted partner for exploring the beautiful island of Meganisi. 
              Premium boats, scooters, and ATVs for unforgettable Greek island adventures.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/306972381928"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-300"
                aria-label="Book with us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book with us
              </a>
              <a
                href="viber://chat?number=+306972381928"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-accent flex items-center justify-center transition-colors duration-300"
                aria-label="Viber"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.398 0C9.174.008 5.49.203 3.387 2.098c-1.37 1.242-2.02 3.057-2.02 5.539v.178c0 2.48.65 4.297 2.02 5.54 1.566 1.42 4.063 1.87 6.613 1.964v2.789c0 .39.463.597.748.34 1.768-1.622 5.07-4.672 5.07-4.672 3.89-.196 6.182-2.22 6.182-6.022C22 3.49 18.266.06 11.87 0h-.472zm.472 2.02c5.326.05 8.11 2.51 8.11 6.242 0 3.078-1.54 4.566-4.707 4.79-.117.007-.226.059-.31.148l-4.032 3.707v-2.86c0-.195-.15-.36-.345-.375-2.62-.203-4.568-.603-5.686-1.617-1.015-.922-1.508-2.324-1.508-4.293v-.178c0-1.97.493-3.37 1.508-4.293 1.414-1.278 4.043-1.278 6.496-1.271h.474zm.13 2.031a.4.4 0 00-.4.4v.001a.4.4 0 00.4.4c2.578 0 4.67 2.092 4.67 4.67a.4.4 0 00.8 0c0-3.02-2.45-5.47-5.47-5.47zm0 2.08a.4.4 0 00-.4.4.4.4 0 00.4.4 2.19 2.19 0 012.19 2.19.4.4 0 00.8 0 2.99 2.99 0 00-2.99-2.99zm-2.04.58c-.21-.01-.43.07-.58.25l-.56.67a.54.54 0 00-.07.57c.6 1.24 1.43 2.37 2.44 3.38 1.01 1.01 2.14 1.83 3.38 2.44.17.08.39.05.56-.07l.68-.56c.27-.22.32-.61.12-.91l-.89-1.19c-.18-.24-.5-.32-.77-.2l-.82.37c-.1.05-.21.04-.3-.01-.8-.53-1.46-1.2-1.99-2-.05-.09-.05-.2-.01-.3l.38-.82c.12-.27.04-.59-.2-.77l-1.19-.89c-.11-.09-.24-.14-.38-.14z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-card mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="/" className="font-sans text-card/70 hover:text-accent transition-colors duration-300">
                Home
              </a>
              <a href="/#about" className="font-sans text-card/70 hover:text-accent transition-colors duration-300">
                About Meganisi
              </a>
              <Link to="/boats" className="font-sans text-card/70 hover:text-accent transition-colors duration-300">
                Boats
              </Link>
              <Link to="/cruises" className="font-sans text-card/70 hover:text-accent transition-colors duration-300">
                Cruises
              </Link>
              <Link to="/land-adventures" className="font-sans text-card/70 hover:text-accent transition-colors duration-300">
                Land Adventures
              </Link>
              <a href="/#contact" className="font-sans text-card/70 hover:text-accent transition-colors duration-300">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-card mb-4">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-sans text-card/70 text-sm">
                  Port of Vathi, Meganisi<br />
                  Lefkada 310 83, Greece
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+306972381928" className="font-sans text-card/70 text-sm hover:text-accent transition-colors duration-300">
                  +30 697 238 1928
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:discovermeganisi@gmail.com" className="font-sans text-card/70 text-sm hover:text-accent transition-colors duration-300">
                  discovermeganisi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h4 className="font-display text-lg font-semibold text-card mb-4">
              Find Us
            </h4>
            <a 
              href="https://maps.app.goo.gl/W9btHd8U14LZm0Ayn"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.5!2d20.77!3d38.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e2b2c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sVathi%2C%20Meganisi!5e0!3m2!1sen!2sgr!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Discover Meganisi Location"
              />
              <p className="text-card/70 text-sm mt-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Click to open in Google Maps
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-card/50 text-sm">
            © {currentYear} Discover Meganisi. All rights reserved.
          </p>
          <p className="font-sans text-card/50 text-sm">
            Made with ❤️ in the Ionian Islands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
