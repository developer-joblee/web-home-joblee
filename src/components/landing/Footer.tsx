import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import banner from "@/assets/banner-joblee.png";
import { SOCIAL_LINKS, CONTACT } from "@/constants/links";

const socialLinks = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
].filter((social) => social.href);

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                width="170px"
                height="auto"
                src={banner}
                alt="Joblee logo"
              />
            </Link>
            <p className="text-muted opacity-70">
              Conectando pessoas com profissionais confiáveis para qualquer serviço, a qualquer hora.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><Link to="/sobre" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Sobre Nós</Link></li>
              <li><Link to="/carreiras" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Carreiras</Link></li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h4 className="font-bold text-lg mb-4">Para Clientes</h4>
            <ul className="space-y-3">
              <li><Link to="/#download" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Encontre um profissional</Link></li>
              <li><Link to="/#how-it-works" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Como funciona</Link></li>
              <li><Link to="/precos" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Preços</Link></li>
              <li><Link to="/seguranca" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Segurança</Link></li>
            </ul>
          </div>

          {/* For Pros */}
          <div>
            <h4 className="font-bold text-lg mb-4">Para Profissionais</h4>
            <ul className="space-y-3">
              <li><Link to="/profissional" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Seja parceiro</Link></li>
              <li>
                <a
                  href={CONTACT.whatsappSupport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-70 text-sm">
            © {new Date().getFullYear()} Joblee. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="opacity-70 hover:opacity-100 transition-opacity">Política de Privacidade</Link>
            <Link to="/terms-and-conditions" className="opacity-70 hover:opacity-100 transition-opacity">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
