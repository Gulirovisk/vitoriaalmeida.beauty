import { Check, Award, Heart, Sparkles } from "lucide-react";
import vitoriaPortrait from "@/assets/vitoria-portrait.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Sparkles, text: "Especialista em Lash Design" },
    { icon: Award, text: "Técnicas modernas de maquiagem" },
    { icon: Heart, text: "Atendimento personalizado" },
    { icon: Check, text: "Resultados naturais e duradouros" },
  ];

  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative diagonal */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-charcoal transform -skew-y-2 -translate-y-8 sm:-translate-y-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative animate-slide-in-left order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src={vitoriaPortrait}
                alt="Vitória Almeida - Profissional de beleza"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Decorative Frame - Hidden on mobile */}
            <div className="absolute top-4 left-4 right-4 bottom-4 max-w-md mx-auto border-2 border-caramel/30 rounded-2xl -z-0 transform translate-x-4 translate-y-4 hidden sm:block" />
            {/* Floating Badge */}
          </div>

          {/* Content Column */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <span className="inline-block text-caramel font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Sobre o Espaço
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Bem-vinda(o) ao <br />
              <span className="text-caramel">VitoriaAlmeida</span>.Beauty
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Sou Vitória Almeida, apaixonada pela arte de realçar a beleza
              natural de cada mulher. Iniciei minha trajetória na área da beleza
              aos 17 anos, começando com design de sobrancelhas em 15/02/2024,
              expandindo para maquiagem profissional em 11/08/2024 e extensão de
              cílios em 22/05/2025.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Meu espaço foi criado para proporcionar uma experiência única de
              cuidado e bem-estar. Cada atendimento é pensado para elevar a
              autoestima, com técnicas modernas, produtos de alta qualidade e um
              olhar atento à individualidade, valorizando os traços únicos de
              cada cliente.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-cream hover:bg-cream-dark transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-coffee/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coffee group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon
                      size={18}
                      className="text-coffee group-hover:text-primary-foreground sm:w-5 sm:h-5"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
