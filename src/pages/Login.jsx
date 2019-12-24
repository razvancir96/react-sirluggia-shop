import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'
// Avem nevoie de metoda signInWithGoogle, definita in folderul apis/firebase
import { signInWithGoogle } from '../apis/firebase/firebase';

const Login = (props) => {
    const {updateUserState, history} = props;

    function handleGoogleLogin(updateUserState) {
        // Nu mai luam metoda signInWithGoogle din props, o avem direct importata.
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
                // Atentie! Nu mai trebuie sa pasam metoda signInWIthGoogle ca parametru.
                onClick={() => handleGoogleLogin(updateUserState)}
            >
                <Google className="w-50 mr-3"/>
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;