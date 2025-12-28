import { Hospital, PartyPopper, Handshake, Smile } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      icon: Hospital,
      title: "Visites hospitalières",
      description: "Nous rendons visite aux enfants hospitalisés, déguisés en leurs personnages préférés, pour leur apporter un moment de joie et d'évasion.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: PartyPopper,
      title: "Événements & Conventions",
      description: "Nous participons aux conventions et événements locaux pour promouvoir notre cause et rencontrer d'autres passionnés.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Handshake,
      title: "Partenariats",
      description: "Nous collaborons avec les hôpitaux, les associations et les entreprises locales pour multiplier notre impact.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Smile,
      title: "Animations privées",
      description: "Nous organisons des animations pour des événements caritatifs et des occasions spéciales au profit des enfants.",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="mission" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
              Ce que nous faisons
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Notre <span className="text-secondary">mission</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Apporter de la magie et du réconfort aux enfants hospitalisés 
              à travers la passion du cosplay et de l'univers geek.
            </p>
          </div>

          {/* Mission cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-xl ${mission.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <mission.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact banner */}
          <div className="mt-16 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-card text-center">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Ensemble, nous faisons la <span className="text-primary">différence</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Chaque sourire compte. Chaque visite est une aventure. 
              Rejoignez-nous pour multiplier les moments magiques !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-accent px-4 py-2 rounded-full text-accent-foreground font-semibold">
                🎭 Cosplay
              </span>
              <span className="bg-secondary/20 px-4 py-2 rounded-full text-secondary font-semibold">
                💙 Solidarité
              </span>
              <span className="bg-accent px-4 py-2 rounded-full text-accent-foreground font-semibold">
                ✨ Magie
              </span>
              <span className="bg-secondary/20 px-4 py-2 rounded-full text-secondary font-semibold">
                😊 Joie
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
