import { Users, Heart, Sparkles, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "20+", label: "Cosplayers actifs" },
    { icon: Heart, value: "10+", label: "Visites réalisées" },
    { icon: Calendar, value: "2023", label: "Année de création" },
    { icon: Sparkles, value: "∞", label: "Sourires partagés" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
              Qui sommes-nous ?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Une équipe de <span className="text-primary">passionnés</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Cosp'ital est né de l'envie de partager notre passion du cosplay 
              pour apporter un peu de magie à ceux qui en ont le plus besoin.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-card">
                <h3 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Notre histoire
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fondée par <strong className="text-foreground">Julien Faure</strong> et 
                  un groupe de cosplayers passionnés, l'Association Cosp'ital s'est donné 
                  pour mission d'utiliser l'univers du cosplay et de la pop culture pour 
                  égayer le quotidien des enfants hospitalisés.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-card">
                <h3 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Notre équipe
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous sommes une équipe diverse de cosplayers de tous horizons : 
                  super-héros Marvel et DC, personnages Disney, héros d'anime, 
                  et bien d'autres univers fantastiques ! Chacun apporte sa créativité 
                  et son cœur à nos interventions.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-warm p-6 rounded-2xl border border-border text-center hover:shadow-soft transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="font-display text-3xl md:text-4xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Director spotlight */}
          <div className="bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 p-8 md:p-10 rounded-3xl border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🦸</span>
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  Julien Faure
                </h3>
                <p className="text-primary font-bold mb-2">Président & Fondateur</p>
                <p className="text-muted-foreground">
                  "Notre plus grande récompense, c'est de voir les yeux des enfants 
                  s'illuminer quand leurs héros préférés entrent dans leur chambre."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
