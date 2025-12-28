import { Heart, Instagram } from "lucide-react";
import logo from "@/assets/logo-cospital.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cosp'ital" className="h-16 w-auto" />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/cospital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-muted-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-muted-foreground/80 text-sm">
                © {new Date().getFullYear()} Association Cosp'ital. Tous droits réservés.
              </p>
              <p className="text-muted-foreground/80 text-sm flex items-center gap-1">
                Fait avec <Heart className="w-4 h-4 text-primary inline" fill="currentColor" /> dans les Alpes-Maritimes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
