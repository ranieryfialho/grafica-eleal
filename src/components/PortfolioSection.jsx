import { Link } from "react-router-dom"; // 1. Adicione a importação do Link
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils/asset.js";

const projects = [
    {
        image: "/portfolio/projeto-1.jpg",
        title: "Coleção Interagir e Brincar – Educação Infantil",
        description: "Conjunto de livros didáticos e interativos para crianças de 3 anos, com foco em atividades educativas, produções próprias e diário interativo.",
        alt: "Livros da coleção Interagir e Brincar para crianças de 3 anos, incluindo Minhas Produções e Meu Diário Interativo",
    },
    {
        image: "/portfolio/projeto-2.jpg",
        title: "Caixa Coletânea Exclusiva – Edição Luxo",
        description: "Caixa preta de design sofisticado para coleção exclusiva, com acabamento premium e assinatura dourada de Paulo Vieir",
        alt: "Caixa preta de luxo com a inscrição Coletânea Exclusiva Paulo Vieira",
    },
    {
        image: "/portfolio/projeto-3.jpg",
        title: "Embalagem Reconstrução Capilar",
        description: "Caixa rosa para linha de reconstrução capilar, desenvolvida para cabelos enfraquecidos e quebradiços.",
        alt: "Embalagem rosa da linha Reconstrução para cabelos danificados.",
    },
    {
        image: "/portfolio/projeto-4.jpg",
        title: "Embalagem de Hidratante Facial Moringa Brasil",
        description: "Duas embalagens de hidratante facial Moringa Brasil com toque seco, proteção solar e fórmulas naturais.",
        alt: "Duas caixas de hidratante facial Moringa Brasil em versão verde e dourada.",
    },
    {
        image: "/portfolio/projeto-5.jpg",
        title: "Sacola Personalizada Le Bronze",
        description: "Sacola de papel verde com alças em corda e logo dourado Le Bronze – Bronzemento.",
        alt: "Sacola verde personalizada Le Bronze com alças em corda dourada.",
    },
    {
        image: "/portfolio/projeto-6.jpg",
        title: "Livro de Orações – Nossa Senhora",
        description: "Livro religioso ilustrado com a imagem de Nossa Senhora, capa azul com detalhes dourados.",
        alt: "Capa de livro religioso azul com imagem de Nossa Senhora e detalhes dourados.",
    },
    {
        image: "/portfolio/projeto-7.jpg",
        title: "Livro O Coaching Executivo – João Saraiva",
        description: "Livro sobre coaching executivo no processo de desenvolvimento organizacional, escrito por João Saraiva, PhD.",
        alt: "Livro O Coaching Executivo de João Saraiva aberto com capa em destaque.",
    },
    {
        image: "/portfolio/projeto-8.jpg",
        title: "Planner 2023 – Content Planner",
        description: "Planner de capa dura laranja com wire-o dourado, desenvolvido para planejamento de conteúdos.",
        alt: "Planner 2023 Content Planner de capa laranja com wire-o dourado.",
    },
    {
        image: "/portfolio/projeto-9.jpg",
        title: "Revista de Negócios – Artigo em Destaque",
        description: "Revista aberta mostrando reportagem sobre clube de negócios, com imagens e textos em destaque.",
        alt: "Revista aberta exibindo artigo sobre um clube de negócios e reunião de empreendedores.",
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

                {/* --- ALTERAÇÃO AQUI --- */}
                <div className="text-center mt-16">
                    <Button asChild variant="outline" size="lg" className="bg-background/90 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Link to="/contato">Peça o seu Orçamento</Link>
                    </Button>
                </div>
                
            </div>
        </section>
    );
}