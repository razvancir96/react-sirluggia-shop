import React from 'react';
// Componenta Layout se va ocupa de importul si includerea Header-ului si a Footer-ului
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
    return(
        <div>
            <Header/>
                {/* Daca intre deschiderea si deschiderea unei componente Layout instantiezi o asta componenta,
                atunci props.children va reprezenta intreaga componenta pasata lui Layout */}
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;