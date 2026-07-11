import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Seo } from "@/components/Seo";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle,
  CreditCard,
  Eye,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const clientBenefits = [
  "Cadastro 100% gratuito",
  "Sem mensalidade ou assinatura",
  "Pague apenas pelos serviços que contratar",
  "Taxa de serviço exibida antes de confirmar",
];

const professionalBenefits = [
  "Cadastro 100% gratuito",
  "Sem mensalidade para manter o perfil",
  "Sem compromisso: cancele quando quiser",
  "Receba o valor líquido de cada serviço concluído",
];

const paymentSteps = [
  {
    icon: CreditCard,
    step: "1",
    title: "Você contrata e vê tudo antes de pagar",
    description: "No checkout, o valor do serviço e a taxa de serviço da plataforma aparecem de forma clara e separada — sem surpresas.",
  },
  {
    icon: ShieldCheck,
    step: "2",
    title: "Pagamento protegido",
    description: "O pagamento fica protegido pela plataforma até que o serviço seja concluído e aprovado.",
  },
  {
    icon: Wallet,
    step: "3",
    title: "Profissional recebe o valor líquido",
    description: "Após a conclusão, o profissional recebe o valor do serviço de forma segura, direto na conta cadastrada.",
  },
];

const faqItems = [
  {
    question: "Quanto custa se cadastrar na Joblee?",
    answer: "Nada. O cadastro é gratuito tanto para clientes quanto para profissionais, sem mensalidade ou taxa de adesão.",
  },
  {
    question: "Quando vejo a taxa de serviço?",
    answer: "Sempre antes de confirmar a contratação. No checkout, você vê o valor do serviço e a taxa de serviço da plataforma de forma separada e transparente.",
  },
  {
    question: "Existe alguma mensalidade ou assinatura?",
    answer: "Não. A Joblee não cobra mensalidade de clientes nem de profissionais. Você só tem custos quando contrata um serviço.",
  },
  {
    question: "Quando o profissional recebe o pagamento?",
    answer: "O pagamento fica protegido pela plataforma e é liberado ao profissional após a conclusão do serviço, garantindo segurança para os dois lados.",
  },
  {
    question: "E se eu precisar cancelar um serviço?",
    answer: "Cancelamentos com antecedência não têm penalidade. Cancelamentos de última hora podem estar sujeitos a taxas, conforme nossa política de cancelamento.",
  },
];

export const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Preços da Joblee — Cadastro grátis e taxas transparentes"
        description="Entenda como funciona o preço na Joblee: cadastro gratuito para clientes e profissionais, sem mensalidade, e taxa de serviço exibida com transparência no checkout."
        path="/precos"
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
                <Wallet className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Preços simples e <span className="text-primary">transparentes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cadastro gratuito, sem mensalidade. Você só paga quando contrata — e sempre sabendo exatamente quanto.
            </p>
          </div>
        </section>

        {/* Grátis para se cadastrar */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Grátis para se cadastrar
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Cliente ou profissional, começar na Joblee não custa nada.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <User className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Para Clientes</h3>
                  <ul className="space-y-3">
                    {clientBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Para Profissionais</h3>
                  <ul className="space-y-3">
                    {professionalBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Como funciona o pagamento */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Como funciona o pagamento
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Do checkout ao recebimento, tudo acontece dentro da plataforma, com segurança.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentSteps.map((step) => (
                <Card key={step.step} className="border-border/50 hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-3xl font-extrabold text-primary/30">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center text-primary-foreground max-w-3xl">
            <div className="flex justify-center mb-4">
              <Eye className="w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transparência em primeiro lugar</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Sem custo escondido e sem surpresa na fatura: a taxa de serviço da plataforma é exibida
              no checkout, antes de você confirmar qualquer pagamento.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Perguntas Frequentes sobre Preços
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Tire suas dúvidas sobre custos e pagamentos na Joblee.
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
              Comece agora, sem pagar nada
            </h2>
            <p className="text-muted-foreground mb-8">
              Baixe o app para contratar profissionais ou cadastre-se para oferecer seus serviços.
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
