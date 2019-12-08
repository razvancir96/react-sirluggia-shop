import React from 'react';
import { Link } from 'react-router-dom';
// importam componente noi
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'

// ATENTIE! Cu toate ca Login are constante si functii, nu e nevoie sa fie declarata
// drept class, pentru ca nu are un state propriu.
const Login = (props) => {
    // Daca nu suntem siguri ce props-uri vin, le dam console.log.
    console.log(props);
    // Facem destructuring la props-urile de care avem nevoie.
    const {signInWithGoogle, updateUserState, history} = props;

    // Functia va fi apelata la click-ul pe butonul de logare cu Google.
    function handleGoogleLogin(signInWithGoogle, updateUserState) {
        // Apelul functiei signInWithGoogle intoarce un PROMISE(vezi teorie).
        const googleLoginRespone = signInWithGoogle();
        // Pentru a putea lua informatia din Promise, trebuie sa apelam metoda .then.
        googleLoginRespone.then(loginInfo => {
            // Observam ca informatiile importante despre user se gasesc in obiectul numit user
            console.log(loginInfo);
            const user = loginInfo.user;
            // ATENTIE! updateUserState e pasata din App si va actualiza state-ul in App, cu datele userului.
            updateUserState(user);
            // Dupa ce ne-am logat, suntem redirectati catre home (history vine ca prop din Route).
            history.push('/');
        });
    }

    return(
        <div className="login-page">
            {/* Logo-ul va duce catre Home. */}
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            {/* Butonul de login cu Google, la pachet cu  */}
            <button
                // Clasele sunt de Bootstrap, din nou, daca nu le stiti, cautati-le!
                className="btn btn-outline-dark d-flex align-items-center"
                onClick={() => handleGoogleLogin(signInWithGoogle, updateUserState)}
            >
                <Google className="w-50 mr-3"/>
                {/* text-nowrap nu lasa textul sa se intinda pe mai multe randuri */}
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;