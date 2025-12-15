import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Maquiagem profissional e design de sobrancelhas"
          className="w-full h-full object-cover object-[center_30%] md:object-[center_40%] lg:object-[center_45%] filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cream/90 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-caramel animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-coffee">
              Espaço de Beleza Premium
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 sm:mb-6 animate-fade-up animation-delay-100 leading-tight whitespace-nowrap">
            Vitoria <span className="text-caramel">Almeida</span>
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
              .Beauty
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-cream/90 mb-3 sm:mb-4 animate-fade-up animation-delay-200 font-light tracking-wide">
            Maquiagem • Sobrancelha • Lash Designer
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-cream/70 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-300 px-2">
            Realce sua beleza natural com técnicas modernas e atendimento
            personalizado. Resultados naturais e duradouros que fazem você se
            sentir ainda mais confiante.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up animation-delay-400 px-4">
            <Button
              variant="cta"
              size="lg"
              className="w-full sm:w-auto text-base"
              asChild
            >
              <a href="#contato">Agendar Atendimento</a>
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="w-full sm:w-auto border-cream/50 text-cream hover:bg-cream hover:text-charcoal text-base"
              asChild
            >
              <a href="#portfolio">Ver Portfólio</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-cream/70 animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-caramel/10 blur-3xl hidden md:block" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-coffee/10 blur-3xl hidden md:block" />
    </section>
  );
};

export default HeroSection;
