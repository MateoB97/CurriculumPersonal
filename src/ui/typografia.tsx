import { createContext, useContext } from "react";

export const nivelTituloContexto = createContext(0);
export function Titulo({
  children,
}: {
  children: React.ReactNode;
}) {
  const nivel = useContext(nivelTituloContexto);
  switch (nivel) {
    case 1:
      return <h1 className='text-h1_cv mb-2'>{children}</h1>;
    case 2:
      return <h2 className='text-h2_cv leading-loose'>{children}</h2>;
    case 3:
      return <h3 className="text-h3_cv font-bold">{children}</h3>;
    case 4:
      return <h3 className="text-h4_cv italic underline">{children}</h3>;
    default:
      throw Error('Unknown level: ' + nivel);
  }
}

export function TextoDisplay({}){
  
}