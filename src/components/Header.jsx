import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { asset } from "@/lib/utils/asset.js";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Nossos Serviços", href: "/servicos" },
    { title: "Sobre Nós", href: "/sobre" },
    { title: "Portfólio", href: "/portfolio" },
  ];

  const baseLinkClasses = "text-base font-medium transition-colors py-2";

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavLink to="/" className="flex items-center">
          <img 
            src={asset('/logo.png')} 
            alt="Logomarca da Gráfica Eleal" 
            className="h-10 w-auto"
          />
        </NavLink>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.href}
              end
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
          <Button asChild>
            <NavLink to="/contato">Solicitar Orçamento</NavLink>
          </Button>
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
                <NavLink to="/" className="flex items-center mb-4">
                  <img 
                    src={asset('/logo.png')} 
                    alt="Logomarca da Gráfica Eleal" 
                    className="h-10 w-auto"
                  />
                </NavLink>

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
                  <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    <NavLink to="/contato">Solicitar Orçamento</NavLink>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}