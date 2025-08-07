import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactForm } from "@/components/ContactForm";

export function Portfolio() {
  return (
    <>
      <PortfolioSection />
      <section id="formulario-contato" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Gostou do que Viu?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vamos transformar a sua ideia em realidade. Peça o seu orçamento!
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}