import Navegacion from "./navegacion"


function Footer() {
    return (
        <footer className="footer">
            <div className="contenedor contenido">
                <Navegacion/>
                <p className="copyright">Derechos reservados - {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
}

export default Footer
