import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import banner from "@/assets/banner-variant.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <img
                width="170px"
                height="auto"
                src={banner}
                alt="Joblee logo"
              />
          </a>
            <p className="text-muted opacity-70">
              Conectando pessoas com profissionais confiáveis para qualquer serviço, a qualquer hora.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Sobre Nós</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Carreiras</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Imprensa</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Blog</a></li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h4 className="font-bold text-lg mb-4">Para Clientes</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Encontre um profissional</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Como funciona</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Preços</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Segurança</a></li>
            </ul>
          </div>

          {/* For Pros */}
          <div>
            <h4 className="font-bold text-lg mb-4">Para Profissionais</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Seja parceiro</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Recursos para profissionais</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Histórias de sucesso</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Suporte</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-70 text-sm">
            © {new Date().getFullYear()} Joblee. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Política de Privacidade</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Termos de Serviço</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
