export function TituloPrimario({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <h1 className='text-h1_cv mb-2'>{children}</h1>
    );
}

export function TituloSecundario({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <h2 className='text-h2_cv leading-loose'>{children}</h2>
    );
}

export function TituloTerciario({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <h3 className="text-h3_cv font-bold">{children}</h3>
    );
  }
export function Titulo4({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <h3 className="text-h4_cv italic underline">{children}</h3>
    );
  }