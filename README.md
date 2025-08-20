# Site da Gráfica Eleal - React com WordPress

Este projeto é o front-end moderno e responsivo para o site da Gráfica Eleal, desenvolvido como uma Single Page Application (SPA) utilizando React e Vite. A aplicação é integrada a um back-end WordPress através de um plugin customizado, que renderiza o site via shortcode e gerencia o envio do formulário de contato.

## ✨ Funcionalidades

* **Single Page Application (SPA):** Navegação fluida e instantânea entre as páginas sem a necessidade de recarregar o navegador, utilizando React Router.
* **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e dispositivos móveis, construída com Tailwind CSS.
* **Integração "Headless" com WordPress:** O React age como o "rosto" do site, enquanto o WordPress funciona como um painel para gerenciar o envio de formulários e servir a aplicação.
* **Componentes Reutilizáveis:** Estrutura organizada com componentes para seções (Header, Footer, Serviços, etc.) e elementos de UI (Botões, Cards), facilitando a manutenção.
* **Formulário de Contato Funcional:** Envio de e-mails através de um endpoint seguro da API REST do WordPress, com validação de dados e feedback para o usuário.
* **Mapa de Cobertura Interativo:** Seção com Google Maps para visualizar a cobertura nacional da empresa.

## 🚀 Tecnologias Utilizadas

### Front-end (Este Repositório)

* **Framework:** React 19
* **Build Tool:** Vite
* **Roteamento:** React Router DOM
* **Estilização:** Tailwind CSS
* **Componentes de UI:** shadcn/ui
* **Ícones:** Lucide React
* **Validação de Formulários:** React Hook Form & Zod
* **Notificações:** Sonner

### Back-end

* **CMS:** WordPress
* **Integração:** Plugin PHP customizado para enfileirar scripts e registrar um endpoint na API REST.
