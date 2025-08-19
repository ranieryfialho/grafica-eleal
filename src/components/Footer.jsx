import { Link } from "react-router-dom";
import { Printer, Instagram, Mail, Phone } from 'lucide-react';
import { asset } from "@/lib/utils/asset.js";

// Dados para os links de navegação, alinhados com o Header
const navLinks = [
    { title: "Home", href: "/" },
    { title: "Nossos Serviços", href: "/servicos" },
    { title: "Sobre Nós", href: "/sobre" },
    { title: "Portfólio", href: "/portfolio" },
];

// Imagens para a galeria do rodapé
const portfolioImages = [
  { image: "/portfolio/projeto-1.jpg", alt: "Projeto 1" },
  { image: "/portfolio/projeto-2.jpg", alt: "Projeto 2" },
  { image: "/portfolio/projeto-3.jpg", alt: "Projeto 3" },
  { image: "/portfolio/projeto-4.jpg", alt: "Projeto 4" },
  { image: "/portfolio/projeto-5.jpg", alt: "Projeto 5" },
  { image: "/portfolio/projeto-6.jpg", alt: "Projeto 6" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Coluna 1: Informações da Empresa */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Printer className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">Eleal Gráfica & Editora</span>
            </Link>
            <p className="text-muted-foreground">
                <strong className="text-background/90 block">Endereço:</strong>
                Rua Senador Alencar, 1689 - Centro, Fortaleza - CE, 60030-051
            </p>
            <p className="text-muted-foreground">
                <strong className="text-background/90 block">Telefone:</strong>
                (85) 3238-0150
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/graficaeeditoraeleal" className="bg-primary/20 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:8532380150" className="bg-primary/20 p-2 rounded-full hover:bg-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Páginas */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg tracking-wider">Páginas</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.title}</Link>
                </li>
              ))}
               <li>
                  <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Entre em Contato</Link>
                </li>
            </ul>
          </div>

          {/* Coluna 3: Portfólio */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg tracking-wider">Portfólio</h4>
            <div className="grid grid-cols-3 gap-2">
              {portfolioImages.map((img, index) => (
                <Link 
                  to="/portfolio" 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-md"
                >
                  <img 
                    src={asset(img.image)}
                    alt={img.alt} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Barra de Copyright */}
      <div className="border-t border-primary/20 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground text-center sm:text-left">
          <p>&copy; {currentYear} Eleal Gráfica & Editora. Todos os direitos reservados.</p>
          <a href="https://rafiweb.com.br/" className="hover:text-primary mt-2 sm:mt-0">Desenvolvido por Rafi Web</a>
        </div>
      </div>
    </footer>
  );
}