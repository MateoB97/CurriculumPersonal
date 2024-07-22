'use client'
// import { useModal } from '@/src/services/useModal';
// import { PreviewImagen } from '@/src/ui/tareas/botones';
import clsx from 'clsx';
// import styles from '@/src/ui/curriculum.module.css';
import { forwardRef/* , useRef */ } from 'react';
import { Logro } from './tarjetas';
type PropsModal = {
    onClose: React.ReactEventHandler<NonNullable<object | unknown>>;
    infoElement: Logro;
};

export const Modal = forwardRef(
    function Modal( 
        props: PropsModal,
        ref: React.ForwardedRef<HTMLDialogElement>
    ) {
        const { onClose } = props;
        const LOGRO = props.infoElement;
        return (
            <dialog id={LOGRO.id ?? '0'} ref={ref} className={clsx(
                'absolute p-3 left-[20%] top-[15%] translate-x-[-12%] laptop:translate-x-[35%] translate-y-[-12%] laptop:translate-y-[-15%] max-w-[80%] laptop:max-w-[35vw]',
            )}
            role='dialog'          
            >
                <button
                    onClick={onClose}
                    className='relative left-[95%]'
                >&times;</button>
                <figure>
                    <img
                        alt={LOGRO.imageAlt ?? ''}
                        src={LOGRO.imageSrc ?? ''}
                    />
                </figure>
                <section>
                    <p>
                        Fecha graduación: {LOGRO.data_info?.graduacion ?? ''}
                    </p>
                    <p>Verifique en esta dirección: {LOGRO.data_info?.verificacion ?? ''}</p>
                </section>
            </dialog>
        );
    }
);