
import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarra.css'



export async function loader({params}){
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)
    // Con esto podrás ver en la consola del back, el nombre de la guitarra
    // console.log(guitarraUrl)

    // Esto es para la página de 404
    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra
}


export function meta({data}){
    // Es como decir: si no hay data o undefined entonces haz esto
    if(!data){
        return{
            title: 'Guitarra no econtrada',
            description: `guitarras, guitarra, venta de guitarra}`
        }
    }
    // console.log(data.data[0].attributes.nombre)
    return{
        title: `Guitarra - ${data.data[0].attributes.nombre}`,
        description: `guitarras, guitarra, venta de guitarra, ${data.data[0].attributes.nombre}`
    }
}


export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


function Guitarra() {
    const guitarra = useLoaderData()
    // console.log(guitarra.data[0].attributes.nombre)
    const {nombre, descripcion, image, precio} = guitarra.data[0].attributes
    // Para ver la imagen de la guitarra
    // console.log(image.data[0].attributes.url)
    return (
        <main className="contendor guitarra">
            <img className="imagen" src={image.data[0].attributes.url} alt={`Guitarra: ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">$ {precio}</p>
            </div>
        </main>
    )
}

export default Guitarra


