'use client'

import { Ref } from "react";

export function MiniaturaImagen({
    // srcImg,
    children,
    // onClose
} :
{
    // srcImg?: string;
    children: React.ReactNode;
    // onClose: React.EventHandler<Event>;
},
ref : Ref<String>) {
    return (
        <button className='hover:w-[300px] '>
            {children}
        </button>
    );
}