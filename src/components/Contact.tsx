import { Mail, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Restons en <span className="text-secondary">contact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une question ? Une proposition de partenariat ? 
              Envie de nous rejoindre ? N'hésitez pas à nous contacter !
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://www.instagram.com/cospital/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-warm p-6 rounded-2xl border border-border text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm">@cospital</p>
            </a>

            <a
              href="mailto:contact@cospital.fr"
              className="bg-gradient-warm p-6 rounded-2xl border border-border text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">contact@cospital.fr</p>
            </a>

            <div className="bg-gradient-warm p-6 rounded-2xl border border-border text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Localisation</h3>
              <p className="text-muted-foreground text-sm">Alpes-Maritimes, France</p>
            </div>
          </div>

          {/* Association info */}
          <div className="bg-gradient-to-r from-primary/5 via-card to-secondary/5 p-8 rounded-3xl border border-border text-center">
            <h3 className="font-display text-xl text-foreground mb-3">
              Association Cosp'ital
            </h3>
            <p className="text-muted-foreground mb-4">
              Association loi 1901 à but non lucratif
            </p>
            <p className="text-muted-foreground text-sm">
              Président : Julien Faure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
