/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Search, PlayCircle, Star, Users, Briefcase } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import plumber from "@/assets/banner/plumber.webp";
import cleaning from "@/assets/banner/cleaning.webp";
import mechanic from "@/assets/banner/mechanic.webp";
import delivery from "@/assets/banner/delivery.webp";
import personalTrainer from "@/assets/banner/personal-trainer.webp";

const professionals = [
  { name: 'Encanador', image: plumber },
  { name: 'Mecânico ', image: mechanic },
  { name: 'Faxineiro', image: cleaning },
  { name: 'Entregador', image: delivery },
  { name: 'Personal Trainer', image: personalTrainer },
]

const PAUSE = 2000;
const TYPING_DELAY = 60;

const Hero = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [activeProfessional, setActiveProfessional] = useState(professionals[0]);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);

  const typeWithImage = (
    typewriter: any,
    professional: { name: string; image: string }
  ) => {
    return typewriter
      .callFunction(() => {
        setIsImageTransitioning(true);
      })
      .pauseFor(200)
      .callFunction(() => {
        setActiveProfessional(professional);
        setTimeout(() => {
          setIsImageTransitioning(false);
        }, 300);
      })
      .typeString(professional.name)
      .pauseFor(PAUSE)
      .deleteAll();
  };

  useEffect(() => {
    if (!textRef.current) return;

    const Typewriter = (window as any).Typewriter;
    if (!Typewriter) return;

    const typewriter = new Typewriter(textRef.current, {
      loop: true,
      delay: TYPING_DELAY,
    });

    professionals.forEach((professional) => {
      typeWithImage(typewriter, professional);
    });

    typewriter.start();
  }, []);
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary">O número 1 do mercado de serviços</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Encontre o{" "}
                <span ref={textRef} className="text-gradient"></span>{" "}
                <br />Perfeito para qualquer serviço
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Conecte-se com profissionais confiáveis perto de você. De reparos em casa a serviços pessoais — faça o que precisa com a Joblee.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 font-semibold shadow-lg glow-primary h-14 px-8 text-base">
                <Search className="w-5 h-5 mr-2" />
                Encontrar um Profissional
              </Button>
              <Button size="lg" variant="outline" className="font-semibold h-14 px-8 text-base border-2 hover:bg-muted">
                <PlayCircle className="w-5 h-5 mr-2" />
                Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-muted-foreground">Profissionais</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-muted-foreground">Avaliação do App</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
              
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src={activeProfessional.image}
                  alt={activeProfessional.name}
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
                
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Profissionais Verificados</p>
                      <p className="text-sm text-muted-foreground">Todos os profissionais são verificados</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/30 rounded-full" />
              <div className="absolute -bottom-4 right-12 w-16 h-16 border-4 border-secondary/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
