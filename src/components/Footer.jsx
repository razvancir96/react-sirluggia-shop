import React from 'react';
import { Link } from 'react-router-dom';
// Importam SVG-urile(iconitele).
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';

const Footer = () => {
    return(
        <footer className="pt-3 bg-light">
            {/* Footer-ul are 3 coloane si un copyright separat. */}
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                {/* Coloana 1: link-uri interne utile */}
                <div className="d-flex flex-column">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <Link to='/about' className="text-dark">Despre</Link>
                    <Link to='/terms-and-conditions' className="text-dark">Termeni și condiții</Link>
                </div>
                {/* Coloana 2: telefon+mail */}
                <div>
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        {/* Putem la click sa intram direct in aplicatia de mail, specificand adresa de mail catre
                        care scriem, dupa "mailto:". */}
                        <a href="mailto:razvan.cirlugea@gmail.com" className="text-dark">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            razvan.cirlugea@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40728998166</p>
                </div>
                {/* Coloana 3: link-uri externe. */}
                <div>
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="https://github.com/razvancir96" className="text-dark">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            razvancir96
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/razvancirlugea/" className="text-dark">
                            <LinkedIn className="mr-1 footer-icon"/>
                            razvancirlugea
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Răzvan Cîrlugea, 2019
            </div>
        </footer>
    );
}

export default Footer;