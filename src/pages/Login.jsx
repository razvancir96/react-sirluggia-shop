import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'

const Login = (props) => {
    const {signInWithGoogle, updateUserState, history} = props;

    function handleGoogleLogin(signInWithGoogle, updateUserState) {
        const googleLoginRespone = signInWithGoogle();
        googleLoginRespone.then(loginInfo => {
            const user = loginInfo.user;
            updateUserState(user);
            history.push('/');
        });
    }

    return(
        <div className="login-page">
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            <button
                className="btn btn-outline-dark d-flex align-items-center"
                onClick={() => handleGoogleLogin(signInWithGoogle, updateUserState)}
            >
                <Google className="w-50 mr-3"/>
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;