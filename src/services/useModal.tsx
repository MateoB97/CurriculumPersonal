'use client'
import { useRef, useState } from 'react';

type rePropsModal = {
    ref: React.RefObject<HTMLDialogElement>;
    onOpen: React.ReactEventHandler<{}>;
    onClose: React.ReactEventHandler<{}>;
}

export function useModal() : rePropsModal {
    const ref = useRef<HTMLDialogElement>(null);
    
    const onOpen : React.ReactEventHandler<{}> = () => ref.current!.showModal();
    const onClose : React.ReactEventHandler<{}> = () => {
        // ref.current!.className = `${ref.current!.className} close`;
        setTimeout(()=>{
            ref.current!.close();
            // ref.current!.className = `${ref.current!.className}`;
        }, 400);
    };

    return { ref, onOpen, onClose };

}
