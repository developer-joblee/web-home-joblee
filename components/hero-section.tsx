import { Button } from "@/components/ui/button"
import { Search, Star, Users, Briefcase } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary self-start">
              <Star className="h-4 w-4 fill-primary" />
              <span className="leading-tight">Conecte-se com os melhores profissionais</span>
            </div>

            <h1 className="font-sans text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Encontre o <span className="text-primary">Profissional</span> Ideal em Minutos
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              {
                "Conecte-se com especialistas qualificados de diversas áreas. Serviços residenciais ou empresariais, tudo em um só lugar."
              }
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="text-base font-semibold">
                <Search className="mr-2 h-5 w-5" />
                Buscar Profissionais
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent">
                <Briefcase className="mr-2 h-5 w-5" />
                Oferecer Serviços
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-accent ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-chart-3 ring-2 ring-background" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  <strong className="text-foreground">+5.000</strong> profissionais
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  <strong className="text-foreground">4.9</strong> de avaliação
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1d0de07a89c83877bbe4f1a1d55a6219-ouSMgtOnVenzBjcyspPtugeF8wKkQg.webp"
                alt="Profissionais da Joblee"
                className="h-full w-full rounded-[calc(1.5rem-4px)] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-4 shadow-xl border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total de Conexões</p>
                  <p className="text-2xl font-bold text-foreground">12.543</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-12 rounded-2xl bg-card p-4 shadow-xl border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Serviços Ativos</p>
                  <p className="text-2xl font-bold text-foreground">324</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
