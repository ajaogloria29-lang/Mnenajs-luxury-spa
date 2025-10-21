import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Mnenaja's <span className="text-accent">Luxury Spa</span>
            </h3>
            <p className="text-sm opacity-90">
              Experience pure relaxation and rejuvenation at Lagos' premier luxury spa. Professional treatments for body and mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="opacity-90 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="opacity-90 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span className="opacity-90">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+234" className="opacity-90 hover:text-accent transition-colors">
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href="mailto:info@mnenajasspa.com"
                  className="opacity-90 hover:text-accent transition-colors"
                >
                  info@mnenajasspa.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Mnenaja's Luxury Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
