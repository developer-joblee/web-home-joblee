import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, TrendingUp, Users, Shield } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Alcance Milhares de Clientes",
    description: "Conecte-se com mais de 100 mil usuários ativos procurando por seus serviços",
  },
  {
    icon: TrendingUp,
    title: "Aumente sua Receita",
    description: "Profissionais na plataforma aumentam sua receita em média 40% no primeiro mês",
  },
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Sistema de verificação e avaliações garantem credibilidade ao seu perfil",
  },
]

export function AdvertiseSection() {
  return (
    <section id="anunciar" className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
              <Megaphone className="h-4 w-4" />
              <span>Para Profissionais</span>
            </div>

            <h2 className="font-sans text-4xl font-bold text-foreground md:text-5xl text-balance">
              Quer <span className="text-accent">Anunciar</span> na Joblee?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {
                "Transforme sua carreira profissional! Cadastre-se gratuitamente e comece a receber solicitações de clientes hoje mesmo. Sem taxas de cadastro, você só paga quando fechar negócio."
              }
            </p>

            <div className="mt-8 grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Começar Gratuitamente
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">* Sem compromisso. Cancele quando quiser.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary">0%</div>
                <div className="mt-2 text-sm font-medium text-foreground">Taxa de Cadastro</div>
                <div className="mt-1 text-xs text-muted-foreground">Comece grátis hoje</div>
              </CardContent>
            </Card>

            <Card className="border-2 sm:mt-8">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-accent">24h</div>
                <div className="mt-2 text-sm font-medium text-foreground">Ativação Rápida</div>
                <div className="mt-1 text-xs text-muted-foreground">Perfil aprovado em até 24h</div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-chart-3">+5K</div>
                <div className="mt-2 text-sm font-medium text-foreground">Profissionais Ativos</div>
                <div className="mt-1 text-xs text-muted-foreground">Junte-se à comunidade</div>
              </CardContent>
            </Card>

            <Card className="border-2 sm:mt-8">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary">4.9★</div>
                <div className="mt-2 text-sm font-medium text-foreground">Satisfação</div>
                <div className="mt-1 text-xs text-muted-foreground">Avaliação dos profissionais</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
