import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioItems = [
    { image: portfolio1, title: "Volume Fox Eyes", category: "Lash" },
    { image: portfolio6, title: "Volume Gatinho", category: "Lash" },
    { image: portfolio2, title: "Design Perfeito", category: "Sobrancelha" },
    { image: portfolio3, title: "Design Perfeito", category: "Sobrancelha" },
    { image: portfolio4, title: "Social", category: "Make" },
    { image: portfolio5, title: "Clean", category: "Make" },
    
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background">
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
            <div
              key={index}
              className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-charcoal/70 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
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
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-caramel" />
              </div>
            </div>
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
