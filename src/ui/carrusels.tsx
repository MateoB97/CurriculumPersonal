import clsx from "clsx";
import { CarruselFlechas } from "./botones";
import { useRef, /* useState, */ useCallback } from "react";

// import { useCalculateDimensions, ComponentSize } from "@/src/services/useUiCalculate";

export function Carrusel({
    children,
    id,
}: {
    children: React.ReactNode;
    id?: string;
}) {
    // const [STATE_SIZE, setStateSize] = useState({} as ComponentSize);
    const REF_CARRUSEL = useRef<HTMLDivElement>({} as HTMLDivElement);

    const getParentRef = useCallback(() => {
        const rect = REF_CARRUSEL.current;
        return rect;
      }, [REF_CARRUSEL]);

    // 2. Calcular cantidad de items que se mostraran
    // 3. Calcular pocision del item
    // 4. 

    // const posObj = {
    //     previo: "#slide-1",
    //     // actual: 1,
    //     siguiente: "#slide-2",
    // };

    // const [posiciones, setPosiciones] = useState(posObj);
    // const calcularPosiciones = (e: React.MouseEvent<HTMLElement>, pos: number) => {
    //     let posActual = posiciones.actual;
    //     if (posActual < pos && pos! >= 3) {
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
    // posiciones = { posiciones }
    // onClick = { calcPosiciones(pos) }
    // calcPosiciones = { calcularPosiciones }

    return (
        <div
            className={clsx(
                "overflow-x-scroll overscroll-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth",
                "flex align-center relative h-full w-full grow",
                "gap-x-28"
            )}
            id={id}
            ref={REF_CARRUSEL}
        >
            {children}

            <CarruselFlechas parentElem={getParentRef} ></CarruselFlechas>
        </div>
    );
}
