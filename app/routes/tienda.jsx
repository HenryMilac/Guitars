

import { useLoaderData } from "@remix-run/react"
import Guitarra from "~/components/guitarra"
import { getGuitarras } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"

export function meta(){
    return(
        {
            title: 'Guitarras LA - Guitarras'
        }
    )
}
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

// Igualmente Remix ya sabe que con el nombre loader, este ya es un loader
export async function loader(){
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {

    const guitarras = useLoaderData()

    return (
        <main className="contenedor">
            <h2 className="heading">Nuestra colección</h2>

            {/* El ? significa Optional Chaining, es decir si el objeto devuelve undefined o null, este deolverá como undefined en vez de que te muestre error */}
            {guitarras?.length && (
                <div className='guitarras-grid'>
                    {guitarras.map( guitarra => (
                        <Guitarra
                            key={guitarra?.id}
                            // attributes porque solo se quiere acceder a los atributos del objeto de guitarra, es decir a la info de la guitarra, puedes chequear la diferencia con console.log
                            guitarraP = {guitarra?.attributes}
                        />
                    ))}
                </div> 
            )}
        </main>
    )
}

export default Tienda


