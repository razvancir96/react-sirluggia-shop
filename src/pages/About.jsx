import React from 'react';
// Putem importa Header-ul si Footer-ul in fiecare componenta care le foloseste,
// instantiindu-le ulterior.
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return(
        <div>
            <Header/>
            <h1>About</h1>
            <Footer/>
        </div>
    )
}

export default About;