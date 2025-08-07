import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Goal, Eye, Gem } from "lucide-react";
import { asset } from "@/lib/utils/asset.js";

export function AboutPageContent() {
  const videoId = "sTgDLFfkxVQ"; 

  return (
    <div className="bg-background">
      {/* Seção 1: Introdução */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">Quem Somos</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Há mais de 20 anos, a Gráfica Eleal transforma ideias em impressões de qualidade. Somos uma empresa que acredita no poder da boa comunicação, da criatividade e do cuidado em cada detalhe.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nosso compromisso é ir além da impressão. A gente ajuda a contar histórias, fortalecer marcas e dar forma a projetos com significado. Nosso papel é deixar a melhor impressão.
              </p>
            </div>
            <div className="w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <img 
                src={asset("/imagem-escolha.jpg")} 
                alt="Ambiente da Gráfica Eleal"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Missão, Visão, Valores */}
      <section className="py-16 sm:py-20 lg:py-24 textura-marca-dagua">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardHeader className="p-0 mb-4 flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Goal className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Deixar sempre a melhor impressão, oferecendo produtos e serviços gráficos com qualidade, excelência e compromisso.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="p-0 mb-4 flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Ser referência em soluções editoriais e embalagens em todo Brasil, unindo inovação, agilidade e proximidade com nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="p-0 mb-4 flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Gem className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Honestidade • Ética • Pontualidade • Foco em resultado • Produtividade • Consciência Ambiental • Valorização Humana
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* ======================================================== */}
      {/* Seção 3: Nossa História - ATUALIZADA COM VÍDEO */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Nossa História</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Coluna da Esquerda: Vídeo do YouTube */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="Vídeo da história da Gráfica Eleal"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Coluna da Direita: Texto */}
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg max-w-none text-muted-foreground">
                        <p>
                            Há 20 anos, a Gráfica e Editora Eleal nasceu com um propósito claro: oferecer soluções gráficas de qualidade superior, que superassem não apenas as exigências técnicas, mas também as expectativas de cada cliente.
                        </p>
                        <p>
                            Seja um simples panfleto ou um projeto editorial completo, nossa equipe sempre trabalhou com o mesmo nível de comprometimento e eficiência.
                        </p>
                        <p>
                            Ao longo dessas duas décadas, investimos continuamente em tecnologia, inovação e capacitação. Nosso foco permanece o mesmo: entregar resultados com qualidade, agilidade e cuidado em cada detalhe, garantindo a satisfação dos nossos clientes e o reconhecimento do mercado gráfico.
                        </p>
                    </article>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}