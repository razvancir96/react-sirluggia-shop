import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

const Layout = (props) => {
    // NU mai avem nevoie sa pasam signOut mai departe!
    const {user, handleSignOut} = props;

    return(
        <div className="layout">
            <Header
                user={user}
                handleSignOut={handleSignOut}
            />
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;