import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { Servicos } from './pages/Servicos.jsx'
import { Sobre } from './pages/Sobre.jsx';
import { Portfolio } from './pages/Portfolio.jsx'
import { Contato } from './pages/Contato.jsx' 
import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "servicos",
        element: <Servicos />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      { 
        path: "contato", 
        element: <Contato /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)