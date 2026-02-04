import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, BadgeCheck, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email is too long" });

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
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll reach out soon with next steps to become a Joblee Pro.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="become-pro" className="py-16 md:py-24 bg-foreground text-background overflow-hidden">
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
                    Insira seu email para começar. É fácil, é grátis!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Insira seu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 text-base px-5 border-2 focus:border-primary"
                      maxLength={255}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:opacity-90 font-semibold h-14 text-base shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Fique disponível para clientes na Joblee
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center">
                  Ao se cadastrar, você concorda com nossos{" "}
                  <a href="#" className="text-primary hover:underline">Termos de Serviço</a>
                  {" "}e{" "}
                  <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                </p>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Grátis para se cadastrar
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Sem compromissos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePro;
