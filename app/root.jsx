import { Links, Meta, Outlet, LiveReload, Scripts, useCatch, Link } from "@remix-run/react"
import Header from "~/components/header"
import Footer from "~/components/footer"
import styles from '~/styles/index.css'


export default function App(){
  return(
    <Document>
      <Outlet/>
    </Document>
  )
}

function Document({children}){
  return(
    <html lang="es">
      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}


export function meta(){
  return(
    {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Guitarras LA'
    }
  )
}

export function links(){
  return[
    {
      rel: 'preconnet',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnet',
      href: 'https://fonts.gstatic.com',
      // Esto siempre tiene que ser con dobles comillas
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    }
  ]
}


// Manejo de errores

export function CatchBoundary(){
  const error = useCatch()
  return(
    <Document>
      {/* Esto es lo que aparecerá en la pantalla del usuario */}
      <p className="error">{error.status} {error.statusText}</p>
      <Link className="error-enlace" to='/tienda'>Volver a Tienda</Link>
    </Document>
  )
}
export function ErrorBoundary({error}){
  return(
    <Document>
      <p className="error">{error.status}{error.statusText}</p>
      <Link className="error-enlace" to='/tienda'>Volver a Tienda</Link>
    </Document>
  )
}

