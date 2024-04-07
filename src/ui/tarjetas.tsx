export function Tarjeta ({
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