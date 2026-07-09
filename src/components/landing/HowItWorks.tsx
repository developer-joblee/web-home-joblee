import { Search, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Buscar e Navegar",
    description: "Encontre o profissional perfeito para suas necessidades. Navegue por categoria, localização e avaliações.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Conectar e Agendar",
    description: "Converse diretamente com profissionais, discuta detalhes e agende horários que se ajustem ao seu cronograma.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Concluir o Trabalho",
    description: "Sente-se e relaxe enquanto profissionais executam o trabalho. Pague de forma segura através do aplicativo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider text-orange-500">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-white">
            Começar a usar é{" "}
            <span className="text-orange-400">fácil</span>
          </h2>
          <p className="text-lg text-white">
            Encontre e contrate profissionais em apenas três passos simples. Sem complicações, sem estresse, grátis.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-2">
                {/* Step number */}
                <span className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
