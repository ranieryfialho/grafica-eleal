import { asset } from "@/lib/utils/asset.js";

const clients = [
  { name: "Febracis", logo: "/clients/febracis.png" },
  { name: "Evidence", logo: "/clients/evidence.png" },
  { name: "Creche Tia Léa", logo: "/clients/tia-lea.png" },
  { name: "Perboyre Castelo", logo: "/clients/perboyre-castelo.png" },
  { name: "Biomátika", logo: "/clients/biomatika.png" },
  { name: "Colégio 7 de Setembro", logo: "/clients/c7s.png" },
  { name: "Avine", logo: "/clients/avine.png" },
  { name: "Comunidade Católica Shalom", logo: "/clients/shalom.png" },
  { name: "Instituto Hesed", logo: "/clients/hased.png" },
];

export function ClientsSection() {
  return (
    <section 
      id="clientes" 
      className="py-16 sm:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Clientes</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2">Nossos Clientes</h3>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Já atendemos diversas empresas nestes mais de 20 anos de mercado. Confira abaixo alguns de nossos parceiros para quem desenvolvemos Projetos de Alto Nível!
          </p>
        </div>

        <div className="relative w-full overflow-hidden marquee-container">
          <div className="flex w-max marquee-content">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-4 text-center mx-10 flex-shrink-0 w-48">
                <img 
                  src={asset(client.logo)}
                  alt={`Logo da ${client.name}`}
                  className="h-20 w-auto cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
                <p className="text-sm text-muted-foreground font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}