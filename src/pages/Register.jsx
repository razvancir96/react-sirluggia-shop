import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    return(
        <div>
            <h1>Register</h1>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Register;