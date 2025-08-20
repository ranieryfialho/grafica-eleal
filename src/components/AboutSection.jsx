import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils/asset.js";

const chevronPatternStyle = {
  backgroundColor: 'hsl(var(--primary))',
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3e%3cpath fill='hsl(102, 25%, 35%)' d='M0 0h20v20H0zM20 20h20v20H20z'/%3e%3c/svg%3e")`,
  backgroundSize: '20px 20px',
};

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 textura-marca-dagua">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative flex justify-center items-center h-80 lg:h-96">
            <div className="absolute w-4/5 h-4/5 bg-foreground rounded-lg transform rotate-6 shadow-2xl"></div>
            <div 
              className="absolute w-4/5 h-4/5 rounded-lg shadow-2xl flex items-center justify-center"
              style={chevronPatternStyle}
            >
              <div className="bg-foreground rounded-full shadow-inner overflow-hidden">
                {/* --- INÍCIO DA ALTERAÇÃO --- */}
                <img 
                  src={asset('/logo.png')}
                  alt="Logomarca da Gráfica Eleal"
                  className="h-32 w-32 sm:h-40 sm:w-40 object-contain p-4"
                  // Este filtro CSS inverte a cor da imagem preta para branca
                  style={{ filter: 'brightness(0) invert(1)' }} 
                />
                {/* --- FIM DA ALTERAÇÃO --- */}
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Sobre</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2">Quem Somos</h3>
            <p className="mt-6 text-lg text-muted-foreground">
              A Eleal Gráfica estabeleceu uma reputação sólida como uma das principais provedoras de soluções visuais, com uma ampla gama de serviços que abrangem desde design gráfico até desenvolvimento de projetos e comunicação visual.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ao longo desses mais de 20 anos, nós estamos trabalhando incansavelmente para atender às necessidades e superar as expectativas daqueles que buscam nossos serviços.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/sobre">Conheça +</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}