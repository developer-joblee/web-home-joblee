import { 
  Wrench, 
  Sparkles, 
  Car, 
  Camera, 
  GraduationCap, 
  Stethoscope,
  ChefHat,
  Dumbbell,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Reparos residenciais",
    description: "Encanadores, eletricistas, pedreiros",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Limpeza",
    description: "Limpeza residencial, profissional",
     color: "bg-primary/10 text-primary",
  },
  {
    icon: Car,
    title: "Serviços automotivos",
    description: "Mecânicos, lavagem, detalhamento",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Camera,
    title: "Fotografia",
    description: "Eventos, retratos, comerciais",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "Tutoria",
    description: "Acadêmico, música, idiomas",
     color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Saúde e bem-estar",
    description: "Enfermeiros, terapeutas, cuidadores",
     color: "bg-primary/10 text-primary",
  },
  {
    icon: ChefHat,
    title: "Chef pessoal",
    description: "Preparo de refeições, eventos",
     color: "bg-primary/10 text-primary",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Personal trainers, instrutores de yoga",
     color: "bg-primary/10 text-primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Serviços populares
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4">
              Explore as{" "}
              <span className="text-gradient">Categorias</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto font-semibold border-2 hover:bg-muted" onClick={() => {
            window.open('https://app.joblee.com.br/search', '_blank')
          }}>
            Ver todos os serviços
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-2 border border-transparent hover:border-primary/20">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
