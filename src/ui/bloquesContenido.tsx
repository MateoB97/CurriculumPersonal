import clsx from 'clsx';
import { useContext } from "react";
import { nivelTituloContexto } from "./typografia";

export function BloquesContenido({
    children,
    id
}:
{
    children: React.ReactNode,
    id: string
}) {
  return (
    <section id={id} className={clsx(
        'overscroll-y-contain snap-center',
        'px-4 py-4 max-w-[85vw] h-[90vh] relative flex flex-col shrink-0 grow-0 basis-[100%]',
        'bg-slate-50/50 backdrop-blur border-white border-4 rounded-3xl',
        'max-h-fit max-w-[355px] min-w-[340px] tablet:sticky tablet:top-5 tablet:max-ultrawide:mt-0 laptop:max-w-[50vw]',
        'contTrajeta'
    )}>
        {children}
    </section>
  );
}

export function BloquesTexto({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}){
    const level = useContext(nivelTituloContexto);
    return (
      <section className={className}>
        <nivelTituloContexto.Provider value={level + 1}>
          {children}
        </nivelTituloContexto.Provider>
      </section>
    );
}