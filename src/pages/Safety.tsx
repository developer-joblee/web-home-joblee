import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Seo } from "@/components/Seo";
import {
  Shield,
  ShieldCheck,
  Lock,
  UserCheck,
  CreditCard,
  MessageSquareWarning,
  Star,
  Eye,
  FileCheck,
  Phone,
  BadgeCheck,
  HeartHandshake,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const safetyFeaturesClient = [
  {
    icon: UserCheck,
    title: "Profissionais Verificados",
    description: "Todos os profissionais passam por um processo de verificação de identidade e antecedentes antes de serem aprovados na plataforma.",
  },
  {
    icon: Star,
    title: "Avaliações Transparentes",
    description: "Veja avaliações reais de outros clientes antes de contratar. Nosso sistema impede avaliações falsas.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Seu pagamento fica protegido até que o serviço seja concluído. Não cobramos nada adiantado sem sua autorização.",
  },
  {
    icon: MessageSquareWarning,
    title: "Canal de Denúncias",
    description: "Reporte qualquer comportamento inadequado diretamente pelo app. Nossa equipe analisa cada caso com urgência.",
  },
  {
    icon: Lock,
    title: "Dados Protegidos",
    description: "Seus dados pessoais são criptografados e nunca compartilhados com terceiros sem seu consentimento.",
  },
  {
    icon: Phone,
    title: "Suporte 24/7",
    description: "Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana para ajudar em qualquer situação.",
  },
];

const safetyFeaturesPro = [
  {
    icon: ShieldCheck,
    title: "Proteção contra Fraudes",
    description: "Verificamos a identidade dos clientes para proteger você contra solicitações fraudulentas ou mal-intencionadas.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Garantido",
    description: "Receba seus pagamentos de forma segura e pontual. Protegemos seus ganhos com nosso sistema de garantia.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Veja o perfil e avaliações do cliente antes de aceitar um serviço. Você decide com quem trabalhar.",
  },
  {
    icon: FileCheck,
    title: "Contratos Claros",
    description: "Cada serviço possui termos claros acordados entre ambas as partes, evitando mal-entendidos.",
  },
  {
    icon: BadgeCheck,
    title: "Seguro de Responsabilidade",
    description: "Oferecemos cobertura para imprevistos durante a prestação de serviço, protegendo você e o cliente.",
  },
  {
    icon: HeartHandshake,
    title: "Mediação de Conflitos",
    description: "Em caso de disputas, nossa equipe de mediação atua de forma justa e imparcial para resolver a situação.",
  },
];

const faqItems = [
  {
    question: "Como a Joblee verifica os profissionais?",
    answer: "Realizamos verificação de identidade com documento oficial, checagem de antecedentes criminais e validação de qualificações profissionais. Além disso, mantemos um monitoramento contínuo das avaliações.",
  },
  {
    question: "Meus dados pessoais estão seguros?",
    answer: "Sim. Utilizamos criptografia de ponta a ponta e seguimos as diretrizes da LGPD. Seus dados nunca são vendidos ou compartilhados sem consentimento.",
  },
  {
    question: "O que acontece se houver um problema durante o serviço?",
    answer: "Você pode reportar qualquer problema pelo app. Nossa equipe de suporte está disponível 24/7 e atuará imediatamente para resolver a situação, incluindo reembolsos quando aplicável.",
  },
  {
    question: "Como funciona a proteção de pagamento?",
    answer: "O pagamento fica retido em nossa plataforma até que o serviço seja concluído e aprovado pelo cliente. Em caso de insatisfação, abrimos uma mediação antes de liberar o pagamento.",
  },
  {
    question: "Posso cancelar um serviço agendado?",
    answer: "Sim, tanto clientes quanto profissionais podem cancelar com antecedência sem penalidades. Cancelamentos de última hora podem estar sujeitos a taxas, conforme nossa política.",
  },
  {
    question: "A Joblee oferece seguro para os serviços?",
    answer: "Sim, oferecemos cobertura para danos acidentais durante a prestação do serviço, protegendo tanto o cliente quanto o profissional.",
  },
];

export const Safety = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Segurança na Joblee — Profissionais verificados e pagamentos protegidos"
        description="Saiba como a Joblee garante sua segurança: verificação de identidade e antecedentes dos profissionais, pagamentos protegidos e suporte dedicado."
        path="/seguranca"
      />
      <Header />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o início
            </Link>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sua segurança é nossa <span className="text-primary">prioridade</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Na Joblee, investimos em tecnologia e processos rigorosos para garantir uma experiência segura para todos.
            </p>
          </div>
        </section>

        {/* Tabs: Cliente / Profissional */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="client" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 py-0 px-[0.15rem] bg-gray-200">
                <TabsTrigger value="client" className="text-base font-semibold">Para Clientes</TabsTrigger>
                <TabsTrigger value="pro" className="text-base font-semibold">Para Profissionais</TabsTrigger>
              </TabsList>

              <TabsContent value="client">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {safetyFeaturesClient.map((feature, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pro">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {safetyFeaturesPro.map((feature, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
              {[
                { value: "100%", label: "Profissionais verificados" },
                { value: "24/7", label: "Suporte disponível" },
                { value: "256-bit", label: "Criptografia de dados" },
                { value: "99.9%", label: "Satisfação em segurança" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm md:text-base opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Perguntas Frequentes sobre Segurança
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Tire suas dúvidas sobre como protegemos você na Joblee.
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border/50 px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para começar com segurança?
            </h2>
            <p className="text-muted-foreground mb-8">
              Baixe o app e experimente uma plataforma construída com sua proteção em mente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 font-semibold shadow-lg text-base px-8">
                Baixar o App
              </Button>
              <Link to="/profissional">
                <Button size="lg" variant="outline" className="font-semibold text-base px-8 w-full">
                  Seja um Profissional
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
