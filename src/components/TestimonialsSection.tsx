import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Rachel",
      service: "Maquiagem Clean",
      rating: 5,
      text: "Fiquei extremamente satisfeita com a maquiagem. Mesmo após muitas horas, o resultado permaneceu impecável. Fui muito bem acolhida e só tenho a agradecer pelo cuidado e profissionalismo.",
    },
    {
      name: "Fabíola",
      service: "Extensão de Cílios – Mega Volume",
      rating: 5,
      text: "Os cílios ficaram simplesmente perfeitos e receberam muitos elogios. O resultado superou minhas expectativas, tanto pela qualidade quanto pela durabilidade. Com certeza retornarei para a manutenção.",
    },
    {
      name: "Larissa Alves",
      service: "Maquiagem Social",
      rating: 5,
      text: "A maquiagem ficou linda e extremamente bem executada. Recebi muitos elogios durante o evento, o que só reforça a qualidade e o talento do trabalho realizado.",
    },
    {
      name: "Laira Lopes",
      service: "Maquiagem e Design de Sobrancelhas",
      rating: 5,
      text: "A maquiagem ficou perfeita e o design de sobrancelhas valorizou ainda mais o meu rosto. Atendimento cuidadoso e resultado impecável.",
    },
    {
      name: "Julia Maria",
      service: "Design de Sobrancelhas",
      rating: 5,
      text: "O design de sobrancelhas realçou significativamente o meu olhar. Fiquei muito satisfeita com o resultado e com o atendimento atencioso.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="depoimentos"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-cream relative overflow-hidden"
    >
      {/* Decorative Quote */}
      <div className="absolute top-10 left-10 opacity-5 hidden sm:block">
        <Quote size={150} className="text-coffee sm:w-[200px] sm:h-[200px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-caramel font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            O que minhas <span className="text-caramel">clientes dizem</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative px-2 sm:px-12">
            {/* Main Card */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-medium border border-border/30"
              >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-caramel fill-caramel sm:w-6 sm:h-6"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg md:text-xl text-foreground text-center mb-6 sm:mb-8 leading-relaxed font-light">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="text-center">
                <p className="font-display text-lg sm:text-xl font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {testimonials[currentIndex].service}
                </p>
              </div>
            </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Now visible on mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee text-primary-foreground items-center justify-center shadow-medium hover:bg-coffee-light transition-colors flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee text-primary-foreground items-center justify-center shadow-medium hover:bg-coffee-light transition-colors flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-coffee"
                    : "bg-coffee/30 hover:bg-coffee/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
