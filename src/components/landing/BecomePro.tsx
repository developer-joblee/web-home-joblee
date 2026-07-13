import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BadgeCheck, TrendingUp, Calendar, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { APP_LINKS } from "@/constants/links";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Cadastre-se",
    description: "Conquiste confiança com um selo profissional verificado",
  },
  {
    icon: TrendingUp,
    title: "Aumente seus ganhos",
    description: "Acesse milhares de potenciais clientes diariamente",
  },
  {
    icon: Calendar,
    title: "Agende seu horário",
    description: "Trabalhe quando quiser, aceite trabalhos que combinem com você",
  },
];

const BecomePro = () => {
  const navigate = useNavigate();

  return (
    <section id="become-pro" className="py-16 md:py-24 bg-[#0f172a] text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/50 rounded-full text-orange-500 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                Junte-se a 10,000+ Profissionais
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Quer aparecer na{" "}
                <span className="text-gradient">Joblee</span>?
              </h2>

              <p className="text-lg md:text-xl opacity-80 max-w-lg">
                Cadastre-se hoje e fique visível para milhares de usuários que estão procurando profissionais como você.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{benefit.title}</h4>
                    <p className="opacity-70">{benefit.description}</p>
                  </div>
                </div>
              ))}
              <Button
                size="lg"
                className="w-fit bg-gradient-hero  hover:opacity-90 font-semibold h-14 text-base text-orange-500 shadow-lg bg-primary/50"
                onClick={() => navigate('/profissional')}
              >
                Clique aqui e saiba Mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sign Up Form Card */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />

            <div className="relative bg-card text-card-foreground rounded-3xl p-8 md:p-10 shadow-card-hover">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Comece a Ganhar Hoje</h3>
                  <p className="text-muted-foreground">
                    Cadastre-se em minutos e fique visível para milhares de clientes. É fácil e grátis!
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Você só paga a comissão de 10% quando conclui um serviço.
                  </p>
                </div>

                {/* Trust highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-accent/40 p-5 transition-all hover:shadow-card-hover hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-tight">Grátis</p>
                      <p className="text-sm text-muted-foreground">para se cadastrar</p>
                    </div>
                  </div>

                  <div className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-accent/40 p-5 transition-all hover:shadow-card-hover hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-tight">Sem compromissos</p>
                      <p className="text-sm text-muted-foreground">cancele quando quiser</p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-hero hover:opacity-90 font-semibold h-14 text-base shadow-lg"
                >
                  <a href={APP_LINKS.partner} target="_blank" rel="noopener noreferrer">
                    Fique disponível para clientes na Joblee
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Ao se cadastrar, você concorda com nossos{" "}
                  <Link to="/terms-and-conditions" className="text-primary hover:underline">Termos de Serviço</Link>
                  {" "}e{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePro;
