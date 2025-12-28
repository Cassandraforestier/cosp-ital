import { Building2, Award, ExternalLink } from "lucide-react";

const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
              Nos partenaires
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ils nous font <span className="text-primary">confiance</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Nous travaillons en étroite collaboration avec des établissements de santé 
              et des organisations qui partagent notre vision.
            </p>
          </div>

          {/* Featured partner - Lenval */}
          <div className="bg-gradient-to-br from-secondary/10 via-card to-primary/10 p-8 md:p-12 rounded-3xl border border-border shadow-card mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-card rounded-2xl flex items-center justify-center shadow-soft border border-border flex-shrink-0">
                <div className="text-center">
                  <Building2 className="w-12 h-12 md:w-16 md:h-16 text-secondary mx-auto mb-2" />
                  <span className="font-display text-lg md:text-xl text-foreground">Lenval</span>
                </div>
              </div>
              
              <div className="text-center lg:text-left flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold text-sm">Partenaire principal</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Hôpital Lenval - Nice
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  L'Hôpital Universitaire Pédiatrique Lenval est notre partenaire privilégié. 
                  Ensemble, nous organisons régulièrement des visites pour apporter de la joie 
                  aux enfants hospitalisés. Leur équipe nous accueille avec bienveillance et 
                  nous permet de créer des moments inoubliables.
                </p>
                <a
                  href="https://www.lenval.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-bold transition-colors"
                >
                  Visiter le site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Call for partners */}
          <div className="bg-gradient-warm p-8 md:p-10 rounded-3xl border border-border text-center">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Vous souhaitez devenir partenaire ?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Hôpitaux, associations, entreprises... Nous sommes toujours ouverts 
              à de nouvelles collaborations pour étendre notre action.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-soft"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
