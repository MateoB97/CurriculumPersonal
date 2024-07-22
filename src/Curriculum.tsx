import "./output.css";
// import styles from "@/src/ui/curriculum.module.css";

import { NavegacionBoton } from "@/src/ui/botones";
import { Contacto, ImagenCoorporativo, AsideNav, Contenido, Navegacion, Header, Idiomas } from "@/src/ui/bloques-contenido";
import { Outlet } from "react-router-dom";

export default function Curriculum() {
  return (
    <section
      className="laptop:max-ultrawide:mt-[3%] mt-[2%] mx-[2%] mb-[8%] flex flex-nowrap gap-x-[2%]"
    >
      <Header>
        hola
      </Header>

      <AsideNav>
        <ImagenCoorporativo />
        <Navegacion>
          <ul className="h-full flex flex-col justify-center"> 
            <li>
              <NavegacionBoton href='perfil'>
                Perfil profesional
              </NavegacionBoton>
            </li>
            
            <li>
              <NavegacionBoton href='habilidades'>
                Habilidades
              </NavegacionBoton>
            </li>

            <li>
              <NavegacionBoton href='logros'>
                Logros
              </NavegacionBoton>
            </li>

            <li>
              <NavegacionBoton href='experiencia'>
                Experiencia laboral
              </NavegacionBoton>
            </li>

            <li>
              <NavegacionBoton href='proyectos'>
                Proyectos
              </NavegacionBoton>
            </li>
          </ul>
        </Navegacion>
        <Contacto />
        <Idiomas />
      </AsideNav>

      <Contenido>
        <Outlet />
      </Contenido>

    </section>
  );
}
