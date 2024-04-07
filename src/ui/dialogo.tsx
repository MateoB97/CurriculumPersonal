'use client'
// import { useModal } from '@/src/services/useModal';
// import { PreviewImagen } from '@/src/ui/tareas/botones';
import clsx from 'clsx';
// import styles from '@/src/ui/curriculum.module.css';
import { forwardRef } from 'react';

type propsModal = {
    children: React.ReactNode;
    onClose: React.ReactEventHandler<{}>;
};

export const Modal = forwardRef(
    function Modal (props: propsModal,
    ref : React.ForwardedRef<HTMLDialogElement>) {
        const { children, onClose } = props;
        return (
            <dialog ref={ref} className={clsx(
                'absolute left-[20%] top-[15%] translate-x-[-12%] laptop:translate-x-[35%] translate-y-[-12%] laptop:translate-y-[-15%] max-w-[80%] laptop:max-w-[35vw]',

            )}>
                <button 
                onClick={onClose}
                className='relative left-[95%]'
                >&times;</button>
                {children}
            </dialog>
        );
    }
);