'use client'

type SrcImagen = {
    media: string;
    srcset: string;
    sizes: string;
}

export function OpcionalesImg ({
    children,
    resources
} : 
{
    children: React.ReactNode;
    resources: Array<SrcImagen>;
}) {
    return(
        <picture>
            {resources.map((src) => {
                return (
                    <source 
                        media={src.media}
                        srcSet={src.srcset}
                        sizes={src.sizes}
                    />
                );
            })}
            {children}
        </picture>
    );
}