import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils/asset.js";

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src={asset('fundo-hero.gif')}
        alt="Animação de fundo da gráfica"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-foreground/70 z-10"></div>

      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="relative hidden md:block">
            <img 
              src={asset('imagem-hero.jpg')}
              alt="Projeto da Gráfica Eleal" 
              className="rounded-lg shadow-2xl z-10 relative"
            />
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-lg z-0 transform -rotate-3"></div>
          </div>

          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold uppercase tracking-wider">
              Qualidade & <span className="text-primary">Precisão</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mt-2">
              ELEAL GRÁFICA E EDITORA
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto md:mx-0">
              Há mais de 20 anos transformando ideias em realidade com soluções visuais que impressionam e comunicam com excelência.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="#servicos">Nossos Serviços</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#portfolio">Ver Portfólio</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}