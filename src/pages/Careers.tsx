import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Seo } from "@/components/Seo";
import { CONTACT } from "@/constants/links";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Heart,
  Lightbulb,
  Mail,
  Rocket,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const cultureValues = [
  {
    icon: Rocket,
    title: "Ambição com propósito",
    description: "Estamos construindo a maior plataforma de serviços do Brasil — e cada pessoa do time tem impacto direto nesse caminho.",
  },
  {
    icon: Users,
    title: "Time acima de egos",
    description: "Colaboramos de verdade: feedback honesto, decisões abertas e vitórias comemoradas em conjunto.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado contínuo",
    description: "Erramos rápido, aprendemos mais rápido ainda. Curiosidade vale mais do que currículo perfeito.",
  },
  {
    icon: Heart,
    title: "Gente no centro",
    description: "Tudo o que fazemos começa em pessoas: clientes, profissionais e o nosso próprio time.",
  },
];

const talentPoolMailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Banco de Talentos - Joblee")}`;

export const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Carreiras na Joblee — Construa o futuro dos serviços"
        description="Quer trabalhar na Joblee? Conheça nossa cultura e envie seu currículo para o nosso banco de talentos."
        path="/carreiras"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o início
            </Link>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Construa o futuro dos serviços <span className="text-primary">com a gente</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Somos um time apaixonado por conectar pessoas e transformar a forma como serviços são contratados no Brasil.
            </p>
          </div>
        </section>

        {/* Nossa Cultura */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Nossa Cultura
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Trabalhar na Joblee é ter autonomia para resolver problemas reais, ao lado de pessoas
              que se importam com o resultado — e umas com as outras.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {cultureValues.map((value) => (
                <Card key={value.title} className="border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Banco de Talentos */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Banco de Talentos
            </h2>
            <p className="text-muted-foreground mb-4">
              No momento não temos vagas abertas, mas estamos sempre de olho em pessoas talentosas.
              Envie seu currículo para o nosso banco de talentos e entraremos em contato quando surgir
              uma oportunidade com o seu perfil.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              No e-mail, informe seu nome, a área de interesse e anexe seu currículo.
            </p>
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 font-semibold shadow-lg text-base px-8">
              <a href={talentPoolMailto}>
                Envie seu currículo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enquanto isso, conheça a Joblee
            </h2>
            <p className="text-muted-foreground mb-8">
              Descubra nossa história, missão e os valores que guiam o nosso trabalho todos os dias.
            </p>
            <Button asChild size="lg" variant="outline" className="font-semibold text-base px-8">
              <Link to="/sobre">Sobre a Joblee</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
