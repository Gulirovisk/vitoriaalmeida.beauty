import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { image: portfolio1, title: "Volume Fox Eyes", category: "Lash" },
  { image: portfolio6, title: "Volume Gatinho", category: "Lash" },
  { image: portfolio2, title: "Design Perfeito", category: "Sobrancelha" },
  { image: portfolio3, title: "Design Perfeito", category: "Sobrancelha" },
  { image: portfolio4, title: "Social", category: "Make" },
  { image: portfolio5, title: "Clean", category: "Make" },
];

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const hasPlayedRef = useRef(false);
  const pinnedTimeoutRef = useRef<number | null>(null);

  // Executa a sequência de destaque no mobile, uma única vez por carregamento da página,
  // ao entrar na seção (reinicia ao recarregar a página)
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;

    const el = sectionRef.current;
    if (!el) return;

    const runSequence = () => {
      const showDuration = 1500; // ms visível
      const step = 2000; // 2s entre itens

      portfolioItems.forEach((_, idx) => {
        // Mostrar
        timeoutsRef.current.push(
          window.setTimeout(() => setActiveIndex(idx), idx * step)
        );
        // Esconder um pouco antes do próximo
        timeoutsRef.current.push(
          window.setTimeout(() => setActiveIndex(null), idx * step + showDuration)
        );
      });

      // Finaliza
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setActiveIndex(null);
        }, portfolioItems.length * step + 50)
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          observer.disconnect();
          runSequence();
        }
      },
      { threshold: [0.5] }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, []);

  // Desmarca (unpin) ao clicar fora de qualquer card da seção
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const root = sectionRef.current;
      if (!root) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const clickedInsideCard = target.closest('[data-portfolio-card="true"]');
      if (!clickedInsideCard) {
        setPinnedIndex(null);
      }
    };

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // Cleanup do timeout de pin ao desmontar
  useEffect(() => {
    return () => {
      if (pinnedTimeoutRef.current) {
        clearTimeout(pinnedTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-caramel font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Resultados que <span className="text-caramel">falam por si</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-2">
            Cada trabalho é único, assim como cada cliente. Veja alguns dos resultados que transformaram a autoestima de centenas de mulheres.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
              data-portfolio-card="true"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                setPinnedIndex(index);
                if (pinnedTimeoutRef.current) {
                  clearTimeout(pinnedTimeoutRef.current);
                }
                pinnedTimeoutRef.current = window.setTimeout(() => {
                  setPinnedIndex(null);
                  pinnedTimeoutRef.current = null;
                }, 3000);
              }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-charcoal/70 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  pinnedIndex === index || hoveredIndex === index || activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-xs font-medium text-caramel uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-cream text-center px-4">
                  {item.title}
                </h3>
              </div>

              {/* Corner Accent */}
              <div className={`absolute bottom-0 right-0 w-16 h-16 transition-all duration-300 ${
                pinnedIndex === index || hoveredIndex === index || activeIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-caramel" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/vitorialmeida.beauty_/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn w-full bg-coffee hover:bg-coffee-light text-white font-medium py-3 sm:py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-sm mt-auto"
          >
            <span>Ver mais no Instagram</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
