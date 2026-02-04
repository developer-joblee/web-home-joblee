import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import BecomePro from "@/components/landing/BecomePro";
import AppDownload from "@/components/landing/AppDownload";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
