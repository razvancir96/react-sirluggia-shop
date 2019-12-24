import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

const Layout = (props) => {
    // Am renuntat la props-urile trimise catre Header prin Layout!
    return(
        <div className="layout">
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;