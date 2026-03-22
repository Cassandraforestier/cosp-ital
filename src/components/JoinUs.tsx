import { Heart, CheckCircle, Users, Sparkles } from "lucide-react";

const JoinUs = () => {
  const benefits = [
    "Faire partie d'une équipe passionnée et bienveillante",
    "Apporter de la joie aux enfants hospitalisés",
    "Participer à des événements et conventions",
    "Créer des souvenirs inoubliables",
    "Se sentir utile en mettant sa passion au service des autres",
    "Nouer des amitiés durables avec d'autres cosplayers !",
  ];

  const requirements = [
    {
      icon: Heart,
      title: "Passion du cosplay",
      description:
        "Avoir un costume ! Tous les cosplays sont les bienvenus, peu importe l'univers.",
    },
    {
      icon: Users,
      title: "Esprit d'équipe",
      description: "Aimer travailler en groupe et partager",
    },
    {
      icon: Sparkles,
      title: "Bonne humeur",
      description: "Être souriant et bienveillant avec les enfants",
    },
  ];

  return (
    <section id="join" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              Rejoignez-nous
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Devenez un <span className="text-primary">héros</span> du
              quotidien
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Vous êtes cosplayeur et souhaitez mettre votre passion au service
              d'une belle cause ? Rejoignez l'aventure Cosp'ital !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-card">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Ce que nous recherchons
              </h3>
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <req.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        {req.title}
                      </h4>
                      <p className="text-muted-foreground">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 rounded-3xl border border-border shadow-card">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Ce que vous y gagnez
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-card inline-block">
              <p className="text-muted-foreground text-lg mb-6">
                Prêt à rejoindre l'équipe ? Contactez-nous via Instagram ou par
                email pour nous présenter !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/association_cospital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105"
                >
                  📸 Nous contacter sur Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
