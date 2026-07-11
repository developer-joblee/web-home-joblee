import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Seo } from "@/components/Seo";
import {
  ArrowLeft,
  Eye,
  HeartHandshake,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Verificamos cada profissional para que você contrate com tranquilidade. A confiança é a base de tudo o que construímos.",
  },
  {
    icon: HeartHandshake,
    title: "Respeito",
    description: "Tratamos clientes e profissionais como parceiros. Cada relação na plataforma é construída com cuidado e empatia.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Sem letras miúdas: preços, avaliações e condições sempre claros, antes de qualquer decisão.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Ajudamos profissionais a crescer e clientes a resolver mais. Quando um lado prospera, o outro também.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Mais do que uma plataforma, somos uma rede de pessoas que se ajudam todos os dias, em todo o Brasil.",
  },
  {
    icon: Star,
    title: "Excelência",
    description: "Buscamos a melhor experiência em cada detalhe — do primeiro clique à conclusão do serviço.",
  },
];

export const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Sobre a Joblee — Conectando pessoas a profissionais de confiança"
        description="Conheça a Joblee: nossa história, missão e os valores que guiam a plataforma que conecta clientes a profissionais verificados em todo o Brasil."
        path="/sobre"
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
                <HeartHandshake className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Conectando pessoas a profissionais de <span className="text-primary">confiança</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A Joblee nasceu para simplificar a forma como as pessoas encontram, contratam e avaliam serviços no Brasil.
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A Joblee começou com uma pergunta simples: por que ainda é tão difícil encontrar um profissional de
                confiança para resolver as tarefas do dia a dia? De um cano vazando a um personal trainer, a busca
                costumava depender de indicações soltas e muita sorte.
              </p>
              <p>
                Decidimos mudar isso construindo uma plataforma onde clientes encontram profissionais verificados,
                com avaliações reais e pagamento protegido — e onde profissionais têm acesso a milhares de clientes
                sem depender apenas do boca a boca.
              </p>
              <p>
                Hoje, conectamos milhares de pessoas a profissionais de dezenas de categorias em todo o Brasil,
                e estamos só começando.
              </p>
            </div>
          </div>
        </section>

        {/* Missão */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center text-primary-foreground max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Facilitar o encontro entre quem precisa de um serviço e quem sabe fazê-lo bem,
              com segurança, transparência e respeito para todos.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Os princípios que guiam cada decisão que tomamos.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
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

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Faça parte dessa história
            </h2>
            <p className="text-muted-foreground mb-8">
              Encontre o profissional ideal para o seu próximo serviço ou comece a atender novos clientes hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 font-semibold shadow-lg text-base px-8">
                <Link to="/#download">Baixar o App</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold text-base px-8">
                <Link to="/profissional">Seja um Profissional</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
