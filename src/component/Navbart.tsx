import { Link } from "react-router-dom";
import '../styles/navbar.scss'

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/Projects">Projets</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
);

export default Navbar;