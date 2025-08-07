import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const estadosAtendidos = [
  { sigla: 'AC', nome: 'Acre', pos: { lat: -9.0238, lng: -70.812 } },
  { sigla: 'AL', nome: 'Alagoas', pos: { lat: -9.71, lng: -36.78 } },
  { sigla: 'AM', nome: 'Amazonas', pos: { lat: -3.4168, lng: -65.8561 } },
  { sigla: 'BA', nome: 'Bahia', pos: { lat: -12.9714, lng: -38.5014 } },
  { sigla: 'CE', nome: 'Ceará', pos: { lat: -3.7172, lng: -38.5431 } },
  { sigla: 'DF', nome: 'Distrito Federal', pos: { lat: -15.7801, lng: -47.9292 } },
  { sigla: 'ES', nome: 'Espírito Santo', pos: { lat: -19.19, lng: -40.34 } },
  { sigla: 'GO', nome: 'Goiás', pos: { lat: -16.6869, lng: -49.2648 } },
  { sigla: 'MA', nome: 'Maranhão', pos: { lat: -2.5387, lng: -44.2825 } },
  { sigla: 'MG', nome: 'Minas Gerais', pos: { lat: -18.5122, lng: -44.5550 } },
  { sigla: 'MS', nome: 'Mato Grosso do Sul', pos: { lat: -20.4486, lng: -54.6295 } },
  { sigla: 'MT', nome: 'Mato Grosso', pos: { lat: -12.6819, lng: -56.9219 } },
  { sigla: 'PA', nome: 'Pará', pos: { lat: -1.4558, lng: -48.5044 } },
  { sigla: 'PB', nome: 'Paraíba', pos: { lat: -7.1195, lng: -34.8450 } },
  { sigla: 'PE', nome: 'Pernambuco', pos: { lat: -8.0476, lng: -34.8770 } },
  { sigla: 'PI', nome: 'Piauí', pos: { lat: -5.0920, lng: -42.8034 } },
  { sigla: 'PR', nome: 'Paraná', pos: { lat: -25.2521, lng: -52.0215 } },
  { sigla: 'RJ', nome: 'Rio de Janeiro', pos: { lat: -22.9068, lng: -43.1729 } },
  { sigla: 'RN', nome: 'Rio Grande do Norte', pos: { lat: -5.7945, lng: -35.2110 } },
  { sigla: 'RO', nome: 'Rondônia', pos: { lat: -11.5057, lng: -63.5815 } },
  { sigla: 'RS', nome: 'Rio Grande do Sul', pos: { lat: -30.0346, lng: -51.2177 } },
  { sigla: 'SC', nome: 'Santa Catarina', pos: { lat: -27.5954, lng: -48.5480 } },
  { sigla: 'SE', nome: 'Sergipe', pos: { lat: -10.9472, lng: -37.0731 } },
  { sigla: 'SP', nome: 'São Paulo', pos: { lat: -23.5505, lng: -46.6333 } },
  { sigla: 'TO', nome: 'Tocantins', pos: { lat: -10.1844, lng: -48.3336 } }
];

const mapStyles = [
    // Mantive os estilos do mapa originais, pois o contraste com o fundo verde fica bom.
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
    { featureType: "administrative.locality", stylers: [{ "stylers": [ { "visibility": "off" } ] } ] },
    { featureType: "administrative.neighborhood", stylers: [{ "stylers": [ { "visibility": "off" } ] } ] },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "road", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "water", stylers: [{ color: "#c9c9c9" }] }
];

export function CoverageMapSection() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_Maps_API_KEY,
    language: 'pt-BR'
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
  };

  return (
    // --- MUDANÇAS APLICADAS AQUI ---
    <section id="cobertura" className="py-16 sm:py-20 lg:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Cobertura Nacional</h2>
          {/* Cor do título principal alterada para 'text-background' (branco) */}
          <h3 className="text-4xl sm:text-5xl font-extrabold text-background mt-2">Atendemos Todo o Brasil</h3>
          {/* Cor do parágrafo alterada para um branco com transparência */}
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            Com orgulho, atendemos clientes em todo país!
          </p>
        </div>

        <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-lg border">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: -14.2350, lng: -51.9253 }}
              zoom={4}
              options={{ 
                styles: mapStyles, 
                streetViewControl: false, 
                mapTypeControl: false, 
                fullscreenControl: false 
              }}
            >
              {estadosAtendidos.map((estado) => (
                <Marker
                  key={estado.sigla}
                  position={estado.pos}
                  onClick={() => handleMarkerClick(estado)}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: "hsl(102 25% 40%)",
                    fillOpacity: 0.9,
                    strokeWeight: 1,
                    strokeColor: "#ffffff"
                  }}
                />
              ))}

              {activeMarker && (
                <InfoWindow
                  position={activeMarker.pos}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div className="p-1">
                    {/* O texto aqui dentro já usa a cor 'text-foreground', então ficará escuro no pop-up branco */}
                    <h4 className="font-bold text-foreground">{activeMarker.nome}</h4>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          ) : (
            <div className="flex items-center justify-center h-full bg-muted">Carregando mapa...</div>
          )}
        </div>
      </div>
    </section>
  );
}