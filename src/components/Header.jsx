import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-container-img">
                <Link to="/">
                    <img src="../public/logitopardo-10.png" alt="Logo" />
                </Link>
            </div>
            <div>
                <Link to="/inicio">Start</Link>
                <Link to="/contenido">Content</Link>
                <Link to="/Galeria">Gallery</Link>
                <Link to="/contacto">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>

        </header>
    )
}

export default Header;