import { Instagram, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/vitorialmeida.beauty_/",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:Vitoriaalmeida77582@gmail.com",
      label: "Email",
    },
    { icon: Phone, href: "https://wa.me/553597654218", label: "WhatsApp" },
  ];

  const quickLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <a href="#" className="font-display text-2xl font-semibold">
              Vitoria<span className="text-caramel">Almeida</span>.Beauty
            </a>
            <p className="text-cream/60 mt-4 text-sm leading-relaxed">
              Espaço de beleza especializado em maquiagem profissional, design
              de sobrancelhas e alongamento de cílios.
            </p>
            <p className="text-cream/60 mt-4 text-sm">
              Maquiagem • Sobrancelha • Lash Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-caramel transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Redes Sociais
            </h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-caramel hover:text-charcoal transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-cream/60">
              Siga-nos para novidades, <br />
              dicas de beleza e promoções exclusivas.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex items-center justify-center">
            <p className="text-sm text-cream/50 text-center">
              © {currentYear} VitoriaAlmeida.Beauty — Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
