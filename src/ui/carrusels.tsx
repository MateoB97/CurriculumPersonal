import clsx from "clsx";
import { CarruselFlechas } from "./botones";
// import { useState } from "react";

export function CarruselsFlechas({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  const posObj = {
    previo: "#slide-1",
    // actual: 1,
    siguiente: "#slide-2",
  };
  
  //   const [posiciones, setPosiciones] = useState(posObj);
  // const calcularPosiciones = (e: React.MouseEvent<HTMLElement>, pos: number) => {
  //     let posActual = posiciones.actual;
  //     if (posActual < pos && pos !>= 3) {
  //         posActual++;
  //     } else if (posActual > pos && pos !== 0) {
  //         posActual--;
  //     }
  //     setPosiciones({
  //         previo: posActual--,
  //         actual: posActual,
  //         siguiente: posActual++
  //     });
  // };
  //posiciones={posiciones}
  // onClick={calcPosiciones(pos)}
  // calcPosiciones={calcularPosiciones}

  return (
    <div
      className={clsx(
        "overflow-x-scroll overscroll-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth",
        "flex align-center",
        "gap-x-28"
      )}
      id={id}
    >
      {children}

      <CarruselFlechas posiciones={posObj} ></CarruselFlechas>
    </div>
  );
}
