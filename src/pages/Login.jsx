import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            {/* Din Login Am vrea sa ajungem cu un click in Register sau in Home => avem nevoie de componenta Link!*/}
            {/* Link este echivalentul unui tag de tip "a", doar ca acesta nu va reincarca pagina catre care directioneaza */}
            {/* In atributul "to" punem ruta catre care vrem sa navigam. */}
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default Login;