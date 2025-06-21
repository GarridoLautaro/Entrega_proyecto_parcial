import { Link } from "react-router-dom";

export default function Navbar() {
    return (
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Inicio</Link></li>
                    <li><Link to="/registro" className="nav-link">Registro</Link></li>
                    <li><Link to="/login" className="nav-link">Inicio de sesión</Link></li>
                </ul>
            </nav>
    );
}
