import { ServicesSection } from "@/components/ServicesSection";
import { ContactForm } from "@/components/ContactForm";

export function Servicos() {
  return (
    <>
      <ServicesSection />

      <section id="formulario-contato" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Peça o Seu Orçamento</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Gostou do que viu? Preencha o formulário abaixo e a nossa equipa entrará em contato para transformar a sua ideia em realidade.
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