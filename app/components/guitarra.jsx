import { Link } from "react-router-dom"





function Guitarra({guitarraP}) {
    const {nombre, precio, descripcion, image, url} = guitarraP

    return (
        <div className="guitarra">
            {/* Para entender todo el código, tienes que guiarte con el console.log */}
            <img src={image.data[0].attributes.formats.medium.url} alt={`Guitarra: ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="precio">${precio}</p>
                <p className="descripcion">{descripcion}</p>

                {/* Se le está colocando /guitarras, porque se quiere que el link aparezca ordenado */}
                {/* Es como decir sección guitarras / modelo de guitarra. Solo por orden */}
                {/* Pero además solo esta es la única de manera para que funcione, porqe estaba probando con solo url y no me encuentra el link */}
                <Link className="enlace" to={`/guitarras/${url}`}>Ver producto</Link>
            </div>
        </div>
    )
}

export default Guitarra
