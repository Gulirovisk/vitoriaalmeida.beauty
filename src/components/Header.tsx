import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInDarkSection, setIsInDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detecta se está em seção escura (CTA ou Footer)
      const ctaSection = document.querySelector('#cta-section');
      const footer = document.querySelector('footer');
      const headerHeight = 80;
      
      let inDarkSection = false;
      
      if (ctaSection) {
        const ctaRect = ctaSection.getBoundingClientRect();
        if (ctaRect.top <= headerHeight && ctaRect.bottom >= headerHeight) {
          inDarkSection = true;
        }
      }
      
      if (footer && !inDarkSection) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= headerHeight) {
          inDarkSection = true;
        }
      }
      
      setIsInDarkSection(inDarkSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className={`
    font-display text-2xl font-semibold transition-colors duration-300
    ${isScrolled ? "text-charcoal" : "text-white"}
  `}
          >
            Vitoria
            <span className="text-caramel">Almeida</span>
            <span className={isScrolled ? "text-charcoal" : "text-white"}>
              .Beauty
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative ${
                  isScrolled ? "text-muted-foreground" : "text-white"
                } hover:text-foreground after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href="#contato">Agendar</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-medium transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors py-2 ${
                  isScrolled && !isInDarkSection
                    ? "text-charcoal hover:text-coffee"
                    : "text-white hover:text-caramel"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-2" asChild>
              <a href="#contato">Agendar Atendimento</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
