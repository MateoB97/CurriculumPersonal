import clsx from "clsx";
import { Button } from "@/src/ui/button";
import { Titulo } from "./typografia";
import { Texto } from "./typografia";
// import { useState } from 'react';
import { Modal } from "@/src/ui/dialogo";
import { useModal } from "@/src/services/useModal";
// import { useState } from "react";

import { Link, To } from "react-router-dom";

export function FormularioBoton({
  children,
  estiloInput,
  type,
}: {
  children: React.ReactNode;
  estiloInput?: string;
  type: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <Button
      className={clsx(
        "w-[fit-content] mb-[2vh] bg-purple-custom_1 border-1 border-solid rounded-lg cursor-pointer p-[1.5%] min-h-[5vh] max-h-[8vh] hover:bg-[#007BFF] text-white",
        estiloInput?.toString()
      )}
      type={type}
    >
      {children}
    </Button>
  );
}

export function AccionBoton() {
  return <button>Accion</button>;
}

export function PreviewImagen({ children }: { children: React.ReactNode }) {
  const { ref, onOpen, onClose } = useModal();
  // const [isHover, setHover] = useState(false);

  return (
    <div className="py-4 flex flex-col items-center ">
      <button className={clsx("w-[80%] hover:blur-sm")} onClick={onOpen}>
        {children}
      </button>
      <Modal ref={ref} onClose={onClose}>
        {children}
      </Modal>
    </div>
  );
}

// export function CarruselFlechas({
//   posiciones,
//   // calcPosiciones
// }: {
//   posiciones: any;
//   // calcPosiciones?: any;
// }) {
//   return (
//     <div className={clsx(
//       'relative top-[45%] left-3 z-10 w-[95vw]',
//       'flex flex-row justify-between items-center',
//     )}>
//       {[posiciones.previo, posiciones.siguiente].map((pos, index) => (
//         <a
//           key={index}
//           className={clsx(
//             "inline-flex w-[40px] h-[40px]",
//             "bg-white rounded-full no-underline items-center justify-center relative ml-2",
//             "focus:bg-gray-400",
//           )}
//           href={pos}

//         ></a>
//       ))}
//     </div>
//   );
// }

export function NavegacionBoton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: To;
}) {

  // let isActive = this.context.router.route.location.pathname === this.props.to;
  // let estilo = isActive ? 'active' : ''; focus:text-[#943794] active:text-[#943794] active:bg-[#FBE292] outline-2 outline-blue-500/50

  return (
    <Texto>
      <Titulo>
        <Link className={clsx(
          className,
          'w-full inline-block text-center cursor-pointer',
          "hover:text-[#3B55DF]",
          'text-h1_cv'
        )}
        to={href}
        >
          {children}
        </Link>
        <hr className="mb-4" />
      </Titulo>
    </Texto>
  );
}

export function EnlaceContacto({
  to,
  children,
  icon,
  className
}: {
  to: To;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {

  return (
    <Texto className={clsx(
      'hover:text-[#3B55DF] ',
      className
    )}>
      <Link className="flex flex-row justify-start" to={to} target="_blank">
        {children}
        {icon}
      </Link>
    </Texto>
  )
}