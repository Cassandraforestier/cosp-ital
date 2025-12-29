import { Heart, Sparkles, Star } from "lucide-react";
import logo from "@/assets/logo-cospital.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mt-8">
        <div className="absolute top-20 left-10 text-primary/20 animate-float">
          <Star className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 text-secondary/30 animate-float" style={{ animationDelay: "1s" }}>
          <Heart className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" />
        </div>
        <div className="absolute bottom-40 left-20 text-primary/15 animate-float" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-10 h-10 md:w-14 md:h-14" />
        </div>
        <div className="absolute bottom-20 right-10 text-secondary/25 animate-float" style={{ animationDelay: "1.5s" }}>
          <Star className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
        </div>
        
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo with animation */}
          <div className="mt-8 mb-8 animate-float">
            <img 
              src={logo} 
              alt="Association Cosp'ital" 
              className="w-48 h-48 md:w-64 md:h-64 drop-shadow-lg"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Des <span className="text-primary">super-héros</span> au service
            <br />
            des <span className="text-secondary">enfants hospitalisés</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Nous sommes une association de cosplayers passionnés qui apportons de la 
            <strong className="text-foreground"> joie et de la magie</strong> aux enfants 
            dans les hôpitaux des Alpes-Maritimes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-soft hover:shadow-glow"
            >
              <Heart className="w-5 h-5" />
              Rejoindre l'aventure
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Découvrir notre mission
            </a>
          </div>

          {/* Location badge */}
          <div className="mt-12 inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border shadow-card">
            <span className="text-2xl">📍</span>
            <span className="text-muted-foreground font-semibold">
              Alpes-Maritimes, France
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
