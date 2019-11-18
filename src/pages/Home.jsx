import React from 'react';
// Putem importa Header-ul si Footer-ul in fiecare componenta care le foloseste,
// instantiindu-le ulterior.
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <div>
            <Header/>
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}

export default Home;