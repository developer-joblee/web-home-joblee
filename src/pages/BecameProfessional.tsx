import Header from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeCheck,
  TrendingUp,
  Calendar,
  Shield,
  Star,
  Users,
  Wallet,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Smartphone,
  Monitor,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Crie sua conta",
    description:
      "Baixe o app e faça seu cadastro em poucos minutos. Preencha suas informações pessoais e profissionais.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Complete seu perfil",
    description:
      "Adicione suas habilidades, experiência, fotos de trabalhos realizados e defina sua área de atuação.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Verificação",
    description:
      "Passe pelo nosso processo de verificação para garantir a segurança e confiança na plataforma.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Comece a ganhar",
    description:
      "Receba solicitações de clientes, aceite trabalhos e comece a faturar de forma flexível.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente sua renda",
    description:
      "Acesse milhares de clientes em potencial e aumente seu faturamento mensal significativamente.",
  },
  {
    icon: Calendar,
    title: "Horários flexíveis",
    description:
      "Trabalhe quando quiser. Você decide quando está disponível e quais trabalhos aceitar.",
  },
  {
    icon: Star,
    title: "Construa sua reputação",
    description:
      "Receba avaliações de clientes e construa uma reputação sólida que atrai mais trabalhos.",
  },
  {
    icon: Users,
    title: "Base de clientes",
    description:
      "Não precisa mais se preocupar em encontrar clientes. Eles vêm até você pela plataforma.",
  },
  {
    icon: Shield,
    title: "Pagamentos seguros",
    description:
      "Receba seus pagamentos de forma segura e garantida diretamente pela plataforma.",
  },
  {
    icon: MessageSquare,
    title: "Suporte dedicado",
    description:
      "Conte com nosso time de suporte para resolver qualquer dúvida ou problema rapidamente.",
  },
];

const faqs = [
  {
    question: "Quanto custa para me cadastrar na Joblee?",
    answer:
      "O cadastro na Joblee é totalmente gratuito! Não cobramos nenhuma taxa para criar sua conta. Cobramos apenas uma pequena comissão sobre os serviços realizados pela plataforma.",
  },
  {
    question: "Quais categorias de serviço estão disponíveis?",
    answer:
      "A Joblee aceita profissionais de diversas categorias: encanadores, eletricistas, pintores, faxineiros, jardineiros, personal trainers, professores particulares, fotógrafos, designers, desenvolvedores e muito mais. Se você é profissional em alguma área, há espaço para você.",
  },
  {
    question: "Como funciona o processo de verificação?",
    answer:
      "Nosso processo de verificação inclui a validação de seus documentos pessoais, comprovante de endereço e, dependendo da categoria, certificações profissionais. Isso garante a segurança tanto para você quanto para os clientes.",
  },
  {
    question: "Quando e como recebo meus pagamentos?",
    answer:
      "Os pagamentos são processados automaticamente após a conclusão e confirmação do serviço pelo cliente. O valor é transferido para sua conta bancária cadastrada em até 2 dias úteis.",
  },
  {
    question: "Posso trabalhar em mais de uma categoria?",
    answer:
      "Sim! Você pode cadastrar múltiplas habilidades e categorias de serviço no seu perfil. Quanto mais habilidades, mais oportunidades de trabalho você terá.",
  },
  {
    question: "E se eu tiver um problema com um cliente?",
    answer:
      "A Joblee oferece suporte dedicado para mediação de conflitos. Nossa equipe está disponível para ajudar a resolver qualquer situação. Também temos um sistema de avaliação que protege profissionais de clientes mal-intencionados.",
  },
  {
    question: "Preciso ter empresa registrada (CNPJ)?",
    answer:
      "Não é obrigatório ter CNPJ para se cadastrar. Aceitamos profissionais autônomos (CPF) e também empresas. Entretanto, recomendamos que você consulte as obrigações fiscais da sua região.",
  },
  {
    question: "Qual a área de cobertura da Joblee?",
    answer:
      "Atualmente a Joblee opera nas principais capitais e regiões metropolitanas do Brasil. Estamos em constante expansão, então mesmo que sua cidade ainda não esteja coberta, cadastre-se para ser avisado quando chegarmos aí!",
  },
];

export const BecomeProfessional = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                <BadgeCheck className="w-4 h-4" />
                Programa para Profissionais
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Transforme seu talento em{" "}
                <span className="text-gradient">renda</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de profissionais que já estão faturando pela
                Joblee. Cadastre-se gratuitamente e comece a receber
                solicitações de clientes hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:opacity-90 font-semibold h-14 text-base shadow-lg"
                  asChild
                >
                  <a href="/#become-pro">
                    Cadastre-se agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Como funciona?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Em apenas 4 passos simples você começa a receber clientes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative p-6 rounded-2xl border border-border bg-background hover:shadow-card-hover transition-all duration-300 group"
                >
                  <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Por que ser um profissional Joblee?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Vantagens exclusivas para quem faz parte da nossa rede
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Perguntas Frequentes
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tire suas dúvidas sobre como funciona a Joblee para
                  profissionais
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-6 bg-background data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left font-semibold text-base hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Plataformas */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Use onde e como quiser
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                A Joblee está disponível tanto como aplicativo para celular quanto pela plataforma web. Escolha a forma que melhor se adapta à sua rotina.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl border border-border bg-card text-left space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">App Mobile</h3>
                  <p className="text-muted-foreground text-sm">
                    Baixe o aplicativo na <strong>Google Play</strong> ou <strong>App Store</strong> e gerencie seus trabalhos de qualquer lugar, receba notificações em tempo real e responda clientes na hora.
                  </p>
                  <img className="w-full rounded-xl" src="/mockup1.webp" alt="" />
                </div>
                <div className="p-6 rounded-2xl border border-border bg-card text-left space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Plataforma Web</h3>
                  <p className="text-muted-foreground text-sm">
                    Acesse pelo navegador do seu computador para uma experiência completa. Ideal para gerenciar seu perfil, ver relatórios e organizar sua agenda com mais detalhes.
                  </p>
                  <div className="w-full bg-gradient-hero aspect-[4/3] rounded-xl flex items-center justify-center p-4">
                    <img className="w-full rounded-xl" src="/laptop-mockup1.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Pronto para começar?
            </h2>
            <p className="text-lg opacity-80 max-w-lg mx-auto">
              Cadastre-se gratuitamente e comece a receber solicitações de
              clientes hoje mesmo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 font-semibold h-14 text-base shadow-lg"
                asChild
              >
                <a href="/#become-pro">
                  Quero ser um Profissional Joblee
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm opacity-70">
                <CheckCircle className="w-4 h-4" />
                Grátis para entrar
              </div>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <CheckCircle className="w-4 h-4" />
                Sem compromisso
              </div>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <CheckCircle className="w-4 h-4" />
                Suporte 24/7
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
