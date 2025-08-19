import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { asset } from "@/lib/utils/asset.js";

const stats = [
  { end: 20, suffix: "k+", label: "Clientes Satisfeitos" },
  { end: 150, suffix: "+", label: "Projetos Desenvolvidos" },
  { end: 20, suffix: "+", label: "Anos de Experiência" },
];

export function WhyChooseUsSection() {
  return (
    <section id="porque-nos" className="py-16 sm:py-20 lg:py-24 textura-marca-dagua overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative flex justify-center items-center min-h-[400px]">
            <div className="absolute w-full max-w-sm h-full bg-slate-200 rounded-lg transform -rotate-3 transition-transform duration-500 ease-in-out group-hover:rotate-0"></div>

            <div className="relative w-full max-w-sm bg-card rounded-lg shadow-2xl border aspect-square transition-transform duration-500 ease-in-out group-hover:scale-105">
                <img 
                    src={asset("/imagem-escolha.jpg")}
                    alt="Equipe Eleal Gráfica em colaboração" 
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="relative mb-6">
              <h2 className="text-7xl lg:text-8xl font-black text-primary/5 absolute -top-8 left-0 right-0 lg:left-0 lg:-translate-x-4 pointer-events-none">
                DESTAQUES
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground relative">
                Por que escolher a ELEAL?
              </h3>
            </div>
            
            <p className="mt-4 text-muted-foreground">
              Há mais de duas décadas, a Eleal tem se destacado no mercado por oferecer qualidade e comprometimento em comunicação visual para seus clientes.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nosso compromisso com a qualidade e a excelência permitiu que construíssemos relacionamentos duradouros, muitos dos quais nos acompanham desde os primeiros dias da empresa.
            </p>

            <div className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary">
                    <CountUp end={stat.end} duration={2.75} suffix={stat.suffix} enableScrollSpy />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}