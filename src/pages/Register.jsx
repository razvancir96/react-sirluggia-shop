import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    return(
        <div>
            <h1>Register</h1>
            <Link to='/'>Home</Link>
            {/* In register vrem sa ne putem intoarce la pagina de login. */}
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Register;