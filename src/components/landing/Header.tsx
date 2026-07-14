import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import banner from "@/assets/banner.png";

const navItems = [
  { label: "Como funciona", to: "/#how-it-works" },
  { label: "Serviços", to: "/#services" },
  { label: "Baixar App", to: "/#download" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const openComingSoonAlert = () => setIsComingSoonOpen(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
              <img
                width="170px"
                height="auto"
                src={banner}
                alt="Joblee logo"
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </Link>
            ))}
            <Link to="/profissional" className="text-muted-foreground hover:text-primary transition-colors font-medium text-orange-500">
              Para profissionais
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-semibold" onClick={openComingSoonAlert}>
              Entrar
            </Button>
            <Button className="bg-gradient-hero hover:opacity-90 font-semibold shadow-lg" onClick={openComingSoonAlert}>
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
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/profissional"
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 text-orange-500"
              >
                Para profissionais
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full font-semibold" onClick={openComingSoonAlert}>
                  Entrar
                </Button>
                <Button className="w-full bg-gradient-hero hover:opacity-90 font-semibold" onClick={openComingSoonAlert}>
                  Registrar-se
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <AlertDialog open={isComingSoonOpen} onOpenChange={setIsComingSoonOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Em breve!</AlertDialogTitle>
            <AlertDialogDescription>
              O registro e o app da Joblee estarão prontos em breve. Fique de olho!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Entendi</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
};

export default Header;
