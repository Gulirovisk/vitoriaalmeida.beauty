import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-section" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-charcoal">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-caramel/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-coffee/20 blur-3xl" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--cream)) 25%, transparent 25%, transparent 75%, hsl(var(--cream)) 75%), linear-gradient(45deg, hsl(var(--cream)) 25%, transparent 25%, transparent 75%, hsl(var(--cream)) 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-caramel/20 mb-6 sm:mb-8">
            <Sparkles size={28} className="text-caramel sm:w-8 sm:h-8" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 sm:mb-6 leading-tight px-2">
            Garanta seu horário e{" "}
            <span className="text-caramel block sm:inline">sinta-se ainda mais confiante</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-cream/70 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Agende seu atendimento e descubra como pequenos detalhes podem fazer uma grande diferença na sua autoestima.
          </p>

          {/* CTA Button */}
          <Button variant="cta" size="lg" className="group w-full sm:w-auto" asChild>
            <a href="#contato" className="flex items-center justify-center gap-3">
              <Calendar size={20} />
              <span>Agendar Agora</span>
            </a>
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-cream/10">
            <div className="text-center min-w-[80px]">
              <p className="text-2xl sm:text-3xl font-display font-bold text-caramel">+300</p>
              <p className="text-xs sm:text-sm text-cream/60">Clientes satisfeitas</p>
            </div>
            <div className="text-center min-w-[80px]">
              <p className="text-2xl sm:text-3xl font-display font-bold text-caramel">1+</p>
              <p className="text-xs sm:text-sm text-cream/60">Anos de experiência</p>
            </div>
            <div className="text-center min-w-[80px]">
              <p className="text-2xl sm:text-3xl font-display font-bold text-caramel">100%</p>
              <p className="text-xs sm:text-sm text-cream/60">Produtos premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
