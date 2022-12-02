
import { Link } from '@remix-run/react'
import styles from '~/styles/blog.css'
import {formatearFecha} from '~/utils/helpers'

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Post({postP}) {
    const {nombre, descripcion, image, url, publishedAt} = postP
    // console.log(postP)
    // console.log(image.data.attributes.formats.small.url)

    return (
        <article className="post">
            <img className="imagen" src={image.data.attributes.formats.small.url} alt={`${nombre}`} />
            <div className="contenido">
                <h3 style={{textTransform: 'uppercase'}}>{nombre}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{descripcion}</p>
                <Link className='enlace' to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}

export default Post
