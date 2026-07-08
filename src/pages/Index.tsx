import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import BecomePro from "@/components/landing/BecomePro";
import AppDownload from "@/components/landing/AppDownload";
import { Footer } from "@/components/landing/Footer";
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Joblee — Profissionais de confiança ao seu alcance"
        description="Conecte-se com profissionais confiáveis perto de você. De reparos em casa a serviços pessoais, encontre o profissional certo com a Joblee."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <BecomePro />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
