import { useLoaderData } from "@remix-run/react"
import { getPost } from "../../models/posts.server"
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'



export function meta({data}){
    // console.log(data.data[0].attributes.nombre)

    // // Esto es para que muestre otro nombre de pestana si en caso ingresa a un link erroneo
    // if(!data){
    //     return{
    //         title: 'Entrada no encontrada'
    //     }
    // }
    
    return{
        title: `Guitarra LA - ${data.data[0].attributes.nombre} `
    }
}

export function loader({params}){
    const {postUrl} = params
    const post = getPost(postUrl)
    // console.log(post.data)    

    // // Esto es para que muestre página no encontrada
    // if(post.data.length === 0){
    //     throw new Response('', {
    //         status: 404,
    //         statusText: 'Entrada no encontrada'
    //     })
    // }

    return post
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Post() {
    const post = useLoaderData().data[0].attributes
    // console.log(post)
    const {descripcion, image, nombre, publishedAt } = post
    // console.log(image.data.attributes.formats.small.url)
    return (
        <article className="contenedor post">
            <img className="imagen" src={image.data.attributes.formats.small.url} alt={`${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{descripcion}</p>
            </div>
        </article>
    )
}

export default Post
