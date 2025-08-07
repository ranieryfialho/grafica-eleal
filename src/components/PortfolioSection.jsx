import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils/asset.js";

const projects = [
    {
        image: "/portfolio/projeto-1.jpg",
        title: "Fachada para Loja",
        description: "Desenvolvimento de fachada em ACM com letras caixa iluminadas.",
        alt: "Fachada de loja moderna",
    },
    {
        image: "/portfolio/projeto-2.jpg",
        title: "Sinalização Interna",
        description: "Criação de toda a sinalização para o interior de um escritório.",
        alt: "Sinalização de escritório",
    },
    {
        image: "/portfolio/projeto-3.jpg",
        title: "Envelopamento de Frota",
        description: "Aplicação de adesivo vinílico em veículos da frota da empresa.",
        alt: "Carro de empresa envelopado",
    },
    {
        image: "/portfolio/projeto-4.jpg",
        title: "Decoração de Stand",
        description: "Impressão em lona e adesivos para stand em feira de negócios.",
        alt: "Stand de feira decorado",
    },
    {
        image: "/portfolio/projeto-5.jpg",
        title: "Letreiro em Acrílico",
        description: "Letreiro para recepção com corte a laser em acrílico espelhado.",
        alt: "Letreiro de acrílico em parede",
    },
    {
        image: "/portfolio/projeto-6.jpg",
        title: "Painel de Boas-Vindas",
        description: "Impressão de painel em grande formato para evento corporativo.",
        alt: "Painel de evento",
    },
    {
        image: "/portfolio/projeto-7.jpg",
        title: "Projeto Especial 7",
        description: "Descrição breve do sétimo projeto.",
        alt: "Descrição do Projeto 7",
    },
    {
        image: "/portfolio/projeto-8.jpg",
        title: "Projeto Especial 8",
        description: "Descrição breve do oitavo projeto.",
        alt: "Descrição do Projeto 8",
    },
    {
        image: "/portfolio/projeto-9.jpg",
        title: "Projeto Especial 9",
        description: "Descrição breve do nono projeto.",
        alt: "Descrição do Projeto 9",
    },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Portfólio</h2>
                    <h3 className="text-4xl sm:text-5xl font-extrabold text-background mt-2">Nossos Últimos Projetos</h3>
                    <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                        Confira na galeria abaixo nossos últimos projetos desenvolvidos e entregues!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img
                                src={asset(project.image)}
                                alt={project.alt}
                                loading="lazy"
                                className="w-full h-full object-cover will-change-transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 
                             bg-gradient-to-t from-black/80 to-transparent 
                             opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                                <h3 className="text-lg font-bold text-white transform translate-y-4 transition-all duration-500 group-hover:translate-y-0">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/90 transform translate-y-4 transition-all duration-500 delay-100 group-hover:translate-y-0">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button asChild variant="outline" size="lg" className="bg-background/90 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href="#contato">Peça o seu Orçamento</a>
                    </Button>
                </div>
                
            </div>
        </section>
    );
}