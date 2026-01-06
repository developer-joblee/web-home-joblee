import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock } from "lucide-react"

const professionals = [
  {
    name: "Ana Silva",
    profession: "Encanadora",
    location: "São Paulo, SP",
    rating: 4.9,
    reviews: 127,
    hourlyRate: "R$ 80/hora",
    availability: "Disponível hoje",
    image: "/professional-woman-plumber.jpg",
    tags: ["Emergência 24h", "Verificado"],
  },
  {
    name: "Carlos Mendes",
    profession: "Eletricista",
    location: "Rio de Janeiro, RJ",
    rating: 5.0,
    reviews: 203,
    hourlyRate: "R$ 95/hora",
    availability: "Disponível amanhã",
    image: "/professional-electrician.png",
    tags: ["Top Rated", "Verificado"],
  },
  {
    name: "Juliana Costa",
    profession: "Designer de Interiores",
    location: "Belo Horizonte, MG",
    rating: 4.8,
    reviews: 89,
    hourlyRate: "R$ 120/hora",
    availability: "Disponível hoje",
    image: "/professional-interior-designer.png",
    tags: ["Premium", "Verificado"],
  },
  {
    name: "Roberto Alves",
    profession: "Jardineiro",
    location: "Curitiba, PR",
    rating: 4.9,
    reviews: 156,
    hourlyRate: "R$ 70/hora",
    availability: "Disponível hoje",
    image: "/professional-man-gardener.png",
    tags: ["Eco-Friendly", "Verificado"],
  },
]

export function ProfessionalsSection() {
  return (
    <section id="profissionais" className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-sans text-4xl font-bold text-foreground md:text-5xl text-balance">
            Profissionais <span className="text-primary">Próximos a Você</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Conecte-se com especialistas qualificados e avaliados pela comunidade
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {professionals.map((professional, index) => (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={professional.image || "/placeholder.svg"}
                  alt={professional.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {professional.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-background/90 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-5">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground">{professional.name}</h3>
                  <p className="text-sm text-muted-foreground">{professional.profession}</p>
                </div>

                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{professional.location}</span>
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{professional.rating}</span>
                    <span className="text-sm text-muted-foreground">({professional.reviews})</span>
                  </div>
                  <span className="font-bold text-primary">{professional.hourlyRate}</span>
                </div>

                <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary/5 p-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-primary">{professional.availability}</span>
                </div>

                <Button className="w-full">Ver Perfil</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Ver Todos os Profissionais
          </Button>
        </div>
      </div>
    </section>
  )
}
