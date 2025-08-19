import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  // Extrai o "pathname" (ex: "/sobre", "/contato") da localização atual
  const { pathname } = useLocation();

  // O useEffect será executado toda vez que o "pathname" mudar
  useEffect(() => {
    // A função window.scrollTo(0, 0) rola a página para o topo (posição x:0, y:0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente não renderiza nada na tela
  return null;
}