"use client"

import {
  Search,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Car,
  Scissors,
  Camera,
  ChefHat,
  Laptop,
  CheckCircle,
  Smartphone,
  Users,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import "./styles.css"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const professionals = [
    { icon: Wrench, name: "Encanador", color: "blue" },
    { icon: Zap, name: "Eletricista", color: "yellow" },
    { icon: Paintbrush, name: "Pintor", color: "green" },
    { icon: Hammer, name: "Pedreiro", color: "orange" },
    { icon: Car, name: "Mecânico", color: "red" },
    { icon: Scissors, name: "Cabeleireiro", color: "pink" },
    { icon: Camera, name: "Fotógrafo", color: "purple" },
    { icon: ChefHat, name: "Chef", color: "indigo" },
    { icon: Laptop, name: "Técnico TI", color: "cyan" },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Busque o Profissional",
      description: "Digite o serviço que você precisa e encontre profissionais qualificados na sua região.",
    },
    {
      step: "2",
      title: "Compare e Escolha",
      description: "Veja avaliações, preços e portfólios dos profissionais disponíveis.",
    },
    {
      step: "3",
      title: "Contrate com Segurança",
      description: "Entre em contato diretamente e contrate o profissional ideal para seu projeto.",
    },
  ]

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <span>J</span>
              </div>
              <span className="logo-text">Joblee</span>
            </div>

            {/* Desktop Menu */}
            <nav className="nav-desktop">
              <Link href="#como-funciona" className="nav-link">
                Como Funciona
              </Link>
              <Link href="#profissionais" className="nav-link">
                Para Profissionais
              </Link>
              <Link href="#app" className="nav-link">
                Baixar App
              </Link>
              <Link href="#contato" className="nav-link">
                Contato
              </Link>
            </nav>

            <div className="header-buttons">
              <button className="btn btn-ghost">Entrar</button>
              <button className="btn btn-primary">Cadastrar</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="nav-mobile">
              <nav className="nav-mobile-content">
                <Link href="#como-funciona" className="nav-mobile-link">
                  Como Funciona
                </Link>
                <Link href="#profissionais" className="nav-mobile-link">
                  Para Profissionais
                </Link>
                <Link href="#app" className="nav-mobile-link">
                  Baixar App
                </Link>
                <Link href="#contato" className="nav-mobile-link">
                  Contato
                </Link>
                <div className="nav-mobile-buttons">
                  <button className="btn btn-ghost">Entrar</button>
                  <button className="btn btn-primary">Cadastrar</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Encontre o <span className="text-primary">Profissional</span>
              <br />
              Perfeito para Você
            </h1>
            <p className="hero-subtitle">
              Conectamos você aos melhores profissionais da sua região. Rápido, seguro e confiável.
            </p>

            <div className="search-container">
              <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Que tipo de profissional você está procurando?"
                  className="search-input"
                />
                <button className="search-button">Buscar</button>
              </div>
            </div>

            <div className="badges">
              <span className="badge">Encanador</span>
              <span className="badge">Eletricista</span>
              <span className="badge">Pintor</span>
              <span className="badge">Faxineira</span>
              <span className="badge">Jardineiro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Carousel */}
      <section className="professionals">
        <div className="container">
          <h2 className="section-title">Principais Categorias</h2>

          <div className="professionals-grid">
            {professionals.map((professional, index) => {
              const IconComponent = professional.icon
              return (
                <div key={index} className="professional-item">
                  <div className={`professional-icon ${professional.color}`}>
                    <IconComponent size={32} />
                  </div>
                  <span className="professional-name">{professional.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Como Funciona</h2>
            <p className="section-subtitle">
              Em apenas 3 passos simples, você encontra e contrata o profissional ideal
            </p>
          </div>

          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app" className="app-download">
        <div className="container">
          <div className="app-content">
            <div className="app-text">
              <h2 className="app-title">Baixe o App Joblee</h2>
              <p className="app-description">
                Tenha acesso a milhares de profissionais na palma da sua mão. Disponível para iOS e Android.
              </p>

              <div className="app-buttons">
                <button className="app-store-btn">
                  <Smartphone size={20} />
                  <div className="app-store-text">
                    <div className="app-store-label">Baixar na</div>
                    <div className="app-store-name">App Store</div>
                  </div>
                </button>

                <button className="app-store-btn">
                  <Smartphone size={20} />
                  <div className="app-store-text">
                    <div className="app-store-label">Disponível no</div>
                    <div className="app-store-name">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="app-stats">
                <div className="app-stat">
                  <Star className="star-icon" size={16} />
                  <span>4.8 estrelas</span>
                </div>
                <div className="app-stat">
                  <Users size={16} />
                  <span>+50k downloads</span>
                </div>
              </div>
            </div>

            <div className="app-image">
              <Image src="/placeholder.svg?height=500&width=300" alt="Joblee App" width={300} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Registration */}
      <section id="profissionais" className="professional-registration">
        <div className="container">
          <div className="professional-content">
            <h2 className="professional-title">Você é um Profissional?</h2>
            <p className="professional-description">
              Cadastre-se na nossa plataforma e conecte-se com milhares de clientes em potencial. Aumente sua renda e
              expanda seu negócio.
            </p>

            <div className="professional-features">
              <div className="professional-feature">
                <CheckCircle size={48} />
                <h3>Cadastro Gratuito</h3>
                <p>Crie seu perfil sem custos</p>
              </div>
              <div className="professional-feature">
                <Users size={48} />
                <h3>Mais Clientes</h3>
                <p>Acesso a milhares de oportunidades</p>
              </div>
              <div className="professional-feature">
                <Star size={48} />
                <h3>Construa sua Reputação</h3>
                <p>Sistema de avaliações confiável</p>
              </div>
            </div>

            <button className="professional-cta">
              Cadastrar como Profissional
              <ArrowRight className="arrow-icon" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <span>J</span>
                </div>
                <span className="logo-text">Joblee</span>
              </div>
              <p className="footer-description">Conectando pessoas aos melhores profissionais do Brasil.</p>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Empresa</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">Sobre Nós</Link>
                </li>
                <li>
                  <Link href="#">Carreiras</Link>
                </li>
                <li>
                  <Link href="#">Imprensa</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Suporte</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">Central de Ajuda</Link>
                </li>
                <li>
                  <Link href="#">Contato</Link>
                </li>
                <li>
                  <Link href="#">Termos de Uso</Link>
                </li>
                <li>
                  <Link href="#">Privacidade</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Categorias</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">Encanadores</Link>
                </li>
                <li>
                  <Link href="#">Eletricistas</Link>
                </li>
                <li>
                  <Link href="#">Pintores</Link>
                </li>
                <li>
                  <Link href="#">Faxineiras</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Joblee. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
