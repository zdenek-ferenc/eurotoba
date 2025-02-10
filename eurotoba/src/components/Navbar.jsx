import "../styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // Importujte useState pro řízení stavu
import Logo from "../assets/EUROTOBA.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Stav pro toggle menu

    return (
        <>
            <div className="navbar">
                <div className="logo-container">
                    <Link to="/">
                    <img src={Logo} alt="EuroToba logo" />
                    </Link>
                </div>
                <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <Link to="/domy-na-klic"><li>Domy na klíč</li></Link>
                <Link to="/tiny-house"><li>Tiny house</li></Link>
                <Link to="/zahradni-domky"><li>Zahradní domky</li></Link>
                <Link to="/ostatni-sluzby"><li>Ostatní služby</li></Link>
                {/* <Link to="/galerie"><li>Galerie</li></Link> */}
                <Link to="/kontakt"><li>Kontakt</li></Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
