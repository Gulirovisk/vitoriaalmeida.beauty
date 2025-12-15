import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Instagram, Mail, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", whatsapp: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Luis Ornelas Podesta, 426 - Centro",
      subtext: "Cabo Verde, Minas Gerais - CEP 37880-000",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(35) 99765-4218",
      subtext: "Atendimento via mensagem",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: A partir das 18h | Sáb: 08h às 18h",
      subtext: "Domingo: Fechado",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@vitorialmeida.beauty_",
      subtext: "Siga para novidades",
      link: "https://www.instagram.com/vitorialmeida.beauty_/",
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-caramel rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-caramel font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Entre em <span className="text-caramel">Contato</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-2">
            Agende seu horário ou tire suas dúvidas. Estou pronta para te atender!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Informações de contato
            </h3>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-5 rounded-2xl bg-cream hover:bg-cream-dark transition-colors duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-coffee/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coffee group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={24} className="text-coffee group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-caramel transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.content}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-0.5">{item.subtext}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp Direct Button */}
            <a
              href="https://wa.me/553597654218?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors mt-8"
            >
              <Phone size={20} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
