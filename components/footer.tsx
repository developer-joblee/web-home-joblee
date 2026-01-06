import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  platform: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Profissionais", href: "#profissionais" },
    { label: "Categorias", href: "#" },
    { label: "Preços", href: "#" },
  ],
  company: [
    { label: "Sobre Nós", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  support: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/banner.png" alt="Joblee" width={150} height={50} />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Conectando profissionais qualificados com clientes que precisam de serviços de excelência. Transformando a
              forma como contratamos serviços.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Plataforma</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Joblee. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Termos
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
