import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Bienvenida, PerfilProfesional, Logros, ExperienciaLaboral, ProyectosPersonales, Habilidades } from './ui/bloques-contenido.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Bienvenida />,
      },
      {
        path: "/perfil",
        element: <PerfilProfesional />,
      },
      {
        path: "/habilidades",
        element: <Habilidades />,
      },
      {
        path: "/experiencia",
        element: <ExperienciaLaboral />,
      },
      {
        path: "/proyectos",
        element: <ProyectosPersonales />,
      },
      {
        path: "/logros",
        element: <Logros />,
      },
    ],
  },
], 
{
  basename: "/CurriculumPersonal"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
