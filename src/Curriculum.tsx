import './output.css'
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  
} from '@heroicons/react/24/outline';
import styles from '@/src/ui/curriculum.module.css';
import { 
    TituloPrimario, 
    TituloSecundario, 
    TituloTerciario, 
    Titulo4 
} from '@/src/ui/titulos';
import clsx from 'clsx';
import { Tarjeta } from '@/src/ui/tarjetas';
// import { MiniaturaImagen } from '@/src/ui/miniaturas';
// import { OpcionalesImg } from '@/src/ui/imagenes';
// import { Modal } from '@/src/ui/dialogo';
import { PreviewImagen } from '@/src/ui/botones';

import ImgPerfil from './assets/curriculum/Perfil1_1x1_big.jpg';
import ActaAI from './assets/curriculum/actaAI900.png';
import ActaProg from './assets/curriculum/actaProgramacion.png';
import ActaMusica from './assets/curriculum/actaMusica.jpeg';
import ActaMPersonal from './assets/curriculum/actaMarcaPersonal.png';
import ActaDP from './assets/curriculum/actaDP900.png';
import ActaRedes from './assets/curriculum/actaRedes.png';

export default function Curriculum() {
    
    
    return (
        <section 
            className={clsx(
                'overflow-y-scroll font-mono brightness-120  contrast-100 h-full inset-0 w-full',
            )}
            style={{
                backgroundImage: 'url(/curriculum/nubesNaranjas.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}    
        >
            <article className={clsx(
                'tablet:gap-4 desktop:gap-5 tablet:flex mt-5 mb-2 mx-2 laptop:mx-10',
                styles.textoTamano
            )}>
                <aside className={clsx(
                    ' bg-slate-50/50 backdrop-blur border-white px-4 border-4 rounded-3xl max-h-fit max-w-[355px] min-w-[340px] self-start text-sm tablet:sticky tablet:top-5',
                    
                )}>
                    <figure 
                    className='py-4 flex flex-nowrap justify-around relative overflow-hidden'
                    
                    >
                        <div className={clsx(
                            'rounded-full border-amber-950/50 border-2 min-h-fit h-fit z-10',
                            styles.shadowBoxInner
                        )}>
                            <img 
                            className='rounded-full mr-2 basis-[45%] object-cover object-center drop-shadow-xl min-h-[150px] min-w-[150px]' 
                            sizes='(max-width: 720px) 50vw, (max-width: 1200px) 10vw, (max-width: 1920px) 30vw' 
                            width={150} height={100} 
                            src={ImgPerfil}
                            alt="Imagen personal representativa de Mateo Bustamante, autor del presente curriculum." 
                            />
                        </div>
                        <figcaption className='tablet:w-2/5 grow pl-2 text-pretty basis-[55%] text-center'>
                            <TituloPrimario>Mateo Bustamante</TituloPrimario>
                            <p className='text-base italic'>Desarrollador web fullstack</p>
                        </figcaption>
                    </figure>

                    <section className='pb-4 text-pretty'>
                        <TituloSecundario>Perfil profesional</TituloSecundario>
                        <hr className='mb-4' />
                        <p>Creativo, Apasionado, Estratégico. Me especializo en crear soluciones de software unicas y personalizadas.</p>
                        <Tarjeta 
                            title='Mas sobre mí'
                        >
                            <p>Me caracterizo por ser una persona respetuosa y de buenas relaciones interpersonales, con alto grado de responsabilidad y orden, comprometido y puntual con el trabajo, entrego todo de mí en el desarrollo de mis facultades. Me adapto fácil y rápidamente a los equipos de trabajo, adoptando un pensamiento estratégico para generar soluciones en el entorno de trabajo y hacia los clientes.</p>
                        </Tarjeta>
                    </section>

                    <section className='pb-4 text-pretty'>
                        <TituloSecundario>Educación</TituloSecundario>
                        <hr className='mb-4' />
                        <ul>
                            <li>
                                <Tarjeta
                                    title='Estudios Tecnólogicos'
                                >
                                    <TituloTerciario >SENA convenio IUSH</TituloTerciario>
                                    <section className='my-4'>
                                        <Titulo4>Técnico en programación de software</Titulo4><br />
                                        <p>
                                            Graduación: <br />
                                            12/Agosto/2021 <i>(Etapa lectiva)</i> <br />
                                            12/Febrero/2022 <i>(Prácticas profesionales – Super Carnes JH S.A.S)</i>
                                        </p>
                                        <PreviewImagen >
                                            
                                            <figure className='py-4'>
                                                <img 
                                                src={ActaProg} 
                                                alt="Imagen de diploma técnica en programación de software"
                                                />
                                                <figcaption className='text-center'>Diploma técnico en programación de software</figcaption>
                                            </figure>
                                        </PreviewImagen>
                                        
                                    </section>
                                    <TituloTerciario >Escuela superior tecnológica de artes Débora Arango</TituloTerciario>
                                    <section className='my-4'>
                                        <Titulo4>Tecnólogo en gestión y ejecución instrumental para las prácticas musicales</Titulo4><br />
                                        <p>
                                            Graduación: <br />
                                            <i>27/Junio/2019</i>
                                        </p>
                                        <PreviewImagen >
                                            <figure className='py-4'>
                                                <img src={ActaMusica} alt="Imagen de diploma tecnología en gestión y ejecución musical"/>
                                                <figcaption className='text-center'>Diploma tecnólogo en gestión y ejecución musical</figcaption>
                                            </figure>
                                        </PreviewImagen>
                                    </section>
                                </Tarjeta>
                            </li>
                            <li>
                                <Tarjeta
                                    title='Cursos'
                                >
                                    <Titulo4>CURSO DE MARCA PERSONAL</Titulo4>
                                    <section className='my-4'>
                                        <p>
                                            Fecha: 26/11/2018 (Aprobado) <br />
                                            https://platzi.com/@Mateo1030 <br />
                                            Código:6f53a5f4-d99f-4054-b5e2-f96516969951
                                        </p>
                                        <PreviewImagen >

                                            <figure className='py-4'>
                                                <img src={ActaMPersonal} alt="Imagen de diploma gestion de marca personal"/>
                                                <figcaption className='text-center'></figcaption>
                                            </figure>
                                        </PreviewImagen>
                                    </section>
                                    <Titulo4>DP-900: MICROSOFT AZURE DATA FUNDAMENTALS </Titulo4>
                                    <section className='my-4'>
                                        <p>
                                            Fecha: 31/12/2021 <br />
                                        </p>
                                        <PreviewImagen >
                                            <figure className='py-4'>
                                                <img src={ActaDP} alt="Imagen de diploma ciencia de datos"/>
                                                <figcaption className='text-center'></figcaption>
                                            </figure>

                                        </PreviewImagen>
                                    </section>
                                    <Titulo4>AI-900: MICROSOFT AZURE AI FUNDAMENTALS </Titulo4>
                                    <section className='my-4'>
                                        <p>
                                            Fecha: 31/12/2021 <br />
                                        </p>
                                        <PreviewImagen >
                                            <figure className='py-4'>
                                                <img src={ActaAI} alt="Imagen de diploma inteligencia artificial"/>
                                                <figcaption className='text-center'></figcaption>
                                            </figure>

                                        </PreviewImagen>
                                    </section>
                                    <Titulo4>CURSO DE REDES Y SEGURIDAD</Titulo4>
                                    <section className='my-4'>
                                        <p>
                                            Fecha: 11/11/2022 <br />
                                            http://certificados.sena.edu.co, bajo el número <br />
                                            9402002659825CC1020482382C.
                                        </p>
                                        <PreviewImagen >

                                            <figure className='py-4'>
                                                <img src={ActaRedes} alt="Imagen de diploma redes y seguridad"/>
                                                <figcaption className='text-center'></figcaption>
                                            </figure>
                                        </PreviewImagen>
                                    </section>
                                </Tarjeta>
                            </li>
                        </ul>
                    </section>

                    <section className='pb-4 text-pretty'>
                        <TituloSecundario>Contacto</TituloSecundario>
                        <hr className='mb-4' />
                        <ul>
                            una buena idea de señaladores como emojis ocn movimiento para ir a otras partes de la pagina
                            seccion aparte de sigueme facebook instagram (tiktok?)
                            <li>
                                <p>Linkedin<DevicePhoneMobileIcon className='w-6 inline' /> </p>
                            </li>
                            <li>
                                <p>Github<DevicePhoneMobileIcon className='w-6 inline' /> </p>
                            </li>
                            <li>
                                <p><EnvelopeIcon className='w-6 inline' /> mateo.bustamante9730@gmail.com</p>
                            </li>
                            <li>
                                <p><GlobeAltIcon className='w-6 inline'/></p>
                            </li>
                        </ul>
                    </section>
                </aside>

                <section className={clsx(
                    'px-4 mt-4 tablet:max-ultrawide:mt-0 bg-slate-50/50 backdrop-blur border-white border-4 rounded-3xl text-sm laptop:max-w-[50vw] '
                )}>

                    <section>
                        <TituloSecundario>Experiencia laboral</TituloSecundario>
                        <hr className='mb-4' />
                        <section className='text-pretty'>
                            <TituloTerciario>Super Carnes J.H</TituloTerciario>
                            <p>
                                Soporte, arreglo de bugs y desarrollo de funciones básicas en el sistema de gestión cárnico (SGC), software creado a medida para la organización Super Carnes JH, el cual se hace cargo de la gestión de compras de mercancía, manejo de almacén e inventarios, salidas de mercancía con generación de etiquetas y guías de transporte, facturación física e integración con facturación electrónica mediante un proveedor de API (soenac). Implementación del web service de dispositivos de basculas e impresoras para los cuales se hace diseño de etiquetas para productos conservados en congelación y tiquetes de bascula para facturación en puntos de venta. El software SGC fue construido a partir de las tecnologías SQL server, Laravel para el manejo del backend y Vue.js con Quasar para el manejo del frontend.
                                <br />
                            </p>
                            <details>
                                <summary>Contacto</summary>
                                Jefe Inmediato: Esteban Gonzales <br />
                                Teléfono: 3042400042 <br />
                                e-mail: aux.dinamica@gmail.com <br />
                                Afiliación 13-AGO-2021 / 16-ABR-2022.
                            </details>
                        </section>
                        <section className='text-pretty'>
                            <TituloTerciario>Virtual Llantas S.A.S</TituloTerciario>
                            <p>
                                Desarrollo de nuevas características y funcionalidades para los dos e-commerce pertenecientes a la empresa y varios (4) proyectos de intranet donde se manejan áreas de logística, facturación, inventarios y reportes, soporte y reparación de errores, atención al usuario interno (trabajadores de la empresa) sobre el manejo de las aplicaciones, toma de requerimientos, manejo del panel administrativo de las páginas de ventas. Se utiliza PHP como lenguaje backend principal con diferentes frameworks Codeigniter3, Codeigniter4, Laravel9, y ZendFramework con Magento 1.9. Se utiliza JavaScript vanilla para desarrollo frontend con tecnología ECMASCRIPT 6 y superior. Se utiliza MySQL para el manejo y administración de bases de datos.
                                <br />
                            </p>
                            <details>
                                <summary>Contacto</summary>
                                Jefe Inmediato: Harold Castañeda <br />
                                Teléfono: 3117036986 <br />
                                e-mail: hcastaneda@virtualllantas.com <br />
                                Afiliación 25-ABR-2022 / 27-Nov-2023.
                            </details>
                        </section>
                    </section>

                    <section className='text-pretty'>
                        <TituloSecundario>Proyectos</TituloSecundario>
                        <hr className='mb-4' />
                        <p>
                            Actualmente trabajo en un proyecto de gestión de tiempos y actividades que se coordina con su calendario preferido (Google, Outlook).  
                        </p>
                    </section>

                    <section className='pb-3'>
                        <TituloSecundario>Habilidades</TituloSecundario>
                        <hr className='mb-4' />
                        <dl className='laptop:max-ultrawide:flex laptop:max-ultrawide:justify-around'>
                            <div>
                                <dt className='mt-3'>
                                    <TituloTerciario>PHP</TituloTerciario>
                                </dt>
                                <dd>Laravel 10</dd>
                                <dd>Codeigniter 4</dd>
                                <dd>Magento 1.9</dd>
                            </div>
                            <div>
                                <dt className='mt-3'>
                                    <TituloTerciario>NODEJS</TituloTerciario>
                                </dt>
                                <dd>ExpressJS</dd>
                                <dd>NextJs</dd>
                            </div>
                            <div>
                                <dt className='mt-3'>
                                    <TituloTerciario>SQL</TituloTerciario>
                                </dt>
                                <dd>SQLSERVER</dd>
                                <dd>MYSQL</dd>
                                <dd>POSTGRESSQL</dd>
                            </div>
                            <div>
                                <dt className='mt-3'>
                                    <TituloTerciario>GIT/GITHUB</TituloTerciario>
                                </dt>
                                <dd>GITSHELL</dd>
                                <dd>GITHUBACTIONS</dd>
                            </div>
                            <div>
                                <dt className='mt-3'>
                                    <TituloTerciario>CSS</TituloTerciario>
                                </dt>
                                <dd>BOOTSTRAP</dd>
                                <dd>TAILWIND</dd>
                                <dd>CSS3</dd>
                                <dd>POSTCSS</dd>
                                <dd>OOCSS</dd>
                            </div>
                            <div>
                                <dt className='mt-3'>
                                    <TituloTerciario>ECMASCRIPT</TituloTerciario>
                                </dt>
                                <dd>REACT.JS</dd>
                                <dd>JQuery</dd>
                                <dd>Redux</dd>
                                <dd>Vue.Js(2)</dd>
                            </div>
                        </dl>
                    </section>
                </section>
            </article>
        </section>
    );
}