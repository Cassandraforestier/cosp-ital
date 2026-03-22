import { Mail, MapPin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("association.cospital@orange.fr");

    toast({
      title: "Email copié 📋",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Restons en <span className="text-secondary">contact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une question ? Une proposition de partenariat ? Envie de nous
              rejoindre ? N'hésitez pas à nous contacter !
            </p>
          </div>

          <div className="grid gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-warm p-8 rounded-3xl border border-border shadow-card">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Envoyez-nous un message
              </h3>
              <div className="flex items-center justify-between bg-background border border-border rounded-xl px-4 py-3">
                <span className="text-foreground">
                  association.cospital@orange.fr
                </span>

                <button
                  onClick={handleCopy}
                  className="ml-4 px-3 py-1.5 text-sm rounded-lg bg-primary text-white hover:opacity-90 transition"
                >
                  Copier
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact cards */}
              <a
                href="https://www.instagram.com/association_cospital/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gradient-warm p-6 rounded-2xl border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Instagram
                  </h3>
                  <p className="text-muted-foreground">@association_cospital</p>
                </div>
              </a>

              <a
                href="mailto:contact@cospital.fr"
                className="flex items-center gap-4 bg-gradient-warm p-6 rounded-2xl border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Email
                  </h3>
                  <p className="text-muted-foreground">contact@cospital.fr</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-gradient-warm p-6 rounded-2xl border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Localisation
                  </h3>
                  <p className="text-muted-foreground">
                    Alpes-Maritimes, France
                  </p>
                </div>
              </div>

              {/* Association info */}
              <div className="bg-gradient-to-r from-primary/5 via-card to-secondary/5 p-8 rounded-3xl border border-border">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
