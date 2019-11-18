import React from 'react';
import {Link} from 'react-router-dom';

// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer.  Momentan, vom vrea ca footer-ul sa contina link catre pagin de About.
const Footer = () => {
    return(
        <div>
            <Link to='/about'>About</Link>
        </div>
    );
}

export default Footer;