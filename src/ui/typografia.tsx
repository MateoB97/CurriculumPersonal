import { createContext, useContext } from "react";
import clsx from "clsx";

export const nivelTituloContexto = createContext(0);

export function Titulo({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const nivel = useContext(nivelTituloContexto);
  switch (nivel) {
    case 1:
      return <h1 className={clsx(
        'text-h1_cv mb-2 font-serif',
        className
      )}>{children}</h1>;
    case 2:
      return <h2 className={clsx(
        'text-h2_cv leading-loose font-serif',
        className
      )}>{children}</h2>;
    case 3:
      return <h3 className={clsx(
        "text-h3_cv font-bold font-serif",
        className
      )}>{children}</h3>;
    case 4:
      return <h3 className={clsx(
        "text-h4_cv italic underline font-serif",
        className
      )}>{children}</h3>;
    default:
      throw Error('Unknown level: ' + nivel);
  }
}

export function Texto({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const level = useContext(nivelTituloContexto);
  return (
    <section className={clsx(
      className,
      '',
    )}>
      <nivelTituloContexto.Provider value={level + 1}>
        {children}
      </nivelTituloContexto.Provider>
    </section>
  );
}

// export function TextoDisplay({}){
  
// }