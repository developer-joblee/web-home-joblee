import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"

export function AppDownloadSection() {
  return (
    <section id="app" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-sans text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
                Leve a Joblee no seu Bolso
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
                {
                  "Baixe nosso app e tenha acesso a milhares de profissionais qualificados a qualquer momento, em qualquer lugar. Gerencie projetos, converse com especialistas e agende serviços com facilidade."
                }
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-background text-foreground hover:bg-background/90"
                >
                  <Apple className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-xs">Baixar na</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-background text-foreground hover:bg-background/90"
                >
                  <Smartphone className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-xs">Disponível no</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">500K+</div>
                  <div className="text-sm text-primary-foreground/80">Downloads</div>
                </div>
                <div className="h-12 w-px bg-primary-foreground/20" />
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">4.8</div>
                  <div className="text-sm text-primary-foreground/80">Avaliação nas Lojas</div>
                </div>
                <div className="h-12 w-px bg-primary-foreground/20" />
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">24/7</div>
                  <div className="text-sm text-primary-foreground/80">Suporte</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative mx-auto w-64">
                <div className="absolute -inset-8 rounded-full bg-primary-foreground/10 blur-3xl" />
                <img
                  src="/modern-smartphone-app-interface.jpg"
                  alt="Joblee App"
                  className="relative z-10 rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
