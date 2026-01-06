import { Search, UserCheck, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Busque o Serviço",
    description:
      "Encontre o profissional que você precisa através da nossa busca inteligente por categoria, localização e avaliações.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Veja Perfis Qualificados",
    description:
      "Analise portfólios, avaliações de clientes anteriores e disponibilidade em tempo real dos profissionais.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Entre em Contato",
    description: "Converse diretamente com o profissional, tire dúvidas e negocie valores de forma simples e segura.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Contrate e Avalie",
    description:
      "Finalize a contratação e depois compartilhe sua experiência para ajudar outros usuários da comunidade.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-sans text-4xl font-bold text-foreground md:text-5xl text-balance">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Em apenas 4 passos simples, você encontra o profissional perfeito para suas necessidades
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 rounded-2xl bg-primary/10 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-full bg-gradient-to-r from-primary to-transparent lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
