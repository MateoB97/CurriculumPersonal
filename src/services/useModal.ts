'use client'
import { useRef/* , useState */ } from 'react';

type rePropsModal = {
    REF_MODAL: React.RefObject<HTMLDialogElement>;
    onOpen: React.EventHandler<{}>;
    onClose: React.EventHandler<{}>;
}

export function useModal(): rePropsModal {
    const REF_MODAL = useRef<HTMLDialogElement>(null);

    const onOpen: rePropsModal['onOpen'] =
            (e) => {
                REF_MODAL.current!.showModal();
            }
    const onClose: rePropsModal['onClose'] =
            (e) => {
                setTimeout(() => {
                    REF_MODAL.current!.close();
                }, 400);
            };

    return { REF_MODAL, onOpen, onClose };

}
