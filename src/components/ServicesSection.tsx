import { Palette, Eye, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Maquiagem Profissional",
      description:
        "Make social, festas, formaturas, eventos especiais e noivas. Realce sua beleza para momentos únicos.",
      features: ["Make Social", "Festas & Eventos", "Noivas", "Formatura"],
    },
    {
      icon: Eye,
      title: "Design de Sobrancelhas",
      description:
        "Harmonização facial através do design perfeito para seu formato de rosto e estilo pessoal.",
      features: ["Henna", "Mapeamento Facial", "Design Clássico", "Correção"],
    },
    {
      icon: Sparkles,
      title: "Alongamento de Cílios",
      description:
        "Extensão de cílios fio a fio com técnicas avançadas para um olhar marcante e natural.",
      features: [
        "Volume Brasileiro",
        "Gatinho",
        "Fox Eyes",
        "Mega Volume",
      ],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-cream relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--coffee)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-caramel font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Serviços Especializados
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-2">
            Cada serviço é realizado com dedicação e técnicas atualizadas para
            garantir os melhores resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 border border-border/50 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-coffee/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-coffee group-hover:scale-110 transition-all duration-300">
                <service.icon
                  size={24}
                  className="text-coffee group-hover:text-primary-foreground transition-colors sm:w-7 sm:h-7"
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-xs sm:text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="default"
                className="group/btn w-full bg-coffee hover:bg-coffee-light text-white font-medium py-5 sm:py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-sm mt-auto"
                asChild
              >
                <a
                  href={`https://wa.me/553597654218?text=Olá! Gostaria de saber mais sobre ${service.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver valores / agendar
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
