import clsx from "clsx";
import { Button } from "@/src/ui/button";
import { Titulo } from "./typografia";
import { Texto } from "./typografia";
// import { useState } from 'react';
// import { Modal } from "@/src/ui/dialogo";
// import { useModal } from "@/src/services/useModal";
// import { ComponentSize } from "@/src/services/useUiCalculate";
import { useRef, useCallback, useEffect/* , useState */ } from 'react';
// import { useCalculateDimensions, ComponentSize } from "@/src/services/useUiCalculate";

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

// export function PreviewImagen({ children }: { children: React.ReactNode }) {
//   const { REF_MODAL, onOpen, onClose } = useModal();
//   // const [isHover, setHover] = useState(false);

//   return (
//     <div className="py-4 flex flex-col items-center aspect-square">
//       <button className={clsx("w-[60%] hover:blur-sm")} onClick={onOpen}>
//         {children}
//       </button>
//       <Modal ref={REF_MODAL} onClose={onClose} />
//     </div>
//   );
// }

export function CarruselFlechas({
  posiciones,
  parentElem
}: {
  posiciones?: {
    siguiente: string;
    anterior: string;
  };
  parentElem: () => HTMLDivElement;
}) {
  const REF_CHILD = useRef({} as HTMLDivElement);
  const getChildRef = useCallback(() => {
    const rect = REF_CHILD.current;
    return rect;
  }, [REF_CHILD]);
  // useCalculateDimensions(parentElem(), getChildRef(), actionReSize);

  useEffect(() => {
    if (parentElem()) {
      const REZISE_OBSERVER = new ResizeObserver((obsEvent) => {
        const PARENT_DIMENSIONS = {
          width: obsEvent[0].contentBoxSize[0].inlineSize,
          height: obsEvent[0].contentBoxSize[0].blockSize,
        };
        console.log(PARENT_DIMENSIONS);
        getChildRef().style.height = `${PARENT_DIMENSIONS.height}px`
        getChildRef().style.width = `${PARENT_DIMENSIONS.width}px`
      });
      REZISE_OBSERVER.observe(parentElem());
      return () => {
        REZISE_OBSERVER.disconnect();
      }
    }
  });
  // function actionReSize<A extends ResizeObserverEntry, R extends Element>(obsEvent: A, childRef: R): void {
  //   const PARENT_DIMENSIONS = {
  //     width: obsEvent.contentBoxSize[0].inlineSize,
  //     height: obsEvent.contentBoxSize[0].blockSize,
  //   };
  //   childRef.style = `height: ${PARENT_DIMENSIONS.height}; width: ${PARENT_DIMENSIONS.width}`
  // }

  const posObj = { ...posiciones }

  return (
    <div className={clsx(
      'absolute',
      'flex flex-row justify-between items-center'
    )}
      ref={REF_CHILD}
    >
      <a
        className={clsx(
          "inline-flex w-[40px] h-[40px]",
          "bg-white rounded-full no-underline items-center justify-center relative ml-2",
          "focus:bg-gray-400",
        )}
        href={posObj!.siguiente}

      ></a>
      <a
        className={clsx(
          "inline-flex w-[40px] h-[40px]",
          "bg-white rounded-full no-underline items-center justify-center relative ml-2",
          "focus:bg-gray-400",
        )}
        href={posObj!.siguiente}

      ></a>
    </div>
  );
}

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

export function InfoExpandida({
  title,
  children
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id="controles"
      className="rounded-lg bg-orange-custom_1 border-2 border-green-custom_1 border-solid h-[min-content]
      min-h-[min-content] mx-0 my-[0.6vh] sm:max-xl:mx-[1vw] sm:my-[1vh] xl:mx-0 sm:grow sm:shrink sm:max-xl:basis-[44vw] xl:basis-[30vw] 
      m-tareas__item m-tareas__filtro"
      data-name="controles -m">
      <details className="p-[1%] m-section -desplegable">
        <summary className="a-filtro__titulo">{title}</summary>
        <section className="c-gestionTareas__contenido py-[2rem] px-[1.5rem]">
          {children}
        </section>
      </details>
    </section>
  );
}