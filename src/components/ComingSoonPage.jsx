import { Printer, Mail, Phone, Instagram } from 'lucide-react';

export function ComingSoonPage() {
  // Use as informações de contato reais da sua empresa aqui
  const email = "contato@graficaeleal.com.br";
  const telefone = "(85) 3238-0150"; // Atualizei com o telefone da imagem
  const instagramUrl = "https://instagram.com/graficaeeditoraeleal"; // Troque se necessário
  const instagramHandle = "@graficaeeditoraeleal";

  return (
    <main
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.1), hsl(var(--background)))'
      }}
    >
      <div className="text-center bg-card/80 backdrop-blur-lg border border-border rounded-xl shadow-2xl max-w-2xl w-full p-8 sm:p-12">
        
        <div className="flex flex-col items-center justify-center mb-6">
          <Printer className="h-16 w-16 text-primary animate-pulse" />
          <h1 className="text-5xl font-bold text-foreground mt-4">Gráfica Eleal</h1>
        </div>

        <p className="text-2xl font-light text-muted-foreground mb-8">
          Nosso novo site está em construção!
        </p>

        <div className="border-t border-border my-8"></div>

        <p className="text-foreground mb-6">
          Estamos preparando uma experiência incrível para você. Enquanto isso, fale conosco:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-foreground">
          
          {/* Email */}
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base">
            <Mail className="h-5 w-5" />
            <span>{email}</span>
          </a>
          
          {/* Telefone */}
          <a href={`tel:${telefone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base">
            <Phone className="h-5 w-5" />
            <span>{telefone}</span>
          </a>
          
          {/* Instagram com o texto */}
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base">
            <Instagram className="h-5 w-5" />
            <span>{instagramHandle}</span>
          </a>
        </div>
        
      </div>
    </main>
  );
}