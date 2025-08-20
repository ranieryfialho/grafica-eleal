import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contato() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">Fale Conosco</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Estamos prontos para ouvir sobre o seu projeto. Preencha o formulário ou utilize um dos nossos canais de contato abaixo.
              </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <div className="space-y-8 flex flex-col">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold">Nosso Endereço</h4>
                    <p className="text-muted-foreground">Rua Senador Alencar, 1689 - Centro, Fortaleza - CE, 60030-051</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold">Nosso Telefone</h4>
                    <p className="text-muted-foreground">(85) 3238-0150</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold">Nosso E-mail</h4>
                    <p className="text-muted-foreground">comercial3@graficaeleal.com.br</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border mt-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332308789133!2d-38.5308581857351!3d-3.725838544550114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7491f241a7731%3A0x6b442d54e4f9b884!2sR.%20Sen.%20Alencar%2C%201689%20-%20Centro%2C%20Fortaleza%20-%20CE%2C%2060030-051!5e0!3m2!1spt-BR!2sbr!4v1678886456789!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Gráfica Eleal"
                ></iframe>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}