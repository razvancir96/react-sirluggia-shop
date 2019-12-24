import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'
// Avem nevoie de metoda signInWithGoogle, definita in folderul apis/firebase
// import { signInWithGoogle } from '../apis/firebase/firebase';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/user';

class Login extends React.Component {

    // Foarte important! Am facut login o class component pentru a putea avea acces la componentDidUpdate.
    // De ce? Daca s-au schimbat datele despre user, fiind in pagina de login, asta inseamna ca un user nou
    // s-a logat cu succes. Ce e de facut in acest caz? Trebuie
    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    // La click pe butonul de login se apeleaza metoda venita din store prin mapDIspatchToProps.
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // ATENTIE FOARTE MARE CE LUATI DIN STORE! Daca ati fi luat ca valoare pentru user doar
        // state.user.data, atunci de fiecare data cand se modifica valoarea lui user, store-ul
        // nu se actualiza!! Tineti minte mecanismul de comunicare a componentelor cu store-ul:
        // cand store-ul se actualizeaza, se verifica componentele care sunt conectate la store si
        // iau prin mapStateToProps FIX campurile care sunt actualizate in store. In cazul de fata
        // se modifica valoarea lui state.user.data.user, iar pentru store este diferit de
        // state.user.data, intrucat el verifica modficarile SHALLOW intamplate(pe primul nivel).
        user: state.user.data.user
    }
}

// Vom vrea la click pe buton sa apelam functia de signin cu Google, adica sa dispatch-uim actiunea
// loginUser catre store.
const mapDispatchToProps = (dispatch) => {
    return {
        signInWithGoogle: () => dispatch(loginUser())
    }
}

// conectam Loginul la store
export default connect(mapStateToProps, mapDispatchToProps)(Login);