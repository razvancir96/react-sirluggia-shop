import React from 'react';
import {Link} from 'react-router-dom';

// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer. Headerul va contine navbar-ul, deci link-urile utile catre alte pagini. Momentan, vom vrea ca
// header-ul sa contina link-uri catre Home si Login
const Header = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Header;