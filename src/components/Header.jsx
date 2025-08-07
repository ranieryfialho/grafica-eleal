import { useState } from "react";
// 1. Trocamos Link por NavLink e removemos o useLocation que não é mais necessário aqui
import { NavLink } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Printer } from "lucide-react";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "Nossos Serviços", href: "/servicos" },
    { title: "Sobre Nós", href: "/sobre" },
    { title: "Portfólio", href: "/portfolio" },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Classe base para os links, para não repetir código
  const baseLinkClasses = "text-base font-medium transition-colors py-2";

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavLink to="/" className="flex items-center gap-2">
          <Printer className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground hidden sm:inline">
            Eleal Gráfica
          </span>
        </NavLink>

        {/* 2. Trocamos <Link> por <NavLink> e ajustamos a className */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.href}
              end // A propriedade 'end' garante que 'Home' só fica ativa na página exata "/"
              className={({ isActive }) =>
                `${baseLinkClasses} link-animado ${isActive ? 'active' : 'text-muted-foreground hover:text-foreground'}`
              }
            >
              {link.title}
            </NavLink>
          ))}
           <NavLink to="/contato" className={`${baseLinkClasses} link-animado text-muted-foreground hover:text-foreground`}>
            Entre em Contato
           </NavLink>
        </nav>

        <div className="hidden md:block">
          <Button>Solicitar Orçamento</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <NavLink to="/" className="flex items-center gap-2 mb-4">
                  <Printer className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-foreground">
                    Eleal Gráfica
                  </span>
                </NavLink>
                {/* 3. Trocamos <Link> por <NavLink> no menu mobile também */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.href}
                    end
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
                <NavLink to="/contato" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">
                    Entre em Contato
                </NavLink>
                <div className="pt-6">
                  <Button className="w-full">Solicitar Orçamento</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}