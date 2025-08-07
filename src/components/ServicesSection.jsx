import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Package, BookOpen } from "lucide-react"; 

const services = [
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Promocional",
    description: "Materiais que destacam a sua marca e mensagem em qualquer evento ou campanha.",
  },
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: "Embalagem",
    description: "Soluções criativas e de alta qualidade para embalagens que protegem e encantam.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "Editorial",
    description: "Impressão de livros, revistas e catálogos com acabamento impecável e profissional.",
  },
];

export function ServicesSection({ mostrarIconeFlutuante = true }) {
  return (
    <section id="servicos" className="relative py-16 sm:py-20 lg:py-24 textura-verde">
      {mostrarIconeFlutuante && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card p-4 rounded-full shadow-lg border">
            <FileText className="h-8 w-8 text-foreground" />
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">A GENTE FAZ</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2">Soluções em Marketing Impresso</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde 1994, nossa marca, agora renovada, segue entregando serviços e produtos com excelência e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="text-center group overflow-hidden bg-card hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-sm hover:shadow-xl">
              <div className="p-6 flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
              <div className="w-1/3 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
            <Button asChild size="lg">
                <a href="#contato">Entre em Contato</a>
            </Button>
        </div>
      </div>
    </section>
  );
}