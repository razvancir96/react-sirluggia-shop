import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

const Layout = (props) => {
    const {user, signOut, handleSignOut} = props;

    return(
        <div className="layout">
            <Header
                user={user}
                signOut={signOut}
                handleSignOut={handleSignOut}
            />
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;