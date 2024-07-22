'use client'
import { useRef/* , useState */ } from 'react';

type rePropsModal = {
    REF_MODAL: React.RefObject<HTMLDialogElement>;
    onOpen: React.EventHandler<React.SyntheticEvent<unknown, Event>>;
    onClose: React.EventHandler<React.SyntheticEvent<unknown, Event>>;
}

export function useModal(): rePropsModal {
    const REF_MODAL = useRef<HTMLDialogElement>(null);

    const onOpen: rePropsModal['onOpen'] =
            (e) => {
                e.preventDefault();
                REF_MODAL.current!.showModal();
            }
    const onClose: rePropsModal['onClose'] =
            (e) => {
                e.preventDefault();
                setTimeout(() => {
                    REF_MODAL.current!.close();
                }, 400);
            };

    return { REF_MODAL, onOpen, onClose };

}
