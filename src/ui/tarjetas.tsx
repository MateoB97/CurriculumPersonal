import {
    // Titulo,
    Texto
} from "@/src/ui/typografia";
import ActaAI from "../assets/curriculum/actaAI900.png";
import ActaProg from "../assets/curriculum/actaProgramacion.png";
import ActaMusica from "../assets/curriculum/actaMusica.jpeg";
import ActaMPersonal from "../assets/curriculum/actaMarcaPersonal.png";
import ActaDP from "../assets/curriculum/actaDP900.png";
import ActaRedes from "../assets/curriculum/actaRedes.png";
import { Modal } from "@/src/ui/dialogo";
import { useModal } from "@/src/services/useModal";
import { useState } from 'react';
export function TarjetaSimple({
    title,
    children
}: {
    title: string;
    children?: React.ReactNode;
}) {
    return (
        <Texto
            className='min-w-[5%] max-w-[12%] min-h-[70%] max-h-[90%] p-2 border-2 border-green-custom_1 border-solid rounded-lg bg-orange-custom_1 aspect-[9/16]'
        >
            <Texto>
                <p className="text-md font-bold">{title}</p>
                <hr className="mb-4" />
            </Texto>
            <Texto>
                {children}
            </Texto>
        </Texto>
    );
}
export type Logro = {
    id: string;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    data_info: {
        graduacion: string;
        verificacion: string;
    };
    section: string;
};
export function ListaLogros({ sectionName }: { sectionName: string }) {
    const TYPE_LOGRO = {} as Logro;
    const { REF_MODAL, onOpen, onClose } = useModal();
    const LOGROS = [
        {
            id: '1',
            name: 'Azure_AI900',
            href: '#',
            imageSrc: `${ActaAI}`,
            imageAlt: "Diploma inteligencia artificial",
            data_info: {
                graduacion: '31/12/2021',
                verificacion: ''
            },
            section: 'cursos',
        },
        {
            id: '2',
            name: 'Técnico programación de software',
            href: '#',
            imageSrc: `${ActaProg}`,
            imageAlt: "Diploma técnica en programación de software.",
            data_info: {
                graduacion: '12/02/2022',
                verificacion: ''
            },
            section: 'tecnologico',
        },
        {
            id: '3',
            name: 'Tecnólogo gestión y ejecución musical',
            href: '#',
            imageSrc: `${ActaMusica}`,
            imageAlt: "Diploma tecnología en gestión y ejecución musical.",
            data_info: {
                graduacion: '',
                verificacion: ''
            },
            section: 'tecnologico',
        },
        {
            id: '4',
            name: 'MARCA_PERSONAL',
            href: '#',
            imageSrc: `${ActaMPersonal}`,
            imageAlt: "Diploma gestion de marca personal",
            data_info: {
                graduacion: '26/11/2018',
                verificacion: 'Código:6f53a5f4-d99f-4054-b5e2-f96516969951'
            },
            section: 'cursos',
        },
        {
            id: '5',
            name: 'AZURE_DP900',
            href: '#',
            imageSrc: `${ActaDP}`,
            imageAlt: "Diploma Data Fundamentals Azure.",
            data_info: {
                graduacion: '31/12/2021',
                verificacion: ''
            },
            section: 'cursos',
        },
        {
            id: '6',
            name: 'Seguridad y planeación en redes',
            href: '#',
            imageSrc: `${ActaRedes}`,
            imageAlt: "Diploma redes y seguridad",
            data_info: {
                graduacion: '11/11/2022',
                verificacion: 'http://certificados.sena.edu.co 9402002659825CC1020482382C'
            },
            section: 'cursos',
        },
    ];
    const [INFO_ELEMENT_STATE, setInfoElement] = useState(TYPE_LOGRO);
    return (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-4 desktop:grid-cols-6 ultrawide:gap-x-8">
                {LOGROS.map((logro) => {
                    if (logro.section === sectionName) {
                        return (
                            <div key={logro.id} className="group relative flex flex-col justify-center" >
                                <button onClick={(eve) => {setInfoElement(logro); onOpen(eve)}} className="hover:blur-sm h-[60%] w-[45%] mx-auto">
                                    <figure className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            alt={logro.imageAlt}
                                            src={logro.imageSrc}
                                            className=" object-cover object-center desktop:h-full desktop:w-full"
                                        />
                                    </figure>
                                </button>
                                <div className="mt-4">
                                    <div>
                                        <h3 className="text-sm text-gray-700 mx-auto">
                                            <button className="w-full" onClick={(eve)=>{setInfoElement(logro); onOpen(eve)}}>{logro.name}</button>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                <Modal ref={REF_MODAL} infoElement={INFO_ELEMENT_STATE} onClose={onClose} />
            </div>
    );
}