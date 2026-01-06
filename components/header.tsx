import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/banner.png" alt="Joblee" width={150} height={50}></Image>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Como Funciona
          </Link>
          <Link
            href="#profissionais"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Profissionais
          </Link>
          <Link
            href="#app"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Baixar App
          </Link>
          <Link
            href="#anunciar"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Anunciar
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">
            Entrar
          </Button>
          <Button className="hidden md:inline-flex">Cadastrar</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
