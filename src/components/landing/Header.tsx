import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import banner from "@/assets/banner.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
              <img
                width="170px"
                height="auto"
                src={banner}
                alt="Joblee logo"
              />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Como funciona
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#download" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Baixar App
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-semibold" onClick={() => { window.open('https://app.joblee.com.br/login', '_blank') }}>
              Entrar
            </Button>
            <Button className="bg-gradient-hero hover:opacity-90 font-semibold shadow-lg" onClick={() => { window.open('https://app.joblee.com.br/register', '_blank') }}>
              Registrar-se
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Como funciona
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Serviços
              </a>
              <a href="#download" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Baixar App
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full font-semibold" onClick={() => { window.open('https://app.joblee.com.br/login', '_blank') }}>
                  Entrar
                </Button>
                <Button className="w-full bg-gradient-hero hover:opacity-90 font-semibold" onClick={() => { window.open('https://app.joblee.com.br/register', '_blank') }}>
                  Registrar-se
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
