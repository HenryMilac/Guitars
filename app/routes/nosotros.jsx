

import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'


export function meta(){
    return{
        title: 'Guitarras LA - Nosotros',
        description: 'Venta de guitarras'
    }
}
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            // Esto es como decirle al navegador, antes de cargar todo lo que tienes que cargar, carga este archivo pesado
            // Normalmente se usa para subir archivos pesados como: fotos, videos, etc.
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="" />
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In modi repellat dolores quisquam ut, doloribus accusamus cupiditate iure consequatur, mollitia sequi. Reiciendis a tempore, tenetur cumque tempora earum consectetur ratione.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In modi repellat dolores quisquam ut, doloribus accusamus cupiditate iure consequatur, mollitia sequi. Reiciendis a tempore, tenetur cumque tempora earum consectetur ratione.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros
