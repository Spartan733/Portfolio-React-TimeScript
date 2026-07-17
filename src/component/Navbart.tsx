import { Link } from "react-router-dom";
// import './Navbar.scss';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="Projects.tsx">Projets</Link>
        <Link to="Contact.tsx">Contact</Link>
    </nav>
);

export default Navbar;