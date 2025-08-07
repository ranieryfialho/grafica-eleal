import { asset } from "@/lib/utils/asset.js";

const clients = [
  { name: "Cliente-1", logo: "/clients/febracis.png" },
  { name: "Cliente-2", logo: "/clients/evidence.png" },
  { name: "Cliente-3", logo: "/clients/louis-vuitton.svg" },
  { name: "Cliente-4", logo: "/clients/prada.svg" },
  { name: "Cliente-5", logo: "/clients/samsung.svg" },
  { name: "Cliente-6", logo: "/clients/renault.svg" },
  { name: "Cliente-7", logo: "/clients/coco-bambu.svg" },
  { name: "Cliente-8", logo: "/clients/mac.svg" },
  { name: "Cliente-9", logo: "/clients/placeholder.svg" },
];

const letterPatternStyle = {
  backgroundColor: 'hsl(var(--foreground))',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ctext x='-50' y='100' font-size='120' font-family='Arial, sans-serif' font-weight='bold' fill='hsl(102, 25%, 40%)' fill-opacity='0.04' transform='rotate(-30, 50, 100)'%3EELEAL%3C/text%3E%3Ctext x='150' y='320' font-size='140' font-family='Arial, sans-serif' font-weight='bold' fill='hsl(102, 25%, 40%)' fill-opacity='0.04' transform='rotate(10, 200, 300)'%3EELEAL%3C/text%3E%3C/svg%3E")`,
};

export function ClientsSection() {
  return (
    <section 
      id="clientes" 
      className="py-16 sm:py-20 lg:py-24 text-background"
      style={letterPatternStyle}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Clientes</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-background mt-2">Nossos Clientes</h3>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Já atendemos diversas empresas nestes mais de 20 anos de mercado. Confira abaixo alguns de nossos parceiros para quem desenvolvemos Projetos de Alto Nível!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center items-center">
              <img 
                src={asset(client.logo)}
                alt={`Logo da ${client.name}`}
                className="h-20 md:h-24 w-auto opacity-70 transition-opacity duration-300 hover:opacity-100 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}