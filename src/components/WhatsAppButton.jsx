import React from 'react';

// Componente para o ícone do WhatsApp (SVG)
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.885-.001 2.225.651 4.315 1.731 6.096l-.537 1.959 1.996-.52z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const phoneNumber = "558588942258";
  const message = "Olá! Gostaria de fazer um orçamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-6 z-50 flex items-center group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Mensagem que aparece no hover */}
      <div className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-l-lg shadow-lg
                    transform transition-all duration-300 ease-in-out
                    -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0
                    whitespace-nowrap"
      >
        Solicite um Orçamento
      </div>

      {/* Botão do WhatsApp */}
      <div
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg 
                   transition-transform duration-300 ease-in-out
                   group-hover:scale-110"
      >
        <WhatsAppIcon />
      </div>
    </a>
  );
}