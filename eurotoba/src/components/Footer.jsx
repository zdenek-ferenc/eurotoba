import "../styles/Footer.css";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    
    useEffect(() => {
    // Když se komponenta načte, posune se stránka na začátek
    window.scrollTo(0, 0);}, [navigate]);

    return (
        <>
        <div className="footer-container">
            <div className="col">
                <p>Kontakt</p>
                <ul>
                    <li><span>Email:</span>info@eutotoba.cz</li>
                    <li><span>tel.:</span>+420 774 048 221</li>
                </ul>
                <p>Adresa</p>
                <ul>
                    <li>Švabinského 1700/4, Moravská</li>
                    <li>Ostrava, 702 00 Ostrava</li>
                    <li><div className="footer-map"></div></li>
                </ul>
            </div>

            <div className="col">
                <ul className="footer-links">
                <Link to="/domy-na-klic"><li  style={{ fontSize: "1.5vw", paddingBottom: "1rem"}}>Domy na klíč</li></Link>
                <Link to="/tiny-house"><li  style={{ fontSize: "1.5vw", paddingBottom: "1rem" }}>Tiny house</li></Link>
                <Link to="/zahradni-domky"><li  style={{ fontSize: "1.5vw", paddingBottom: "1rem" }}>Zahradní domky</li></Link>
                <Link to="/ostatni-sluzby"><li  style={{ fontSize: "1.5vw", paddingBottom: "1rem" }}>Ostatní služby</li></Link>
                <Link to="/galerie"><li  style={{ fontSize: "1.5vw", paddingBottom: "1rem" }}>Galerie</li></Link>
                </ul>
            </div>

            <div className="col">
                <p>Fakturační údaje</p>
                <ul>
                    <li>EUROTOBA s.r.o.</li>
                    <li>Švabinského 1700/4, Moravská</li>
                    <li>Ostrava, 702 00 Ostrava</li>
                    <br></br>
                    <li>DIČ:   CZ28643933</li>
                    <li>IČO:   28643933</li>
                </ul>
            </div>


        </div>
        
        
        </>
     );
}

export default Footer;